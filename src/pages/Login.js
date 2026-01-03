import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

import AuthHeader from "../components/form/AuthHeader";
import FormButton from "../components/form/FormButton";

export default function Login() {
  return (
    <section
      className="flex items-center justify-center
    bg-[var(--smoky-black-3)] min-h-screen text-white"
    >
      <div
        className="bg-[var(--eerie-black-1)] w-[90%] max-w-[475px] 
      border border-[#d5d5d5] rounded-2xl px-8 py-12"
      >
        <AuthHeader type="login" />
        <div className="flex flex-col items-center mt-6 gap-7 ">
          <p className="font-cursive font-bold text-md uppercase tracking-[2px]">
            welcome ugly
          </p>
          <img className="" src={logo} alt="logo" rel="preload" />
          <p>Please log in to benefit from our reservation</p>
        </div>
        <form className="mt-4">
          <div className="flex flex-col gap-8 mb-5 leading-5 ">
            <input
              className="bg-[var(--eerie-black-2)] caret-[var(--gold-crayola)]
                rounded-md  px-4 py-5 
                border-b-2 border-b-[var(--quick-silver)]
                border-r border-r-[var(--quick-silver)]
              outline-none focus:border-[var(--gold-crayola)]
"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-[var(--eerie-black-2)] caret-[var(--gold-crayola)]
                rounded-md  px-4 py-5 
                border-b-2 border-b-[var(--quick-silver)]
                border-r border-r-[var(--quick-silver)]
              outline-none focus:border-[var(--gold-crayola)]
"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between capitalize font-cursive">
            <label className="flex gap-1">
              <input
                id="remember"
                type="checkbox"
                className=" 
        accent-[var(--gold-crayola)]
        cursor-pointer 
      "
              />
              remember me
            </label>

            <Link
              to="/forget-password"
              className="
            text-[var(--gold-crayola)]"
            >
              Forgot password
            </Link>
          </div>
          <FormButton text="Login" />
        </form>
      </div>
    </section>
  );
}
