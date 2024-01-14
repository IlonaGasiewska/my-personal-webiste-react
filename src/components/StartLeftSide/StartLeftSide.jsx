import "./StartLeftSide.css";
import SocialMedia from "../SocialMedia/SocialMedia";
import ButtonToProjects from "../ButtonToProjects/ButtonToProjects";

function StartLeftSide() {
    
  return (
    <div className="start-left-side">
        <div className="header">
          <h1>Welcome</h1>
          <h2>I'm Ilona, <span className="javascript-element">JavaScript</span> Developer</h2>
          <p>
          I'm a JavaScript pro, weaving web wonders and spreading coding joy as a teacher. Passionate about crafting seamless experiences and helping others unlock the magic of JavaScript. If you interesed to know me better - scroll down!
          </p>
        </div>
        <SocialMedia/>
        <ButtonToProjects/>
    </div>
  );
}

export default StartLeftSide;