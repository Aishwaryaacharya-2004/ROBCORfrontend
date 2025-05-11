// src/pages/PaymentSuccess.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const transactionId = queryParams.get('transaction_id');
  const email = queryParams.get('email'); // or 'user_email' based on Yepdesk format

  useEffect(() => {
    if (transactionId && email) {
      fetch('https://your-backend.com/api/payment/success', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ transactionId, email }),
      });
    }
  }, [transactionId, email]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>✅ Thank you for registering!</h1>
      <p>Your Transaction ID: {transactionId}</p>
    </div>
  );
};

export default PaymentSuccess;
