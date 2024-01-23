import './Contact.css';
import SocialMedia from "../SocialMedia/SocialMedia"

function Contact() {

  return (
    <div className="contact" id="contact">
      <form action="">
        <input type="text" placeholder="Your name"/>
        <input type="email" placeholder="Your email"/>
        <textarea name="message" id="mesage" cols="30" rows="10" placeholder="Your message"></textarea>
        <input type="button" value="Send message" />
      </form>
      <div className="form-right-side">
      <h1>Let's stay in touch</h1>
      </div>
    </div>
  );
}

export default Contact;
