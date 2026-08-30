import img from "@/public/asset/img/725609.webp";
import Image from "next/image";
import {DesktopUi} from "@/components/DesktopUi";

export default function Home() {
  return (
    
    <>
      <Image
        src={img}
        alt=""
        fill
        priority
        className="object-cover object-bottom"
        style={{ zIndex: -1 }}
      />
      <DesktopUi/>
    </>
  );
}
