import React from "react";
import PaymentStrategy from "./PaymentStrategy";

const PayPalStrategy = ({ onSubmit }) => (
  <PaymentStrategy
    title="Pagar con PayPal"
    form={
      <>
        <input type="text" placeholder="Correo electrónico de PayPal" />
        <input type="password" placeholder="Contraseña de PayPal" />
      </>
    }
    onSubmit={onSubmit}
  />
);

export default PayPalStrategy;
