import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappNumber = "5544997036832"; // Número do WhatsApp
  const message = "Olá! Vim pelo site e gostaria de solicitar uma cotação de seguro.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}

