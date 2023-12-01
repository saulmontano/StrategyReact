import React, { useState } from "react";
import CreditCardStrategy from "./CreditCardStrategy";
import PayPalStrategy from "./PayPalStrategy";
import EfectyStrategy from "./EfectyStrategy";
import DebitCardStrategy from "./DebitCardStrategy";
import "../style/strategy.css";

const PaymentForm = () => {
  const [paymentStrategy, setPaymentStrategy] = useState(null);

  const handleSubmit = () => {
    // Realizar lógica antes de enviar el formulario
    console.log("Realizando lógica...");
    // Validar los datos del formulario de pago
    // Enviar el formulario
  };

  return (
    <div>
      <h2>Formulario de Pago</h2>
      <div className="payment-options">
        <button
          className="credit-card"
          onClick={() =>
            setPaymentStrategy(<CreditCardStrategy onSubmit={handleSubmit} />)
          }
        >
          Pagar con Tarjeta de Crédito
        </button>
        <button
          className="paypal"
          onClick={() =>
            setPaymentStrategy(<PayPalStrategy onSubmit={handleSubmit} />)
          }
        >
          Pagar con PayPal
        </button>
        <button
          className="efecty"
          onClick={() =>
            setPaymentStrategy(<EfectyStrategy onSubmit={handleSubmit} />)
          }
        >
          Pagar con Efecty
        </button>
        <button
          className="debit-card"
          onClick={() =>
            setPaymentStrategy(<DebitCardStrategy onSubmit={handleSubmit} />)
          }
        >
          Pagar con Tarjeta de Débito
        </button>
      </div>
      {paymentStrategy}
    </div>
  );
};

export default PaymentForm;
