import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth';

function RegisterForm({ user, updateUser }) {
  // set the state of the form input with blank or pre-set values
  const [formInput, setFormInput] = useState({
    name: '',
    bio: '',
    image: '',
    isseller: false,
    uid: user.uid,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formInput).then(() => updateUser(user.uid));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" value={formInput.name} onChange={handleChange} required />

        <Form.Label>User Bio</Form.Label>
        <Form.Control as="textarea" placeholder="Enter your Bio" name="bio" value={formInput.bio} onChange={handleChange} required />

        <Form.Label>Profile Image URL</Form.Label>
        <Form.Control as="textarea" placeholder="Link to your Profile Image" name="image" value={formInput.image} onChange={handleChange} required />

      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isseller: PropTypes.bool.isRequired,
  }).isRequired,
  updateUser: PropTypes.func.isRequired,
};

export default RegisterForm;
