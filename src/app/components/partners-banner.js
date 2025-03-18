// import Image from "next/image"

// export default function PartnersBanner() {
//   const partners = [
//     { name: "Google", logo: "/google-logo.png" },
//     { name: "Etisalat", logo: "/etisalat-logo.png" },
//     { name: "Business Insider", logo: "/business-insider-logo.png" },
//     { name: "Toshiba", logo: "/toshiba-logo.png" },
//     { name: "Netflix", logo: "/netflix-logo.png" },
//     { name: "Oracle", logo: "/oracle-logo.png" },
//   ]

//   return (
//     <div className="bg-teal-500  py-6 px-4 overflow-hidden scale-x-102 md:rotate-5">
//     <marquee>
//       <div className="max-w-full mx-auto">
//         <div className="flex items-center justify-around flex-nowrap gap-10 lg:gap-12">
//           {partners.map((partner) => (
//             <div key={partner.name} className="relative h-3 w-fit lg:h-10 lg:w-32">
//               <Image
//                 src={partner.logo || "/placeholder.svg"}
//                 alt={`${partner.name} logo`}
//                 fill
//                 className="object-contain font-bold text-black text-xl lg:text-3xl filter brightness-0 invert"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       </marquee>
//     </div>
//   )
// }

'use client'

import Image from "next/image";

export default function PartnersBanner() {
  const partners = [
    { name: "Google", logo: "/google-logo.png" },
    { name: "Etisalat", logo: "/etisalat-logo.png" },
    { name: "Business Insider", logo: "/business-insider-logo.png" },
    { name: "Toshiba", logo: "/toshiba-logo.png" },
    { name: "Netflix", logo: "/netflix-logo.png" },
    { name: "Oracle", logo: "/oracle-logo.png" },

  
  ];

  return (
    <div className="bg-teal-500  py-6 px-4 scale-x-102 md:rotate-5">
      <div className="relative w-full">
        <div className="flex space-x-30 justify-center animate-scroll-reverse">
          {partners.map((partner) => (
            <div key={partner.name} className="relative h-3 w-fit lg:h-10 lg:w-32">
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                layout="intrinsic"
                width={160}
                height={56}
                className="object-contain font-bold text-xl lg:text-3xl filter brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-scroll-reverse {
          display: flex;
          white-space: nowrap;
          animation: scroll-reverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
