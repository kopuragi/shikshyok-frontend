import Header from './pages/Header/Header';
import OwnerOrderHistory from './pages/Order/OwnerOrderPage/OwnerOrderHistory';
import OwnerOrderAllHistory from './pages/Order/OwnerOrderPage/OwnerOrderAllHistory';
import SignUpPage from './pages/SignUp/SignUpPage';
import EditProfilePage from './pages/SignUp/EditProfilePage';
import LoginPage from './pages/SignUp/LoginPage';
import MyPage from './pages/SignUp/MyPage';

function App() {
  return (
    <div>
      <Header />
      {/* <SignUpPage /> */}
      <EditProfilePage />
      {/* <LoginPage /> */}
      {/* <MyPage /> */}
      {/* <OwnerOrderHistory /> */}
      {/* <OwnerOrderAllHistory /> */}
      <h1 className="bg-amber-400">홈입니다</h1>
    </div>
  );
}

export default App;
