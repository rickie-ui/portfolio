import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <nav className=" h-14 p-2 md:p-0 lg:sticky lg:top-0 lg:mx-auto lg:w-2/3">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <Link to="#about" className="flex items-center">
            <img src="/images/erick.PNG" alt="" className="h-8 w-8" />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500  focus:outline-none focus:ring-1 focus:ring-white/80 md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full  md:block md:w-auto"
            id="navbar-default"
          >
            <ul className=" relative z-50 mt-4 flex flex-col rounded-lg bg-[#25314d] p-4 font-medium text-white md:mt-0 md:flex-row md:space-x-8 md:bg-inherit  md:p-0  lg:h-14 lg:items-center">
              <li>
                <Link
                  to="#about"
                  className="block rounded py-2  pl-3 pr-4 text-white transition-all hover:text-white/60  md:p-0"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#experience"
                  className="block rounded py-2 pl-3 pr-4 text-white transition-all hover:text-white/60 md:p-0"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="#projects"
                  className="block rounded py-2 pl-3 pr-4 text-white transition-all hover:text-white/60 md:p-0"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
