import React from "react";
import Editor from "../../Common/Editor/Editor";
import FileUpload from "../../Common/FileUpload/FileUpload";
import InputField from "../../Common/InputField/InputField";

const Banner = () => {
  return (
    <div className="py-10 px-6 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
      <h1 className="text-2xl font-semibold   ">Banner </h1>
      <div className="p-6 bg-white rounded-md flex flex-col gap-8 shadow-md">
      <InputField type="text" placeholder="Title" />
      <InputField type="text" placeholder="Subtitle" />        <FileUpload />
        <Editor />
      </div>{" "}
    </div>
  );
};

export default Banner;
