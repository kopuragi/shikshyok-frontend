import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { useStore } from "./store";
import AppRoutes from "./routes";

const App2: React.FC = () => {
  const store = useStore();
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
};

export default App2;
