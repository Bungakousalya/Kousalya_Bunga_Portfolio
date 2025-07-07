import React, { useRef } from 'react';
import { certifications } from '../constants';

const Certifications = () => {
  // This gives access to the scrollable container
  const scrollRef = useRef(null);

  // Scroll left function
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  // Scroll right function
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section id="certifications" className="py-12 px-4 sm:px-6 lg:px-8  text-white">
      <div className="max-w-6xl mx-auto relative">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Certifications and Achievements
        </h2>

        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 px-3 py-2 rounded-full text-white hover:bg-gray-600"
        >
          &#8249;
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="inline-block w-72 bg-tertiary rounded-lg p-4 m-2 align-top shadow-lg"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 object-contain mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-400 mb-2">
                {cert.issuer} &bull; {cert.date}
              </p>
              <p className="text-xm text-gray-100 mb-3 h-16 overflow-y-auto">{cert.description}</p>
              <div className="flex flex-wrap gap-1">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 text-white px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-700 px-3 py-2 rounded-full text-white hover:bg-gray-600"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Certifications;



// | Part                             | What It Does                                        |
// | -------------------------------- | --------------------------------------------------- |
// | `useRef()`                       | Points to the scrollable container `<div>`          |
// | `scrollLeft()` / `scrollRight()` | Scroll the container left/right using `.scrollBy()` |
// | `overflow-x-auto`                | Makes the container horizontally scrollable         |
// | `whitespace-nowrap`              | Keeps all cards in one horizontal line              |
// | `inline-block`                   | Makes each card line up horizontally                |
// | Arrow buttons (`‹ ›`)            | Trigger scrolling when clicked                      |
