import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="mt-44 flex w-full flex-col items-center justify-center  text-lg md:mx-auto md:w-2/6">
      <p>😌</p>
      <h2 className="my-4 text-2xl">Ooops, page not found</h2>
      <p className="text-center text-sm font-light tracking-wider">
        It looks like you are trying to access a page that has been deleted or
        never even existed.
      </p>

      <Link
        to="/"
        className="my-6 rounded-md bg-[#25314d] px-4 py-2  text-sm uppercase shadow-md"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
