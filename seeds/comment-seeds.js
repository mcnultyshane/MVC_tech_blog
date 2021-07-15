const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! Happy to be here"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Keep up the hard work!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is very insightful!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Looking forward to contributing"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Me Too!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Keep focused, and you'll get to where you need to be."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;