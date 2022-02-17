import "./toggle.css";
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme =  useContext(ThemeContext)
  const clickHandler = ()=>{
    theme.dispatch({type: "TOGGLE"})
  }
  return (
    <div className="t">
      <MdOutlineWbSunny className="t-icon"/>
      <BsMoonStars className="t-icon"/>
      <div className="t-button" onClick={clickHandler} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  );
};

export default Toggle;
