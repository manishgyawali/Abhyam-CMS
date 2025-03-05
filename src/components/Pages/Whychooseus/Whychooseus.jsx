import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS
import InputField from "../../Common/InputField/InputField"; // Assuming you still want custom components like this
import FileUpload from "../../Common/FileUpload/FileUpload";
import Editor from "../../Common/Editor/Editor";
import axios from 'axios';

// Define fields dynamically (like the Forms array in Postmethod)
const fields = [
  { name: "title", type: "text", placeholder: "Title" },
  { name: "subtitle", type: "text", placeholder: "Subtitle" },
  { name: "editorContent", type: "text", placeholder: "Description" },
];

// Validation schema dynamically
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required!"),
  subtitle: Yup.string().required("Subtitle is required!"),
  editorContent: Yup.string().required("Description is required!"),
  file: Yup.mixed().required("File is required!")
});

const notify = () => toast("Banner data submitted!");

const Whychooseus = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          subtitle: "",
          file: null,
          editorContent: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          toast("Submitted!");
          axios
            .post("http://localhost:3000/banner", values) // Adjust URL as needed
            .then((result) => {
              console.log(result);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        {({ setFieldValue, handleSubmit, isSubmitting, errors }) => (
          <Form>
            <div className="py-10 px-6 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
              <h1 className="text-2xl font-semibold">About Whychooseus</h1>
              <div className="p-6 bg-white rounded-md flex flex-col gap-8 shadow-md">
                {fields.map((field, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="uppercase text-sm px-2 tracking-tighter py-1">
                      {field.name}:
                    </div>
                    <Field
                      className="bg-white border border-gray-400 w-full rounded-lg p-2 outline-none"
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-700 px-3"
                    />
                  </div>
                ))}

                <Editor
                  name="editorContent"
                  onChange={(content) => setFieldValue("editorContent", content)}
                />
                {errors.editorContent && (
                  <div className="text-red-500">{errors.editorContent}</div>
                )}

                <FileUpload
                  name="file"
                  onChange={(event) => {
                    setFieldValue("file", event.target.files[0]);
                  }}
                />
                {errors.file && <div className="text-red-500">{errors.file}</div>}

                <div className="text-right">
                  <button
                    type="submit"
                    className="px-4 cursor-pointer py-2 bg-blue-500 text-white rounded-md"
                    disabled={isSubmitting}
                    onClick={notify}
                  >
                    Submit
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Whychooseus;
