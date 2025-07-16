import React from 'react';

interface PricingPlan {
  id: number;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonStyle: string;
}

const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      id: 1,
      name: 'Free',
      description: 'Perfect for beginners',
      price: '$0',
      period: '/month',
      features: [
        '1 website',
        '5 MB storage',
        'Basic features: Template, Slider, Form, Video, Image, Editor',
        'Subdomain: site.templates.uz',
        'E-commerce ❌',
        'Premium support ❌'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'btn-outline-primary'
    },
    {
      id: 2,
      name: 'Starter',
      description: 'Great for small projects',
      price: '$3',
      period: '/month',
      features: [
        '3 websites',
        '100 MB storage',
        'All basic features',
        'Telegram bot editing',
        'Subdomain + Favicon',
        'E-commerce ❌'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'btn-primary-custom'
    },
    {
      id: 3,
      name: 'Standard',
      description: 'For growing businesses',
      price: '$8',
      period: '/month',
      features: [
        '5 websites',
        '500 MB storage',
        'Custom domain (mysite.uz)',
        'Simple admin panel',
        'All basic features',
        'Advanced analytics ❌'
      ],
      isPopular: true,
      buttonText: 'Choose Plan',
      buttonStyle: 'btn-primary-custom'
    },
    {
      id: 4,
      name: 'Pro',
      description: 'For professional users',
      price: '$15',
      period: '/month',
      features: [
        '10 websites',
        '1 GB storage',
        'Full admin panel',
        'SEO and analytics',
        'User registration',
        'All basic features'
      ],
      buttonText: 'Choose Plan',
      buttonStyle: 'btn-primary-custom'
    },
    {
      id: 5,
      name: 'Premium',
      description: 'Perfect plan for large projects',
      price: '$29',
      period: '/month',
      features: [
        'Unlimited websites',
        '3 GB storage',
        'Priority technical support',
        'Multi-language websites',
        'Currency conversion',
        'Custom integrations',
        'Exclusive templates'
      ],
      buttonText: 'Choose Plan',
      buttonStyle: 'btn-primary-custom'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Pricing Plans</h2>
          <p className="section-subtitle">
            Flexible pricing for any budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-custom hover:shadow-custom-lg hover:-translate-y-2 transition-all duration-300 ${
                plan.isPopular ? 'border-2 border-primary ring-4 ring-primary/20' : 'border border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className={`p-6 text-center ${plan.isPopular ? 'bg-primary text-white' : 'bg-gray-50'} rounded-t-2xl`}>
                <h3 className="text-xl font-heading font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm ${plan.isPopular ? 'text-white/80' : 'text-light-text'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="p-8">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-dark">{plan.price}</span>
                  <span className="text-light-text">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-light-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full ${plan.buttonStyle}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-light-text">
            2 months free with annual payment! 
            <a href="#contact" className="text-primary hover:text-primary-dark font-semibold ml-2">
              Learn More
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;