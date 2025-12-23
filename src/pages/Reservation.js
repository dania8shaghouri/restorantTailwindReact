import Inputs from "../components/Reservation/Inputs";
import { formFields } from "../data/formFields ";
import { selects } from "../data/formFields ";
import { datetimeInput } from "../data/formFields ";
import Button from "../components/Home/ui/Button";

export default function Reservation(isActive) {
  return (
    <section
      id="masa"
      className="p-20
     bg-[var(--eerie-black-1)] "
    >
      <div
        className="mt-[-27px]
        bg-[var(--smoky-black-2)]
        pt-[40px] px-[20px] pb-[30px]"
      >
        <h1
          className="text-center 
        text-[var(--white)]
        text-[length:var(--fontSize-headline-1)]
        leading-[var(--lineHeight-2)]
        "
        >
          Online Reservation
        </h1>
        <p className="text-center text-sm text-[var(--white)] mb-6 mt-3">
          Booking request{" "}
          <a href="tel:+5301118800" className="text-[var(--gold-crayola)] ">
            +530 111 88 00
          </a>{" "}
          or fill out the order form
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          {formFields.map((f, i) => (
            <Inputs key={i} {...f} />
          ))}

          {selects.map((select, i) => (
            <div key={i} className="relative ml-2 my-4">
              <select.icon className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-[var(--white)]" />
              <select className="w-full bg-[var(--eerie-black-2)] text-[var(--white)] border border-[var(--white-alpha-10)] px-12 py-5 focus:border-[var(--gold-crayola)]">
                {select.options.map((opt, idx) => (
                  <option key={idx}>{opt}</option>
                ))}
              </select>
            </div>
          ))}

          <Inputs
            icon={datetimeInput.icon}
            type="datetime-local"
            placeholder="Select Date & Time"
          />
        </div>
        <textarea
          placeholder="Message"
          rows={4}
          className="
    bg-[var(--eerie-black-2)]
    text-[var(--white)]
    border border-[var(--white-alpha-10)]
    px-5 py-5 w-full
    mx-2 my-4
    outline-none
    resize-none
    focus:border-[var(--gold-crayola)]
  "
        ></textarea>
        <Button
          href="#"
          text="Book a table"
          className="w-full transition-colors
    duration-1000
    ease-out hover:bg-[var(--gold-crayola)]
"
        />
      </div>
    </section>
  );
}
