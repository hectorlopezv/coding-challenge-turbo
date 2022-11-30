"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type Props = {};

const Search = (props: Props) => {
  const [term_, setterm] = useState("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${term_}`);
  };

  return (
    <form className="py-10 w-full" onSubmit={handleSearch}>
      <div className="flex w-full justify-between pl-2 pr-2">
        <div className="flex">
          <Image
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="google image"
            width={200}
            height={200}
          />
        </div>

        <div className="flex items-center justify-center flex-1 pl-2 pr-2">
          <input
            title="Search"
            type="text"
            value={term_}
            placeholder="Enter the Search Term"
            onChange={(e) => setterm(e.target.value)}
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-md"
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            className="bg-blue-500 text-white font-bold pl-4 pr-4 py-1 rounded-lg"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
