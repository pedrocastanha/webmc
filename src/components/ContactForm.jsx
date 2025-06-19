import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

export function ContactForm({ className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    consent: false
  });
  
  const [formStatus, setFormStatus] = useState({
    loading: false,
    submitted: false,
    success: false,
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.product || !formData.consent) {
      setFormStatus({
        loading: false,
        submitted: true,
        success: false,
        message: 'Por favor, preencha todos os campos e aceite os termos.'
      });
      return;
    }

    setFormStatus(prev => ({ ...prev, loading: true }));

    try {
      const templateParams = {
        to_email: process.env.REACT_APP_RECEIVE_EMAIL || 'contato@mcseguros.com.br',
        subject: 'Nova Solicitação de Cotação',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        product: formData.product
      };

      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || 'default_service',
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'default_template',
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'default_key'
      );

      setFormStatus({
        loading: false,
        submitted: true,
        success: true,
        message: 'Formulário enviado com sucesso! Entraremos em contato em breve.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        product: '',
        consent: false
      });

    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      setFormStatus({
        loading: false,
        submitted: true,
        success: false,
        message: 'Ops! Não foi possível enviar. Tente novamente mais tarde.'
      });
    }
  };

  const products = [
    'Seguro Automóvel',
    'Seguro Residencial',
    'Seguro de Vida',
    'Seguro Empresarial',
    'Seguro Viagem',
    'Seguro Frota',
    'Seguro Moto',
    'Seguro Carta Verde',
    'Seguro Vida Coletiva'
  ];

  return (
    <section id="formulario" className={`py-12 sm:py-0 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Solicite uma Cotação
              </h2>
              <p className="text-gray-600">
                Preencha o formulário abaixo e entraremos em contato com você.
              </p>
            </div>
            
            {formStatus.submitted && (
              <div className={`mb-6 p-4 rounded-lg flex items-center ${
                formStatus.success 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {formStatus.success ? (
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                )}
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome Completo *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Digite seu nome completo"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Digite seu e-mail"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Telefone *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(00) 00000-0000"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="product" className="block text-sm font-medium text-gray-700">
                    Produto de Interesse *
                  </label>
                  <select
                    id="product"
                    value={formData.product}
                    onChange={(e) => handleInputChange('product', e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecione um produto</option>
                    {products.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  id="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => handleInputChange('consent', e.target.checked)}
                  className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="consent" className="text-sm text-gray-600">
                  Concordo com a política de privacidade e autorizo o contato da M & C Seguros. *
                </label>
              </div>

              <button 
                type="submit" 
                disabled={formStatus.loading}
                className="w-full gradient-primary text-white py-3 px-6 rounded-md hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
              >
                {formStatus.loading ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Solicitar Cotação
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

