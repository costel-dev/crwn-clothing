import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HgYTIAY9JHGiIY7K7C3GdAqoJmGFIi4DlFAKPHIVUq9jWKonPimrqpA1S2h2a6zlVsH47zAu1mXQ8tLcJORroAa00cm3Bvzmw";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesfull!");
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
