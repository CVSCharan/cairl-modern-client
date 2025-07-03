import React from "react";

const partnerLogos = [
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750886760/colaberry-logo_dqizvh.webp",
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/scroll_img_4_nfar9d.png",
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751271284/BITS_Pilani-Logo.svg_gariqk.png",
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751271281/JNTU_kkjrhb.png",
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176557/scroll_img_3_ttadxy.png",
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751280975/CCMB-new-logo.png_vn5p18.png",
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751278587/CTVA-new_logo_f03sqr.png",
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176559/scroll_img_2_rc4chz.png",
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1750176558/scroll_img_1_opp3ip.png",
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751278350/innominds-logo-rpa-leaders-2019-aspioneer_gjvkdw.webp",
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751278351/refactored_logo_new_x6rc3w.webp",
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751280975/RICH-new-logo_gwivhc.png",
  "https://res.cloudinary.com/dnyouhvwj/image/upload/v1751280090/NGIT-new-logo-1_d52igc.png",
];

const Partners: React.FC = () => {
  return (
    <section className="bg-background py-4 md:py-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h3 className="text-center font-heading text-lg md:text-xl mb-8 text-muted-foreground">
          Trusted by Leading Organizations
        </h3>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <li key={index}>
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="h-16 md:h-18 object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partners;
