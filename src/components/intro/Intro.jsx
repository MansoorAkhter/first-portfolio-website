import "./intro.css";
import Photo1 from "../.././img/Photo1.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Mansoor Akhter</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Animator</div>
              <div className="i-title-item">Video Editor</div>
              <div className="i-title-item">Graphic Designer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and develop services for customers of all sizes, specialing
            in creating stylish, modern websites, web services and online
            stores.
          </p>
        </div>
        
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Photo1} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
