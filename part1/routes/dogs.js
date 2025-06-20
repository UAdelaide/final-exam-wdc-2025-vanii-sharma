const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/tables', async(req, res) => {
    const [rows]= await db.query(`SELECT bl.BookID, bi.Title, u.Name AS SellerName, bl.SellerID
    FROM BookListings bl
    JOIN BookInfo bi ON bl.BookInfoID = bi.BookInfoID
    JOIN Users u ON bl.SellerID = u.UserID;
`);
    res.json(rows);
});