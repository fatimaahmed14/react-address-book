import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  firstName: "",
  lastName: "",
  street: "",
  city: "",
  email: "",
  linkdin: "",
  twitter: "",
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
    if (targetName === "email") {
      setFormState({ ...formState, email: targetValue });
    }
    if (targetName === "linkdin") {
      setFormState({ ...formState, linkdin: targetValue });
    }
    if (targetName === "twitter") {
      setFormState({ ...formState, twitter: targetValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContactData = {
      firstName: formState.firstName,
      lastName: formState.lastName,
      street: formState.street,
      city: formState.city,
      email: formState.email,
      linkdin: formState.linkdin,
      twitter: formState.twitter,
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

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        required
        value={formState.email}
        onChange={handleChange}
      />

      <label htmlFor="linkdin">Linkdin:</label>
      <input
        id="linkdin"
        name="linkdin"
        type="text"
        required
        value={formState.linkdin}
        onChange={handleChange}
      />

      <label htmlFor="twitter">Twitter:</label>
      <input
        id="twitter"
        name="twitter"
        type="text"
        required
        value={formState.twitter}
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
