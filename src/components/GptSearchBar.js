import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstant";

const GptSearchBar = () => {
    const Language = useSelector(store =>store?.config?.Language)
    console.log('lang', lang)
  return (
    <div className="pt-[12%] flex justify-center "  >
      <form className="w-1/2 grid grid-cols-12  bg-black">
        <input
          type="text"
          placeholder={lang[Language].placeholder}
          className="col-span-9 p-4 m-4  rounded-lg"
        />
        <button className="py-2 px-4 bg-red-500 text-white rounded-lg col-span-3 m-4 ">{lang[Language].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
