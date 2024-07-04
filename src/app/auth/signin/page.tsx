"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoKeyOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CgArrowRight } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { HiUser } from "react-icons/hi2";
import { signIn } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/navigation";

const login = () => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("please provide a valid email")
      .required("email is required"),
    password: Yup.string().required("password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      const { email, password } = values
      setLoading(true);
      try {
        const response = await signIn("credentials", {email, password, redirect: false})
        console.log(response);
        if(!response?.error){
          router.back()
        }
         if(!response?.ok){
          throw new Error("Something unusual happened")
         }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleSocialLogin = async(provider: string, redirectUrl: string) => {
    await signIn(provider, {callbackUrl: redirectUrl})
  }

  return (
    <div className="bg-white w-[30%] p-6 mt-[60px] mb-0 mx-auto rounded-sm">
      <div className="text-center mb-5">
        <div className="flex justify-center items-center mb-3 bg-blue-600 w-10  p-1 h-10 rounded-[20px] m-auto">
          <HiUser className="text-white h-20 w-20" />
        </div>

        <h1 className="font-bold text-[20px] mb-2">Welcome!</h1>
        <p>Sign into your account</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="soc">
          <div className="text">
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="email"
                className={`w-full p-2 mt-2 border border-gray-300 ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <CiMail className="absolute top-5 right-1  w-8 h-4" />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="password"
                className={`w-full p-2 mt-6 border border-gray-300 ${
                  formik.errors.password && formik.touched.password
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <IoKeyOutline className="absolute top-9 right-1  w-8 h-4" />
              {formik.errors.password && formik.touched.password ? (
                <div className="text-red-600">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex justify-between py-2 px-4 gap-10 text-[14px] mt-5 items-center">
          <div className="flex items-center gap-1">
            <input type="checkbox" name="remember" id="" />
            <label htmlFor="remember">remember me</label>
          </div>
          <Link href="/auth/forgot-password" className="text-blue-600">
            forgot password?
          </Link>
        </div>
        <div className="login">
          <div className="mt-6">
            <button
              className="text-white bg-blue-700 flex gap-4 items-center px-4 py-2 rounded-sm"
              disabled={!formik.isValid || formik.isSubmitting || loading}
              type="submit"
            >
              {loading ? (
                "submitting"
              ) : (
                <>
                  Login
                  <CgArrowRight />
                </>
              )}
            </button>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-[14px] text-center mb-4">
            Or Login using social media
          </p>
          <div className="flex justify-center items-center gap-2">
            <FcGoogle className="w-10 h-5 cursor-pointer" onClick={()=> handleSocialLogin("google", "/")}/>
            <BsGithub className="text-black w-10 h-5 cursor-pointer" onClick={()=> handleSocialLogin("github", "/")} />
            <FaTwitter className="text-blue-400 w-10 h-5 cursor-pointer" onClick={()=> handleSocialLogin("twitter", "/")} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default login;
