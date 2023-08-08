import "./globals.css";

import { Poppins } from "@next/font/google";
import styles from "./page.module.css";

import { ProductsProvider } from "../context/ProductsContext.js";

//Nueva forma de cargar fuentes
const font = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className={styles.main}>
          <ProductsProvider>{children}</ProductsProvider>{" "}
        </div>
      </body>
    </html>
  );
}
