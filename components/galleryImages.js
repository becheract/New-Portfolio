import Image from "next/future/image";
import { urlForImage } from "../lib/sanity";
import { PuffLoader } from "react-spinners";
import { useState } from "react";
export default function SkillsImage({ image: source }) {
  const [loading, setLoading] = useState(true);

  const image = source?.asset?._ref ? (
    <Image
      layout="responsive"
      width={500}
      height={200}
      src={urlForImage(source).height(600).width(1000).url()}
      alt="gallery"
      onLoad={() => setLoading(false)}
      onError={() => setLoading(false)}
    />
  ) : (
    <div style={{ backgroundColor: "#ddd" }} />
  );
  return (
    <>
      {loading && (
        <div className="flex items-center mt-5 justify-center items-center">
          <PuffLoader color="#0EBE2C" />
        </div>
      )}
      <div className="h-full sm:w-full w-60 object-contain p-3 flex justify-center items-center border-orange-500 border ">
        {image}
      </div>
    </>
  );
}
