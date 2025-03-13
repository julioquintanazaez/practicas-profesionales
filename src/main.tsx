import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Router>
	<AuthProvider>
      		<App />
	</AuthProvider>
    </Router>
);

