import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';

export function Welcome() {
  const features = [
    'Ética',
    'Qualidade',
    'Transparência',
    'Confiança',
    'Excelência',
    'Compromisso'
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-14">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 px-4 sm:px-0">
            Bem-vindos à{' '}
            <span className="text-gradient">M & C Seguros</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Nossa corretora está localizada no coração da cidade, oferecendo atendimento personalizado e soluções em seguros há mais de 20 anos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch lg:h-80">
          {/* Texto à esquerda */}
          <div className="order-1 lg:order-1 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Nossa Corretora</h3>
            <p className="text-gray-600 mb-8">
              Com mais de duas décadas de experiência no mercado de seguros, a M&C Seguros se destaca pela excelência no atendimento e pelos valores que orientam cada etapa do nosso trabalho. Ética, transparência e compromisso com o cliente são os pilares que sustentam nossa trajetória de confiança e credibilidade.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mapa à direita */}
          <div className="order-2 lg:order-2 h-full">
            <div className="bg-gray-100 rounded-lg p-4 h-full flex items-center justify-center">
              <div className="rounded-lg overflow-hidden shadow-lg h-full w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8977890089!2d-51.94420892378!3d-23.42420597885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd0b3c2c6d5e7%3A0x9c8b8b8b8b8b8b8b!2sAv.%20Brasil%2C%206032%20-%20Zona%2007%2C%20Maring%C3%A1%20-%20PR%2C%2087030-000!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização MC Corretora de Seguros"
                  className="w-full h-full border-none"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

