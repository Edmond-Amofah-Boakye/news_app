"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IoKeyOutline } from "react-icons/io5";
import { CiMail, CiUser } from "react-icons/ci";
import { CgArrowRight } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Signup = () => {
  const [ loading, setLoading ] = useState<boolean>(false)
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "name too Short!")
      .max(50, "name too Long!")
      .required("user name is required"),
    password: Yup.string()
      .min(7, "password too Short!")
      .max(50, "password too Long!")
      .required("password is required"),
    email: Yup.string().email("please provide a valid email").required("email is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      setLoading(true)
      try {
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(() =>{
              setLoading(false)
            })
          }, 1000);
        })
        
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    },
  });

  return (
    <div className="bg-white w-[30%] p-6 mt-[60px] mb-0 mx-auto rounded-sm">
      <form onSubmit={formik.handleSubmit}>
        <div className="text-center mb-5">
          <div className="flex justify-center items-center mb-3 bg-blue-600 w-10 p-1 h-10 rounded-[20px] m-auto">
            <HiUser className="text-white h-20 w-20" />
          </div>
          <p>Create account!</p>
        </div>
        <div className="soc">
          <div className="text">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                className={`w-full p-2 mt-2 border ${
                  formik.errors.name && formik.touched.name ? 'border-red-500' : 'border-gray-300'
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              <CiUser className="absolute top-5 right-1 w-8 h-4" />
              {formik.errors.name && formik.touched.name ? (
                <div className="text-red-600">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className={`w-full p-2 mt-6 border ${
                  formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-gray-300'
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <CiMail className="absolute top-9 right-1 w-8 h-4" />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className={`w-full p-2 mt-6 border ${
                  formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-gray-300'
                }`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <IoKeyOutline className="absolute top-9 right-1 w-8 h-4" />
              {formik.errors.password && formik.touched.password ? (
                <div className="text-red-600">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex justify-end py-2 px-4 gap-10 text-[14px] mt-5 items-center">
          <Link href="/auth/login" className="text-blue-600">
            Already have an account?
          </Link>
        </div>
        <div className="login">
          <div className="mt-6">
            <button
              type="submit"
              className="text-white bg-blue-700 flex gap-4 items-center px-4 py-2 rounded-sm"
              disabled={!formik.isValid || formik.isSubmitting || loading}
            >
              {loading ? "submitting": (
                <>
                Create
                <CgArrowRight />
                </>
              )}
              
            </button>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-[14px] texmedia social
          </p>
          <div className="flex justify-center items-center gap-2">
            <FcGoogle className="w-10 h-5 cursor-pointer" onClick={()=> signIn("google")}/>
            <BsGithub className="text-black w-10 h-5 cursor-pointer" onClick={()=> signIn("github")}/>
            <FaTwitter className="text-blue-400 w-10 h-5 cursor-pointer" onClick={()=> signIn("twitter")}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
