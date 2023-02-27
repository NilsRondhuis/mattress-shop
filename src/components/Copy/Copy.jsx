import { useState, useEffect } from 'react';
import PolicyLink from 'components/common/PolicyLink/PolicyLink';
import './Copy.scss';

const Copy = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    const date = new Date();
    setCurrentYear(date.getFullYear());
  }, []);

  return (
    <div className="copy-box">
      <p className="copy">Markiz Company &copy; {currentYear}</p>
      <PolicyLink text="політика конфіденційності" />
    </div>
  );
};

export default Copy;
