import "./Contact.css";
import EnvelopeIcon from "./Asset/EnvlopeIcon";
import MapPin from "./Asset/mapPin";
import Phone from "./Asset/phone.jsx";
import FacebookLogo from "./Asset/FacebookLogo.jsx";
import LinkedIn from "./Asset/LinkedIn.jsx";
import Twitter from "./Asset/Twiter.jsx";
import WhatsApp from "./Asset/WhatsApp.jsx";
function ContactMe() {
  return (
    <section className="contactMe-Wrapper">
      <fieldset>
        <legend>
          <p>Contact Me</p>
        </legend>
        <div className="box">
          <div className="content">
            <div className="logos">
              <EnvelopeIcon width="30px" height="30px" fill="white" />
            </div>
            <p id="text">Amirlebba@gmail.com</p>
          </div>
          <div className="content">
            <div className="logos">
              <MapPin width="30" height="30" fill="white" />
            </div>
            <p id="text">Algeria,El-Oued</p>
          </div>
          <div className="content">
            <div className="logos">
              <Phone width="30" height="30" fill="white" />
            </div>
            <p id="text">+213 672689842</p>
          </div>
        </div>
      </fieldset>
    </section>
  );
}

export default ContactMe;
