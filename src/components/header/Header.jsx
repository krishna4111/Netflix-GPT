import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { TbTransferIn } from "react-icons/tb";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../utils/store/userSlice";

const menuItems = [
  { label: "Manage Profile", icon: MdEdit },
  { label: "Transfer Profile", icon: TbTransferIn },
  { label: "Account", icon: MdOutlineAccountCircle },
  { label: "Help Center", icon: IoMdHelpCircle },
];

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOutUser = async () => {
    await signOut(auth);
    dispatch(removeUser());
    navigate("/");
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <div className="w-full bg-gradient-to-b from-black to-transparent px-4 sm:px-8 py-4">
        <div
          className="
          max-w-[1400px] mx-auto
          flex items-center
          justify-between 
        "
        >
          <img
            className="w-28 sm:w-36 md:w-44"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix logo"
          />
          {user && (
            <div
              className="relative pb-3"
              onMouseLeave={() => setIsOpen(false)}
              onMouseEnter={() => setIsOpen(true)}
            >
              <button type="button" className=" flex  justify-end items-center">
                <img
                  className="rounded-md"
                  src="https://occ-0-5452-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
                  alt="user-icon"
                ></img>
                <IoMdArrowDropdown
                  className={`transition-transform duration-200  ${
                    isOpen ? "rotate-180 duration-500" : "rotate-0"
                  }`}
                  size={22}
                />
              </button>
              {isOpen && (
                <div className="absolute bg-black/80  rounded-md right-0 top-full w-56 shadow-xl z-50">
                  <ul className="p-4 text-white ">
                    {menuItems.map(({ label, icon: Icon }) => {
                      return (
                        <li
                          key={label}
                          className="flex items-center gap-2 p-2 cursor-pointer hover:underline"
                        >
                          <Icon size={18} />
                          <span>{label}</span>
                        </li>
                      );
                    })}
                    <hr className="border-gray-600" />
                    <li
                      className="p-2 hover:underline cursor-pointer text-center"
                      onClick={signOutUser}
                    >
                      Sign out of Netflix
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
