const router = require('express').Router();
const {
    Comment
} = require('../../models')
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const commentData = await Comment.findAll({});
        res.json(commentData);

    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try { console.log('i am here');
        if (req.session) {
            console.log('i am here2');
            const enteredComment = await Comment.create({
                comment_text: req.body.comment_text,
                post_id: req.body.post_id,
                user_id: req.session.user_id,
            })
            console.log(enteredComment);
            res.json(enteredComment);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentToDelete = await Comment.destroy({
            where: {
                id: req.params.id
            }
        })
        if (!commentToDelete) {
            res.status(404).json({
                message: 'No comment found with this Id.'
            });
            return;
        }
        res.json(commentToDelete)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router