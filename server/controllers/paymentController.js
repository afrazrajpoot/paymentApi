const  axios  = require("axios")
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const paymentSchema = require("../models/userModel")
const makepaymentController = async (req, res) => {
    try {
        const token = 'MXJ4UkF0ak00aXlyb2FtQlRhSmdRR2lZanM4YToxVGNUQnIxU21ITmZnMmV0cXB1RVdObmhpOE1h';

        const makepaymentDetail = await axios.post("https://197.248.183.109/ekedc/venPayment/1.0.1/makePayment", {
            idVendor: 12345,
            codUser: "manufernan1973",
            meterSerial: "01123456781",
            totalPayment: 1234567890123.45,
            debtPayment: 1234567890123.45,
            account: "700001234",
            tariffDescription: "Prepaid General 1PH (ET5)",
            percentageDebt: 50.55,
            accountBalance: 1234567890123.45,
            unitsPayment: 1234567890123.45,
            units: 1000.00,
            unitsType: "KWh",
            comment: "Payment Received",
            requestID: "REQ123456",
            channel: 80,
            areaCode: 3300,
            serviceCode: 3301,
            phoneNo: "1123445",
            email: "qTlB1@example.com",
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        console.log(makepaymentDetail.data);
        res.status(200).json({ message: makepaymentDetail.data });
    } catch (error) {
        if (error.isAxiosError) {
            // AxiosError occurred
            console.error("AxiosError:", error.name);
            if (error.response) {
                // Server responded with a non-2xx status code
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            } else if (error.request) {
                // Request made but no response received
                console.error("Request:", error.request);
            } else {
                // Something else happened
                console.error("Error message:", error.message);
            }
        } else {
            // Some other error occurred
            console.error("Other error:", error);
        }
        res.status(400).json({ message: "Request failed" });
    }
}

const createSessionToken = async (req, res) => {
    try{
    const token = await axios.post("https://197.248.183.109/ekedc/token",{
        username:"7123#ralmuofKLtd",
        password:"1@m@CCP"
    })
    console.log(token)
    res.send(token)
    }catch(err){
        console.log(err.message)
        res.status(500).send("Internal Server Error")
    }
}

const retrivePayment = async (req, res) => {
    try{
        const retrivePaymentDetail = await axios.post("https://197.248.183.109/ekedc/venPayment/1.0.1/paymentInfo",{
            idVendor:7123,
            codUser:"ralmuofKLtd",
            requestID: "TNMAE21XPP1OX234" 
        })
        console.log(retrivePaymentDetail.data)
        res.send(retrivePaymentDetail.data)
    }catch(err){
        console.log(err.message)
        res.status(500).send("Internal Server Error")
    }
}
module.exports={
    makepaymentController,
    createSessionToken,
    retrivePayment
}