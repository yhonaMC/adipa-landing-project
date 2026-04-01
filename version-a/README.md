# Version A - Next.js

Landing page de catalogo de cursos de ADIPA construida con Next.js, Tailwind CSS y TypeScript.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Estilos:** Tailwind CSS
- **Lenguaje:** TypeScript (strict mode)
- **Testing:** Jest + React Testing Library

## Requisitos

- Node.js >= 20.x
- npm >= 10.x

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build de Produccion

```bash
npm run build
npm start
```

## Tests

```bash
npm test
```

## Estructura

```
src/
├── app/                    # App Router (layout, page, globals.css)
├── components/             # Componentes React
│   ├── Header/            # Navbar fijo con navegacion responsive
│   ├── Hero/              # Hero section con CTA
│   ├── CourseGrid/        # Grilla de cursos con filtrado
│   ├── CourseCard/        # Card individual de curso
│   ├── SidebarFilter/     # Sidebar con filtros (categoria, modalidad, precio)
│   ├── SortDropdown/      # Dropdown de ordenamiento custom
│   ├── ContactForm/       # Formulario con validacion client-side
│   └── Footer/            # Footer con links y redes sociales
├── data/                   # Datos tipados (importa del shared/)
└── types/                  # Interfaces y enums compartidos
```

## Versiones

- Node.js: v20.19.3
- npm: 10.2.4
