import Wrapper from "../assets/wrappers/Header";
import Logo from "../assets/images/Logo.png";
const Header = () => {
  return (
    <Wrapper>
      <h1>Headers</h1>
      <img src={Logo} alt="QenjaLogo"  className='logo'   />
    </Wrapper>
  );
};
export default Header;
