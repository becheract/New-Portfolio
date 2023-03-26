import Image from "next/future/image";
import { urlForImage } from "../lib/sanity";
import { PuffLoader } from "react-spinners";
import { useState } from "react";
export default function SkillsImage({ image: source }) {
  const [loading, setLoading] = useState(true);

  const image = source?.asset?._ref ? (
    <Image
      layout="responsive"
      width={2000}
      height={1000}
      src={urlForImage(source).height(1000).width(2000).url()}
      sizes="100vw"
      alt="gallery"
      onLoad={() => setLoading(false)}
      onError={() => setLoading(false)}
    />
  ) : (
    <div style={{ paddingTop: "50%", backgroundColor: "#ddd" }} />
  );
  return (
    <>
      {loading && (
        <div className="flex items-center mt-5 justify-center">
          <PuffLoader color="#0EBE2C" />
        </div>
      )}
      <div className="h-full w-100 object-contain p-3">{image}</div>
    </>
  );
}
