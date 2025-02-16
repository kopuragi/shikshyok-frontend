import React, { useState } from 'react';
import '../../styles/MyPage.scss';

const MyPage: React.FC = () => {
  const [username, setUsername] = useState('admin1234'); // 사용자 이름
  const [userProfileImage, setUserProfileImage] = useState(
    'path/to/profile/image.jpg',
  ); // 프로필 이미지 경로 (예시)
  const [showEditInfo, setShowEditInfo] = useState(false);
  const [showRegisterStore, setShowRegisterStore] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div className="my-page">
      <header className="my-page-header">
        <h1>마이페이지</h1>
      </header>

      <div className="user-info">
        <img src={userProfileImage} alt="Profile" className="profile-image" />
        <h2>{username}</h2>
      </div>

      <div className="user-options">
        <div className="option">
          <span onClick={() => setShowEditInfo(!showEditInfo)}>정보수정</span>
          <button className="toggle-button">▼</button>
          {showEditInfo && (
            <div className="sub-options">
              <button className="upload-button" onClick={handleButtonClick}>
                프로필 이미지 등록
              </button>
              <input
                type="file"
                id="file-input"
                onChange={handleImageUpload}
                accept="image/*"
                style={{ display: 'none' }} // 파일 입력 숨김
              />
              <div className="username-edit">
                <label>
                  사용자 이름 수정:
                  <input
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    style={{ marginLeft: '5px' }}
                  />
                </label>
              </div>
            </div>
          )}
        </div>
        <div className="option">
          <span onClick={() => setShowRegisterStore(!showRegisterStore)}>
            가게 등록
          </span>
          <button className="toggle-button">▼</button>
          {showRegisterStore && (
            <div className="sub-options">
              {/* 가게 등록 관련 항목들 */}
              <p>가게 이름 입력</p>
              <p>가게 위치 입력</p>
            </div>
          )}
        </div>
        <div className="option">
          <span onClick={() => setShowWithdraw(!showWithdraw)}>회원 탈퇴</span>
          <button className="toggle-button">▼</button>
          {showWithdraw && (
            <div className="sub-options">
              {/* 회원 탈퇴 관련 항목들 */}
              <p>탈퇴 사유 입력</p>
              <p>탈퇴 확인</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
