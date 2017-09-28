var express = require('express');
var router = express.Router();
var apiData = require('../data/data_api.json');
var eneida_controller = require('../controllers/eneida_controller');


router.get('/', eneida_controller.list);
router.get('/:id', eneida_controller.find_by_id);
router.put('/:id', eneida_controller.save);
router.post('/', eneida_controller.add);
router.delete('/:id', eneida_controller.remove);

module.exports = router;