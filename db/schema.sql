DROP DATABASE IF EXISTS techblog_db;

CREATE DATABASE techblog_db;


-- CREATE TABLE songs(
--   id INT NOT NULL AUTO_INCREMENT,
--   title VARCHAR(45) NULL,
--   artist VARCHAR(45) NULL,
--   genre VARCHAR(45) NULL,
--   PRIMARY KEY (id)
-- );

-- INSERT INTO user (username, email, password)
-- VALUES ("miller-holly", "millerh@gmail.com", "p@ssword");

-- INSERT INTO user (username, email, password)
-- VALUES ("salgrutowski", "salgrutowski@aol.com", "p@ssword");

-- INSERT INTO user (username, email, password)
-- VALUES ("TurkoT", "tommyturko@gmail.com", "p@ssword");

-- INSERT INTO user (username, email, password)
-- VALUES ("TotallyTanya", "tonyaP@gmail.com", "p@ssword");

-- INSERT INTO user (username, email, password)
-- VALUES ("barletta", "ryanbarletta@hotmail.com", "p@ssword");

-- INSERT INTO user (username, email, password)
-- VALUES ("bigMc", "willMcIntyre@gmail.com", "p@ssword");

-- INSERT INTO post (title, post_content, user_id)
-- VALUES ("Group 3 still struggling with their Project 2 ideas!", "While appearing to be on the right track to a promising start to the second group project of the Penn Coding bootCamp, the members of Group 3 left class today still uncertain of what their main focus will be for their new full-stack application.", 3)

-- INSERT INTO post (title, post_content, user_id)
-- VALUES ("Handlebars Template Engine", "Handlebars is a very useful npm package that allows you to use templates in your code, making things more modular, re-usable, and maintainable.  For instance, you can set up a layout used for several pages with templates for a home page and a user dashboard.", 1)

-- INSERT INTO post (title, post_content, user_id)
-- VALUES ("I now get the jokes!", "It wasn't until I began coding that I was able to understand anything in the r/ProgrammingHumor subreddit.  It's only taken two months for them now to make sense!", 2)

-- INSERT INTO post (title, post_content, user_id)
-- VALUES ("Techno Chronicles has been released!", "Shane McNulty has just finished his last homework on the precipise of the second group project for the Penn coding boot camp.  Techno Chronicles is a A CMS-style blog site where developers can publish their blog posts and comment on other developers’ posts. This application wase built from scratch and deployed to Heroku. The app follows MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication", 5)

-- INSERT INTO post (title, post_content, user_id)
-- VALUES ("Fear of Job Insecurity", "I was afraid to leave my current job in pursuit of anew career. Luckily, with this unforseen downtime, I have been able to focus on learning a new skill and pushing forward in my career transition.  Thank you, Coding Bootcamp!", 4)

-- INSERT INTO comment (user_id, post_id, comment_text)
-- VALUES (1, 5, "This is amazing!")
-- INSERT INTO comment (user_id, post_id, comment_text)
-- VALUES (4, 4, "Wow, amazing work!")
-- INSERT INTO comment (user_id, post_id, comment_text)
-- VALUES (1, 4, "Awesome! Happy to be here")
-- INSERT INTO comment (user_id, post_id, comment_text)
-- VALUES (3, 5, "Keep up the hard work!")
-- INSERT INTO comment (user_id, post_id, comment_text)
-- VALUES (3, 2, "This is very insightful!")
-- INSERT INTO comment (user_id, post_id, comment_text)
-- VALUES (3, 4, "Looking forward to contributing")
-- INSERT INTO comment (user_id, post_id, comment_text)
-- VALUES (5, 3, "Me Too!")
-- INSERT INTO comment (user_id, post_id, comment_text)
-- VALUES (2, 1, "Keep focused, and you'll get to where you need to be.")