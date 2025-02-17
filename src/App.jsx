import Header from "./pages/Header/Header";
import OwnerOrderHistory from "./pages/Order/OwnerOrderPage/OwnerOrderHistory";
import OwnerOrderAllHistory from "./pages/Order/OwnerOrderPage/OwnerOrderAllHistory";
import SignUpPage from "./pages/SignUp/SignUpPage";
import EditProfilePage from "./pages/SignUp/EditProfilePage";
import LoginPage from "./pages/SignUp/LoginPage";
import MyPage from "./pages/SignUp/MyPage";
import OwnerMain from "./pages/OwnerMain";
import OwnerReiview from "./pages/OwnerReview";
import Menus from "./components/Menus";

function App() {
  return (
    <div>
      <Header />

      <OwnerOrderHistory />
      <OwnerOrderAllHistory />
      <Menus />

      {/* <SignUpPage /> */}
      <EditProfilePage />
      {/* <LoginPage /> */}
      {/* <MyPage /> */}
      {/* <OwnerOrderHistory /> */}
      {/* <OwnerOrderAllHistory /> */}
      {/* <OwnerMain /> */}
      {/* <OwnerReiview /> */}


      <h1 className="bg-amber-400">홈입니다</h1>
    </div>
  );
}

export default App;
