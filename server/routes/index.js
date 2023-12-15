var express = require('express');
var router = express.Router();
var user_controller = require("../controller/user.controller");
var admin_controller = require("../controller/admin.controller");
var item_controller = require("../controller/item.controller");
var reservation_controller = require("../controller/reservation.controller");




router.post('/login', user_controller.loginchk)
router.get('/logout', user_controller.logout)
router.post('/signup', user_controller.signup)
router.get('/allcustomer', user_controller.allcustomer)

router.post('/adminlogin', user_controller.loginchk)
router.post('/addadmin', admin_controller.addadmin)
router.get('/alladmin',admin_controller.alladmin)
router.put('/updateadmin',admin_controller.updateadmin)
router.delete('/deleteadmin/:id',admin_controller.deleteadmin)

router.post('/additem', item_controller.additem)
router.get('/allitem',item_controller.allitem)
router.put('/updateitem',item_controller.updateitem)
router.delete('/deleteitem/:id',item_controller.deleteitem)

router.post('/addreservation', reservation_controller.addreservation)
router.get('/allreservation',reservation_controller.allreservation)
router.put('/updatereservation',reservation_controller.updatereservation)
router.delete('/deletereservation/:id',reservation_controller.deletereservation)


module.exports = router;
