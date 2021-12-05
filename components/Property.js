import React from "react";
import Link from "next/link";
import Image from "next/image";
import DefaultImage from "../assets/images/house.jpg";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref className="col-span-1">
    <div className="flex justify-center items-center flex-col my-3 cursor-pointer">
      <div className="image-container">
        <Image
          src={coverPhoto ? coverPhoto.url : DefaultImage}
          alt="House"
          width={350}
          height={250}
          className="rounded-md image"
        />
      </div>
      <div className="flex justify-between items-center w-60  my-3">
        <div className="flex items-center gap-4">
          <span>{isVerified && <GoVerified className="text-green-500" />}</span>
          <span>
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

      <div className="flex items-center text-blue-700 ">
        <span className="text-lg mr-2 ">{rooms} </span>
        <FaBed className="mr-5 text-lg" /> |{" "}
        <span className="text-lg ml-2 ">{baths}</span>{" "}
        <FaBath className="mr-2 ml-2 text-lg" /> |{" "}
        <span className="ml-2 flex items-center ">
          {millify(area)} sqft <BsGridFill className="ml-2 text-lg" />
        </span>
      </div>

      <div>{title.length > 40 ? `${title.substring(0, 30)}...` : title}</div>
    </div>
  </Link>
);

export default Property;
