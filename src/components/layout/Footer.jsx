import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const insuranceLinks = [
    { label: 'Seguro Automóvel', href: '/seguro-automoveis' },
    { label: 'Seguro Residencial', href: '/seguro-residencial' },
    { label: 'Seguro de Vida', href: '/seguro-vida-individual' },
    { label: 'Seguro Empresarial', href: '/seguro-empresarial' },
    { label: 'Seguro Viagem', href: '/seguro-viagem' },
  ];

  const companyLinks = [
    { label: 'Sobre Nós', href: '/sobre-nos' },
    { label: 'Política de Privacidade', href: '/privacidade' },
    { label: 'Termos de Uso', href: '/termos' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 text-center sm:text-left">
            <img 
              src="/src/assets/images/Logo-2a.png" 
              alt="M & C Seguros" 
              className="h-6 sm:h-8 w-auto filter brightness-0 invert mx-auto sm:mx-0"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Protegendo o que mais importa para você há mais de 20 anos. 
              Soluções completas em seguros com atendimento personalizado.
            </p>
          </div>

          {/* Insurance Products */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4">Nossos Seguros</h3>
            <ul className="space-y-2">
              {insuranceLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">(44) 99703-6832</span>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm break-all">contato@mcseguros.com.br</span>
              </div>
              <div className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Avenida Brasil 6032, Sala 102<br />
                  Maringá - PR, 87015-280
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} M & C Seguros. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

