import Link from 'next/link';
import Image from 'next/image';
import WhatsAppButton from './WhatsAppButton';
import LegalLink from './LegalLink';

export default function Footer() {
    return (
        <footer className="bg-red-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Logo & Vision */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-4 mb-4 group text-white hover:text-red-100 transition-colors">
                            <div className="relative w-20 h-20 bg-white rounded-full p-2 transition-transform group-hover:scale-105 shadow-md">
                                <img
                                    src="/logos/red-cardinal-logo.png"
                                    alt="Red Cardinal Logo"
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>
                            <span className="text-xl font-bold">Red Cardinal</span>
                        </Link>
                    </div>

                    {/* Columns can be added here if needed, but reference implies simple footer */}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-red-800 text-sm md:text-base text-red-200">
                    <div className="mb-4 md:mb-0">
                        <p>&copy; {new Date().getFullYear()} Red Cardinal. Todos los derechos reservados.</p>
                    </div>
                    <div className="flex space-x-6 pr-4 md:pr-10">
                        <LegalLink slug="aviso-legal" pdfPath="/documentos/Aviso_Legal_Red_Cardinal.pdf">Aviso Legal</LegalLink>
                        <LegalLink slug="politica-privacidad" pdfPath="/documentos/Politica_de_Privacidad_Red_Cardinal.pdf">Política de Privacidad</LegalLink>
                        <LegalLink slug="politica-cookies" pdfPath="/documentos/Politica_de_Cookies_Red_Cardinal.pdf">Política de Cookies</LegalLink>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button - integrated here to be available globally if footer is present */}
            <WhatsAppButton />
        </footer>
    );
}

