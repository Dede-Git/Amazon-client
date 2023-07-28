import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getSingleProduct } from '../../utils/data/productData';

export default function ViewProduct() {
  const [productDetails, setProductDetails] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleProduct(id).then(setProductDetails);
  }, [id]);

  return (
    <>
      <Head>
        <title> View {productDetails.name} </title>
      </Head>
      <div className="PD-container">
        <div className="PD-detail-container">
          <h5 className="PD-pin-name">
            Name: {productDetails.name}
          </h5>
          <h5 className="PD-pin-name">
            Description: {productDetails.description}
          </h5>
          <h5 className="PD-pin-name">
            Quantity: {productDetails.quantity}
          </h5>
          <h5 className="PD-pin-name">
            Price: {productDetails.price}
          </h5>
          <Link passHref href="/products">
            <Button variant="outline-dark" className="m-2">Return To Products</Button>
          </Link>
        </div>
      </div>
    </>

  );
}
