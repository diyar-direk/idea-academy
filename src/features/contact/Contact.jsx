import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import ContactLanding from "./components/ContactLanding";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <ContactLanding />
      <Breadcrumbs />
      <section className="main-padding container body-color contact-page">
        <ContactInfo />
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
