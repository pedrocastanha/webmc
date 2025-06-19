import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '/', action: () => { window.scrollTo(0, 0); setIsMenuOpen(false); } },
    { label: 'Produtos', href: '/#produtos', action: () => scrollToSection('produtos') },
    { label: 'Sobre Nós', href: '/sobre-nos', action: () => setIsMenuOpen(false) },
    { label: 'Contato', href: '/#contato', action: () => scrollToSection('contato') },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => { window.scrollTo(0, 0); setIsMenuOpen(false); }}>
            <img 
              src="/src/assets/images/Logo-2a.png" 
              alt="M & C Seguros" 
              className="h-6 sm:h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={item.action}
                className="text-gray-700 hover:text-primary font-medium transition-colors text-sm xl:text-base"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/#formulario" 
              onClick={() => scrollToSection('formulario')}
              className="gradient-primary text-white hover:opacity-90 text-sm xl:text-base px-4 xl:px-6 py-2 rounded-md transition-all duration-200"
            >
              Faça uma cotação
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <>
            <div 
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="lg:hidden fixed top-16 sm:top-20 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto">
              <nav className="flex flex-col p-6 space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={item.action}
                    className="text-gray-700 hover:text-primary font-medium transition-colors py-3 text-lg border-b border-gray-100 last:border-b-0"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4">
                  <Link 
                    to="/#formulario" 
                    onClick={() => scrollToSection('formulario')}
                    className="gradient-primary text-white hover:opacity-90 w-full py-4 text-lg rounded-md transition-all duration-200 flex items-center justify-center"
                  >
                    Faça uma cotação
                  </Link>
                </div>
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

