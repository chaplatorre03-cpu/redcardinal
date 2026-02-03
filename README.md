# Red Cardinal - Agencia de Marketing Digital

Red Cardinal es una plataforma web moderna desarrollada para una agencia de marketing digital especializada en empresas creativas. El sitio está diseñado con un enfoque estético premium, interactividad fluida y una estructura optimizada para la conversión.

## 🚀 Tecnologías Utilizadas

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Animaciones:** Animaciones personalizadas y secciones con efectos de entrada.
- **Iconografía:** Lucide React / SVG personalizados.

## 🏗️ Estructura de la Página (Landing Page)

La página principal (`app/page.tsx`) está compuesta por las siguientes secciones modulares:

1.  **Header:** Barra de navegación fija con scroll suave y efectos de transparencia.
2.  **Hero Section:** Sección de impacto inicial con el mensaje principal, un mockup de teléfono animado y el botón de llamada a la acción "Solicitar Propuesta".
3.  **¿Qué es esto? (WhatIsSection):** Introducción detallada a la misión de la agencia.
4.  **¿Por qué elegirnos? (WhyChooseUsSection):** Explicación de los valores diferenciales.
5.  **Servicios (FeaturesSection):** Detalle de las soluciones de marketing digital ofrecidas.
6.  **Clientes (ClientsSection):** Carrusel infinito con logotipos de empresas de renombre que confían en la marca.
7.  **Contacto (ContactSection):** Formulario de contacto integrado, información de oficina física y acceso directo a WhatsApp.
8.  **Footer:** Pie de página con enlaces rápidos y derechos de autor.

## 🛠️ Desarrollo Inicial

Primero, instala las dependencias:

```bash
npm install
```

Luego, corre el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 📁 Estructura del Proyecto

- `/app`: Rutas del sistema (App Router).
- `/components`: Componentes reutilizables de la interfaz.
- `/public`: Activos estáticos (logos, imágenes).
- `tailwind.config.ts`: Configuración personalizada de diseño y colores (Rojos corporativos).
