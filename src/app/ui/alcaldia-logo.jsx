import Image from "next/image";
import { fonts } from "./Fonts";


export default function AlcaldiaLogo() {

    return (
      <div className={`${fonts.lusitana.className} flex flex-row items-center justify-center leading-none text-white`}>
        <Image
          src="/logo-alcaldia.webp"
          alt="Alcaldia de Leon"
          width={160}
          height={160}
          className="hidden md:block"
          />
      </div> 
    )
}