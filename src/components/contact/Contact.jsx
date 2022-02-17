import "./contact.css";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdPhoneInTalk, MdEmail, MdLocationPin } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef, useState, useContext} from "react";
import { ThemeContext } from "../../context";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lt9pgke",
        "template_qx1kv59",
        formRef.current,
        "user_GweMndoN2VQ0PCl6RU4QZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <MdEmail className="c-icon" />
              mansoor21st@gmail.com
            </div>
            <div className="c-info-item">
              <MdPhoneInTalk className="c-icon" />
              +92-300-2964-143
            </div>
            <div className="c-info-item">
              <FaWhatsapp className="c-icon" />
              +92-300-2964-143
            </div>
            <div className="c-info-item">
              <MdLocationPin className="c-icon" />
              Sector 4/F Mominabad Orangi Town, Karachi
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eius error corporis Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
          </p>
          <form ref={formRef} onSubmit={submitHandler}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
