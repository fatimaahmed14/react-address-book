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
  const { setContacts, contacts, submit, setSubmit } = props;

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContactData = {
      firstName: formState.firstName,
      lastName: formState.lastName,
      street: formState.street,
      city: formState.city,
    };
    const uri = "http://localhost:4000/contacts";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newContactData),
    };
    fetch(uri, options)
      .then((response) => {
        return response.json();
      })
      .then((newContacts) => {
        const updatedContacts = [...contacts, newContacts];
        setContacts(updatedContacts);
      });
    setFormState(initialFormState);
    setSubmit(true);
  };

  return (
    <form className="form-stack contact-form" onSubmit={handleSubmit}>
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
        value={formState.lastName}
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
