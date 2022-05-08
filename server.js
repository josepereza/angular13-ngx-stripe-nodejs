const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')
const PORT = 3000;

const Stripe = require("stripe");
const stripe = Stripe("sk_test_51KwttKJhfdXMP2PMRrsT7hwSPptbHIOgHFj1SJMMfBTzvZAp93kETZkB7nrYKikJJK0h4BuYKf2WcQMxn9gqskgG00xhFGqUeu");

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.post("/create-payment-intent", (req, res) => {
  stripe.paymentIntents.create(
    {
      amount: parseInt(req.body.amount),
      currency: "eur",
      payment_method_types: ["card"],
    },
    function (err, paymentIntent) {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(201).json(paymentIntent);
      }
    }
  );
});

app.listen(PORT, () => console.log(`Server ready on port ${PORT}`));
