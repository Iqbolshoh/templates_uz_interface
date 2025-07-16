import React from 'react';

interface Step {
  number: number;
  title: string;
  description: string;
}

const HowItWorksSection: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: 'Shablonni tanlang',
      description: 'Bizning kolleksiyamizdan mos shablonni tanlang yoki jamoamizdan maxsus dizayn so\'rang.'
    },
    {
      number: 2,
      title: 'Kontentingizni qo\'shing',
      description: 'Matn, rasm va videolaringizni oddiy interfeys orqali yuklang va sozlang.'
    },
    {
      number: 3,
      title: 'Saytni nashr eting',
      description: 'Birgina bosish orqali saytingizni internetga joylang. Domen yoki hosting haqida bosh qotirmang!'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Steps */}
          <div>
            <h2 className="section-title text-left">Qanday ishlaydi?</h2>
            <p className="section-subtitle text-left mb-12">
              Faqat 3 qadamda o'z saytingizni yarating!
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 text-primary-500 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-secondary-700 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-secondary-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Video */}
          <div className="lg:pl-8">
            <div className="relative rounded-2xl overflow-hidden shadow-medium border-2 border-primary-200">
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
                <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-primary-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <p className="text-primary-500 font-semibold">Video yuklanmoqda...</p>
                  </div>
                </div>
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;