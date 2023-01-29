import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { CgClose } from "react-icons/cg";
import "./BtnMenu.scss";

const BtnMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button type="button" className="menu-btn" onClick={toggle}>
      {isOpen ? (
        <CgClose className="cross" color="#584d5d" />
      ) : (
        <TfiMenu className="menu" color="#584d5d" />
      )}
    </button>
  );
};

export default BtnMenu;
