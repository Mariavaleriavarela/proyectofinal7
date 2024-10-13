import Products from "./Products";
import styles from './cart.module.css';

function Cart() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carro de compras</h1>
      <Products />
      <button className={styles.checkoutButton}>Checkout con PayPal</button>
    </div>
  );
}

export default Cart;


