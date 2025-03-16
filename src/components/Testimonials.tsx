
import React, { useEffect, useRef } from 'react';
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
  },
  {
    name: "John Davis",
    location: "Traveled South America",
    comment: "The cultural insights and local tips in Yatrik helped me connect with communities across Peru and Colombia. I felt like I had insider knowledge everywhere I went.",
    avatar: "JD"
  },
  {
    name: "Emma Thompson",
    location: "Toured Italy",
    comment: "Yatrik's food recommendations were spot on! I found authentic family restaurants that weren't in any guidebooks. The photo translation feature also helped me navigate Italian menus easily.",
    avatar: "ET"
  },
  {
    name: "Rahul Mehta",
    location: "Explored India",
    comment: "Being able to navigate the historic streets of Varanasi and Jaipur with Yatrik's detailed maps made my spiritual journey so much more meaningful. The offline temple guides were incredibly detailed.",
    avatar: "RM"
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let scrollAmount = 0;
    const cardWidth = 320 + 32; // Card width + gap
    const totalWidth = testimonials.length * cardWidth;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      scrollAmount += 1;
      
      // Reset when we've scrolled through all testimonials
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollAmount;
      }
    };
    
    // Scroll every 30ms for smooth animation
    const timer = setInterval(scroll, 30);
    
    // Pause scrolling when hovering
    scrollContainer.addEventListener('mouseenter', () => {
      clearInterval(timer);
    });
    
    const resumeScroll = () => {
      clearInterval(timer);
      setInterval(scroll, 30);
    };
    
    scrollContainer.addEventListener('mouseleave', resumeScroll);
    
    return () => {
      clearInterval(timer);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', () => clearInterval(timer));
        scrollContainer.removeEventListener('mouseleave', resumeScroll);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-yatrik-darkBg theme-transition overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
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
        
        <div 
          ref={scrollRef} 
          className="flex overflow-x-auto gap-8 pb-8 scrollbar-none snap-x snap-mandatory"
          style={{ scrollBehavior: 'smooth' }}
        >
          {testimonials.concat(testimonials.slice(0, 3)).map((testimonial, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-80 snap-center bg-yatrik-light dark:bg-yatrik-darkCard border border-slate-100 dark:border-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start mb-4">
                <Avatar className="h-12 w-12 mr-4 border-2 border-yatrik-primary">
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`} alt={testimonial.name} />
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
        
        {/* Scrolling indicators */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-12 h-1 bg-yatrik-primary/40 rounded-full"></div>
          <div className="w-3 h-1 bg-yatrik-primary/20 rounded-full"></div>
          <div className="w-3 h-1 bg-yatrik-primary/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
