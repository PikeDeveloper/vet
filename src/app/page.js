import { Montserrat } from "@next/font/google";

import PostLayout from "./clients/layout";

const font = Montserrat({ weight: ["400"], subsets: ["latin"] });
export default function Home() {
  return (
    <main>
      <div>
        <PostLayout/>
      </div>
    </main>
  );
}
