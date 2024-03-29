

import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
  try {
    const stripeRes = await stripe.charges.create({
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    });
    res.status(200).json(stripeRes);
  } catch (error) {
    console.error("Error:", error.message);

    if (error instanceof Stripe.errors.StripeError) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

export default router;
