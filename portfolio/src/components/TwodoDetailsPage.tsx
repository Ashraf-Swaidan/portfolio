import React from 'react';
import { FaGithub } from "react-icons/fa";
import StackIcon from "tech-stack-icons";
const TwodoDetailsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-8 md:flex md:items-center md:justify-between">
          
          {/* Left Half - Hero Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-semibold text-gray-900">
              Twodo - Simplified Todo & Project Management
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              Streamline your tasks with an app designed for a seamless, “one-click” experience.
            </p>
            <div className="flex gap-3 my-3 justify-start ">
            <StackIcon name={'reactjs'} className="w-10 h-10" />
            <StackIcon name={'vitejs'} className="w-10 h-10" />
            <StackIcon name={'nodejs'} className="w-10 h-10" />
            <StackIcon name={'mongodb'} className="w-10 h-10" />
            <StackIcon name={'tailwindcss'} className="w-10 h-10" />
            
          </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://twodo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded bg-black text-white font-medium hover:bg-gray-800 transition"
              >
                <div className='flex items-center gap-2'>
                  <div>
                    Try Twodo
                  </div>
                  <div>
                    <img src='/lwogo.png' className='w-5 h-5 '/>
                  </div>
                </div>
               
              </a>
              <a
                href="https://github.com/Ashraf-Swaidan/Twodo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-200 text-gray-900 font-medium hover:bg-gray-300 transition rounded"
              >
                <div className='flex items-center justify-center space-x-3'>
                  <div>
                    GitHub Repo
                  </div>

                  <div>
                  <FaGithub className='w-5 h-5' />
                  </div>
                </div>
                
                 
              </a>
            </div>
          </div>
          
          {/* Right Half - Image or GIF */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/twodoGif.gif"
              alt="Twodo App Preview"
              className="shadow-md rounded-xl w-full "
            />
          </div>
        </div>
      </div>

      {/* Message Section */}
      <div className="max-w-4xl mx-auto py-16 px-8 text-gray-900 leading-relaxed space-y-6">
        <h2 className="text-3xl font-semibold">
          Twodo – Rethinking Todo Management for Simplicity and Ease
        </h2>
        <p>
          While building Twodo, I set out to create more than just a functional todo and project management app. 
          My main focus was delivering a seamless, intuitive experience that goes beyond traditional task management 
          interfaces. The biggest challenge was to strip down user interactions and simplify every action until 
          managing tasks felt as effortless as possible—a philosophy I began calling the "one-click experience."
        </p>
        <p>
          The idea came to life when I examined the initial UI and functionality I had built for editing a todo item. 
          To make a single edit, I found myself clicking through several steps: selecting the todo, shifting focus 
          to a side panel with details, navigating to the edit button, making adjustments, and finally hitting save. 
          This process, although functional, demanded multiple clicks and shifts in focus—a minor inconvenience that 
          felt out of place in an app intended to streamline daily tasks.
        </p>
        <p>
          Determined to eliminate these micro-frictions, I reimagined how task management should feel. I moved away 
          from multi-step actions and focused on inline, instant-editing capabilities. Now, with Twodo, a user can edit 
          tasks, view subtasks, or add comments with just one click, right in place. This eliminates the need for 
          constant refocusing and navigation, creating a smooth, minimal experience that allows users to stay engaged 
          with their tasks without disruption.
        </p>
        <p>
          The result is Twodo: a todo and project management app designed for ease and comfort. By focusing on simplicity, 
          I created an environment where every interaction feels natural, letting users manage their lives with less effort 
          and more flow.
        </p>
      </div>
    </div>
  );
};

export default TwodoDetailsPage;
