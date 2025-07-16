import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: 'Shablonni tanlang',
      description: 'Bizning kolleksiyamizdan mos shablonni tanlang yoki jamoamizdan maxsus dizayn so\'rang.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: 2,
      title: 'Kontentingizni qo\'shing',
      description: 'Matn, rasm va videolaringizni oddiy interfeys orqali yuklang va sozlang.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: 3,
      title: 'Saytni nashr eting',
      description: 'Birgina bosish orqali saytingizni internetga joylang. Domen yoki hosting haqida bosh qotirmang!',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-green-200/20 to-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Steps */}
          <div>
            <div className="mb-12">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 rounded-full text-sm font-semibold mb-6">
                🚀 Oddiy jarayon
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Qanday 
                </span>
                <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
                  {' '}ishlaydi?
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Faqat 3 qadamda o'z saytingizni yarating!
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="group flex items-start space-x-6">
                  <div className="flex-shrink-0 relative">
                    {/* Step Number */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                      {step.number}
                    </div>
                    {/* Icon */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center text-white shadow-md transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                      {step.icon}
                    </div>
                    {/* Connecting Line */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent"></div>
                    )}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
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
                  <div className="w-full h-80 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-primary-600 font-semibold text-lg">Video yuklanmoqda...</p>
                      <p className="text-gray-500 text-sm mt-2">Sayt yaratish jarayonini ko'ring</p>
                    </div>
                  </div>
                </video>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;