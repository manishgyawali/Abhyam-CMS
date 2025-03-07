import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import InputField from "../../Common/InputField/InputField";
import FileUpload from "../../Common/FileUpload/FileUpload";
import Editor from "../../Common/Editor/Editor";

const schema = yup.object().shape({
  title: yup.string().required("this is required"),
  subtitle: yup.string().required("this is required"),
  description: yup.string().required("this is required"),

  image: yup
    .mixed()
    .test("filetype", "unsupported", (value) =>
      ["image/png", "image/jpeg", "image/jpg"].includes(value?.type)
    ),
});

const AboutUs = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          subtitle: "",
          description: "",
          image: "",
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, setFieldValue }) => {
          return (
            <div className="py-10 px-6 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
              <h1 className="text-2xl font-semibold">Banner</h1>
              <div className="p-6 bg-white rounded-md flex flex-col gap-8 shadow-md">
                <Form onSubmit={handleSubmit} className="grid gap-5 ">
                  <div className="flex flex-col gap-5">
                    <InputField name="title" type="text" placeholder="Title" />

                    <ErrorMessage
                      name="title"
                      component={"p"}
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <InputField
                      name="subtitle"
                      type="text"
                      placeholder="Subtitle"
                    />

                    <ErrorMessage
                      name="subtitle"
                      component={"p"}
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Editor
                      name="description"
                      onChange={(content) =>
                        setFieldValue("description", content)
                      } // Update Formik with editor content
                    />
                    <ErrorMessage
                      name="description"
                      component={"p"}
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <FileUpload
                      name="file"
                      onChange={(event) => {
                        setFieldValue("file", event.target.files[0]); // Update Formik with the file
                      }}
                    />
                    <ErrorMessage
                      name="image"
                      component={"p"}
                      className="text-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-400 text-white w-fit h-fit px-7 py-2 rounded"
                  >
                    Submit
                  </button>
                </Form>{" "}
              </div>{" "}
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default AboutUs;
