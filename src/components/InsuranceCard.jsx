import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function InsuranceCard({ 
  title, 
  description, 
  image, 
  features, 
  href, 
  className = '',
  style = {} 
}) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift overflow-hidden ${className}`}
      style={style}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <Link 
          to={href}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Saiba mais
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
