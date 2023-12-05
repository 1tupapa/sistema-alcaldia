import { Lusitana, Montserrat, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const lusitana = Lusitana({ subsets: ["latin"], weight: ['400', '700'] });

export const fonts = {
    inter,
    montserrat,
    lusitana
}