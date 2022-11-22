import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ContactsView() {
  const [contact, setContact] = useState(false);

  // need to use useParams here
  const { id } = useParams();
  // then a useEffect with useParamas {id} as a dependency
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
        Address: {contact.street} {contact.city}
      </p>
      <p>Linkdin: {contact.linkdin}</p>
      <p>Twitter: {contact.twitter}</p>
    </div>
  );
}

export default ContactsView;
