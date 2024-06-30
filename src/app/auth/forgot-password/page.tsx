"use client"

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CiMail } from "react-icons/ci";
import { CgArrowRight } from "react-icons/cg";
import Link from "next/link";

const forgotpassword = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const ResetSchema = Yup.object().shape({
    email: Yup.string().email("please provide valid email").required("email is required"),
  })

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ResetSchema,
    onSubmit: async(values) => {
      setLoading(true)
      try {
        console.log(values);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    }
  })







  return (
    <div className="w-[35%] p-6 mt-[60px] mb-0 mx-auto rounded-sm">
      <div className="mb-5">
        <h1 className="text-[#282925] font-medium text-[30px] text-center mb-2">Reset Your Pasword</h1>
        <p className="text-sm">
          Fear not, we will email you instructions to reset your password. If{" "}
          <br /> you don't have access to you email anymore you cam try <br />
          <Link href="/" className="text-[#007C88] underline">
            Account Recover
          </Link>
        </p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="soc">
          <div className="text">
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="email"
                className={`w-full p-2 mt-2 border border-gray-300 ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <CiMail className="absolute top-5 right-1  w-8 h-4" />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="login">
          <div className="flex items-center gap-6 mt-10">
            <button className="text-white bg-[#007C88] flex gap-4 items-center px-4 py-2 rounded-sm"
            disabled={!formik.isValid || formik.isSubmitting || loading}
            >
              {loading ? "submitting" : (<>Reset Password <CgArrowRight /></>)}
              
            </button>
            <Link href="/auth/login" className="text-[#007C88] underline">Return to Login</Link>
          </div>
        </div>
      </form>
      <div className="mt-5">
        <p className="text-[14px] mt-[90px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate, recusandae nobis ut corrupti neque.
        </p>
      </div>
    </div>
  );
};

export default forgotpassword;
