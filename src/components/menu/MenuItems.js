// import ButtonMenu from "../Home/ui/ButtonMenu";
// export default function MenuItems({ item }) {
//   return (
//     <section className="grid gap-10 grid-cols-1 lg:grid-cols-2 ">
//       <div className=" flex items-start gap-5">
//         <img
//           className="rounded-[var(--radius-24)]
//           "
//           src={item.img}
//           alt={item.title}
//         />

//         <div className="px-4">
//           <h3
//             className="text-[var(--white)]
//           font-[var(--weight-regular)]
//           leading-[var(--lineHeight-2)]"
//           >
//             {item.title}
//           </h3>

//           <h3
//             className="text-[var(--gold-crayola)]
//           float-right my-2.5"
//           >
//             {item.price}
//           </h3>

//           <p
//             className="text-[var(--quick-silver)]
//           leading-[var(--lineHeight-4)]"
//           >
//             {item.description}
//           </p>
//         </div>
//       </div>
//       <ButtonMenu href="#" text="order" />
//     </section>
//   );
// }

import ButtonMenu from "../Home/ui/ButtonMenu";
import { menuData } from "../../data/menuData";

export default function MenuItems() {
  return (
    <section
      className=" relative px-4 me-[50px]
    py-[var(--section-space)] 
    grid gap-10 grid-cols-1  
    md:grid-cols-2 lg:grid-cols-2"
    >
      {menuData.map((item, index) => (
        <div
          key={index}
          className="me-[50px] flex flex-start items-start gap-5 lg:flex-row"
        >
          {/* Resim */}
          <figure
            className="
            aspect-[var(--width)/var(--height)]  
            overflow-hidden                        
            bg-[var(--eerie-black-4)]               
            md:w-1/2 lg:w-1/2                       
            rounded-[var(--radius-24)]              
  "
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="
      w-full h-full          
      object-cover           
      shrink-0               
    "
            />
          </figure>

          {/* İçerik */}
          <div className=" lg:w-1/2 ">
            <div className="flex items-center mb-2">
              {/* Title */}
              <h3
                className="text-[var(--white)]
      font-[var(--weight-regular)]
      leading-[var(--lineHeight-2)]"
              >
                {item.title}
              </h3>

              {/* Çizgiler ve price */}
              <div className="flex items-center flex-1 ml-4 gap-3">
                {/* Çizgiler flex-grow ile boşluğu dolduracak */}
                <div className="flex flex-col justify-between flex-1 gap-[3px]">
                  <span className="block h-[3px] w-full border-t border-[var(--white-alpha-20)]"></span>
                  <span className="block h-[3px] w-full border-t border-[var(--white-alpha-20)]"></span>
                </div>

                {/* Price */}
                <span className="ml-3 flex-shrink-0 text-[var(--gold-crayola)]">
                  {item.price}
                </span>
              </div>
            </div>

            <p
              className=" 
            text-[var(--quick-silver)] 
            leading-[var(--lineHeight-4)] mb-4"
            >
              {item.description}
            </p>
            <ButtonMenu href="#" text="Order" />
          </div>
        </div>
      ))}
    </section>
  );
}
