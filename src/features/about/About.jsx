import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import MainTitle from "../../components/main_title/MainTitle";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCallback, useState } from "react";
import { aboutFeatures, aboutTabContent } from "./aboutContent";

const About = () => {
  const [openTab, setOpenTab] = useState(0);
  const handleTabClick = useCallback((index) => {
    setOpenTab(index);
  }, []);

  return (
    <>
      <section className="container transparent-background main-padding center">
        <MainTitle
          main={"about us"}
          secondry={
            "أكاديمية سيمورغ هي أكاديمية رائدة في مجال البرمجة، مكرسة لتطوير الجيل القادم من المطورين. بالتعاون مع بلو إيليت تك، نقدم مجموعة من الدورات لمساعدة المبتدئين والخريجين الجدد على بدء مسيرتهم المهنية في التكنولوجيا."
          }
        />
      </section>

      <Breadcrumbs />

      <section className="body-color about-us main-padding container">
        <div className="info">
          {aboutTabContent?.map((tab, index) => (
            <div key={index}>
              <h2
                className={openTab === index ? "active" : ""}
                onClick={() => handleTabClick(index)}
              >
                <FontAwesomeIcon icon={tab.icon} />
                <span className="flex-1">{tab.title}</span>
                <FontAwesomeIcon icon={faAngleUp} className="arrow" />
              </h2>
              <article>
                {tab?.content?.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </article>
            </div>
          ))}
        </div>

        <div className="flex img">
          <img src={AboutImg} alt="about" />
        </div>
      </section>

      <section className="main-padding container">
        <MainTitle
          main={"what we offer"}
          secondry={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis aut ratione "
          }
        />
        <div className="features-container">
          {aboutFeatures?.map((t) => (
            <div key={t.title}>
              <div>
                <FontAwesomeIcon icon={t.icon} />
                <h3>{t.title}</h3>
                <p>{t.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
