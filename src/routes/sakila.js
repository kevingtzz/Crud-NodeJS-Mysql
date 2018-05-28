const express = require('express');
const router = express.Router();

const Controller = require('../controllers/Controller');

router.get('/', Controller.index);
router.get('/listStores', Controller.listStores);
router.get('/listStaff', Controller.listStaff);
router.post('/add', Controller.save);
router.get('/delete/:id', Controller.delete);
router.get('/update/:id', Controller.edit);
router.post('/update/:id', Controller.update);

module.exports = router;
