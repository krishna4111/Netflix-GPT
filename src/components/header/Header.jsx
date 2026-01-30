import { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { TbTransferIn } from "react-icons/tb";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/store/userSlice";
import { NETFLIX_LOGO, USER_ICON_BASE_IMAGE } from "../../utils/constants";

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
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when my component unmounts.
    return () => {
      unSubscribe();
    };
  }, []);

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
            src={NETFLIX_LOGO}
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
                  src={USER_ICON_BASE_IMAGE}
                  alt="user-icon"
                />
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
