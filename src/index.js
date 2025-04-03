// Import necessary dependencies and libraries
import React from "react"; // React core library for building the UI
import ReactDOM from "react-dom/client"; // ReactDOM to render the React component into the DOM
import reportWebVitals from "./reportWebVitals"; // Utility to measure app's performance (optional)
import { ChakraProvider } from "@chakra-ui/react"; // Chakra UI provider for applying Chakra UI theme globally

import { BrowserRouter as Router } from "react-router-dom"; // React Router for handling page routing in the app
import AppRoutes from "./routes/clientapproutes"; // Import the routing setup for the client-side application

// Access the root element where the React app will be mounted
const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root element for React rendering

// Rendering the app within the specified root element
root.render(
  <ChakraProvider>
    {/* ChakraProvider provides Chakra UI context and theme to the app */}
    <React.StrictMode>
      {" "}
      {/* StrictMode is a development tool for highlighting potential issues in the app */}
      <Router>
        {" "}
        {/* Router handles navigation and routing in the app */}
        <AppRoutes />{" "}
        {/* AppRoutes is where you define all the routing logic and pages of the app */}
      </Router>
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to measure performance, you can pass a function to log results here (e.g., console.log)
// or send it to an analytics endpoint. This is useful for tracking performance metrics of the app.
reportWebVitals();
