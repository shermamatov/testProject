import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContactContext from "./contexts/ContactContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ContactContext>
        <App />
    </ContactContext>
);
