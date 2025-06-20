import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { InsuranceCard } from '../InsuranceCard';
import { Shield, Users, Award } from 'lucide-react';

export function InsuranceProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const products = [
    {
      title: 'Seguro Automóvel',
      description: 'Proteção completa para seu veículo com cobertura contra roubo, furto, colisão e muito mais.',
      image: '/src/assets/images/Banners/Auto.jpeg',
      features: [
        'Cobertura contra roubo e furto',
        'Assistência 24h',
        'Carro reserva',
        'Proteção contra terceiros'
      ],
      href: '/seguro-automoveis'
    },
    {
      title: 'Seguro Residencial',
      description: 'Sua casa protegida contra incêndio, roubo, danos elétricos e desastres naturais.',
      image: '/src/assets/images/Banners/Residencial.jpeg',
      features: [
        'Cobertura contra incêndio',
        'Proteção contra roubo',
        'Danos elétricos',
        'Responsabilidade civil'
      ],
      href: '/seguro-residencial'
    },
    {
      title: 'Seguro de Vida',
      description: 'Garanta o futuro da sua família com nossa cobertura de vida individual.',
      image: '/src/assets/images/Banners/Vida.jpeg',
      features: [
        'Morte natural e acidental',
        'Invalidez permanente',
        'Doenças graves',
        'Assistência funeral'
      ],
      href: '/seguro-vida-individual'
    },
    {
      title: 'Seguro de Vida Coletiva',
      description: 'Proteção para grupos e empresas, oferecendo segurança e benefícios para todos os colaboradores.',
      image: '/src/assets/images/Banners/VidaColetiva.jpeg',
      features: [
        'Morte natural e acidental',
        'Invalidez permanente',
        'Doenças graves',
        'Assistência funeral'
      ],
      href: '/seguro-vida-grupo'
    },
    {
      title: 'Seguro Empresarial',
      description: 'Proteja seu negócio com coberturas específicas para empresas de todos os portes.',
      image: '/src/assets/images/Banners/Empresa.jpg',
      features: [
        'Patrimônio empresarial',
        'Responsabilidade civil',
        'Lucros cessantes',
        'Equipamentos'
      ],
      href: '/seguro-empresarial'
    },
    {
      title: 'Seguro Moto',
      description: 'Proteção completa para sua motocicleta com cobertura contra roubo, furto e acidentes.',
      image: '/src/assets/images/Banners/Moto.jpeg',
      features: [
        'Cobertura contra roubo e furto',
        'Assistência 24h',
        'Proteção contra terceiros',
        'Danos próprios'
      ],
      href: '/seguro-moto'
    },
    {
      title: 'Seguro Viagem',
      description: 'Viaje com tranquilidade com nossa cobertura completa para viagens nacionais e internacionais.',
      image: '/src/assets/images/Banners/Viagem.jpg',
      features: [
        'Despesas médicas',
        'Cancelamento de viagem',
        'Bagagem extraviada',
        'Assistência 24h'
      ],
      href: '/seguro-viagem'
    },
    {
      title: 'Seguro Frota',
      description: 'Proteção especializada para frotas de veículos comerciais e empresariais.',
      image: '/src/assets/images/Banners/Frota.jpg',
      features: [
        'Cobertura para múltiplos veículos',
        'Gestão centralizada',
        'Assistência especializada',
        'Condições especiais'
      ],
      href: '/seguro-frota'
    },
    {
      title: 'Carta Verde',
      description: 'Seguro obrigatório para viagens aos países do Mercosul.',
      image: '/src/assets/images/Banners/CartaVerde.jpg',
      features: [
        'Cobertura internacional',
        'Válido no Mercosul',
        'Emissão rápida',
        'Assistência no exterior'
      ],
      href: '/seguro-carta-verde'
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === totalPages - 1 ? 0 : prevIndex + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, totalPages]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const getCurrentProducts = () => {
    const startIndex = currentIndex * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section id="produtos" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 px-4 sm:px-0">
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Soluções completas em seguros para proteger o que mais importa para você.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Produto anterior"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            aria-label="Próximo produto"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-all duration-500">
            {getCurrentProducts().map((product, index) => (
              <InsuranceCard
                key={`${currentIndex}-${index}`}
                {...product}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Ir para página ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto animate-fade-in-up px-4 sm:px-0 mt-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400 mr-2" />
              <span className="text-2xl sm:text-3xl font-bold">20+</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">Anos de Experiência</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mr-2" />
              <span className="text-2xl sm:text-3xl font-bold">1500+</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">Clientes Satisfeitos</p>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-orange-400 mr-2" />
              <span className="text-2xl sm:text-3xl font-bold">10+</span>
            </div>
            <p className="text-gray-600 text-sm sm:text-base">Seguradoras Parceiras</p>
          </div>
        </div>
      </div>
    </section>
  );
}

