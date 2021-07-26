const router = require('express').Router();
const {
    Post,
    User,
    Comment
} = require('../models')
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'created_at',
                'post_content'
            ],
            include: [{
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
                }
            ],
        });
        const posts = postData.map((posts) => posts.get({
            plain: true
        }));

        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        console.log("NO IT'S THIS ONE");
        res.status(500).json(err);
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
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
            include: [{
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
                }
            ]
        });
        
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with that Id.'});
            return
        }
        const post = dbPostData.get({ plain: true});
    
        res.render('edit-post', {
            post,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/create/', withAuth, async (req, res) =>{
    try {
        const postData = await Post.findAll({});
    //         where: {
    //             id: req.params.id
    //         },
    //         attributes: [
    //             'id',
    //             'title',
    //             'created_at',
    //             'post_content'
    //         ],
    //         include: [{
    //                 model: Comment,
    //                 attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
    //                 include: {
    //                     model: User,
    //                     attributes: ['username'
    //                     // , 'github'
    //                 ]
    //                 }
    //             },
    //             {
    //                 model: User,
    //                 attributes: ['username'
    //                 // , 'github'
    //             ]
    //             }
    //         ]
    //     });
        const posts = postData.map(post => post.get({ plain: true}));
        res.render('create-posts'
        // , { posts, logged_in: true }
        );
    } catch (err) {
        console.log(err);
        console.log("THIS ERROR IS THE ONE YOU SEE");
        res.status(500).json(err);
    }
});

module.exports = router