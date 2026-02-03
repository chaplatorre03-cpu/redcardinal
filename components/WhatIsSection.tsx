'use client';

import AnimatedSection from './AnimatedSection';

export default function WhatIsSection() {
    const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('servicios');
        if (element) {
            const headerOffset = 96;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="que-es" className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <AnimatedSection animation="fade-up" className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        ¿Qué son las redes sociales?
                    </h2>
                    <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Illustration */}
                    <AnimatedSection animation="fade-right" className="flex justify-center">
                        <div className="bg-red-50 rounded-2xl p-8 max-w-sm w-full hover-lift">
                            {/* Chart */}
                            <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
                                <div className="flex items-end gap-2 h-24">
                                    <div className="flex-1 bg-red-200 rounded-t transition-all duration-500 hover:bg-red-300" style={{ height: '40%' }}></div>
                                    <div className="flex-1 bg-red-300 rounded-t transition-all duration-500 hover:bg-red-400" style={{ height: '60%' }}></div>
                                    <div className="flex-1 bg-red-400 rounded-t transition-all duration-500 hover:bg-red-500" style={{ height: '80%' }}></div>
                                    <div className="flex-1 bg-red-500 rounded-t transition-all duration-500 hover:bg-red-600" style={{ height: '100%' }}></div>
                                    <div className="flex-1 bg-red-400 rounded-t transition-all duration-500 hover:bg-red-500" style={{ height: '75%' }}></div>
                                </div>
                            </div>

                            {/* Social icons */}
                            <div className="flex justify-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover-scale cursor-pointer">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </div>
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover-scale cursor-pointer">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                                    </svg>
                                </div>
                                <div className="w-10 h-10 bg-red-400 rounded-lg flex items-center justify-center hover-scale cursor-pointer">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white rounded-lg p-3 text-center shadow-sm hover-scale cursor-default">
                                    <div className="text-xl font-bold text-red-600">+500</div>
                                    <div className="text-xs text-gray-500">Clientes</div>
                                </div>
                                <div className="bg-white rounded-lg p-3 text-center shadow-sm hover-scale cursor-default">
                                    <div className="text-xl font-bold text-red-600">+10</div>
                                    <div className="text-xs text-gray-500">Años Exp.</div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right Content */}
                    <div className="space-y-6">
                        <AnimatedSection animation="fade-left" delay={100}>
                            <p className="text-gray-600 text-lg">
                                Las redes sociales son plataformas digitales que permiten a las personas y empresas conectarse,
                                compartir contenido y construir comunidades. Para las empresas, representan una oportunidad única
                                para <strong className="text-red-600">aumentar su visibilidad, generar engagement y convertir seguidores en clientes</strong>.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-left" delay={200}>
                            <div className="space-y-3">
                                {[
                                    "Aumenta la visibilidad de tu marca",
                                    "Genera engagement con tu audiencia",
                                    "Convierte seguidores en clientes potenciales",
                                    "Construye una comunidad alrededor de tu marca"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 group">
                                        <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-red-500">
                                            <svg className="w-3 h-3 text-red-600 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-left" delay={300}>
                            <a
                                href="#servicios"
                                onClick={handleScrollToServices}
                                className="inline-flex items-center text-red-600 font-semibold hover:text-red-800 group"
                            >
                                Ver Servicios
                                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
