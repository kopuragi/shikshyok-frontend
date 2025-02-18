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
    businessRegistrationNumber: '',
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
      try {
        const response = await fetch('https://your-api-url.com/user'); // 사용자 데이터 API URL
        if (!response.ok) {
          throw new Error('사용자 데이터를 가져오는 데 실패했습니다.');
        }
        const userData = await response.json();
        setFormData(userData);
      } catch (error) {
        console.error('사용자 데이터 로드 오류:', error);
      }
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

    // 사용자 정보 수정 요청
    try {
      const response = await fetch('https://your-api-url.com/update-profile', {
        // 프로필 업데이트 API URL
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          currentPassword,
          newPassword: newPassword || undefined, // 비밀번호 변경 시만 포함
        }),
      });

      if (!response.ok) {
        throw new Error('회원 정보 수정에 실패했습니다.');
      }

      const data = await response.json();
      console.log('회원 정보 수정 성공:', data);
      alert('회원 정보가 수정되었습니다.');
      // 추가적인 동작 (예: 프로필 페이지로 리다이렉트 등)
    } catch (error) {
      console.error('회원 정보 수정 오류:', error);
      alert('회원 정보 수정 중 오류가 발생했습니다.');
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
                <label>사업자 등록증 번호</label>{' '}
                {/* 사업자 주소를 사업자 등록증 번호로 변경 */}
                <input
                  type="text"
                  name="businessRegistrationNumber" // 필드 이름 변경
                  value={formData.businessRegistrationNumber}
                  onChange={handleChange}
                  placeholder="사업자 등록증 번호를 입력해주세요"
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
