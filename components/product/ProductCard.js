import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../../utils/context/authContext';
import { deleteSingleProduct } from '../../utils/data/productData';

function ProductCard({ productObj, onUpdate }) {
  const user = useAuth();

  const deleteProduct = () => {
    if (window.confirm(`Delete ${productObj.name} product?`)) {
      deleteSingleProduct(productObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card className="text-center product-card">
      <Card.Header>{productObj.name}</Card.Header>
      <Card.Body>
        <Card.Title>Product by: {productObj.seller_id.name}</Card.Title>
        <Card.Title>Price: {productObj.price}</Card.Title>
        <Card.Text>Description: {productObj.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Quantity: {productObj.quantity}</Card.Footer>
      <div className="btn-group">
        <div>
          <Link href={`/products/${productObj.id}`} passHref>
            <Button type="button" className="m-2">View Product</Button>
          </Link>
        </div>
        <div>
          <Link href={`/products/edit/${productObj.id}`} passHref>
            {productObj.seller_id.uid === user.user.uid ? (<Button type="button" className="m-2">Edit Product</Button>) : ''}
          </Link>
        </div>
        <div>
          {productObj.seller_id.uid === user.user.uid ? (<Button type="button" className="m-2" onClick={deleteProduct}>Delete Product</Button>) : ''}
        </div>
      </div>
    </Card>
  );
}

ProductCard.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number,
    seller_id: PropTypes.shape({
      uid: PropTypes.string,
      name: PropTypes.string,
    }),
    description: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default ProductCard;
