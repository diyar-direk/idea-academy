import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactInfo } from "./../../../constants/contactInfo";
import IconButton from ".././../../components/buttons/IconButton";

const ContactInfo = () => {
  const infoContent = ["address", "phone", "email"];

  return (
    <div className="contact-info">
      <h2>Contact Information</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
        quos, error reiciendis aliquam rerum voluptates totam quia ratione vitae
        dicta ex odit. Aperiam autem vitae facere quas quo perferendis minus?
      </p>
      <div className="info">
        {infoContent?.map((i) => {
          const { link, icon } = contactInfo[i];
          const href =
            i === "email"
              ? `mailto:${link}`
              : i === "phone"
              ? `tel:${link}`
              : null;
          return (
            <div key={i}>
              <article>
                <FontAwesomeIcon icon={icon} />
              </article>
              <a href={href}>
                <h3>{i}</h3>
                <span> {link} </span>
              </a>
            </div>
          );
        })}
      </div>

      <h2>social links</h2>

      <article className="soial-links">
        <IconButton color="secondry-color">
          <FontAwesomeIcon icon={contactInfo?.facebook?.icon} />
        </IconButton>
        <IconButton color="secondry-color">
          <FontAwesomeIcon icon={contactInfo?.youtube?.icon} />
        </IconButton>
        <IconButton color="secondry-color">
          <FontAwesomeIcon icon={contactInfo?.instagram?.icon} />
        </IconButton>
      </article>
    </div>
  );
};

export default ContactInfo;
