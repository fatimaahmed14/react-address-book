import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
};

function ContactsAdd(props) {
  const [formState, setFormState] = useState(initialFormState);
  const { setContacts, contacts } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(initialFormState);
  };

  const handleChange = (e) => {
    const targetName = e.target.name;
    const targetValue = e.target.value;
    if (targetName === "firstName") {
      setFormState({ ...formState, firstName: targetValue });
    }
    if (targetName === "lastName") {
      setFormState({ ...formState, lastName: targetValue });
    }
    if (targetName === "street") {
      setFormState({ ...formState, street: targetValue });
    }
    if (targetName === "city") {
      setFormState({ ...formState, city: targetValue });
    }
  };

  //TODO: Implement controlled form
  //send POST to json server on form submit

  return (
    <form className="form-stack contact-form">
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        required
        value={formState.firstName}
        onChange={handleChange}
      />

      <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        required
        value={formState.lasstName}
        onChange={handleChange}
      />

      <label htmlFor="street">Street:</label>
      <input
        id="street"
        name="street"
        type="text"
        required
        value={formState.street}
        onChange={handleChange}
      />

      <label htmlFor="city">City:</label>
      <input
        id="city"
        name="city"
        type="text"
        required
        value={formState.city}
        onChange={handleChange}
      />

      <div className="actions-section">
        <button
          className="button blue"
          type="submit"
          value="New contact added!"
        >
          Create
        </button>
      </div>
    </form>
  );
}

export default ContactsAdd;
