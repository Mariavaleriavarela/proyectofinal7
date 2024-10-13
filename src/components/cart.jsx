import React from 'react';
import PropTypes from 'prop-types';

const Cart= ({ cartItems, onRemove }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handleApprove = (data, details) => {
    // Aquí deberías enviar la información a tu backend para capturar la orden
    console.log('Orden aprobada:', data, details);
    // Realiza la lógica para capturar la orden en tu backend
    // Puedes hacer una llamada a tu API aquí
  };

  return (
    <div>
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en tu carrito.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item._id}>
              <h3>{item.name}</h3>
              <p>Precio: ${item.price}</p>
              <button onClick={() => onRemove(item._id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div>
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
          <PayPalScriptProvider options={{ "client-id": "tu-client-id-de-paypal" }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    amount: {
                      value: totalAmount.toFixed(2), // Monto total
                    },
                  }],
                });
              }}
              onApprove={handleApprove}
              onError={(err) => console.error('Error al procesar el pago:', err)}
            />
          </PayPalScriptProvider>
        </div>
      )}
    </div>
  );
};

// Validación de props
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Cart;


