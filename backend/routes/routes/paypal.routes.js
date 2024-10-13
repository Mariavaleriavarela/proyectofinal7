const express = require('express');
const { client } = require('../config/paypal'); // Asegúrate de importar el cliente configurado
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk'); // Importa el SDK de PayPal
const router = express.Router();

// Ruta para crear una orden
router.post('/create-order', async (req, res) => {
  const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: '100.00' // Ajusta este valor según el precio del producto
      }
    }]
  });

  try {
    const order = await client.execute(request);
    res.status(201).json({ id: order.result.id });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Ruta para capturar una orden
router.post('/capture-order', async (req, res) => {
  const { orderID } = req.body; // Obtén el orderID del cuerpo de la solicitud

  const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderID);
  request.requestBody({}); // Si necesitas agregar datos adicionales, hazlo aquí

  try {
    const capture = await client.execute(request);
    res.status(200).json({ capture }); // Envía la respuesta con la captura
  } catch (err) {
    res.status(500).send(err.message); // Manejo de errores
  }
});

module.exports = router; // Exporta el router para que lo uses en tu servidor

