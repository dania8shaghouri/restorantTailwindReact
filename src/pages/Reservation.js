import Inputs from "../components/Reservation/Inputs";
import { formFields } from "../data/formFields ";
import { selects } from "../data/formFields ";
import { datetimeInput } from "../data/formFields ";
import Button from "../components/Home/ui/Button";

export default function Reservation(isActive) {
  return (
    //     <section
    //       className="p-20
    //      bg-[var(--eerie-black-1)]
    //      grid grid-cols-1
    //       md:grid-cols-[1fr_0.5fr]

    //      "
    //     >
    //       <section
    //         id="masa"
    //         className="

    //       bg-[var(--smoky-black-2)]
    //      grid grid-cols-1 md:grid-cols-2 gap-[45px]
    //      "
    //       >
    //         <div
    //           className="mt-[-27px]
    //         pt-[40px] px-[20px] pb-[30px]
    //         "
    //         >
    //           <h1
    //             className="text-center
    //         text-[var(--white)]
    //         text-[length:var(--fontSize-headline-1)]
    //         leading-[var(--lineHeight-2)]
    //         "
    //           >
    //             Online Reservation
    //           </h1>
    //           <p className="text-center text-sm text-[var(--white)] mb-6 mt-3">
    //             Booking request{" "}
    //             <a href="tel:+5301118800" className="text-[var(--gold-crayola)] ">
    //               +530 111 88 00
    //             </a>{" "}
    //             or fill out the order form
    //           </p>

    //           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
    //             {formFields.map((f, i) => (
    //               <Inputs key={i} {...f} />
    //             ))}

    //             {selects.map((select, i) => (
    //               <div key={i} className="relative ml-2 my-4">
    //                 <select.icon className="absolute left-3 top-1/2 -translate-y-1/2 text-xl text-[var(--white)]" />
    //                 <select className="w-full bg-[var(--eerie-black-2)] text-[var(--white)] border border-[var(--white-alpha-10)] px-12 py-5 focus:border-[var(--gold-crayola)]">
    //                   {select.options.map((opt, idx) => (
    //                     <option key={idx}>{opt}</option>
    //                   ))}
    //                 </select>
    //               </div>
    //             ))}

    //             <Inputs
    //               icon={datetimeInput.icon}
    //               type="datetime-local"
    //               placeholder="Select Date & Time"
    //             />
    //           </div>
    //           <textarea
    //             placeholder="Message"
    //             rows={4}
    //             className="
    //     bg-[var(--eerie-black-2)]
    //     text-[var(--white)]
    //     border border-[var(--white-alpha-10)]
    //     px-5 py-5 w-full
    //     mx-2 my-4
    //     outline-none
    //     resize-none
    //     focus:border-[var(--gold-crayola)]
    //   "
    //           ></textarea>
    //           <Button
    //             href="#"
    //             text="Book a table"
    //             className="w-full transition-colors
    //     duration-1000
    //     ease-out hover:bg-[var(--gold-crayola)]
    // "
    //           />
    //         </div>

    //         <div
    //           className=" pt-[40px] px-[20px] pb-[30px]
    //         text-center
    //         text-white
    //         "
    //         >
    //           <h1 className="text-white text-2xl ">Contact Us</h1>
    //           <p>Booking Request</p>

    //           <a href="tel:+5301118800">+ 530 111 88 00</a>

    //           <div class="separator"></div>

    //           <p>Location</p>

    //           <address>Restaurant Sk, Deniz City, Bursa 9578, Turkey</address>

    //           <p>Lunch Time</p>

    //           <p>Monday to Sunday 11.00 am - 2.30pm</p>

    //           <p>Dinner Time</p>

    //           <p>Monday to Sunday 05.00 pm - 10.00pm</p>
    //         </div>
    //       </section>
    //     </section>

    <section
      className="
    p-20
    bg-[var(--eerie-black-1)]
    flex justify-center items-center
    min-h-screen
    w-full
  "
    >
      <section
        className=" py-[75px] px-[60px]
      bg-[var(--smoky-black-2)]
      grid grid-cols-1 lg:grid-cols-2 gap-[45px]
      max-w-7xl w-full
      shadow-lg
      
    "
      >
        <div
          className="
         
        min-w-max 
      "
        >
          <h1
            className="text-center 
          text-[var(--white)]
          text-[length:var(--fontSize-headline-2)]
          leading-[var(--lineHeight-2)]
          font-forum
          font-regular
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
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

        <div
          className="  pl-24
        text-center
        text-white
      "
        >
          <h1
            className="
    text-center
    text-[var(--white)]
    text-[length:var(--fontSize-headline-1)]
    leading-[var(--lineHeight-2)]
    font-forum
    mb-5
    
  "
          >
            Contact Us
          </h1>

          <p className="mb-2">Booking Request</p>

          <a
            href="tel:+5301118800"
            className="text-[var(--gold-crayola)] text-xl"
          >
            + 530 111 88 00
          </a>

          <div class="separator"></div>

          <p className="mb-5">Location</p>

          <address
            className="
    mb-6
    text-[var(--quick-silver)]
    leading-[var(--lineHeight-3)]
    not-italic
  "
          >
            <span className="block">Restaurant Sk, Deniz City,</span>
            <span className="block">Bursa 9578, Turkey</span>
          </address>

          <p>Lunch Time</p>

          <p
            className="
    mb-6
    text-[var(--quick-silver)]
    leading-[var(--lineHeight-3)]
    not-italic
  "
          >
            <span className="block">Monday to Sunday</span>
            <span className="block">11.00 am - 2.30pm</span>
          </p>

          <p className="mb-5">Dinner Time</p>

          <p
            className="    mb-6
    text-[var(--quick-silver)]
    leading-[var(--lineHeight-3)]
    not-italic"
          >
            <span className="block">Monday to Sunday</span>
            <span className="block">05.00 pm - 10.00pm</span>
          </p>
        </div>
      </section>
    </section>
  );
}
