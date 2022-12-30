import "./style/style.css";

import Services from "./Services";
import Card from "./Card";
import Mentor from "./Mentor";
import Footer from "./Footer";
import Pricing from "./Pricing";

const Main = () => {
  return (
    <div>
      <header>
        <div className="container">
          <a href="#home" className="logo">
            LOGO
          </a>
          <nav className="nav-collapse">
            <ul>
              <li className="menu-item">
                <a href="#about">About</a>
              </li>
              <li className="menu-item active">
                <a href="#home">Home</a>
              </li>
              <li className="menu-item">
                <a href="#projects">Pricing</a>
              </li>
              <li className="menu-item">
                <a href="#blog">Program</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container container-bottom">
        <section>
          <div className="jumbotron">
            <div className="container">
              <div className="main">
                <h1>We are Broadway</h1>
                <h3 className="des">
                  We provide Our Best Opportunity and qualified{" "}
                </h3>
                <br></br>
                <h3 className="des">
                  trainers for best workout yourself as you want{" "}
                </h3>
                <br></br>
                <br></br>
                <br></br>
                <a href="/" className="btn-main">
                  Signup Now
                </a>{" "}
                &nbsp; &nbsp; &nbsp; &nbsp;
                <a href="/" className="btn-main">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <br></br>
        <br></br>
        <br></br>
        <Services />
        <center>
          {" "}
          <h1>Program Card</h1>
        </center>

        <Card />
        <br></br>
        <center>
          {" "}
          <h1>Meet Our Professional Trainer</h1>
        </center>

        <Mentor />
      </div>


      <br></br>
      <center>
        {" "}
        <h1>Pricing</h1>
      </center>

      <Pricing />
      <Footer />
    </div>
  );
};
export default Main;
