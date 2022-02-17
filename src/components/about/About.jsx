import "./about.css"

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima reprehenderit suscipit quae earum nulla, adipisci vel.
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus asperiores consectetur ipsam accusantium, molestias veniam earum in repudiandae aspernatur recusandae impedit vero mollitia, necessitatibus similique ratione perferendis placeat distinctio eos.
            </p>
            <div className="a-award">
                <img src="https://images.pexels.com/photos/7005047/pexels-photo-7005047.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="award pic" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">International Design Awards 2021</h4>
                    <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About