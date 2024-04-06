"use client";
import React, { FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm, ValidationError } from "@formspree/react";

interface FormState {
  succeeded: boolean;
  errors: string[] | null;
}

function Form() {
  const [state, handleSubmit] = useForm("xpzvjaee");

  const handleSuccess = () => {
    toast.success("Thank you for reaching out! We will get back to you soon.");
  };

  const handleError = (errorMessage: string) => {
    toast.error(errorMessage);
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const emailField = e.target.elements.email;
    const emailValue = emailField.value.trim();

    if (!emailValue) {
      handleError("Please enter your details");
      return;
    }

    try {
      await handleSubmit(e);

      if (state.succeeded) {
        handleSuccess();
      } else if (state.errors) {
        handleError("Please fill in all the required fields.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      handleError(
        "An error occurred while submitting the form. Please try again."
      );
    }
  };

  return (
    <article>
      <ToastContainer />
      <form
        onSubmit={onSubmit}
        className="flex flex-col max-w-md mx-auto lg:w-[620px] w-[350px]  p-4 rounded-2xl"
      >
        <label htmlFor="email" className="text-[#e2e2e2] mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="p-2 mb-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-[#1f1f21] bg-[#09090b]"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message" className="text-[#e2e2e2] mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="border border-[#1f1f21] bg-[#09090b] p-2 mb-4 h-32 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="relative px-6 py-2 bg-[#eef5fd] hover:bg-gray-200 rounded-md flex items-center justify-center divide-x divide-gray-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            <span className="flex items-center justify-center">
              <span className="text-black group-hover:text-black transition duration-200">
                {state.submitting ? "Submitting" : "Submit"}
              </span>
            </span>
          </button>
        </div>
      </form>
    </article>
  );
}

export default Form;
