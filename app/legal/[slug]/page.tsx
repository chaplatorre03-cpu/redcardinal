import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

const docsMap: Record<string, { title: string; file: string }> = {
    'aviso-legal': {
        title: 'Aviso Legal | Red Cardinal',
        file: '/documentos/Aviso_Legal_Red_Cardinal.pdf',
    },
    'politica-privacidad': {
        title: 'Política de Privacidad | Red Cardinal',
        file: '/documentos/Politica_de_Privacidad_Red_Cardinal.pdf',
    },
    'politica-cookies': {
        title: 'Política de Cookies | Red Cardinal',
        file: '/documentos/Politica_de_Cookies_Red_Cardinal.pdf',
    },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const doc = docsMap[slug];

    if (!doc) {
        return {
            title: 'Documento no encontrado',
        };
    }

    return {
        title: doc.title,
        description: `Consulta el ${doc.title} de Red Cardinal.`,
        icons: {
            icon: "/logos/red-cardinal-logo.png",
            shortcut: "/logos/red-cardinal-logo.png",
            apple: "/logos/red-cardinal-logo.png",
        },
    };
}

export default async function LegalPage({ params }: Props) {
    const { slug } = await params;
    const doc = docsMap[slug];

    if (!doc) {
        notFound();
    }

    return (
        <div className="fixed inset-0 w-screen h-screen overflow-hidden bg-[#323639] flex flex-col">
            <iframe
                src={`${doc.file}#toolbar=0&navpanes=0&view=FitH&zoom=100`}
                className="w-full h-full border-none"
                title={doc.title}
            />
        </div>
    );
}
