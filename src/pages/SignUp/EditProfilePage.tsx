import React, { useState, useEffect } from 'react';
import '../../styles/EditProfilePage.scss';

const EditProfilePage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    birthdate: '',
    gender: '',
    email: '',
    phoneNumber: '',
    address: '',
    companyName: '',
    businessType: '',
    storeAddress: '',
    representativeName: '',
    businessAddress: '',
  });

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [membershipType, setMembershipType] = useState<
    'individual' | 'business'
  >('individual');

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = {
        username: 'testuser',
        name: '이채훈',
        birthdate: '1990-01-01',
        gender: 'male',
        email: 'test@example.com',
        phoneNumber: '01012345678',
        address: '서울시 노원구 중계동',
        companyName: '버거킴',
        businessType: '레스토랑',
        storeAddress: '서울시 서초구 신반포로',
        representativeName: '이채훈',
        businessAddress: '서울시 서초구 신반포로',
      };
      setFormData(userData);
    };

    fetchUserData();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // 이메일 유효성 검사
    if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setEmailError('유효하지 않은 이메일 형식입니다.');
      } else {
        setEmailError('');
      }
    }
  };

  const handleMembershipChange = (type: 'individual' | 'business') => {
    setMembershipType(type);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 비밀번호 유효성 검사
    if (newPassword && confirmPassword) {
      if (newPassword.length < 8 || newPassword.length > 16) {
        setPasswordError('비밀번호는 8-16자 이내여야 합니다.');
        return;
      } else if (
        !/[a-z]/.test(newPassword) ||
        !/[0-9]/.test(newPassword) ||
        !/[!@#$%^&*]/.test(newPassword)
      ) {
        setPasswordError(
          '비밀번호는 소문자, 숫자, 특수문자를 포함해야 합니다.',
        );
        return;
      } else if (newPassword !== confirmPassword) {
        setPasswordError('새 비밀번호가 일치하지 않습니다.');
        return;
      } else {
        setPasswordError('');
      }
    }
  };

  return (
    <div className="edit-profile-page">
      <h1>회원정보 수정</h1>
      <div className="edit-profile-container">
        <div className="membership-type">
          <button
            onClick={() => handleMembershipChange('individual')}
            className={membershipType === 'individual' ? 'active' : ''}
          >
            개인회원
          </button>
          <button
            onClick={() => handleMembershipChange('business')}
            className={membershipType === 'business' ? 'active' : ''}
          >
            기업회원
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>아이디</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="아이디를 입력해주세요"
              required
            />
          </div>

          {/* 비밀번호 수정 입력란 */}
          <div className="form-group">
            <label>현재 비밀번호</label>
            <input
              type="password"
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
              placeholder="현재 비밀번호를 입력해주세요"
              required
            />
          </div>
          <div className="form-group">
            <label>새 비밀번호</label>
            <input
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="비밀번호(8-16자 이내, 소문자, 특수문자)"
              required
            />
          </div>
          <div className="form-group">
            <label>새 비밀번호 확인</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="새 비밀번호를 다시 입력해주세요"
              required
            />
            {passwordError && <span className="error">{passwordError}</span>}
          </div>

          <div className="form-group">
            <label>이름(실명)</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="이름을 입력해주세요"
              required
            />
          </div>
          <div className="form-group">
            <label>생년월일(예: 2000-01-31)</label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>이메일</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@example.com"
              required
            />
            {emailError && <span className="error">{emailError}</span>}
          </div>

          {/* 휴대폰 번호 및 주소 입력란 */}
          <div className="form-group">
            <label>휴대폰 번호</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="01XXXXXXXXX"
              required
            />
          </div>
          <div className="form-group">
            <label>주소</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="주소를 입력해주세요"
              required
            />
          </div>

          {/* 기업회원 추가 입력란 */}
          {membershipType === 'business' && (
            <>
              <div className="form-group-inline">
                <div className="inline-input">
                  <label>가게명</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="가게명을 입력해주세요"
                    required
                  />
                </div>
                <div className="inline-input">
                  <label>업종</label>
                  <input
                    type="text"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    placeholder="업종을 입력해주세요"
                    required
                  />
                </div>
              </div>
              <div className="form-group-inline">
                <div className="inline-input">
                  <label>가게 주소</label>
                  <input
                    type="text"
                    name="storeAddress"
                    value={formData.storeAddress}
                    onChange={handleChange}
                    placeholder="가게 주소를 입력해주세요"
                    required
                  />
                </div>
                <div className="inline-input">
                  <label>대표자명</label>
                  <input
                    type="text"
                    name="representativeName"
                    value={formData.representativeName}
                    onChange={handleChange}
                    placeholder="대표자명을 입력해주세요"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>사업자 주소</label>
                <input
                  type="text"
                  name="businessAddress"
                  value={formData.businessAddress}
                  onChange={handleChange}
                  placeholder="사업자 주소를 입력해주세요"
                  required
                />
              </div>
            </>
          )}

          <button type="submit">수정하기</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
