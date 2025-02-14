import React from "react";

interface HeaderProps {
  nickname: string;
}

const Header: React.FC<HeaderProps> = ({ nickname }) => {
  nickname = "~님 환영합니다.";
  return (
    <header>
      <div className="h-[7vh] w-[100vw] border border-pink-500 flex justify-between items-center px-4">
        <div>
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" />
        </div>
        <div className="flex">
          <div>마이페이지</div>
          <div>주문내역</div>
          <div>로그아웃</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
