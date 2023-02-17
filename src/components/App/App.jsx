import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import RestrictedRoutes from 'components/RestrictedRoutes/RestrictedRoutes';
import productsConfig from 'data/products-config';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ProductsCategoryPage = lazy(() =>
  import('pages/ProductsCategoryPage/ProductsCategoryPage')
);
const ProductDetailsPage = lazy(() =>
  import('pages/ProductDetailsPage/ProductDetailsPage')
);
const HelpPage = lazy(() => import('pages/HelpPage/HelpPage'));
const CheckoutPage = lazy(() => import('pages/CheckoutPage/CheckoutPage'));
const SuccessPage = lazy(() => import('pages/SuccessPage/SuccessPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage products={productsConfig} />} />
          <Route
            path="products"
            element={<ProductsCategoryPage products={productsConfig} />}
          />
          <Route
            path="products/:productName"
            element={<ProductDetailsPage products={productsConfig} />}
          />
          <Route path="help" element={<HelpPage />} />
        </Route>

        <Route
          path="/checkout"
          element={<RestrictedRoutes component={CheckoutPage} />}
        />
        <Route
          path="/order-info"
          element={<RestrictedRoutes component={SuccessPage} />}
        />
        <Route path="/policy" element={<div>Policy</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
