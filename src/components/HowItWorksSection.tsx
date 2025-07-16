import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: 'Choose a Template',
      description: 'Select a suitable template from our collection or request a custom design from our team.',
      icon: (
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      )
    },
    {
      number: 2,
      title: 'Add Your Content',
      description: 'Upload and configure your text, images and videos through a simple interface.',
      icon: (
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: 3,
      title: 'Publish Your Site',
      description: 'Launch your website online with a single click. Don\'t worry about domain or hosting!',
      icon: (
        <svg className="w-6 sm:w-8 h-6 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-red-200/15 to-red-300/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-4 sm:right-10 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-tl from-red-200/10 to-red-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left side - Steps */}
          <div>
            <div className="mb-8 sm:mb-12">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-red-100 to-red-200 text-red-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Oddiy jarayon
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Qanday 
                </span>
                <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  {' '}ishlaydi?
                </span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                Faqat 3 qadamda o'z saytingizni yarating!
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="group flex items-start space-x-4 sm:space-x-6">
                  <div className="flex-shrink-0 relative">
                    {/* Step Number */}
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg transform group-hover:scale-110 transition-all duration-300">
                      {step.number}
                    </div>
                    {/* Icon */}
                    <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white shadow-md transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {step.icon}
                    </div>
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-8 sm:h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg sm:text-2xl font-heading font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-gray-900 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Video */}
          <div className="lg:pl-8">
            <div className="relative group">
              {/* Video Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-gray-100 to-gray-200 transform group-hover:scale-105 transition-all duration-500">
                <video
                  className="w-full h-auto"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                >
                  <source
                    src="https://cdn.dribbble.com/userupload/43553017/file/original-c3c0ecf65625e47bb4b3ea80690dd9e1.mp4"
                    type="video/mp4"
                  />
                  {/* Fallback Content */}
                  <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-red-100 to-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                        <svg className="w-6 sm:w-8 h-6 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-red-600 font-semibold text-base sm:text-lg">Video loading...</p>
                      <p className="text-gray-500 text-xs sm:text-sm mt-2">Watch the website creation process</p>
                    </div>
                  </div>
                </video>
              </div>

              <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-red-400 to-red-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-br from-red-400 to-red-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-3 sm:-right-6 w-3 sm:w-4 h-3 sm:h-4 bg-gradient-to-br from-red-400 to-red-500 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;