import React from 'react';

const NewsletterSignup = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 mt-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Stay Updated!
        </h2>
        <p className="mt-3 text-xl text-gray-500">
          Sign up for our newsletter to get the latest tech news and updates.
        </p>
        <form className="mt-8 sm:flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs"
            required
          />
          <button
            type="submit"
            className="mt-3 w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-3 text-sm text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
