const { Post } = require('../models');

const postData = [
    {
        title: "Group 3 still struggling with their Project 2 ideas!",
        post_content: "While appearing to be on the right track to a promising start to the second group project of the Penn Coding bootCamp, the members of Group 3 left class today still uncertain of what their main focus will be for their new full-stack application.",
        user_id: 3
    },
    {
        title: "Handlebars Template Engine",
        post_content: "Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.  For instance, you can set up a layout used for several pages with templates for a home page and a user dashboard.",
        user_id: 1
    },
    {
        title: "I now get the jokes!",
        post_content: "It wasn't until I began coding that I was able to understand anything in the r/ProgrammingHumor subreddit.  It's only taken two months for them now to make sense!",
        user_id: 2

    },
    {
        title: "Techno Chronicles has been released!",
        post_content: "Shane McNulty has just finished his last homework on the precipise of the second group project for the Penn coding boot camp.  Techno Chronicles is a A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts. This application wase built from scratch and deployed to Heroku. The app follows MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication",
        user_id: 5
    },
    {
        title: "Fear of Job Insecurity",
        post_content: "I was afraid to leave my current job in pursuit of anew career. Luckily, with this unforseen downtime, I have been able to focus on learning a new skill and pushing forward in my career transition.  Thank you, Coding Bootcamp!",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;