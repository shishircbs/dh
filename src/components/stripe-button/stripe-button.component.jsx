import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51ISOLeHAAIRfGSciJnJo9XkOUZsJkUHzSZm4f8q23oJAwCLcb9597aBknjUiINrfkUREaDEhWDXoi6raxakQSNw9009c3nLL1A';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Aafnae'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Ukh.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
