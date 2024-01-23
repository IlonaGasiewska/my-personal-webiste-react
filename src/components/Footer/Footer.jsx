import "./Footer.css";
import SocialMedia from "../SocialMedia/SocialMedia"
import NavbarList from "../NavbarList/NavbarList";

function Footer() {

  return (
    <footer className="footer" id="footer">
      <h3>Ilona Gąsiewska <span className="javascript-element">JavaScript</span> Developer</h3>
      <NavbarList/>
      <div>
        <SocialMedia/>
        <p>i.gasiewska.ilona@gmail.com</p>
      </div>
      <p className="copyrights">2024 <a href="/">&copy; Ilona Gąsiewska</a></p>
    </footer>
  );
}

export default Footer;
