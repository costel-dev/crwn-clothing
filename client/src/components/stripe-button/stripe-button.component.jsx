import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HgYTIAY9JHGiIY7K7C3GdAqoJmGFIi4DlFAKPHIVUq9jWKonPimrqpA1S2h2a6zlVsH47zAu1mXQ8tLcJORroAa00cm3Bvzmw";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        console.log(response);
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please sure use the provided credit card!"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing Gmbh"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
