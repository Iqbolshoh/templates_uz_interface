import React from 'react';

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Dilfuza Rahimova',
      rating: 5,
      comment: 'Templates.uz yordamida kichik biznesimiz uchun ajoyib sayt yaratdik. Mijozlarimizga juda yoqdi, savdolarimiz esa 40% ga oshdi!'
    },
    {
      name: 'Javlonbek Ismoilov',
      rating: 5,
      comment: 'Men dasturchi emasman, lekin Templates.uz orqali atigi bir necha soat ichida professional portfolio saytimni yaratdim. Zo\'r platforma!'
    },
    {
      name: 'Zarina Qodirova',
      rating: 4.5,
      comment: 'Restoranimiz uchun chiroyli sayt yaratdik. Onlayn buyurtma tizimi vaqtdan yutdi, ko\'proq mijozlar jalb qildi. Texnik yordam jamoasi ham juda zo\'r!'
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-secondary fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-secondary" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#half-fill)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Mijozlarimiz fikrlari</h2>
          <p className="section-subtitle">
            Templates.uz platformasidan mamnun foydalanuvchilarning tajribasi bilan tanishing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-custom hover:shadow-custom-lg hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-6">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-light-text italic mb-6 leading-relaxed">
                "{testimonial.comment}"
              </blockquote>
              
              <div className="border-t border-gray-100 pt-6">
                <h5 className="font-heading font-bold text-dark">
                  {testimonial.name}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;