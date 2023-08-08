import styles from "./SquareImage.module.css";
import Image from "next/image";
import { blurDataURL } from "../../utils/constants.js";
export default function SquareImage({ url, width }) {
  let urlImage =
    "https://firebasestorage.googleapis.com/v0/b/unit-converter-35df1.appspot.com/o/prueba-playtech%2Fpet_placeholder.png?alt=media&token=53a22eaf-1a72-4df0-9ca0-051430bcd9e8";
  if (url) {
    urlImage = url;
  }

  return (
    <div className={styles.container} style={{ width: width, height: width }}>
      <Image
        src={urlImage}
        alt="vet image"
        width={width}
        height={width}
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </div>
  );
}
