import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up leading-tight">
            Proteção Completa para{' '}
            <span
              className="text-gradient bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent font-bold"
            >
              Você e sua Família
          </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed animate-fade-in-up px-4 sm:px-0">
            Há mais de 20 anos oferecendo as melhores soluções em seguros com 
            atendimento personalizado e cobertura completa.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 animate-fade-in-up px-4 sm:px-0">
            <button 
              className="cursor-pointer gradient-primary text-white hover:opacity-90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto rounded-md transition-all duration-200 flex items-center justify-center"
              onClick={() => scrollToSection('formulario')}
            >
              Solicitar Cotação
              <ArrowRight className="top-10 ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            <button 
              className="cursor-pointer border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto rounded-md transition-all duration-200"
              onClick={() => scrollToSection('produtos')}
            >
              Nossos Produtos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


