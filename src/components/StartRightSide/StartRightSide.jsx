import "./StartRightSide.css";
import YellowCircle from "../YellowCircle/YellowCircle";
import myPhoto1 from "../../images/my-photo.jpg"

function StartRightSide() {
    
  return (
    <div className="start-right-side">
        <img src={myPhoto1} alt="Author"/>
        <hr/>
        <YellowCircle/>
    </div>
  );
}

export default StartRightSide;