import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/index.css";
import Income from "./pages/Income";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Income />
  </>
);
