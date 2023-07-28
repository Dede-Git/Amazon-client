import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

function OrderCard({ orderObj }) {
  return (
    <Card className="text-center order-card">
      <Card.Header>{orderObj.customer_id.name}</Card.Header>
      <Card.Body>
        <Card.Title>Closed by: {orderObj.customer_id.name}</Card.Title>
        <Card.Text>Date: {orderObj.date}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">Ordered on: {orderObj.date}</Card.Footer>
      <div className="btn-group">
        <div>
          <Link href={`/orders/${orderObj.id}`} passHref>
            <Button type="button" className="m-2">View Order</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    customer_id: PropTypes.shape({
      uid: PropTypes.string,
      name: PropTypes.string,
    }),
    closed: PropTypes.bool,
    date: PropTypes.string,
  }).isRequired,
};

export default OrderCard;
