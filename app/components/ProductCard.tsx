import Image from 'next/image';
import styles from '../styles/ProductCard.module.css';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={name} width={200} height={200} />
      <h2>{name}</h2>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ProductCard;
