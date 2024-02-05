import React, { useState } from "react";

interface MainManagerTypes {
  title: string;
}

const MainManagerBtn = ({ title }: MainManagerTypes) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  return (
    <div className="flex justify-between items-center">
      <div>{title}</div>
      <label className="relative cursor-pointer flex justify-between items-center">
        <input
          className="opacity-0 w-0 h-0 overflow-hidden absolute"
          type="file"
          onChange={handleFileChange}
        />
        {selectedFile ? (
          <div className="ml-2">{selectedFile.name}</div>
        ) : (
          <div>선택 된 파일없음</div>
        )}
        <div className="bg-pink-50 text-pink-700 p-2 rounded-md hover:bg-pink-100">
          파일 선택
        </div>
      </label>
    </div>
  );
};

export default MainManagerBtn;
