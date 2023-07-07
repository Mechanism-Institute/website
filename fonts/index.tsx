import localFont from "next/font/local";
import { Roboto_Mono } from "next/font/google";

export const gotham = localFont({
  display: "swap",
  variable: "--font-gotham",
  src: [
    {
      path: "./Gotham/Gotham-Thin.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Gotham/Gotham-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Gotham/Gotham-Book.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Gotham/Gotham-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Gotham/Gotham-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Gotham/Gotham-Ultra.woff",
      weight: "800",
      style: "normal",
    },
  ],
});

export const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});
