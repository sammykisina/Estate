import { BsFilter } from "react-icons/bs";
import React, { useState } from "react";
// import SearchFilters from "../components/SearchFilters";
import Image from "next/image";
import { useRouter } from "next/router";
import Property from "../components/Property";
import noresult from "../assets/images/noresult.svg";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import SearchFilters from "../components/SearchFilters";

function Search({ properties }) {
  const [showSearchFilters, setShowSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-center mb-4">
        <div className="flex items-center px-10  gap-4 bg-indigo-700 text-white mt-3 mx-8 rounded-full justify-center py-1">
          <span className="text-lg ">Search Properties By Filters!</span>
          <span
            className="hover:bg-indigo-300 rounded-full p-1 cursor-pointer bg-indigo-500"
            onClick={() => setShowSearchFilters((prevFilters) => !prevFilters)}
          >
            <BsFilter className="text-3xl" />
          </span>
        </div>
      </div>

      {showSearchFilters && <SearchFilters />}

      <div className="mx-7 md:mx-12 ">
        <span className="text-lg text-indigo-900 bg-indigo-200 px-3 py-1 rounded-md">
          Properties {router.query.purpose}
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-2 sm:mx-2  lg:mx-6">
          {properties.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </div>

        {properties.length === 0 && (
          <div>
            <Image alt="no result" src={noresult} width={500} height={400} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
