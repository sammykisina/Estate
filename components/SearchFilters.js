import React from "react";
import { filterData, getFilterValues } from "../utils/filterData";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiCheck, HiSelector } from "react-icons/hi";
import router from "next/router";

function SearchFilters() {
  const [filters, setFilters] = useState(filterData);
  const [selected, setSelected] = useState(null);

  const searchProperties = (filterValues, event) => {
    console.log("filterValues", filterValues);
    setSelected(event);
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8 px-4">
      {filters.map((filter) => (
        <div key={filter.queryName}>
          <div>
            <Listbox
              value={selected}
              onChange={(event) =>
                searchProperties({ [filter.queryName]: event }, event)
              }
            >
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-gray-50 rounded-md shadow-md border cursor-pointer sm:text-sm">
                  <span className="text-lg text-indigo-700">
                    {filter.placeholder}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <HiSelector
                      className="w-5 h-5 text-white bg-indigo-500 rounded-full"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full z-50 bg-indigo-300 rounded-md mt-1 max-h-60 overflow-y-auto h-36">
                    {filter?.items?.map((item) => (
                      <Listbox.Option
                        key={item.value}
                        className={({ active }) =>
                          `${
                            active
                              ? "bg-indigo-200 rounded-md mx-2 my-1 cursor-pointer"
                              : "text-indigo-700"
                          }
                          cursor-default select-none relative py-2 pl-10 pr-4`
                        }
                        value={item.value}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {item.value}
                            </span>
                            {selected ? (
                              <span
                                className={`${
                                  active ? "text-amber-600" : "text-amber-600"
                                }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <HiCheck
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchFilters;
