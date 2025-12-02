import Inputs from "../components/Reservation/Inputs";
import { formFields } from "../data/formFields ";

export default function Reservation() {
  return (
    <section id="masa" className="py-20 bg-black/10">
      {/* TEXT INPUTS */}
      <div className="flex flex-col md:flex-row gap-4">
        {formFields.map((f, i) => (
          <Inputs key={i} {...f} />
        ))}
      </div>
    </section>
  );
}
