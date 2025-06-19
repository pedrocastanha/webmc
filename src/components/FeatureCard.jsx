import React from 'react';

export function FeatureCard({ icon: Icon, title, description, className = '', style = {} }) {
  return (
    <div 
      className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover-lift p-6 text-center ${className}`}
      style={style}
    >
      <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}