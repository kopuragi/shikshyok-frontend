import React, { useState, useEffect } from 'react';
import '../../styles/EditProfilePage.scss';

const EditProfilePage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [membershipType, setMembershipType] = useState<
    'individual' | 'business'
  >('individual');

  // 기존 회원 정보 불러오기 (가정: 사용자 정보는 API 호출로 가져옴)
  useEffect(() => {
    const fetchUserData = async () => {
      // 여기서 API 호출을 통해 사용자 정보를 가져옵니다.
      const userData = {
        username: 'testuser',
        password: 'password123',
        name: '이채훈',
        birthdate: '1990-01-01',
        gender: 'male',
        email: 'test@example.com',
        phoneNumber: '01012345678',
        address: '서울시 노원구 중계동',
        companyName: '버거킴',
        businessType: '레스토랑랑',
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

    // 비밀번호 유효성 검사
    if (name === 'password') {
      if (value.length < 8 || value.length > 16) {
        setPasswordError('비밀번호는 8-16자 이내여야 합니다.');
      } else if (
        !/[a-z]/.test(value) ||
        !/[0-9]/.test(value) ||
        !/[!@#$%^&*]/.test(value)
      ) {
        setPasswordError(
          '비밀번호는 소문자, 숫자, 특수문자를 포함해야 합니다.',
        );
      } else {
        setPasswordError('');
      }
    }

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordError || emailError) {
      alert('입력한 정보가 유효하지 않습니다.');
      return;
    }
    console.log(formData);
    // 여기서 수정된 정보로 API 요청을 보낼 수 있습니다.
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
          <div className="form-group">
            <label>비밀번호(변경 시 입력)</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요"
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
            <label>생년월일(예: 20000131)</label>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>성별</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">선택하세요</option>
              <option value="male">남자</option>
              <option value="female">여자</option>
              <option value="none">밝히고 싶지 않음</option>
            </select>
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
