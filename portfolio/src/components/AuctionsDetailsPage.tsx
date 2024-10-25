import React from 'react';
import { FaGithub } from "react-icons/fa";
import StackIcon from "tech-stack-icons";

const AuctionsDetailsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-8 md:flex md:items-center md:justify-between">
          
          {/* Left Half - Hero Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-semibold text-gray-900">
              Auctions - Interactive Bidding Platform
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Experience dynamic auctions with a user-friendly web app built on Python and Django.
            </p>
            <div className="flex gap-3 my-3 justify-start ">
              <StackIcon name={'python'} className="w-10 h-10" />
              <StackIcon name={'django'} className="w-10 h-10" />
              <StackIcon name={'html5'} className="w-10 h-10" />
              <StackIcon name={'css3'} className="w-10 h-10" />
              <StackIcon name={'mysql'} className="w-10 h-10" />
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://auctions-rf5r.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded bg-black text-white font-medium hover:bg-gray-800 transition"
              >
                <span>Try Auctions</span>
              </a>
              <a
                href="https://github.com/Ashraf-Swaidan/commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-200 text-gray-900 font-medium hover:bg-gray-300 transition rounded"
              >
                <div className='flex items-center space-x-2'>
                  <span>GitHub Repo</span>
                  <FaGithub className='w-5 h-5' />
                </div>
              </a>
            </div>
          </div>
          
          {/* Right Half - Image or GIF */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/auctionsGif.gif"
              alt="Auctions App Preview"
              className="shadow-md rounded-xl w-full"
            />
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto py-16 px-8 text-gray-900 leading-relaxed space-y-6">
        <h2 className="text-3xl font-semibold">Auctions - Practical Web App for Online Bidding</h2>
        <p>
          "Auctions" is an interactive web app built on Python and Django, created to allow users to create, bid on, and win auction listings.
          This app lets users create auction listings, place bids, and track auctions in real time, simulating an online marketplace.
        </p>

        {/* Pages and Features */}
        <h2 className="text-2xl font-semibold">Core Features & Pages</h2>

        {/* Video Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Create a Listing</h3>
          <p>
            Registered users can create auction listings by specifying a product title, description, starting bid, and an image URL for the thumbnail.
            In <b>Video 1</b>, we see Ash creating a new listing. After registering, he sets the product details and starting bid, 
            preparing the listing for other users to join the auction.
          </p>
          <video controls className="w-full shadow-lg rounded-lg">
            <source src="/auctions1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h3 className="text-xl font-semibold">Active Listings</h3>
          <p>
            This page displays all active listings, allowing users to explore details, bid, and track auctions in progress.
            The interface is designed to make it easy to view and join ongoing auctions at a glance.
          </p>

          <h3 className="text-xl font-semibold">Listing Details Page</h3>
          <p>
            Each listing has a dedicated details page where users can interact with the auction based on their role.
            In <b>Video 2</b>, Rose logs in, navigates to Ash’s listing, and attempts to place a bid. 
            When she initially tries to bid below the starting bid, she receives an error message. She then submits a valid bid 
            and adds a comment. The listing automatically appears on her Watchlist as she interacts with it.
          </p>
          <video controls className="w-full shadow-lg rounded-lg">
            <source src="/auctions2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <p>
            In <b>Video 3</b>, another user, Alex, registers and accesses the same listing. He also tries to bid below the 
            current highest bid, submitted by Rose, but receives an error. Alex then places a higher bid, successfully interacting with the auction. 
            He also adds a comment, showing the social interaction features on the page.
          </p>
          <video controls className="w-full shadow-lg rounded-lg mt-4">
            <source src="/auctions3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h3 className="text-xl font-semibold">Watchlist</h3>
          <p>
            The Watchlist feature helps users keep track of auctions they are participating in or have manually added. 
            Auctions are automatically added here once a user places a bid or interacts with the listing. 
            This page centralizes all active and past auctions the user has engaged with.
          </p>

          <h3 className="text-xl font-semibold">Auction Closing</h3>
          <p>
            Auction owners can close listings, declaring the highest bidder as the winner. In <b>Video 4</b>, Ash, the listing owner, logs back in, 
            reviews the ongoing bids, and closes the listing. Later, both Rose and Alex log back in to check the final status of the auction.
            Alex, having placed the highest bid, is declared the winner, while Rose sees her bid was outdone, adding a comment noting the outcome.
          </p>
          <video controls className="w-full shadow-lg rounded-lg">
            <source src="/auctions4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default AuctionsDetailsPage;
