const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const order = req.body;
    console.log('Order received:', order);
    // Simulate a successful order placement
    res.status(201).json({ message: 'Order placed successfully' }); // Ensure status code 201
});

module.exports = router;
