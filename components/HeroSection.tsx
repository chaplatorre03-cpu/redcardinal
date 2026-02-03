'use client';

import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
    return (
        <section id="inicio" className="min-h-[60vh] flex items-start bg-gradient-to-br from-red-600 via-red-700 to-red-800 pt-[100px] relative overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl blob blob-1"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-red-400/10 rounded-full blur-3xl blob blob-2"></div>
                <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl blob blob-3"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-8 lg:pr-16 py-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white">
                        <AnimatedSection animation="fade-up" delay={0}>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6">
                                Agencia de Marketing Digital<br />para Empresas Creativas
                            </h1>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={100}>
                            <p className="text-xl md:text-2xl text-red-100 mb-6">
                                ¿Necesitas posicionar tu marca y generar clientes?
                            </p>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={200}>
                            <div className="space-y-4 text-red-100 mb-8 max-w-lg">
                                <p>
                                    Las redes sociales se han convertido en una herramienta digital necesaria e imprescindible
                                    para el <strong className="text-white">crecimiento, la reputación, la generación de clientes y credibilidad</strong> de las empresas.
                                </p>
                                <p>
                                    Nuestro <strong className="text-white">equipo de especialistas</strong> se encargará de estudiar tu caso y realizará una{' '}
                                    <strong className="text-white">propuesta personalizada</strong> orientada a tus objetivos.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection animation="fade-up" delay={300}>
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
                                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </AnimatedSection>
                    </div>

                    {/* Right - Phone Mockup */}
                    <AnimatedSection animation="fade-left" delay={200} className="flex justify-center lg:justify-end">
                        <div className="relative w-72 md:w-80">
                            {/* Phone Frame */}
                            <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl hover-lift">
                                {/* Screen */}
                                <div className="bg-white rounded-[2rem] p-4 min-h-[400px]">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-red-500 rounded-full"></div>
                                        <div>
                                            <div className="h-3 w-20 bg-gray-200 rounded"></div>
                                            <div className="h-2 w-14 bg-gray-100 rounded mt-1"></div>
                                        </div>
                                    </div>

                                    {/* Image placeholder */}
                                    <div className="h-40 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                                        <svg className="w-12 h-12 text-red-200" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    {/* Engagement */}
                                    <div className="flex gap-4 mb-4">
                                        <div className="flex items-center gap-1 text-gray-400">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                            <span className="text-sm">2.5k</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-400">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                            <span className="text-sm">128</span>
                                        </div>
                                    </div>

                                    {/* Text placeholders */}
                                    <div className="space-y-2">
                                        <div className="h-2 bg-gray-100 rounded w-full"></div>
                                        <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Icons with animations */}
                            <div className="absolute -left-4 top-20 w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center shadow-lg animate-float">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </div>

                            <div className="absolute -right-2 top-32 w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg animate-float-delay-1">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                                </svg>
                            </div>

                            <div className="absolute -left-2 bottom-20 w-9 h-9 bg-red-400 rounded-lg flex items-center justify-center shadow-lg animate-float-delay-2">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}
