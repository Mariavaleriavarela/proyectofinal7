import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './productCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.imageUrl} alt={product.name} className={styles.imagen} />
      <h2 className={styles.title}>{product.name}</h2>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>Precio: ${product.price}</p>
      <Link to={`/products/${product._id}`} className={styles.button}>Comprar</Link>
    </div>
  );
};

// Validación de props
ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default ProductCard;




