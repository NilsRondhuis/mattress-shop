import { ClipLoader } from 'react-spinners';
import FlexContainer from '../FlexContainer/FlexContainer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import './PageLoader.scss';

const PageLoader = () => {
  return (
    <FlexContainer type="loader-container ">
      <ScrollToTop />
      <ClipLoader color="#584d5d" />
    </FlexContainer>
  );
};

export default PageLoader;
