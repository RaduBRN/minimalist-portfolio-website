"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Should be an email.")
    .required("This field is required"),
  message: Yup.string().required("This field is required"),
});

function FormComponent() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={() => {
        console.log("Submitted");
      }}
    >
      {({ handleSubmit }) => {
        return (
          <Form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[13px] font-bold">
                Name
              </label>
              <Field
                id="name"
                name="name"
                placeholder="Jane Appleseed"
                className="bg-[#979797]/10 text-grayBlue placeholder:text-grayBlue/40 placeholder:text-[13px] px-4 py-2 focus:outline-mint"
              ></Field>
              <ErrorMessage
                name="name"
                component="div"
                className="text-[10px] text-brightRed font-bold italic -mt-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[13px] font-bold">
                Email:
              </label>
              <Field
                id="email"
                name="email"
                placeholder="email@example.com"
                className="bg-[#979797]/10 text-grayBlue placeholder:text-grayBlue/40 placeholder:text-[13px] px-4 py-2 focus:outline-mint"
              ></Field>
              <ErrorMessage
                name="email"
                component="div"
                className="text-[10px] text-brightRed font-bold italic -mt-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[13px] font-bold">
                Message:
              </label>
              <Field
                component="textarea"
                id="message"
                name="message"
                placeholder="How can I help?"
                className="bg-[#979797]/10 text-grayBlue placeholder:text-grayBlue/40 placeholder:text-[13px] px-4 py-2 focus:outline-mint"
              ></Field>
              <ErrorMessage
                name="message"
                component="div"
                className="text-[10px] text-brightRed font-bold italic -mt-2"
              />
            </div>
            <div>
              <button
                type="submit"
                className="py-4 px-8 bg-darkBlue hover:text-mint text-[#fff] uppercase text-xs tracking-[2px] disabled:opacity-50"
              >
                Send Message
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormComponent;
