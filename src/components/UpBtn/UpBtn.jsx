import { useEffect, useState } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';
import './UpBtn.scss';

const UpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: document.body,
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={isVisible ? 'up-btn is-show' : 'up-btn'}
      onClick={handleClick}
    >
      <BiUpArrowAlt className="icon" />
    </button>
  );
};

export default UpBtn;
