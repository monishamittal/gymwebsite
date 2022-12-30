import { FaFacebook, FaEnvelope, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa"
import "./style/footer.css";
const Footer = () => {
  return (
    <div className="footer">
    <FaFacebook size="2em" />&nbsp;&nbsp;
    <FaLinkedin size="2em" />&nbsp;&nbsp;
    <FaTwitter size="2em" />&nbsp;&nbsp;
    <FaYoutube size="2em" />&nbsp;&nbsp;
    <FaEnvelope size="2em" />
</div>
  );
};
export default Footer;


