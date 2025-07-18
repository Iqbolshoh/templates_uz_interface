import React from 'react';

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  position: string;
  company: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'We created an amazing website for our small business with Templates.uz. Our customers loved it, and our sales increased by 40%!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      position: 'Business Owner',
      company: 'Flower World'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'I\'m not a developer, but I created my professional portfolio website in just a few hours through Templates.uz. Great platform!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      position: 'Graphic Designer',
      company: 'Freelancer'
    },
    {
      name: 'Emily Rodriguez',
      rating: 4.5,
      comment: 'We created a beautiful website for our restaurant. The online ordering system saved time and attracted more customers. The technical support team is also great!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      position: 'Restaurant Manager',
      company: 'Food Center'
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-primary-500 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <svg className="w-4 sm:w-5 h-4 sm:h-5 text-secondary-300 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <svg className="w-4 sm:w-5 h-4 sm:h-5 text-primary-500 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      );
    }

    // Fill remaining stars with gray
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 sm:w-5 h-4 sm:h-5 text-secondary-300 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-red-200/15 to-red-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-tl from-red-200/10 to-red-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-red-200/5 to-red-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-red-100 to-red-200 text-red-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Customer 
            </span>
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              testimonials
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get familiar with the experience of satisfied users of the Templates.uz platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-lg border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              {/* Quote Icon */}
              <div className="relative z-10 mb-4 sm:mb-6">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-red-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Stars */}
              <div className="relative z-10 flex justify-center mb-4 sm:mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
              
              {/* Comment */}
              <div className="relative z-10 mb-6 sm:mb-8">
                <blockquote className="text-gray-700 italic leading-relaxed text-center group-hover:text-gray-800 transition-colors text-sm sm:text-base">
                  "{testimonial.comment}"
                </blockquote>
              </div>
              
              {/* Author Info */}
              <div className="relative z-10 border-t border-gray-100 pt-4 sm:pt-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover shadow-lg ring-2 ring-white group-hover:ring-red-200 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-400/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-heading font-bold text-gray-800 group-hover:text-gray-900 transition-colors text-sm sm:text-base">
                      {testimonial.name}
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-red-100 to-red-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-red-100 to-red-200 rounded-full opacity-10 group-hover:opacity-30 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="inline-block p-6 sm:p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-3xl border border-red-200">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-800 mb-3 sm:mb-4">
              Join our satisfied customers too!
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Start creating your website today and grow your business.
            </p>
            <a 
              href="http://builder.templates.uz/" 
              className="inline-flex items-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Start Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;