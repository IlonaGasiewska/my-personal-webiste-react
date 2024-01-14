import './Navbar.css';
import ThemeSwither from '../ThemeSwither/ThemeSwither';
import NavbarList from '../NavbarList/NavbarList';
import { useState } from 'react';

function Navbar() {

  const [listShouldBeVisibility, setListShouldBeVisibility] = useState(false);

  function toogleFlagToShowNavbarList () {
    setListShouldBeVisibility(!listShouldBeVisibility);
  };

  return (
    <nav className='navbar'>
      <i className="menu-icon fa-solid fa-bars" onClick={toogleFlagToShowNavbarList}></i>
      {listShouldBeVisibility  && <NavbarList/>}
      <ThemeSwither/>
    </nav>
  );
}

export default Navbar;
