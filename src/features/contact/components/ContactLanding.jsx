import MainTitle from "../../../components/main_title/MainTitle";

const ContactLanding = () => {
  return (
    <section className="container transparent-background main-padding center">
      <MainTitle
        main={"contact us"}
        secondry={
          "للتواصل معنا، يرجى ملء النموذج أدناه أو استخدام معلومات الاتصال المقدمة. نحن هنا لمساعدتك في أي استفسارات أو دعم تحتاجه."
        }
      />
    </section>
  );
};

export default ContactLanding;
