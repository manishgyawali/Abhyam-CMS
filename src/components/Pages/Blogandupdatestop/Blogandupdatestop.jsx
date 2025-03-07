import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FileUpload from "../../Common/FileUpload/FileUpload";
import Editor from "../../Common/Editor/Editor";
import axios from "axios";
import InputField from "../../Common/InputField/InputField";
import { IoPencil } from "react-icons/io5";

const fieldsTop = [
  { name: "titletop", type: "text", placeholder: "Title " },
  { name: "subtitletop", type: "text", placeholder: "Subtitle " },
];

const fieldsRemaining = [
  { name: "title", type: "text", placeholder: "Title " },
  { name: "blogtitle", type: "text", placeholder: "Blog Title" },
  { name: "blogname", type: "text", placeholder: "Blog Name" },
  { name: "status", type: "text", placeholder: "Status " },
  { name: "blogdate", type: "date", placeholder: "Blog Date" },
];

const validationSchema = Yup.object().shape(
  fieldsTop.concat(fieldsRemaining).reduce((schema, field) => {
    schema[field.name] = Yup.string().required(
      `${field.placeholder} is required!`
    );
    return schema;
  }, {
    editorContent: Yup.string().required("Description is required!"),
    file: Yup.mixed().required("File is required!"),
  })
);


const notify = () => toast("Data submitted!");

const Blogandupdatestop = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    titletop: "",
    subtitletop: "",
    title: "",
    blogtitle: "",
    blogname: "",
    status: "",
    blogdate: "",
    editorContent: "",
    file:null
  });

  const [Data, setData] = useState([
    {
      titletop: "Top Title Example",
      subtitletop: "Subtitle Example",
      title: "Your Global Education Partner for Visa Success",
      description:
        "Guiding you through every step of the process—student visas, test preparation, and beyond",
      blogimageid: "/Images/paypal.png",
      status: "Active",
      blogtitle: "Visa Success Tips",
      blogname: "Global Education Blog",
      blogdate: "2025-03-07",
    },
  ]);

  const handleEdit = (index) => {
    setFormData(Data[index]);
    setEditIndex(index);
    setIsEditMode(true);
  };

  const handleSubmit = (values) => {
    if (isEditMode) {
      axios
        .patch(`http://localhost:3000/banner/${editIndex}`, values)
        .then(() => {
          toast.success("Data updated!");
          setData((prev) => {
            const newData = [...prev];
            newData[editIndex] = values;
            return newData;
          });
        })
        .catch(() => toast.error("Failed to update data!"));
    } else {
      axios
        .post("http://localhost:3000/banner", values)
        .then(() => {
          toast.success("Data submitted!");
          setData((prev) => [...prev, values]);
        })
        .catch(() => toast.error("Failed to submit data!"));
    }
    setIsEditMode(false);
    setFormData({
      titletop: "",
      subtitletop: "",
      title: "",
      blogtitle: "",
      blogname: "",
      status: "",
      blogdate: "",
      editorContent: "",
    });
  };

  return (
    <div>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting, errors }) => (
          <Form>
            <div className="py-10 px-6 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
              <h1 className="text-2xl font-semibold">
                {isEditMode ? "Edit Blog and Updates" : "Add Blog and Updates"}
              </h1>
              <div className="p-6 bg-white rounded-md flex flex-col gap-8 shadow-md">
                <h2 className="text-xl font-semibold">Top Section</h2>
                {fieldsTop.map((field, i) => (
                  <div key={i} className="flex flex-col">
                    <InputField
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-700"
                    />
                  </div>
                ))}

                <h2 className="text-xl font-semibold">Remaining Section</h2>
                {fieldsRemaining.map((field, i) => (
                  <div key={i} className="flex flex-col">
                    <InputField
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-700"
                    />
                  </div>
                ))}
                <FileUpload
                  name="file"
                  onChange={(event) =>
                    setFieldValue("file", event.currentTarget.files[0])
                  }
                />
                <ErrorMessage
                  name="file"
                  component="div"
                  className="text-red-500"
                />

                <Editor
                  name="editorContent"
                  onChange={(content) =>
                    setFieldValue("editorContent", content)
                  }
                />
                {errors.editorContent && (
                  <div className="text-red-500">{errors.editorContent}</div>
                )}

                <div className="text-right">
                  <button
                    type="submit"
                    className="px-4 cursor-pointer py-2 bg-primary text-white rounded-md"
                    disabled={isSubmitting}
                  >
                    {isEditMode ? "Update" : "Submit"}
                  </button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <div className="bg-white flex flex-col gap-5 rounded py-6 shadow-md">
        <div className="md:w-11/12 mx-auto">
          <table className="w-full bg-white rounded shadow">
            <thead>
              <tr className="bg-gray-200 font-semibold">
                {/* <th className="p-4 text-left">Title Top</th>
                <th className="p-4 text-left">Subtitle Top</th> */}
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Blog Title</th>
                <th className="p-4 text-left">Blog Name</th>
                <th className="p-4 text-left">Description</th>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Blog Date</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((val, index) => (
                <tr key={index} className="border-b">
                  {/* <td className="p-4">{val.titletop}</td>
                  <td className="p-4">{val.subtitletop}</td> */}
                  <td className="p-4">{val.title}</td>
                  <td className="p-4">{val.blogtitle}</td>
                  <td className="p-4">{val.blogname}</td>
                  <td className="p-4">{val.description}</td>
                  <td className="p-4">
                    <img
                      src={val.blogimageid}
                      alt="Blog"
                      className="w-16 h-16 rounded-md"
                    />
                  </td>
                  <td className="p-4">{val.status}</td>
                  <td className="p-4">{val.blogdate}</td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleEdit(index)}
                      className="px-4 py-1 bg-yellow-400 text-white rounded-md flex items-center gap-2"
                    >
                      <IoPencil /> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blogandupdatestop;
