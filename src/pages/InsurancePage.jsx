import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle, Shield, Phone } from 'lucide-react';

const insuranceData = {
  auto: {
    title: 'Seguro Automóvel',
    subtitle: 'Proteção completa para seu veículo',
    description: 'Seu carro protegido contra roubo, furto, colisão e muito mais. Cobertura abrangente com assistência 24h.',
    banner: '/src/assets/images/Pages/BannerImages/Automovel.jpg',
    icon: '/src/assets/images/Pages/Images/Automovel.png',
    features: [
      'Cobertura contra roubo e furto',
      'Proteção contra colisão, incêndio e fenômenos naturais',
      'Assistência 24 horas em todo território nacional',
      'Carro reserva em caso de sinistro',
      'Proteção contra terceiros',
      'Cobertura para vidros, faróis e retrovisores',
      'Assistência domiciliar',
      'Desconto por bom motorista'
    ],
    benefits: [
      'Cotação rápida e personalizada',
      'Atendimento especializado',
      'Rede credenciada em todo Brasil',
      'App para acionamento de guincho'
    ]
  },
  moto: {
    title: 'Seguro Moto',
    subtitle: 'Sua moto sempre protegida',
    description: 'Proteção específica para motocicletas com cobertura contra roubo, furto e acidentes.',
    banner: '/src/assets/images/Pages/BannerImages/Moto.jpg',
    icon: '/src/assets/images/Pages/Images/Moto.png',
    features: [
      'Cobertura contra roubo e furto',
      'Proteção contra acidentes',
      'Assistência 24h especializada',
      'Cobertura para equipamentos',
      'Proteção contra terceiros',
      'Assistência em viagem',
      'Cobertura para acessórios',
      'Desconto por bom condutor'
    ],
    benefits: [
      'Processo simplificado',
      'Preços competitivos',
      'Atendimento rápido',
      'Oficinas especializadas'
    ]
  },
  residencial: {
    title: 'Seguro Residencial',
    subtitle: 'Sua casa sempre protegida',
    description: 'Proteção completa para sua residência contra incêndio, roubo, danos elétricos e muito mais.',
    banner: '/src/assets/images/Pages/BannerImages/Residencia.jpg',
    icon: '/src/assets/images/Pages/Images/Residencial.png',
    features: [
      'Cobertura contra incêndio e explosão',
      'Proteção contra roubo e furto',
      'Danos elétricos em equipamentos',
      'Responsabilidade civil familiar',
      'Cobertura para conteúdo',
      'Assistência 24h residencial',
      'Cobertura contra vendaval e granizo',
      'Despesas extras de moradia'
    ],
    benefits: [
      'Cobertura personalizada',
      'Assistência completa',
      'Rede credenciada',
      'Atendimento domiciliar'
    ]
  },
  empresarial: {
    title: 'Seguro Empresarial',
    subtitle: 'Proteja seu negócio',
    description: 'Soluções completas para proteger sua empresa contra diversos riscos e garantir a continuidade do negócio.',
    banner: '/src/assets/images/Pages/BannerImages/Empresarial.jpg',
    icon: '/src/assets/images/Pages/Images/Empresarial.png',
    features: [
      'Cobertura do patrimônio empresarial',
      'Responsabilidade civil geral',
      'Lucros cessantes',
      'Equipamentos eletrônicos',
      'Cobertura para mercadorias',
      'Tumultos e greves',
      'Quebra de vidros',
      'Despesas fixas'
    ],
    benefits: [
      'Análise de riscos',
      'Cobertura sob medida',
      'Suporte especializado',
      'Gestão de sinistros'
    ]
  },
  vida: {
    title: 'Seguro de Vida Individual',
    subtitle: 'Proteja quem você ama',
    description: 'Garanta o futuro da sua família com nossa cobertura de vida individual completa.',
    banner: '/src/assets/images/Pages/BannerImages/Vida.jpg',
    icon: '/src/assets/images/Pages/Images/Vida.png',
    features: [
      'Morte natural e acidental',
      'Invalidez permanente total ou parcial',
      'Doenças graves',
      'Assistência funeral',
      'Renda por incapacidade',
      'Cobertura mundial',
      'Antecipação por doença terminal',
      'Diária por internação hospitalar'
    ],
    benefits: [
      'Processo simplificado',
      'Cobertura imediata',
      'Sem carência para acidentes',
      'Atendimento humanizado'
    ]
  },
  'vida-grupo': {
    title: 'Seguro de Vida em Grupo',
    subtitle: 'Proteção coletiva',
    description: 'Soluções em seguro de vida para empresas e grupos, protegendo colaboradores e suas famílias.',
    banner: '/src/assets/images/Pages/BannerImages/VidaGrupo.jpg',
    icon: '/src/assets/images/Pages/Images/VidaGrupo.png',
    features: [
      'Cobertura para grupos',
      'Morte natural e acidental',
      'Invalidez permanente',
      'Auxílio funeral',
      'Cobertura para dependentes',
      'Gestão simplificada',
      'Relatórios gerenciais',
      'Atendimento dedicado'
    ],
    benefits: [
      'Administração facilitada',
      'Preços competitivos',
      'Cobertura flexível',
      'Suporte completo'
    ]
  },
  frota: {
    title: 'Seguro Frota',
    subtitle: 'Proteção para sua frota',
    description: 'Soluções especializadas para frotas de veículos com gestão centralizada e coberturas específicas.',
    banner: '/src/assets/images/Pages/BannerImages/Frota.jpg',
    icon: '/src/assets/images/Pages/Images/Frota.png',
    features: [
      'Cobertura para múltiplos veículos',
      'Gestão centralizada',
      'Assistência 24h especializada',
      'Cobertura para cargas',
      'Rastreamento veicular',
      'Relatórios gerenciais',
      'Desconto por volume',
      'Cobertura personalizada'
    ],
    benefits: [
      'Gestão simplificada',
      'Economia de escala',
      'Controle total',
      'Atendimento dedicado'
    ]
  },
  viagem: {
    title: 'Seguro Viagem',
    subtitle: 'Viaje com tranquilidade',
    description: 'Proteção completa para suas viagens nacionais e internacionais com cobertura médica e assistência.',
    banner: '/src/assets/images/Pages/BannerImages/Viagem.jpg',
    icon: '/src/assets/images/Pages/Images/Viagem.png',
    features: [
      'Cobertura médica internacional',
      'Assistência médica 24h',
      'Cobertura odontológica',
      'Cancelamento de viagem',
      'Bagagem extraviada',
      'Atraso de voo',
      'Morte acidental',
      'Regresso sanitário'
    ],
    benefits: [
      'Cobertura mundial',
      'Atendimento em português',
      'App para emergências',
      'Reembolso rápido'
    ]
  },
  'carta-verde': {
    title: 'Carta Verde',
    subtitle: 'Para viagens ao Mercosul',
    description: 'Seguro obrigatório para viagens de veículo aos países do Mercosul com cobertura internacional.',
    banner: '/src/assets/images/Pages/BannerImages/CartaVerde.jpg',
    icon: '/src/assets/images/Pages/Images/CartaVerde.png',
    features: [
      'Obrigatório para Mercosul',
      'Cobertura internacional',
      'Responsabilidade civil',
      'Assistência em viagem',
      'Cobertura para terceiros',
      'Válido em todos os países',
      'Processo simplificado',
      'Emissão rápida'
    ],
    benefits: [
      'Emissão imediata',
      'Preços competitivos',
      'Suporte internacional',
      'Documentação completa'
    ]
  }
};

export function InsurancePage({ type }) {
  const data = insuranceData[type];
  
  if (!data) {
    return <div>Página não encontrada</div>;
  }

  const scrollToForm = () => {
    const element = document.getElementById('formulario');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: `url('${data.banner}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl md:text-2xl">{data.subtitle}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Por que escolher nosso {data.title.toLowerCase()}?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {data.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {data.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  onClick={scrollToForm}
                  className="cursor-pointer gradient-primary text-white hover:opacity-90 px-8 py-3"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Solicitar Cotação
                </Button>
              </div>

              <div className="text-center">
                <img 
                  src={data.icon} 
                  alt={data.title}
                  className="max-w-full h-auto mx-auto"
                />
              </div>
            </div>

            {/* Features Grid */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Coberturas Incluídas
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.features.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gray-50 rounded-lg p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Pronto para se proteger?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Solicite sua cotação agora mesmo e descubra como podemos proteger 
                o que mais importa para você com as melhores condições do mercado.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToForm}
                  className="gradient-primary text-white hover:opacity-90 px-8 py-3 cursor-pointer"
                >
                  Solicitar Cotação Gratuita
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
                  onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

