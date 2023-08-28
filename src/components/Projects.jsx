import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="w-full rounded-md bg-[#25314d] transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-lg md:bg-transparent md:p-4 md:hover:bg-[#25314d]">
        <div
          id="indicators-carousel"
          className="relative hidden  w-full p-0 md:block"
          data-carousel="static"
        >
          <div className="relative h-52 overflow-hidden rounded-lg">
            <div
              className="duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <img
                src="/images/dash2.PNG"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>

            <div className="duration-700 ease-in-out" data-carousel-item>
              <img
                src="/images/dash2a.PNG"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
          </div>

          <button
            type="button"
            className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            data-carousel-prev
          >
            <span className="group-focus:ring-whit inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#131D3D]  group-hover:bg-[#1] group-focus:outline-none group-focus:ring-2">
              <svg
                className="h-4 w-4 text-white/50"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            data-carousel-next
          >
            <span className="group-focus:ring-whit inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#131D3D]  group-hover:bg-[#1] group-focus:outline-none group-focus:ring-2">
              <svg
                className="h-4 w-4 text-white/50"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        <div className="md:hidden">
          <img className="rounded-t-lg" src="images/dash2.PNG" alt="dash" />
        </div>

        <div className="mt-4 p-2 md:p-0">
          <div>
            <h5 className="mb-2 flex items-center justify-between text-lg tracking-tight text-white lg:text-2xl">
              Human Resource{" "}
              <Link
                to="https://github.com/rickie-ui/hr-management"
                className="flex items-center gap-1 rounded-md bg-[#131D3D] px-4 py-1 text-sm capitalize tracking-widest"
              >
                view <BsFillArrowUpRightCircleFill />
              </Link>
            </h5>
          </div>
          <p className="mb-3 font-normal text-white/50">
            This web app is a human resource management system has job
            application feature and and management of employees in an
            organization.More features to roll out soon as the ddevelopment
            continues.
          </p>
        </div>
      </div>

      <div className="w-full rounded-md bg-[#25314d]  transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-lg md:bg-transparent md:p-4  md:hover:bg-[#25314d]">
        <div
          id="indicators-carousel"
          className="relative hidden  w-full  md:block"
          data-carousel="static"
        >
          <div className="relative h-52 overflow-hidden rounded-lg">
            <div
              className="duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <img
                src="/images/dash1.PNG"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>

            <div className="duration-700 ease-in-out" data-carousel-item>
              <img
                src="/images/dash1a.PNG"
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="h-3 w-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
          </div>

          <button
            type="button"
            className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            data-carousel-prev
          >
            <span className="group-focus:ring-whit inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#131D3D]  group-hover:bg-[#1] group-focus:outline-none group-focus:ring-2">
              <svg
                className="h-4 w-4 text-white/50"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
            data-carousel-next
          >
            <span className="group-focus:ring-whit inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#131D3D]  group-hover:bg-[#1] group-focus:outline-none group-focus:ring-2">
              <svg
                className="h-4 w-4 text-white/50"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>

        <div className="md:hidden">
          <img className="rounded-t-lg" src="images/dash1.PNG" alt="dash" />
        </div>

        <div className="mt-4 p-2 md:p-0">
          <div>
            <h5 className="mb-2 flex items-center justify-between text-lg tracking-tight text-white lg:text-2xl">
              Medically{" "}
              <Link
                to="https://github.com/rickie-ui/Medically"
                className="flex items-center gap-1 rounded-md bg-[#131D3D] px-4 py-1 text-sm capitalize tracking-widest"
              >
                view <BsFillArrowUpRightCircleFill />
              </Link>
            </h5>
          </div>
          <p className="mb-3 font-normal text-white/50">
            This is a web app management system that can be used by doctors to
            keep track of patients records such as appointment and illness
            history.More features will be added gradually as the ideas unfold.
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
