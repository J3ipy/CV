import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="João Pedro" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn">
        Download CV
      </a>
    </aside>
  );
};

export default Sidebar;
