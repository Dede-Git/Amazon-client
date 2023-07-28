import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ProductCard from '../components/product/ProductCard';
import { useAuth } from '../utils/context/authContext';
import { getProductsByUserId } from '../utils/data/productData';

function Home() {
  const router = useRouter();
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  const getAllUserProducts = () => {
    getProductsByUserId(user.id).then((data) => setProducts(data));
  };

  useEffect(() => {
    getAllUserProducts();
  }, []);

  return (
    <>
      <div className="new-product-btn">
        <Button
          onClick={() => {
            router.push('/products/new');
          }}
        >
          Create New Product
        </Button>
      </div>
      <article className="products">
        <h3>My Products</h3>
        {products.map((product) => (
          <section key={`product--${product.id}`} className="products">
            <ProductCard productObj={product} />
          </section>
        ))}
      </article>
    </>
  );
}

export default Home;
