import React from "react";
import { FaGithub } from "react-icons/fa";
import StackIcon from "tech-stack-icons";
import { Link } from "react-router-dom";


const CoducationDetailsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-8 md:flex md:items-center md:justify-between gap-5">
          {/* Left Half - Hero Text */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-semibold text-gray-900">
              Coducation - Tailored Paths for Coding Majors
            </h1>
            <p className="text-lg text-gray-700 mt-4">
              A structured approach for students and mentors to explore career
              paths and build focused skills in coding.
            </p>
            <div className="flex gap-3 my-3 justify-start ">
              <StackIcon name={"reactjs"} className="w-10 h-10" />
              <StackIcon name={"php"} className="w-10 h-10" />
              <StackIcon name={"bootstrap5"} className="w-10 h-10" />
              <StackIcon name={"css3"} className="w-10 h-10" />
            </div>
            <div className="flex space-x-4 mt-6">
              <Link
                to="https://github.com/Ashraf-Swaidan/coducation"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-200 text-gray-900 font-medium hover:bg-gray-300 transition rounded"
              >
                <div className="flex items-center space-x-2">
                  <span>GitHub Repo</span>
                  <FaGithub className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Half - Image or GIF */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/codGif.gif"
              alt="Coducation App Preview"
              className="shadow-md rounded-xl w-full"
            />
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-4xl mx-auto py-16 px-8 text-gray-900 leading-relaxed space-y-6">
        <h2 className="text-3xl font-semibold">
          Coducation - Discover & Master Coding Paths
        </h2>
        <p>
          Coducation offers a clear roadmap for students and mentors, guiding
          students toward career paths in coding fields while empowering mentors
          to create and share industry-specific knowledge.
        </p>

        {/* Pages and Features */}
        <h2 className="text-2xl font-semibold">Core Features & Pathways</h2>

        {/* Video Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Explore Paths</h3>
          <p>
            In <b>Video 1</b>, a student navigates to the Web Development path.
            They learn about the skills and problems they can solve, along with
            mentors actively teaching in this path. This gives them a clear view
            of what to expect and what they could achieve.
          </p>
          <video controls className="w-full shadow-lg rounded-lg">
            <source src="/cod1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h3 className="text-xl font-semibold">Course Creation by Mentor</h3>
          <p>
            In <b>Video 2</b>, a mentor joins the Web Development path and
            creates a new course called "JavaScript Foundations." They access
            the course creation interface and add details such as prerequisites,
            a description, and modules with lessons.
          </p>
          <p>
            The mentor then uses the markdown editor to write the first lesson's
            content. As they write, they view a live preview to ensure the
            formatting looks correct.
          </p>
          <video controls className="w-full shadow-lg rounded-lg mt-4">
            <source src="/cod2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <h3 className="text-xl font-semibold">
            Student Enrolls and Views Course Content
          </h3>
          <p>
            In <b>Video 3</b>, a student enrolls in the "JavaScript Foundations"
            course. They navigate to the first lesson and view the markdown
            content prepared by the mentor, exploring the detailed lesson
            breakdown within each module.
          </p>
          <video controls className="w-full shadow-lg rounded-lg">
            <source src="/cod3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default CoducationDetailsPage;
