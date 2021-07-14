const router = require('express').Router();
const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models')

router.get('/', async (req, res) => {
    try {
        console.log(req.session);

    }
})