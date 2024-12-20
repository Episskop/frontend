import React, { useState } from 'react';
import './DropDownMenuMobile.css';

interface DropDownMenuProps {
  digit: string;
  title: string;
  content: string[];
  menuStates: boolean[];
  setMenuStates: React.Dispatch<React.SetStateAction<boolean[]>>;
  price: string;
  img: string
}

const DropDownMenuMobile: React.FC<DropDownMenuProps> = ({ digit, title, content, menuStates, setMenuStates, price,img }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newMenuStates = menuStates.map((state, index) => index === menuStates.indexOf(true) ? !state : state);
    setMenuStates(newMenuStates);
    setIsOpen(!isOpen);
  };

  return (
    <div className="drop-down-wrapper-mobile">
      <div className={`drop-down-menu-mobile ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="drop-down-menu-title-mobile">
          <p className='para'>{digit}</p>
          <p className="drop-down-menu-title-title-mobile para">{title}</p>
        </div>
        <p className='drop-down-menu-price-mobile para'>{price}</p>
        <img src="./img/arrow_down.png" alt="arrow" className='animated-arrow-mobile'/>
      </div>
      <div className={`dropdown-content-mobile ${isOpen ? 'open' : ''}`}>
        <ul>
          <div className="lines-mobile"></div>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <img src={img} alt="services-drop-down" className='drop-down-menu-picture-1'/>
      </div>
    </div>
  );
};

export default DropDownMenuMobile;
