import React from 'react';
import { Shield, Users, Award, Target } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Shield,
      title: 'Autenticidade',
      description: 'Relacionamentos verdadeiros, com empatia e respeito.'
    },
    {
      icon: Users,
      title: 'Transparência',
      description: 'Comunicação clara, honesta e sem surpresas.'
    },
    {
      icon: Award,
      title: 'Atendimento Ágil',
      description: 'Respostas rápidas e soluções que fazem sentido para cada cliente.'
    },
    {
      icon: Target,
      title: 'Comprometimento',
      description: 'Presença real em todos os momentos, principalmente nos mais delicados.'
    },
    {
      icon: Shield,
      title: 'Ética e Profissionalismo',
      description: 'Agimos com integridade e responsabilidade em cada decisão.'
    },
    {
      icon: Users,
      title: 'Atualização Constante',
      description: 'Estamos sempre aprendendo e nos adaptando às mudanças do mercado para oferecer o melhor serviço.'
    }
  ];

  return (
    <div className="min-h-screen pt-2">
      {/* Hero Section */}
      <section className="py-12= sm:py-15 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Sobre a <span className="text-yellow-300">M&C Seguros</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Tradição em proteção, compromisso com o seu futuro.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Nossa História
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                  A M & C Seguros é fruto de uma história construída com dedicação e propósito. Iniciada por um pai apaixonado pela profissão e fortalecida pela parceria com sua filha, nossa empresa representa o equilíbrio entre tradição e inovação. Ao longo dos anos, conquistamos a confiança de centenas de clientes com ética, responsabilidade e uma forma mais humana de cuidar de pessoas e seus bens.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Ao longo dos anos, construímos uma reputação sólida baseada na confiança, transparência e excelência no atendimento. Trabalhamos com as melhores seguradoras do mercado para garantir que nossos clientes tenham acesso às coberturas mais completas e aos melhores preços.
                </p>
              </div>

              <div className="relative">
                <img 
                  src="/src/assets/images/protection-bg.jpg" 
                  alt="Equipe M&C Seguros"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Nossos <span className="text-gradient">Valores</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nossa empresa e nosso relacionamento com os clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 gradient-primary rounded-full flex items-center justify-center">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
              Nossa <span className="text-gradient">Missão</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Oferecer soluções de seguros que tragam segurança e tranquilidade aos nossos clientes, com atendimento ágil, personalizado e um portfólio de produtos que realmente atendem às suas necessidades.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">30+</div>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">Centenas</div>
                <p className="text-gray-600">Clientes Atendidos</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">Melhores</div>
                <p className="text-gray-600">Seguradoras Parceiras</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
              Por que escolher a <span className="text-gradient">M&C Seguros</span>?
            </h2>
            <ul className="text-lg sm:text-xl text-gray-600 leading-relaxed list-disc list-inside mx-auto max-w-2xl">
              <li>Atendimento próximo, empático e sob medida</li>
              <li>Parcerias com seguradoras líderes de mercado</li>
              <li>Profissionais com mais de 30 anos de experiência</li>
              <li>Suporte completo na contratação e em sinistros</li>
              <li>Soluções que se adaptam a você, sua família ou sua empresa</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}


