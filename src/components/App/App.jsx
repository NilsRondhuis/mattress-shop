import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import RestrictedRoutes from 'components/RestrictedRoutes/RestrictedRoutes';
import ScrollToTop from 'components/common/ScrollToTop/ScrollToTop';
import PageLoader from 'components/common/PageLoader/PageLoader';
import UpBtn from 'components/UpBtn/UpBtn';
import productsConfig from 'data/products-config';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ProductsCategoryPage = lazy(() =>
  import('pages/ProductsCategoryPage/ProductsCategoryPage')
);
const ProductDetailsPage = lazy(() =>
  import('pages/ProductDetailsPage/ProductDetailsPage')
);
const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));
const RulesPage = lazy(() => import('pages/RulesPage/RulesPage'));
const HelpPage = lazy(() => import('pages/HelpPage/HelpPage'));
const GuaranteePage = lazy(() => import('pages/GuaranteePage/GuaranteePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const CheckoutPage = lazy(() => import('pages/CheckoutPage/CheckoutPage'));
const SuccessPage = lazy(() => import('pages/SuccessPage/SuccessPage'));
const PolicyPage = lazy(() => import('pages/PolicyPage/PolicyPage'));

const App = () => {
  return (
    <>
      <ScrollToTop />
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
          <Route path="about" element={<AboutPage />} />
          <Route path="rules" element={<RulesPage />} />
          <Route path="guarantee" element={<GuaranteePage />} />
          <Route path="contacts" element={<ContactsPage />} />
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
        <Route
          path="/policy"
          element={
            <Suspense fallback={<PageLoader />}>
              <PolicyPage />
            </Suspense>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <UpBtn />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
