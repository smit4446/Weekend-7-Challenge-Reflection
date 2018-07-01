const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedback', req.body);
    const queryText = `SELECT * FROM feedback;`;
    pool.query(queryText)
    .then((result) => {
        console.log('success getting feedback', result);
        res.send(result.rows);  
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error getting feedback', error);
        res.sendStatus(500);
    })
});

router.post('/',  (req,res) => {
    console.log('POST /feedback', req.body);
    const queryText = `INSERT INTO feedback ("feeling", "understanding", "support", "comments") 
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error adding feedback', error);
        res.sendStatus(500);
    })
});

router.delete('/:id', (req,res) => {
    console.log('DELETE /feedback', req.body);
    const queryText = `DELETE FROM feedback WHERE id=$1;`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
        console.log('successfully deleted', result.data);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error deleting', error);
        res.sendStatus(500);   
    })
})


module.exports = router;