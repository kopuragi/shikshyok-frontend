import Header from "./pages/Header/Header";
import OwnerOrderHistory from "./pages/Order/OwnerOrderPage/OwnerOrderHistory";
import OwnerOrderAllHistory from "./pages/Order/OwnerOrderPage/OwnerOrderAllHistory";
function App() {
  return (
    <div>
      <Header />
      <OwnerOrderHistory />
      <OwnerOrderAllHistory />
      <h1 className="bg-amber-400">홈입니다</h1>
    </div>
  );
}

export default App;
