import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage';
import productsConfig from 'data/products-config';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ProductsCategoryPage = lazy(() =>
  import('pages/ProductsCategoryPage/ProductsCategoryPage')
);
const ProductDetailsPage = lazy(() =>
  import('pages/ProductDetailsPage/ProductDetailsPage')
);
const HelpPage = lazy(() => import('pages/HelpPage/HelpPage'));

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
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/policy" element={<div>Policy</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;
