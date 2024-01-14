import './About-me.css';
import myPhoto2 from "../../images/Me-cut.png"

function AboutMe() {

  return (
    <div className="about-me" id="about-me">
      
      <img src={myPhoto2} alt="author"/>
      <div className="holder">
       <h1>About me</h1>
        <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </article>
        <ul className="skills-list">
          <li><i class="fa-brands fa-angular"></i></li>
          <li><i class="fa-brands fa-react"></i></li>
          <li><i class="fa-brands fa-html5"></i></li>
          <li><i class="fa-brands fa-css3-alt"></i></li>
          <li><i class="fa-brands fa-github"></i></li>
          <li><i class="fa-brands fa-bootstrap"></i></li>
          <li><i class="fa-brands fa-js"></i></li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
