import AuthHeader from "../components/form/AuthHeader";
import FormButton from "../components/form/FormButton";
import FormInput from "../components/form/FormInput";

export default function Register() {
  return (
    <section
      className="min-h-screen bg-[var(--smoky-black-3)]
    flex items-center justify-center"
    >
      <div
        className="w-[90%] max-w-[475px] 
      border border-[#d5d5d5] rounded-2xl
      px-8 py-12 bg-[var(--eerie-black-1)]
      "
      >
        <AuthHeader />
        <p
          className="
        text-[var(--gold-crayola)]
        text-center p-5 
        font-cursive uppercase font-bold tracking-[2px]"
        >
          Welcome
        </p>
        <p
          className="text-[var(--gold-crayola)]
         text-center font-cursive"
        >
          Please sign in to benefit from our reservation
        </p>
        <form className="mt-4">
          <div
            className="flex gap-4 
        "
          >
            <FormInput placeholder="First Name" />
            <FormInput placeholder="Last Name" />
          </div>
          <FormInput type="email" placeholder="Email" />
          <FormInput type="tel" placeholder="Phone" />
          <FormInput type="password" placeholder="Password" />
          <FormInput type="password" placeholder="Confirm Password" />
          <FormButton text="Register" />
        </form>
      </div>
    </section>
  );
}
