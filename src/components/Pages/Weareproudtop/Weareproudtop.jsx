import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS
import FileUpload from "../../Common/FileUpload/FileUpload";
import Editor from "../../Common/Editor/Editor";
import axios from 'axios';
import InputField from '../../Common/InputField/InputField';
import { IoPencil } from 'react-icons/io5';


const fields = [
  { name: "title", type: "text", placeholder: "Title" },

];


const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required!"),

  file: Yup.mixed().required("File is required!")
});

const notify = () => toast(" Data submitted!");

const Weareproudtop = () => {
  const [isEditMode, setIsEditMode] = useState(false); // Track whether we're editing
  const [editIndex, setEditIndex] = useState(null); // Track the index of the item we're editing
  const [formData, setFormData] = useState({
    title: '',
 
    editorContent: ''
  });

  const Data = [
    {
      title: "Your Global Education Partner for Visa Success",
      description: "Guiding you through every step of the process—student visas, test preparation, and beyond",
    },
  ];

  const handleEdit = (index) => {
    // Set the form data with the item data when Edit button is clicked
    setFormData({
      title: Data[index].title,
  
      editorContent: '' 
    });
    setEditIndex(index); 
    setIsEditMode(true); 
  };

  const handleSubmit = (values) => {
    if (isEditMode) {
    
      axios
        .patch(`http://localhost:3000/banner/${editIndex}`, values) // Modify with the correct URL for update
        .then((result) => {
          console.log(result);
          toast.success(" data updated!");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to update  data!");
        });
    } else {
      // Add new banner
      axios
        .post("http://localhost:3000/banner", values)
        .then((result) => {
          console.log(result);
          toast.success(" data submitted!");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Failed to submit  data!");
        });
    }
    setIsEditMode(false); // Exit edit mode after submitting
    setFormData({
      title: '',
    
      editorContent: ''
    }); // Reset form data
  };

  return (
    <div>
      <Formik
        initialValues={formData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, handleSubmit, isSubmitting, errors }) => (
          <Form>
            <div className="py-10 px-6 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
              <h1 className="text-2xl font-semibold">{isEditMode ? 'Edit Weareproudtop' : 'Add Weareproudtop'}</h1>
              <div className="p-6 bg-white rounded-md flex flex-col gap-8 shadow-md">
                {fields.map((field, i) => (
                  <div key={i} className="flex flex-col">
                    <InputField
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                    />
                    <ErrorMessage
                      name={field.name}
                      component="div"
                      className="text-red-700 "
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

          

                <div className="text-right">
                  <button
                    type="submit"
                    className="px-4 cursor-pointer py-2 bg-primary text-white rounded-md"
                    disabled={isSubmitting}
                  >
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
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Description</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((val, index) => (
                <tr key={index} className="border-b">
               
                  <td className="p-4">{val.title}</td>
                  <td className="p-4">{val.description}</td>
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

export default Weareproudtop;
