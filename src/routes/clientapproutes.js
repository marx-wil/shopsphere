// Import necessary dependencies from React Router and React
import React from "react";
import { Route, Routes } from "react-router-dom"; // Route and Routes are used to define routing in React
import ClientLayout from "../layouts/main/"; // Import the layout HOC to wrap the pages with layout

// Import Pages (Components) for each route
import ClientDefaultLayout from "../pages/client/default"; // Home page of the client
import ClientCart from "../pages/client/cart"; // Cart page for the client
import ClientProductDetails from "../pages/client/productDetails"; // Product details page
import ClientProductListing from "../pages/client/productListing"; // Product listing page
import ClientAbout from "../pages/client/about"; // About page for the client
// Wrap each component/page with the layout (client-side layout with header, footer, etc.)
// ClientLayout is the HOC (higher-order component) that wraps your components with a consistent layout
const ClientDefaultView = ClientLayout(ClientDefaultLayout); // Home page with layout
const ClientCartView = ClientLayout(ClientCart); // Cart page with layout
const ClientProductDetailsView = ClientLayout(ClientProductDetails); // Product details page with layout
const ClientProductListingView = ClientLayout(ClientProductListing); // Product listing page with layout
const ClientAboutView = ClientLayout(ClientAbout); // About page with layout
// Define the routes for the application
const AppRoutes = () => {
  return (
    <Routes>
      {" "}
      {/* Routes component defines all the route paths and their corresponding components */}
      {/* Define the default route (Home page) */}
      <Route path="/" element={<ClientDefaultView />} /> {/* Home page route */}
      {/* Define the cart route */}
      <Route path="/cart" element={<ClientCartView />} />{" "}
      {/* Cart page route */}
      {/* Define the product details route with a dynamic parameter (product ID) */}
      <Route path="/about" element={<ClientAboutView />} />{" "}
      {/* About page route */}
      <Route
        path="/product-details/:id" // Dynamic path with the product ID parameter
        element={<ClientProductDetailsView />} // The component that shows details of a product
      />
      {/* Define the product listing route */}
      <Route
        path="/product-listing"
        element={<ClientProductListingView />}
      />{" "}
      {/* Product listing route */}
    </Routes>
  );
};

// Export the AppRoutes component so it can be used elsewhere in the application
export default AppRoutes;
