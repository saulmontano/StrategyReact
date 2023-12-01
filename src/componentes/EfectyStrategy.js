import React from "react";
import PaymentStrategy from "./PaymentStrategy";

const EfectyStrategy = ({ onSubmit }) => (
  <PaymentStrategy
    title="Pagar con Efecty"
    form={<p>Diríjase a un punto de pago Efecty para realizar su pago.</p>}
    onSubmit={onSubmit}
  />
);

export default EfectyStrategy;
