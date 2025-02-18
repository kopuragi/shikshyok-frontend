import "../../styles/header.scss"; // Sass 파일 불러오기

interface HeaderProps {
  nickname: string;
}

const Header: React.FC<HeaderProps> = ({ nickname }) => {
  return (
    <header>
      <div className="wrap-container-header">
        <div className="header-container">
          <div className="logo-container">
            <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" />
          </div>
          <div className="menu-container">
            <div>{nickname}님 환영합니다</div>
            <div>마이페이지</div>
            <div>주문내역</div>
            <div>로그아웃</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
