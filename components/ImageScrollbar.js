import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";
import Image from "next/image";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <div className="flex justify-center items-center text-indigo-600 text-3xl cursor-pointer ">
      <IoChevronBackCircle onClick={() => scrollPrev()} />
    </div>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <div
      className="flex justify-center items-center text-indigo-600 text-3xl cursor-pointer "
      onClick={() => scrollNext()}
    >
      <IoChevronForwardCircle />
    </div>
  );
};

const ImageScrollbar = ({ data }) => (
  <div className="mx-2">
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overFlow: "hidden" }}
    >
      {data.map((image) => (
        <div
          key={image.id}
          style={{ width: "500px" }}
          itemID={image.id}
          className="my-2 mx-1 overflow-hidden"
        >
          <Image
            alt="property"
            placeholder="blur"
            blurDataURL={image.url}
            src={image.url}
            width={250}
            height={125}
            sizes="(max-width:500px) 100px, (max-width):1024px 400px ,1000px"
            className="rounded-md"
          />
        </div>
      ))}
    </ScrollMenu>
  </div>
);

export default ImageScrollbar;
