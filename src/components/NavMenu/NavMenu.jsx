import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Logo from 'components/common/Logo/Logo';
import FlexContainer from 'components/common/FlexContainer/FlexContainer';
import BtnClose from 'components/common/BtnClose/BtnClose';
import Socials from 'components/common/Socials/Socials';
import navMenuConfig from 'data/nav-menu-config';
import './NavMenu.scss';

const NavMenu = ({ isOpen, onToggle }) => {
  return (
    <div className={isOpen ? 'nav-menu' : 'nav-menu is-hidden'}>
      <nav className="main-nav">
        <FlexContainer type="nav-flex-container">
          <Logo place="other" />
          <BtnClose onClick={onToggle} />
        </FlexContainer>
        <ul className="nav-list">
          {navMenuConfig.map(({ text, to }) => (
            <li key={text} className="item">
              <NavLink to={to} className="nav-link">
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="box-socials">
        <Socials typeList="menu-social" colorIcon="color-icon" />
      </div>
    </div>
  );
};

NavMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default NavMenu;
