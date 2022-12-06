import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone</h3>
          <a href="tel:79999641631"><p>(79) 99964-1631</p></a>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <a href="mailto:designerjp05@gmail.com"><p>designerjp05@gmail.com</p></a>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <a href="https://goo.gl/maps/xcHQgbDENxzTQEu88"><p>Estância / SE</p></a>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
