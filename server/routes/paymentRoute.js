const express = require('express');
const router = express.Router();
const { paymentController, createSessionToken, retrivePayment } = require('../controllers/paymentController');

router.route("/makePayment").post(paymentController)
router.route('/sessionToken').post(createSessionToken)
// router.route('/retrivePayment').post(retrivePayment)
router.route('/retrivePayment').post(retrivePayment)
module.exports = router