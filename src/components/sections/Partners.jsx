import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const partners = [
    { name: 'Ezze', logo: '/src/assets/images/Logos/Logo_Ezze.png' },
    { name: 'HDI', logo: '/src/assets/images/Logos/Logo_HDI.png' },
    { name: 'Yelum', logo: '/src/assets/images/Logos/Logo_Yelum.png' },
    { name: 'Tokio Marine', logo: '/src/assets/images/Logos/Logo_Tokio.png' },
    { name: 'Allianz', logo: '/src/assets/images/Logos/Logo_Allianz.png' },
    { name: 'Porto Seguro', logo: '/src/assets/images/Logos/Logo_Porto.png' },
    { name: 'Bradesco', logo: '/src/assets/images/Logos/Logo_Bradesco.png' },
    { name: 'Azul', logo: '/src/assets/images/Logos/Logo_Azul.png' },
    { name: 'Mapfre', logo: '/src/assets/images/Logos/Logo_Mapfre-removebg-preview.png' },
    { name: 'Metlife', logo: '/src/assets/images/Logos/Logo_Metlife.png' },
    { name: 'Zurich', logo: '/src/assets/images/Logos/Logo_Zurich.png' },
    { name: 'Sura', logo: '/src/assets/images/Logos/Logo_Sura.png' },
    { name: 'Itaú', logo: '/src/assets/images/Logos/Logo_Itau.png' },
    { name: 'Mitsui', logo: '/src/assets/images/Logos/logo_Mitsui.png' }
  ];

  const itemsPerPage = 4;
  const totalItems = partners.length;

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalItems]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const getVisiblePartners = () => {
    const visiblePartners = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visiblePartners.push(partners[(currentIndex + i) % totalItems]);
    }
    return visiblePartners;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossas <span className="text-gradient">Seguradoras Parceiras</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com as principais seguradoras do mercado para oferecer 
            as melhores opções e preços para você.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Seguradora anterior"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors cursor-pointer"
            aria-label="Próxima seguradora"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center transition-all duration-500">
            {getVisiblePartners().map((partner, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-100"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Ir para seguradora ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            E muitas outras seguradoras de confiança no mercado brasileiro.
          </p>
        </div>
      </div>
    </section>
  );
}


