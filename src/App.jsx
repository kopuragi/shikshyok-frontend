import Header from "./pages/Header/Header";
import OwnerOrderHistory from "./pages/Order/OwnerOrderPage/OwnerOrderHistory";
import OwnerOrderAllHistory from "./pages/Order/OwnerOrderPage/OwnerOrderAllHistory";
import Menus from "./components/Menus";
function App() {
  return (
    <div>
      <Header />
      <OwnerOrderHistory />
      <OwnerOrderAllHistory />
      <Menus />
      <h1 className="bg-amber-400">홈입니다</h1>
    </div>
  );
}

export default App;
