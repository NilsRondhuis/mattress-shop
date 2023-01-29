import { useState, useEffect } from "react";
import "./Copy.scss";

const Copy = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    const date = new Date();
    setCurrentYear(date.getFullYear());
  }, []);

  return (
    <div className="copy-box">
      <p className="copy">Website name &copy; {currentYear}</p>
    </div>
  );
};

export default Copy;
