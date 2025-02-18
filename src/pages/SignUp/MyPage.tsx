import React, { useState, useEffect } from 'react';
import '../../styles/MyPage.scss';

const MyPage: React.FC = () => {
  const [username, setUsername] = useState('admin1234');
  const [userProfileImage, setUserProfileImage] = useState(
    'path/to/profile/image.jpg',
  );
  const [showEditInfoModal, setShowEditInfoModal] = useState(false);
  const [showRegisterStoreModal, setShowRegisterStoreModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [storeName, setStoreName] = useState('');
  const [storeLocation, setStoreLocation] = useState('');
  const [withdrawReason, setWithdrawReason] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://api.example.com/user');
        if (!response.ok) {
          throw new Error('사용자 정보를 가져오는 데 실패했습니다.');
        }
        const userData = await response.json();
        setUsername(userData.username);
        setUserProfileImage(userData.profileImage);
      } catch (error) {
        console.error('사용자 데이터 로드 오류:', error);
      }
    };

    fetchUserData();
  }, []);

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

  const handleProfileUpdate = async () => {
    try {
      const response = await fetch('https://api.example.com/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          profileImage: userProfileImage,
        }),
      });

      if (!response.ok) {
        throw new Error('프로필 업데이트에 실패했습니다.');
      }

      const data = await response.json();
      console.log('프로필 업데이트 성공:', data);
      alert('프로필이 업데이트되었습니다.');
      setShowEditInfoModal(false); // 모달 닫기
    } catch (error) {
      console.error('프로필 업데이트 오류:', error);
      alert('프로필 업데이트 중 오류가 발생했습니다.');
    }
  };

  const handleStoreRegistration = () => {
    // 가게 등록 로직을 여기에 추가
    console.log('가게 이름:', storeName);
    console.log('가게 위치:', storeLocation);
    alert('가게 등록이 완료되었습니다.');
    setShowRegisterStoreModal(false); // 모달 닫기
  };

  const handleWithdraw = () => {
    // 회원 탈퇴 로직을 여기에 추가
    console.log('탈퇴 사유:', withdrawReason);
    alert('회원 탈퇴가 완료되었습니다.');
    setShowWithdrawModal(false); // 모달 닫기
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
          <span onClick={() => setShowEditInfoModal(true)}>정보수정</span>
          {showEditInfoModal && (
            <div className="modal">
              <div className="modal-content">
                <span
                  className="close"
                  onClick={() => setShowEditInfoModal(false)}
                >
                  &times;
                </span>
                <h2>정보 수정</h2>
                <div className="sub-options">
                  <button className="upload-button" onClick={handleButtonClick}>
                    프로필 이미지 등록
                  </button>
                  <input
                    type="file"
                    id="file-input"
                    onChange={handleImageUpload}
                    accept="image/*"
                    style={{ display: 'none' }}
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
                  <button onClick={handleProfileUpdate}>저장</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="option">
          <span onClick={() => setShowRegisterStoreModal(true)}>가게 등록</span>
          {showRegisterStoreModal && (
            <div className="modal">
              <div className="modal-content">
                <span
                  className="close"
                  onClick={() => setShowRegisterStoreModal(false)}
                >
                  &times;
                </span>
                <h2>가게 등록</h2>
                <div className="sub-options">
                  <label>
                    가게 이름:
                    <input
                      type="text"
                      value={storeName}
                      onChange={e => setStoreName(e.target.value)}
                    />
                  </label>
                  <label>
                    가게 위치:
                    <input
                      type="text"
                      value={storeLocation}
                      onChange={e => setStoreLocation(e.target.value)}
                    />
                  </label>
                  <button onClick={handleStoreRegistration}>등록</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="option">
          <span onClick={() => setShowWithdrawModal(true)}>회원 탈퇴</span>
          {showWithdrawModal && (
            <div className="modal">
              <div className="modal-content">
                <span
                  className="close"
                  onClick={() => setShowWithdrawModal(false)}
                >
                  &times;
                </span>
                <h2>회원 탈퇴</h2>
                <div className="sub-options">
                  <label>
                    탈퇴 사유:
                    <input
                      type="text"
                      value={withdrawReason}
                      onChange={e => setWithdrawReason(e.target.value)}
                    />
                  </label>
                  <button onClick={handleWithdraw}>탈퇴</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
