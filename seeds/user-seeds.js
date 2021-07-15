const { User } = require('../models');

const userData = [
    {
        username: "holly-miller",
        // github: "millerh",
        email: "millerh@gmail.com",
        password: "p@ssword"
    },
    {
        username: "salgrutowski",
        // github: "salGski",
        email: "salgrutowski@aol.com",
        password: "p@ssword"
    },
    {
        username: "TurkoT",
        // github: "TurkoT",
        email: "tommyturko@gmail.com",
        password: "p@ssword"
    },
    {
        username: "TotallyTanya",
        // github: "punkavich",
        email: "tonyaP@gmail.com",
        password: "p@ssword"
    },
    {
        username: "barletta",
        // github: "ryanBar",
        email: "ryanbarletta@hotmail.com",
        password: "p@ssword"
    },
    {
        username: "bigMc",
        // github: "McIntyreWill",
        email: "willMcIntyre@gmail.com",
        password: "p@ssword"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;