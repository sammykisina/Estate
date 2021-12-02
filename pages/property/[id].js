import ImageScrollbar from "../../components/ImageScrollbar";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import Image from "next/image";
import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { TiInfoLargeOutline } from "react-icons/ti";

const PropertyDetails = ({
  PropertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      {photos && <ImageScrollbar data={photos} />}

      <div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-between items-center w-60 my-3">
            <div className="flex items-center gap-4">
              <span>
                {isVerified && <GoVerified className="text-green-500" />}
              </span>
              <span className="text-lg text-indigo-600 font-semibold">
                Ksh {millify(price)} {rentFrequency && `/${rentFrequency}`}
              </span>
            </div>

            <div>
              <Image
                alt="agency logo"
                src={agency?.logo.url}
                width={20}
                height={20}
                className="rounded-full"
              />
            </div>
          </div>

          <div className="flex items-center text-blue-700">
            <span className="text-lg mr-2 ">{rooms} </span>
            <FaBed className="mr-5 text-lg" /> |{" "}
            <span className="text-lg ml-2 ">{baths}</span>{" "}
            <FaBath className="mr-2 ml-2 text-lg" /> |{" "}
            <span className="ml-2 flex items-center ">
              {millify(area)} sqft <BsGridFill className="ml-2 text-lg" />
            </span>
          </div>

          <div className="px-2 mt-3">
            <p className="text-center text-gray-600 text-lg">{title}</p>
          </div>

          <div className="mt-3 px-5 md:mx-10 lg:mx-16 xl:mx-40 2xl:mx-48">
            <span className="flex items-center gap-3 mb-2">
              <FaAngleDoubleRight className="text-xl text-indigo-600" />
              <span className="bg-indigo-200 px-2 rounded-md text-lg text-gray-900">
                Description
              </span>
            </span>
            <p className="text-center">
              {readMore ? description : `${description.substring(0, 200)} ...`}{" "}
              <button
                className="text-lg text-indigo-800 hover:text-indigo-500 "
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "show less" : "read more"}
              </button>
            </p>
          </div>
        </div>

        <div className="mx-4 my-4 border-dotted border-2 border-indigo-800 p-2 rounded-md sm:mx-11 md:mx-28 lg:mx-56 xl:mx-80 2xl:mx-96">
          <span className="flex items-center">
            <TiInfoLargeOutline className="text-xl text-indigo-600" />
            <span className="bg-indigo-200 px-2 rounded-md text-lg text-gray-900">
              Property Info
            </span>
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3  px-4 py-2 gap-2 items-center">
            <div className="flex gap-2 col-span-1">
              <span className="text-xl text-indigo-700">Type:</span>
              <span className="text-lg">{type}</span>
            </div>

            <div className="flex gap-2 col-span-1">
              <span className="text-xl text-indigo-700">Purpose:</span>
              <span className="text-lg ">{purpose}</span>
            </div>

            <div className="flex gap-2">
              <span className="text-xl text-indigo-700">Status:</span>
              <span className="text-lg ">{furnishingStatus}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mx-4">
          <div className="flex justify-center flex-col">
            <span className="text-3xl text-indigo-800 ">Amenities</span>
            <div className="w-20 h-1 mb-5 bg-indigo-900 ml-auto mr-auto"></div>
          </div>

          <div className="border px-2 py-1 rounded-lg shadow-md my-4">
            {amenities.map((item) =>
              item.amenities.map((amenity) => (
                <span
                  className="bg-indigo-100 px-3 rounded-full mx-2 text-xl text-gray-900"
                  key={amenity.text}
                >
                  {amenity.text}
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      PropertyDetails: data,
    },
  };
}
