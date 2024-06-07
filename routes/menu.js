const express = require('express');
const router = express.Router();

const menu = [
    { id: 1, drink: 'JoeBroe', cost: 2.5},
    { id: 2, drink: 'KacklinKam', cost: 3.5},
    { id: 3, drink: 'SunPammer', cost: 4.5}
];

router.get('/', (req, res) => {
    res.json(menu);
});

module.exports = router;