import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from "./Card"
import './stripe.css'

const promise = loadStripe("pk_live_cKzP5F3yEntaHFW92JGWtj9o00h1FWf5qd");

export default function StripeSubscribe() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}