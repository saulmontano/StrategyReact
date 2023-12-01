import React from "react";
import PaymentStrategy from "./PaymentStrategy";

const DebitCardStrategy = ({ onSubmit }) => (
  <PaymentStrategy
    title="Pagar con Tarjeta Debito"
    form={
      <>
        <input type="text" placeholder="Número de tarjeta" />
        <input type="date" placeholder="Fecha de caducidad" />
        <input type="text" placeholder="Código de seguridad" />
      </>
    }
    onSubmit={onSubmit}
  />
);

export default DebitCardStrategy;
