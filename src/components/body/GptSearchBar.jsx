import { LOGIN_PAGE_BACKGROUND_IMAGE } from "../../utils/constants";
import lang from "../../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const languageSelected = useSelector((state) => state.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <div>
        <img
          src={LOGIN_PAGE_BACKGROUND_IMAGE}
          alt="background-img"
          className="absolute inset-0 h-full w-full object-cover -z-10"
        />
      </div>
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 bg-white col-span-9 "
          placeholder={lang[languageSelected].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3">
          {lang[languageSelected].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
