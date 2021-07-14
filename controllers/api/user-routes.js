const router = require('express').Router();
const {
    User,
    Post,
    Comment
} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: {
                exclude: ['password']
            }
        })
        res.json(userData)
    } catch (err) {
        console.log(err);
        res.status(500).json.err
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findOne({
            attributes: {
                exclude: ['password']
            },
            where: {
                id: req.params.id
            },
            include: [{
                    model: Post,
                    attributes: ['id', 'title', 'post_content', 'created_at']
                },
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'created_at'],
                    include: {
                        model: Post,
                        attributes: ['title']
                    }
                }
            ]
        })
        if (!userData) {
            res.status(404).json({
                message: 'No user found with this Id.'
            });
            return;
        }
        res.json(userData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.Create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            github: req.body.github
        })
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.github = userData.github;
            req.session.logged_in = true;

            res.json(userData)
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!userData) {
            res
                .status(400)
                .json({
                    message: 'Incorrect email or password, please try again'
                });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({
                    message: 'Incorrect email or password, please try again'
                });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.github = userData.github;
            req.session.logged_in = true;

            res.json({
                user: userData,
                message: 'You are now logged in!'
            });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.update(req.body, {
            individualHooks: true.logged_in,
            where: {
                id: req.params.id
            }
        })
        if (!userData[0]) {
            res.status(404).json({
                message: 'No user found with this Id.'
            });
            return
        }
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!userData[0]) {
            res.status(404).json({
                message: 'No user found with this Id.'
            });
            return
        }
        res.json(userData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;