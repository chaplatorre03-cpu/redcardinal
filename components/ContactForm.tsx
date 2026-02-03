'use client';

import { useState } from 'react';
import PrivacyModal from './PrivacyModal';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        telefono: '',
        empresa: '',
        mensaje: ''
    });

    const [accepted, setAccepted] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    nombre: '',
                    correo: '',
                    telefono: '',
                    empresa: '',
                    mensaje: ''
                });
                setAccepted(false);

                // Limpiar el mensaje de éxito después de 5 segundos
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const inputClasses = (fieldName: string) => `
        w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 
        border-2 transition-all duration-300
        ${focusedField === fieldName
            ? 'border-red-400 shadow-lg shadow-red-400/20'
            : 'border-transparent'
        }
        focus:outline-none focus:border-red-400 focus:shadow-lg focus:shadow-red-400/20
    `;

    return (
        <div className="bg-red-600 rounded-2xl p-6 md:p-8 shadow-2xl hover-lift relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 relative z-10">
                Contáctanos
            </h3>
            <p className="text-red-100 text-sm mb-6 relative z-10">
                Completa el formulario y te responderemos en breve.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="transform transition-transform duration-300 hover:scale-[1.01]">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Nombre completo"
                        value={formData.nombre}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('nombre')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('nombre')}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="transform transition-transform duration-300 hover:scale-[1.01]">
                    <input
                        type="email"
                        name="correo"
                        placeholder="Correo electrónico"
                        value={formData.correo}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('correo')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('correo')}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="transform transition-transform duration-300 hover:scale-[1.01]">
                    <input
                        type="tel"
                        name="telefono"
                        placeholder="Teléfono"
                        value={formData.telefono}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('telefono')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('telefono')}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="transform transition-transform duration-300 hover:scale-[1.01]">
                    <input
                        type="text"
                        name="empresa"
                        placeholder="Empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('empresa')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClasses('empresa')}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="transform transition-transform duration-300 hover:scale-[1.01]">
                    <textarea
                        name="mensaje"
                        placeholder="¿Cómo te podemos ayudar?"
                        value={formData.mensaje}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('mensaje')}
                        onBlur={() => setFocusedField(null)}
                        rows={3}
                        className={`${inputClasses('mensaje')} resize-none`}
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="flex items-start gap-3">
                    <input
                        type="checkbox"
                        id="privacy"
                        checked={accepted}
                        readOnly
                        className="mt-1 w-4 h-4 rounded border-gray-300 text-red-500 focus:ring-red-500 cursor-not-allowed transition-transform"
                        required
                    />
                    <label htmlFor="privacy" className="text-red-100 text-sm cursor-pointer">
                        He leído y acepto la{' '}
                        <button
                            type="button"
                            onClick={() => setIsPrivacyModalOpen(true)}
                            className="text-white underline font-medium hover:text-red-300 transition-colors"
                        >
                            política de privacidad
                        </button>
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={!accepted || isSubmitting}
                    className="w-full bg-red-400 text-red-900 font-bold py-3 px-6 rounded-lg uppercase tracking-wide
                        transition-all duration-300
                        hover:bg-red-300 hover:shadow-lg hover:shadow-red-400/30 hover:-translate-y-1
                        active:translate-y-0
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none
                        btn-animated flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-red-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            ENVIANDO...
                        </>
                    ) : (
                        'ENVIAR MENSAJE'
                    )}
                </button>

                {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-black border-2 border-white rounded-xl text-white text-center text-base animate-fade-in font-bold shadow-2xl flex items-center justify-center gap-3">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        ¡Mensaje enviado con éxito!
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-white border-2 border-black rounded-xl text-red-600 text-center text-base animate-fade-in font-bold shadow-2xl">
                        ⚠️ Error al enviar. Por favor intente de nuevo.
                    </div>
                )}
            </form>

            <PrivacyModal
                isOpen={isPrivacyModalOpen}
                onClose={() => setIsPrivacyModalOpen(false)}
                onAccept={() => setAccepted(true)}
            />
        </div>
    );
}
