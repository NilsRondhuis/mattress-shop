import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectProductInCart } from 'redux/cart/selectors';
import PageLoader from 'components/common/PageLoader/PageLoader';

const RestrictedRoutes = ({ component: Component, redirectTo = '/' }) => {
  const productsCart = useSelector(selectProductInCart);

  return productsCart.length > 0 ? (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  ) : (
    <Navigate to={redirectTo} />
  );
};

RestrictedRoutes.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  redirectTo: PropTypes.string,
};

export default RestrictedRoutes;
