import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactsView() {
  const [contact, setContact] = useState(false);

  //TODO: Get the contact to load from the params and fetch.
  //With useEffect, load the contact when params changes
  // and update contact state

  // need to use useParams here
  const { id } = useParams();
  // then a useEffect with useParamas as a dependency
  useEffect(() => {
    fetch(`http://localhost:4000/contacts/${id}`)
      .then((res) => res.json())
      .then((contactData) => setContact(contactData));
  }, [id]);

  if (!contact) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>
        {contact.street} {contact.city}
      </p>
    </div>
  );
}

export default ContactsView;
