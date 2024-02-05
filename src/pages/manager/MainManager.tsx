import React from "react";
import MainManagerBtn from "../../components/Manager.tsx/MainManagerBtn";

const MainManager = () => {
  const fileTitle = ["배너1", "배너2", "배너3"];
  return (
    <div className="flex flex-col pl-36">
      <h2>메인관리-배너수정</h2>
      <div className="border p-2 w-[600px] h-32">
        {fileTitle.map((el, index) => {
          return <MainManagerBtn title={el} key={index} />;
        })}
      </div>
      <button>확인</button>
    </div>
  );
};

export default MainManager;
