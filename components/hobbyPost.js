import Date from "../components/date";
import CoverImage from "../components/cover-image";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import ImagesNext from "../components/galleryImages";
import { v4 as uuid_v4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function HeroPost({
  title,
  date,
  hobbyCategory,
  images,
  slug,
  placeholder,
}) {
  const [modal, setModal] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [index, setIndex] = useState(0);
  const OpenImages = async () => {
    switch (modal) {
      case false:
        setModal(true);
        setGalleryImages([]);
        break;
    }
  };

  const Next = () => {
    console.log(index);
    if (index == images.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => (prev += 1));
    }
  };

  const Previous = () => {
    console.log(index);
    if (index == 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((prev) => (prev -= 1));
    }
  };

  //for gallery of images
  useEffect(() => {
    console.log(images);
    images.map((photo) => {
      setGalleryImages((prevGallery) => [...prevGallery, photo]);
    });
  }, []);

  return (
    <section key={uuid_v4()} onClick={() => OpenImages(images)}>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} image={placeholder} priority />
      </div>

      <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <a>{title}</a>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          {hobbyCategory.map((category, index) => {
            if (category === undefined || null) {
              return <></>;
            } else {
              return (
                <>
                  <h1>{category.name}</h1>
                </>
              );
            }
          })}
        </div>
        {!modal ? null : (
          <>
            <Modal isOpen={modal} onClose={() => setModal(false)}>
              <div className="w-100 h-full ">
                <h2 className="text-4xl font-semibold capitalize mb-4">
                  Gallery {title}
                </h2>
                <div className="flex-row items-center justify-center h-full ">
                  <div className="flex flex-row items-center justify-center ">
                    <button onClick={() => Previous()} className=" w-20">
                      <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    <div className="flex-row items-center justify-center h-auto w-100 ">
                      <h1 className="text-center capitalize text-2xl p-5">
                        {images[index].title}
                      </h1>
                      <ImagesNext image={images[index].photo}></ImagesNext>
                      <div className="flex justify-center ">
                        {images.map(() => {
                          return (
                            <div className="w-2 h-2 m-2">
                              <FontAwesomeIcon icon={faCircle} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <button onClick={() => Next()} className=" w-20">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
          </>
        )}
      </div>
    </section>
  );
}
