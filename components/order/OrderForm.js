// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import { Button, Form } from 'react-bootstrap';
// import { useAuth } from '../../utils/context/authContext';
// import { createOrder } from '../../utils/data/orderData';

// const date = new Date();
// // Get year, month, and day from the date
// const year = date.toLocaleString('default', { year: 'numeric' });
// const month = date.toLocaleString('default', { month: '2-digit' });
// const day = date.toLocaleString('default', { day: '2-digit' });
// // Generate yyyy-mm-dd date string
// const fullDate = `${year}-${month}-${day}`;

// const initialState = {
//   customer_id: 0,
//   date: fullDate,
//   closed: true,
// };

// const OrderForm = ({ orderObj }) => {
//   const [currentOrder, setCurrentOrder] = useState(initialState);
//   const router = useRouter();
//   const { user } = useAuth();

//   useEffect(() => {
//     // TODO: Get the order types, then set the state
//     if (orderObj.id) {
//       setCurrentOrder({
//         id: orderObj.id,
//         customer_id: orderObj.customer_id,
//         date: orderObj.date,
//         closed: orderObj.closed,
//       });
//     }
//   }, [orderObj]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentOrder((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const order = {
//         customer_id: user.id,
//         date: currentOrder.date,
//         closed: Boolean(currentOrder.closed),
//       };
//       createOrder(order).then(() => router.push('/orders'));
//     }
//   };

//   return (
//     <>

//       <Form.Group className="mb-3">
//         <Form.Label>Customer</Form.Label>
//         <Form.Control name="customer_id" required value={currentOrder.customer_id} onChange={handleChange} type="text" />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Date</Form.Label>
//         <Form.Control name="date" required value={currentOrder.date} onChange={handleChange} type="text" />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Closed</Form.Label>
//         <Form.Control name="closed" required value={currentOrder.closed} onChange={handleChange} type="text" />
//       </Form.Group>
//       <Form onSubmit={handleSubmit}>
//         <Button variant="primary" type="submit">
//           {orderObj.id ? 'Update' : 'Create'} Order
//         </Button>
//       </Form>
//     </>
//   );
// };

// OrderForm.propTypes = {
//   orderObj: PropTypes.shape({
//     id: PropTypes.number,
//     customer_id: PropTypes.shape({
//       name: PropTypes.string,
//     }),
//     date: PropTypes.string,
//     closed: PropTypes.bool,
//   }),
// };

// OrderForm.defaultProps = {
//   orderObj: initialState,
// };

// export default OrderForm;
