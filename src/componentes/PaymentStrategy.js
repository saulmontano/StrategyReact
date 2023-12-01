import React from "react";

// Interfaz para las estrategias de pago
const PaymentStrategy = ({ title, form, onSubmit }) => (
  <div className="payment-form">
    <h3>{title}</h3>
    <form>{form}</form>
    <button onClick={onSubmit}>Pagar</button>
  </div>
);

export default PaymentStrategy;
