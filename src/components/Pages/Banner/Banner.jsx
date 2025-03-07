import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import FileUpload from "../../Common/FileUpload/FileUpload";
import Editor from "../../Common/Editor/Editor";
import axios from 'axios';
import InputField from '../../Common/InputField/InputField';
import { IoPencil } from 'react-icons/io5';

const fields = [
  { name: "title", type: "text", placeholder: "Title" },
  { name: "subtitle", type: "text", placeholder: "Subtitle" },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required!"),
  subtitle: Yup.string().required("Subtitle is required!"),
  editorContent: Yup.string().required("Description is required!"),
  file: Yup.mixed().required("File is required!"),
});

const Banner = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    file: null,
    editorContent: ''
  });

  const Data = [
    {
      title: "Your Global Education Partner for Visa Success",
      subtitle: "Guiding you through every step of the process—student visas, test preparation, and beyond",
      image: "/Images/paypal.png",
    },
  ];

  const handleEdit = (index) => {
    setFormData({
      title: Data[index].title,
      subtitle: Data[index].subtitle,
      file: null,
      editorContent: '' 
    });
    setEditIndex(index);
    setIsEditMode(true);
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const request = isEditMode
      ? axios.patch(`http://localhost:3000/banner/${editIndex}`, values)
      : axios.post("http://localhost:3000/banner", values);
    
    request
      .then(() => {
        toast.success(isEditMode ? "Banner updated!" : "Banner submitted!");
        setIsEditMode(false);
        setEditIndex(null);
        resetForm();
      })
      .catch(() => {
        toast.error(isEditMode ? "Failed to update banner!" : "Failed to submit banner!");
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <div className="py-10 px-6 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
              <h1 className="text-2xl font-semibold">{isEditMode ? 'Edit Banner' : 'Add Banner'}</h1>
              <div className="p-6 bg-white rounded-md flex flex-col gap-8 shadow-md">
                {fields.map((field, i) => (
                  <div key={i} className="flex flex-col">
                    <InputField name={field.name} type={field.type} placeholder={field.placeholder} />
                    <ErrorMessage name={field.name} component="div" className="text-red-700" />
                  </div>
                ))}
                
                <Editor name="editorContent" onChange={(content) => setFieldValue("editorContent", content)} />
                <ErrorMessage name="editorContent" component="div" className="text-red-500" />

                <FileUpload
                  name="file"
                  onChange={(event) => setFieldValue("file", event.currentTarget.files[0])}
                />
                <ErrorMessage name="file" component="div" className="text-red-500" />

                <div className="text-right">
                  <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md" disabled={isSubmitting}>
                    {isEditMode ? 'Update' : 'Submit'}
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
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Subtitle</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((val, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">
                    <img src={val.image} alt={val.title} className="h-20 w-20 rounded object-cover" />
                  </td>
                  <td className="p-4">{val.title}</td>
                  <td className="p-4">{val.subtitle}</td>
                  <td className="p-4 text-center">
                    <button onClick={() => handleEdit(index)} className="px-4 py-1 bg-yellow-400 text-white rounded-md flex items-center gap-2">
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

export default Banner;