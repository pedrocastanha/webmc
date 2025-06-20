import React from 'react';
import { FeatureCard } from '../FeatureCard';
import { Shield, Clock, Users, HeadphonesIcon, Award, Zap } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Proteção Completa',
      description: 'Cobertura abrangente para todas as suas necessidades de segurança e proteção.'
    },
    {
      icon: Clock,
      title: 'Atendimento 24h',
      description: 'Suporte disponível 24 horas por dia, 7 dias por semana, quando você mais precisar.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e experientes para orientar você na melhor escolha.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Suporte Personalizado',
      description: 'Atendimento individualizado focado nas suas necessidades específicas.'
    },
    {
      icon: Award,
      title: 'Qualidade Reconhecida',
      description: 'Mais de 20 anos no mercado com excelência em produtos e serviços.'
    },
    {
      icon: Zap,
      title: 'Processo Ágil',
      description: 'Cotações rápidas e processos simplificados para sua comodidade.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 px-4 sm:px-0">
            Por que escolher a{' '}
            <span className="text-gradient block sm:inline">M&C Seguros</span>?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Oferecemos muito mais que seguros. Oferecemos tranquilidade, 
            segurança e um atendimento que faz a diferença.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

