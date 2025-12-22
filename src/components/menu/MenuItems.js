import ButtonMenu from "../Home/ui/ButtonMenu";
import { menuData } from "../../data/menuData";

export default function MenuItems() {
  return (
    <section
      className=" relative px-4 me-[50px]
    py-[var(--section-space)] 
    grid gap-10 grid-cols-1  
    md:grid-cols-2 lg:grid-cols-2
             md:after:content-[''] md:after:absolute 
             after:top-0 after:left-1/2 
             after:h-full after:border-l
          after:border-[var(--white-alpha-20)] lg:after:ml-12
          
    "
    >
      {menuData.map((item, index) => (
        <div
          key={index}
          className="group flex flex-start items-start me-8 gap-4 
          lg:flex-row
             xl:mb-6 mx-auto xl:max-w-[1200px] w-full
             xl:gap-y-14 xl:mx-[140px]
           "
        >
          {/* Resim */}

          <figure
            className="
            aspect-[var(--width)/var(--height)]  
            overflow-hidden                        
            bg-[var(--eerie-black-4)]                                  
            rounded-[var(--radius-24)]  
            group-hover:bg-[var(--gold-crayola)]
            
                        
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
      
         transition-all duration-300
        group-hover:scale-110
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
