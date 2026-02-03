'use client';

import AnimatedSection from './AnimatedSection';

export default function WhyChooseUsSection() {
    const reasons = [
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: 'Equipo Especializado',
            description: 'Contamos con profesionales expertos en marketing digital y redes sociales.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Estrategias Personalizadas',
            description: 'Cada cliente es único, por eso creamos estrategias a la medida de tus objetivos.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: 'Resultados Medibles',
            description: 'Te proporcionamos informes detallados para que veas el retorno de tu inversión.'
        },
        {
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: 'Atención Dedicada',
            description: 'Un gestor de cuenta dedicado para atender todas tus necesidades.'
        }
    ];

    return (
        <section id="nosotros" className="pt-8 pb-16 md:pt-10 md:pb-24 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl blob blob-1"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-red-400/10 rounded-full blur-3xl blob blob-2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Title */}
                <AnimatedSection animation="fade-up" className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                        ¿Por qué elegirnos?
                    </h2>
                    <div className="w-20 h-1 bg-red-400 mx-auto mt-4"></div>
                </AnimatedSection>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {reasons.map((reason, index) => (
                        <AnimatedSection
                            key={index}
                            animation="fade-up"
                            delay={index * 100}
                        >
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 card-animated hover:bg-white/20">
                                <div className="w-16 h-16 bg-red-400 rounded-xl flex items-center justify-center mx-auto mb-4 hover-scale">
                                    {reason.icon}
                                </div>
                                <h4 className="text-white font-bold text-lg mb-2">{reason.title}</h4>
                                <p className="text-red-100 text-sm">{reason.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

                {/* CTA */}
                <AnimatedSection animation="fade-up" delay={500} className="text-center mt-12 md:mt-16">

                    <a
                        href="#contacto"
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById('contacto');
                            if (element) {
                                const headerOffset = 96;
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                            }
                        }}
                        className="inline-flex items-center bg-red-400 text-red-900 px-8 py-3 rounded-full font-bold btn-animated hover-glow"
                    >
                        Solicitar Propuesta
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </AnimatedSection>
            </div>
        </section>
    );
}
