
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Explored Japan",
    comment: "Yatrik transformed my solo trip through Japan. I discovered hidden temples and local restaurants I would have never found with a traditional guide. The offline maps were a lifesaver in remote areas!",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    location: "Backpacked Europe",
    comment: "As someone who hates rigid itineraries, Yatrik was perfect for my spontaneous backpacking trip across Europe. The custom routes feature helped me visit 7 countries efficiently while still having freedom to explore.",
    avatar: "MC"
  },
  {
    name: "Priya Patel",
    location: "Trekked Nepal",
    comment: "The offline maps and AR navigation were crucial during my Himalayan trek. Even in areas with no signal, Yatrik kept me on the right path with accurate altitude data and points of interest.",
    avatar: "PP"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-yatrik-darkBg theme-transition">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-yatrik-tertiary/30 dark:bg-yatrik-tertiary/20 px-4 py-1.5 rounded-full mb-4">
            <p className="text-sm font-medium text-yatrik-primary dark:text-yatrik-tertiary">Traveler stories</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-yatrik-dark dark:text-white mb-4">
            Hear from our adventurers
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300">
            Join thousands of independent travelers who have discovered the freedom of exploring with Yatrik.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-yatrik-light dark:bg-yatrik-darkCard border border-slate-100 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start mb-4">
                <Avatar className="h-12 w-12 mr-4 border-2 border-yatrik-primary">
                  <AvatarFallback className="bg-yatrik-primary text-white">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold text-yatrik-dark dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-gray-300 italic">&ldquo;{testimonial.comment}&rdquo;</p>
              <div className="flex text-amber-400 mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
