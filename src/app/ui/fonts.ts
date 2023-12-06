import { Montserrat } from "next/font/google";
import { Bona_Nova } from "next/font/google";

export const bonanova = Bona_Nova({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  fallback: ["sans-serif"],
});
export const monserrat = Montserrat({ subsets: ["latin"] });
