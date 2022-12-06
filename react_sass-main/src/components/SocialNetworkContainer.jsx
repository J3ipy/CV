import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, },
  { name: "github", icon: <FaGithub /> },
  { name: "instagram", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro079/" className="social-btn">
        <FaLinkedinIn></FaLinkedinIn>
      </a>
      <a href="https://github.com/J3ipy" className="social-btn">
        <FaGithub></FaGithub>
      </a>
      <a href="https://www.instagram.com/pedro.ssantt/" className="social-btn">
        <FaInstagram></FaInstagram>
      </a>
    </section>
  );
};

export default SocialNetworkContainer;
