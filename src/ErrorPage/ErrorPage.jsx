import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="text-center p-8 max-w-lg">
        {/* 404 Big Text */}
        <h1 className="text-7xl font-extrabold mb-4 text-indigo-500">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl font-semibold mb-2">
          Oops! Page not found
        </h2>
        <p className="text-gray-400 mb-6">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-2xl shadow-lg"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};


export default ErrorPage;