import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ProductCard from '../../components/product/ProductCard';
import { getProducts } from '../../utils/data/productData';

function Home() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const getAllProducts = () => {
    getProducts().then((data) => setProducts(data));
  };

  useEffect(() => {
    getAllProducts();
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
        <h3>Products</h3>
        {products.map((product) => (
          <section key={`product--${product.id}`} className="products">
            <ProductCard productObj={product} onUpdate={getAllProducts} />
          </section>
        ))}
      </article>
    </>
  );
}

export default Home;
