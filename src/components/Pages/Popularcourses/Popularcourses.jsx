import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS
import InputField from "../../Common/InputField/InputField";
import FileUpload from "../../Common/FileUpload/FileUpload";
import Editor from "../../Common/Editor/Editor";

import { ToastContainer, toast } from 'react-toastify';
// Validation schema with file and editor content validation
const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    subtitle: Yup.string().required("Subtitle is required"),
    file: Yup.mixed().required("File is required"), // File validation
    editorContent: Yup.string().required("Description is required"), // Editor content validation
});
const notify = () => toast("Banner data submitted!");



const Popularcourses = () => {
    return (
        <div>

            {/* Toast Container for displaying notifications */}


            <Formik
                initialValues={{
                    title: "",
                    subtitle: "",
                    file: null,
                    editorContent: "",
                }}
                validationSchema={validationSchema}

            >
                {({ setFieldValue, handleSubmit, isSubmitting, errors }) => (
                    <Form>
                        <div className="py-10 px-6 flex flex-col gap-6 bg-[#F9FAFB] rounded-2xl">
                            <h1 className="text-2xl font-semibold">Popularcourses</h1>
                            <div className="p-6 bg-white rounded-md flex flex-col gap-8 shadow-md">
                                <InputField name="title" type="text" placeholder="title" />
                                {errors.title && <div className="text-red-500">{errors.title}</div>}


                                <Editor
                                    name="editorContent"
                                    onChange={(content) => setFieldValue("editorContent", content)} />
                                {errors.editorContent && (
                                    <div className="text-red-500">{errors.editorContent}</div>
                                )}

                                <FileUpload
                                    name="file"
                                    onChange={(event) => {
                                        setFieldValue("file", event.target.files[0]);
                                    }} />
                                {errors.file && <div className="text-red-500">{errors.file}</div>} {/* Show error */}



                                <div className="text-right">
                                    <button
                                        type="submit"
                                        className="px-4 cursor-pointer py-2 bg-blue-500 text-white rounded-md"
                                        disabled={isSubmitting} onClick={notify} // Disable the button while submitting
                                    >
                                        Submit
                                    </button>         <ToastContainer />
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default Popularcourses
