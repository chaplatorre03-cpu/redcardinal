'use client';

import ContactForm from './ContactForm';
import AnimatedSection from './AnimatedSection';

export default function ContactSection() {
    return (
        <section id="contacto" className="pt-0.5 pb-8 md:pt-[18px] md:pb-12 bg-gray-50 relative overflow-hidden">
            {/* Animated background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-80 h-80 bg-red-100/50 rounded-full blur-3xl blob blob-1 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-100/50 rounded-full blur-3xl blob blob-2 translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Form Section - First on Mobile, Second on Desktop */}
                    <div className="order-1 lg:order-2">
                        <AnimatedSection animation="fade-left" delay={100}>
                            <ContactForm />
                        </AnimatedSection>
                    </div>

                    {/* Left Content (Text Info) - Second on Mobile, First on Desktop */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <AnimatedSection animation="fade-right">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Vamos un paso<br />más allá
                            </h2>
                            <p className="text-gray-600 mt-4">
                                Contáctanos y descubre cómo podemos ayudarte a alcanzar tus objetivos.
                            </p>
                        </AnimatedSection>

                        {/* Contact Info */}
                        <AnimatedSection animation="fade-right" delay={100}>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 group">
                                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-red-500">
                                        <svg className="w-5 h-5 text-red-600 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Oficina Principal</p>
                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=Carrera+3+%23+25c+-+15%2C+Soacha%2C+Cundinamarca"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-red-600 transition-colors block text-sm"
                                        >
                                            <p>Carrera 3 # 25c - 15 (Oficina 201)</p>
                                            <p>Soacha, Cundinamarca</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-red-500">
                                        <svg className="w-5 h-5 text-red-600 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <a href="mailto:chaplatorre03@gmail.com" className="text-gray-900 hover:text-red-600 transition-colors">
                                        colombia@redcardinal.com
                                    </a>
                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-red-500">
                                        <svg className="w-5 h-5 text-red-600 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <a
                                        href="https://wa.me/573222020818?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-900 font-semibold hover:text-red-600 transition-colors"
                                    >
                                        +57 322 202 0818
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>

                        {/* Google Partner Badge */}
                        <AnimatedSection animation="fade-right" delay={200}>
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover-lift">
                                <div className="flex items-center gap-4">
                                    <div className="bg-gray-50 px-4 py-2 rounded-lg">
                                        <span className="text-gray-500 font-bold">Google</span>
                                        <span className="text-gray-400 text-sm ml-1">Partner</span>
                                    </div>
                                    <p className="text-gray-600 text-sm flex-1">
                                        Google nos ha reconocido por nuestra capacidad para administrar cuentas de manera eficaz.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>

            </div>
        </section>
    );
}
