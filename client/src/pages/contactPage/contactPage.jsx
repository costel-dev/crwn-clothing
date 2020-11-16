import React, { useState } from "react";
import "./contactPage.styles.scss";
import Contact from "../../components/contact/contact.component";

const ContactPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setName(event.target.value);
    }
  };

  return <Contact name={name} email={email} handleChange={handleChange} />;
};

export default ContactPage;
