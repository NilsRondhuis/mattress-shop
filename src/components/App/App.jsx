import { Routes, Route } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import ProductsCategoryPage from 'pages/ProductsCategoryPage/ProductsCategoryPage';
import ProductDetailsPage from 'pages/ProductDetailsPage/ProductDetailsPage';
import HelpPage from 'pages/HelpPage/HelpPage';
import productsConfig from 'data/products-config';

//App

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
      </Routes>
    </>
  );
};

export default App;
