import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createProduct, updateProduct } from '../../utils/data/productData';

const initialState = {
  seller_id: 0,
  name: '',
  description: '',
  image: '',
  quantity: 1,
  price: 1,
};

const ProductForm = ({ productObj }) => {
  const [currentProduct, setCurrentProduct] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (productObj.id) {
      setCurrentProduct({
        id: productObj.id,
        seller_id: productObj.seller_id,
        name: productObj.name,
        description: productObj.description,
        image: productObj.image,
        quantity: productObj.quantity,
        price: productObj.price,
      });
    }
  }, [productObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (productObj.id) {
      const updatedProduct = {
        id: currentProduct.id,
        seller_id: user.id,
        name: currentProduct.name,
        description: currentProduct.description,
        image: currentProduct.image,
        quantity: currentProduct.quantity,
        price: currentProduct.price,
      };
      updateProduct(updatedProduct)
        .then(() => router.push('/products'));
    } else {
      const product = {
        seller_id: user.id,
        name: currentProduct.name,
        description: currentProduct.description,
        image: currentProduct.image,
        quantity: currentProduct.quantity,
        price: currentProduct.price,
      };
      createProduct(product).then(() => router.push('/products'));
    }
  };

  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" required value={currentProduct.name} onChange={handleChange} type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control name="price" required value={currentProduct.price} onChange={handleChange} type="number" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" required value={currentProduct.description} onChange={handleChange} type="text" />
      </Form.Group>
      <Form onSubmit={handleSubmit}>
        <Button variant="primary" type="submit">
          {productObj.id ? 'Update' : 'Create'} Product
        </Button>
      </Form>
    </>
  );
};

ProductForm.propTypes = {
  productObj: PropTypes.shape({
    id: PropTypes.number,
    seller_id: PropTypes.shape({
      name: PropTypes.string,
    }),
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  }),
};

ProductForm.defaultProps = {
  productObj: initialState,
};

export default ProductForm;
