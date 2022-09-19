const express = require("express");
const app = express();
const stripe = require("stripe")("sk_test_wbc0UlPqkx0Pd9vf3zmsXo5L003LUkGS3c");

app.use(express.static("public"))
app.use(express.json())

const calculateOrderAmount = items => { return 1400 }

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({ amount: calculateOrderAmount(items), currency: "usd" })
    res.send({ clientSecret: paymentIntent.client_secret })
})

console.log('')
app.listen(5000, () => console.log('Node server listening on port 4242!'));