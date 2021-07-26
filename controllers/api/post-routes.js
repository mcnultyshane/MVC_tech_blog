const router = require('express').Router();
const {
    Post,
    User,
    Comment
} = require('../../models')
const withAuth = require('../../utils/auth');

// GET api/posts/ -- get all posts

router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            // Query Configuration
            // From the post table, include the post ID, title, and the timestamp of creation.
            attributes: [
                'id',
                'title',
                'created_at',
                'post_content'
            ],
            order: [
                // order the posts from the most recent to least
                ['created_at', 'DESC']
            ],
            include: [
                // Comment model here -- attached username to comment
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username'
                            // , 'github'
                        ]
                    }
                },
                {
                    model: User,
                    attributes: ['username'
                        // , 'github'
                    ]
                },
            ]
        })
        // return the posts
        res.json(dbPostData)
        // if there was an error, return the error
    } catch (err) {
        console.log(err);
        res.status(500).json.err
    }
});

router.get('/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findOne({
            where: {
                id: req.params.id
            },
            attributes: [
                'id',
                'title',
                'created_at',
                'post_content'
            ],
            order: [
                ['created_at', 'DESC']
            ],
            include: [
                // Comment model here -- attached username to comment
                {
                    model: User,
                    attributes: ['username'
                        // , 'github'
                    ]
                }, {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username'
                            // , 'github'
                        ]
                    }
                },

            ]
        })
        if (!dbPostData) {
            res.status(404).json({
                message: 'No post found with this Id.'
            });
            return;
        }
        res.json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const dbPostData = await Post.create({
            title: req.body.title,
            post_content: req.body.post_content,
            user_id: req.session.user_id
        })
        res.json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const dbPostData = await Post.update({
            title: req.body.title,
            post_content: req.body.post_content
        }, {
            where: {
                id: req.params.id
            }
        })
        if (!dbPostData) {
            res.status(404).json({
                message: 'No post found with this Id.'
            });
            return;
        }
        res.json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) =>{
    try {
        const dbPostData = await Post.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!dbPostData) {
            res.status(404).json({
                message: 'No post found with this Id.'
            });
            return;
        }
        res.json(dbPostData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    
});



module.exports = router