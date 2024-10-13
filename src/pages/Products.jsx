import ProductCard from '../components/ProductCard';
import styles from './Products.module.css'; // Asegúrate de importar el módulo CSS

const Products = () => {
  const products = [
    {
      _id: '1',
      name: 'Cartera Lisa',
      description: 'Cartera de cuero',
      price: 30,
      imageUrl: "/public/cartera.png",
    },
    {
      _id: '2',
      name: 'Bolso Lourdes',
      description: 'Bolso de mano de cuero',
      price: 60,
      imageUrl: "/public/cartera2.png",
    },
    {
      _id: '2',
      name: 'Bolso Pache',
      description: 'Bolso de mano de cuero',
      price: 100,
      imageUrl: "/public/bolsoa.png",
    },
    {
      _id: '2',
      name: 'Chaqueta Lou',
      description: 'Bolso de mano de cuero',
      price: 85,
      imageUrl: "/public/gancho.png",
    },
    {
      _id: '2',
      name: 'Cartera lisa a pedido',
      description: 'Bolso de mano de cuero',
      price: 45,
      imageUrl: "/public/cartera.png",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nuestros Productos</h1>
      <div className={styles.grid}>
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;




