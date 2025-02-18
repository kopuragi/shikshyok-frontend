import React, { useState } from 'react';
import '../../styles/SignUpPage.scss';

const SignUpPage: React.FC = () => {
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
    businessRegistrationNumber: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailExists, setEmailExists] = useState(false); // 이메일 중복 확인 상태
  const [membershipType, setMembershipType] = useState<
    'individual' | 'business'
  >('individual');

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
    setFormData({
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
      businessRegistrationNumber: '',
    });
  };

  const checkEmailExists = async () => {
    try {
      const response = await fetch(
        `https://api.example.com/check-email?email=${formData.email}`,
      ); // 이메일 중복 확인 API URL
      if (!response.ok) {
        throw new Error('이메일 중복 확인에 실패했습니다.');
      }
      const data = await response.json();
      setEmailExists(data.exists); // data.exists가 true면 이메일이 이미 존재함
    } catch (error) {
      console.error('이메일 중복 확인 오류:', error);
      alert('이메일 중복 확인 중 오류가 발생했습니다.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordError || emailError || emailExists) {
      alert('입력한 정보가 유효하지 않습니다.');
      return;
    }

    // 백엔드에 회원가입 요청
    try {
      const response = await fetch('https://api.example.com/signup', {
        // 실제 백엔드 API URL로 변경
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('회원가입 실패');
      }

      const data = await response.json();
      console.log('회원가입 성공:', data);
      alert('회원가입이 완료되었습니다.');
    } catch (error) {
      console.error('회원가입 오류:', error);
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="signup-page">
      <h1>회원가입</h1>
      <div className="signup-container">
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
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="비밀번호(8-16자 이내, 소문자, 특수문자)"
              required
            />
            {passwordError && <span className="error">{passwordError}</span>}
          </div>
          <div className="form-group">
            <label>이름</label>
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
            <button type="button" onClick={checkEmailExists}>
              이메일 중복 확인
            </button>
            {emailExists && (
              <span className="error">이미 사용 중인 이메일입니다.</span>
            )}
          </div>

          <div className="form-group">
            <label>휴대폰 번호</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="01012345678"
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
                <label>사업자 등록증 번호</label>
                <input
                  type="text"
                  name="businessRegistrationNumber"
                  value={formData.businessRegistrationNumber}
                  onChange={handleChange}
                  placeholder="사업자 등록증 번호를 입력해주세요"
                  required
                />
              </div>
            </>
          )}

          <button type="submit">가입하기</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
