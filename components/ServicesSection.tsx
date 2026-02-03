'use client';

import AnimatedSection from './AnimatedSection';

export default function ServicesSection() {
    const services = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            ),
            title: 'Gestión de Redes Sociales',
            description: 'Administración completa de tus perfiles en Facebook, Instagram, LinkedIn, Twitter y más.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Publicidad Digital',
            description: 'Campañas efectivas en Google Ads, Facebook Ads e Instagram Ads para maximizar tu ROI.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
            ),
            title: 'Marketing de Contenidos',
            description: 'Creación de contenido atractivo y relevante que conecta con tu audiencia.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            title: 'SEO & Posicionamiento',
            description: 'Optimización para motores de búsqueda y estrategias para mejorar tu visibilidad online.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
            ),
            title: 'Estrategia Digital',
            description: 'Planificación estratégica integral para alcanzar tus objetivos de negocio.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Producción Audiovisual',
            description: 'Videos profesionales, fotografía y contenido multimedia de alta calidad.',
        },
    ];

    return (
        <section id="servicios" className="pt-0 pb-16 md:pt-0 md:pb-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform -translate-y-[75px]">
                {/* Title */}
                <AnimatedSection animation="fade-up" className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                        Nuestros Servicios
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Soluciones integrales de marketing digital para impulsar tu negocio
                    </p>
                    <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
                </AnimatedSection>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <AnimatedSection
                            key={index}
                            animation="fade-up"
                            delay={index * 100}
                        >
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-animated group">
                                <div className="text-red-600 mb-4 transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {service.description}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
