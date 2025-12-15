import Input from "../../../components/inputs/Input";
import Button from "../../../components/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import SelectOptionInput from "../../../components/inputs/SelectOptionInput";

const ContactForm = () => {
  const contactOptions = [
    {
      text: "تسجيل في دورة",
      value: "1",
    },
    {
      text: "استفسار عام",
      value: "2",
    },
    {
      text: "شيء اخر",
      value: "3",
    },
  ];

  return (
    <form>
      <h2>Lorem ipsum dolor sit.</h2>
      <div className="inputs-container">
        <Input
          name="name"
          label="full name"
          placeholder="enter your full name"
        />
        <Input name="email" label="email" placeholder="enter your email" />
      </div>
      <Input
        name="phone"
        label="phone"
        placeholder="enter your phone number"
        notRequired
      />
      <SelectOptionInput
        label="subject"
        placeholder="select your subject"
        options={contactOptions}
      />
      <Input
        name="message"
        label="message"
        placeholder="enter username"
        elementType="textarea"
        rows={4}
      />
      <Button>
        <FontAwesomeIcon icon={faPaperPlane} /> submit
      </Button>
    </form>
  );
};

export default ContactForm;
