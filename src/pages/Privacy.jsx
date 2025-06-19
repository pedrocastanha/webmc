import React from 'react';
import { Card, CardContent } from '../components/ui/card';

export function Privacy() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
              Política de <span className="text-gradient">Privacidade</span>
            </h1>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Informações Gerais</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A M&C Seguros está comprometida em proteger a privacidade e os dados pessoais 
                  de nossos clientes, visitantes e usuários. Esta política descreve como coletamos, 
                  usamos, armazenamos e protegemos suas informações pessoais.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Coleta de Informações</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Coletamos informações quando você:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Solicita uma cotação através do nosso formulário</li>
                  <li>Entra em contato conosco por telefone, e-mail ou WhatsApp</li>
                  <li>Navega em nosso website</li>
                  <li>Contrata nossos serviços</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Uso das Informações</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Utilizamos suas informações para:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Fornecer cotações e propostas de seguros</li>
                  <li>Processar e gerenciar apólices de seguro</li>
                  <li>Comunicar sobre nossos produtos e serviços</li>
                  <li>Melhorar nossos serviços e experiência do cliente</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Compartilhamento de Dados</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                  exceto quando necessário para fornecer nossos serviços (como seguradoras parceiras) 
                  ou quando exigido por lei.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Segurança dos Dados</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais adequadas para 
                  proteger suas informações pessoais contra acesso não autorizado, alteração, 
                  divulgação ou destruição.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Seus Direitos</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Você tem o direito de:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir dados incorretos ou incompletos</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Revogar seu consentimento a qualquer momento</li>
                  <li>Portabilidade de dados</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Cookies</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nosso website utiliza cookies para melhorar sua experiência de navegação. 
                  Você pode configurar seu navegador para recusar cookies, mas isso pode 
                  afetar algumas funcionalidades do site.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Contato</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                  entre em contato conosco:
                </p>
                <ul className="list-none text-gray-600 space-y-2">
                  <li><strong>E-mail:</strong> privacidade@mcseguros.com.br</li>
                  <li><strong>Telefone:</strong> (11) 9999-9999</li>
                  <li><strong>Endereço:</strong> Rua das Seguradoras, 123 - São Paulo/SP</li>
                </ul>
              </CardContent>
            </Card>

            <div className="text-center text-gray-500 text-sm">
              <p>Última atualização: Janeiro de 2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

