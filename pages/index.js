import { baseUrl, fetchApi } from "../utils/fetchApi";
import Image from "next/image";
import Link from "next/link";
import Property from "../components/Property";

// the Banner inner component
const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => (
  <div className="flex items-center justify-center">
    <div className="p-2 border border-indigo-300  mt-2 flex justify-center flex-col lg:flex-row lg:gap-4 items-center  mx-2 rounded-sm">
      <Image
        alt="banner-img"
        src={imageUrl}
        width={500}
        height={300}
        className="rounded-md"
      />

      <div className="py-2 flex flex-col">
        <span className="text-gray-600 text-md">{purpose}</span>

        <span className="text-3xl text-indigo-900">
          {title1} <br /> {title2}{" "}
        </span>

        <span className="flex justify-center text-gray-600 text-lg mt-5">
          {desc1} <br /> {desc2}
        </span>

        <div>
          <button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
            <Link href={linkName}>{buttonText}</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default function Home({ propertyForSale, propertyForRent }) {
  return (
    <div>
      {/* Banners to introduce the properties in two categories */}
      <Banner
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        purpose={"RENT THE HOME OF YOU DREAMS"}
        title1="Beautiful Rental Homes for"
        title2={"Everyone"}
        desc1={"Explore Apartments, Villas, Homes"}
        desc2={"and more."}
        buttonText={"Explore Renting"}
        linkName={"/search?purpose=for-rent"}
      />

      {/* rental properties */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-2 sm:mx-2  lg:mx-6 mb-4">
        {propertyForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>

      <Banner
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        purpose={"BUY THE PERFECT HOME WORTH YOUR STANDARD"}
        title1="Find, Buy & Own Your"
        title2={"Dream Home"}
        desc1={"Explore Apartments, Villas, Homes"}
        desc2={"and more"}
        buttonText={"Explore Buying"}
        linkName={"/search?purpose=for-sale"}
      />

      {/* properties for sale */}
      <div className="grid grid-cols-1 px-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-2 sm:mx-2  lg:mx-6">
        {propertyForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
    </div>
  );
}

// getting the data need form the api b4 component renders
export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );

  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    },
  };
}
