import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 min-h-screen">
        <h2 className="text-7xl font-bold">404</h2>
        <h2 className="text-2xl font-semibold">
          Sorry, we could not find the page you are looking for.
        </h2>
        <p className="opacity-80">
          It may have been removed, changed, or is temporarily unavailable.
        </p>
        <p className="opacity-80">
          Please return to our home page to continue browsing our site.
        </p>
  
        <div className="flex gap-8 mt-8">
          <Link to="/">
            <button className="px-4 py-2 bg-black text-white">
              BACK TO HOME
            </button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;