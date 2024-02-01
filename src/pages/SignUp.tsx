import SignUpInput from "../components/SignUp/SignUpInput";
import Button from "../components/common/Button";
import LoginSignUpBtn from "../components/common/LoginSignUpBtn";

const SignUp = () => {
  return (
    <>
      <div className="flex flex-col items-center lg:w-[500px]">
        <div className="w-[170px] h-[50px] bg-main-color mb-[24px]" />
        <div className="w-full">
          <h2>필수항목입력</h2>
          <SignUpInput title="이름" placeholder="이름" />
          <div className="flex justify-between items-center pl-16 w-full">
            <div>성별</div>
            <div className="flex justify-between w-3/4 border border-main-color rounded-full py-3 pl-7 pr-16 mb-[5px]">
              <label>
                <input type="radio" name="group1" value="남" />남
              </label>
              <label>
                <input type="radio" name="group1" value="여" />여
              </label>
            </div>
          </div>
          <SignUpInput title="생년월일" placeholder="1900.00.00" />
          <SignUpInput title="이메일/아이디" placeholder="uriel@naver.com" />
          <SignUpInput
            title="비밀번호"
            placeholder="6자리이상 대문자 1개이상 포함"
          />
          <SignUpInput title="비밀번호확인" placeholder="" />
          <SignUpInput title="핸드폰번호" placeholder="010-1234-5678" />
        </div>
        <div className="w-full">
          <h2>선택입력항목</h2>
          <div className="">
            <SignUpInput title="가족인원" placeholder="0" />
            <SignUpInput title="자녀대표이름" placeholder="애기이름" />
          </div>
        </div>
        <LoginSignUpBtn label="회원가입" />
      </div>
      <Button label="회원가입" />
    </>
  );
};

export default SignUp;
