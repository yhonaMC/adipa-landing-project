# Version B - Laravel

Landing page de catalogo de cursos de ADIPA construida con Laravel, Blade, Stylus, jQuery y Gulp.

## Tech Stack

- **Framework:** Laravel 10 (compatible con requisito 9+)
- **Templates:** Blade (layouts + secciones)
- **Estilos:** Stylus (preprocesador CSS, nomenclatura BEM)
- **Interactividad:** jQuery (filtros y validacion)
- **Build tool:** Gulp

## Requisitos

- PHP >= 8.0
- Composer >= 2.x
- Node.js >= 20.x
- npm >= 10.x

## Instalacion

```bash
# Instalar dependencias PHP
composer install

# Instalar dependencias Node
npm install

# Copiar variables de entorno
cp .env.example .env

# Generar key de Laravel
php artisan key:generate

# Compilar assets
npx gulp
```

## Desarrollo

```bash
# Servidor Laravel
php artisan serve

# Watch de assets (en otra terminal)
npx gulp watch
```

Abre [http://localhost:8000](http://localhost:8000) en tu navegador.

## Build de Produccion

```bash
npx gulp
```

## Estructura

```
resources/
├── views/
│   ├── layouts/
│   │   └── app.blade.php     # Layout base
│   ├── sections/
│   │   ├── header.blade.php  # Navbar
│   │   ├── hero.blade.php    # Hero section
│   │   ├── courses.blade.php # Grilla de cursos
│   │   ├── contact.blade.php # Formulario
│   │   └── footer.blade.php  # Footer
│   ├── partials/
│   │   ├── course-card.blade.php     # Card de curso
│   │   └── category-filter.blade.php # Pills de filtro
│   └── home.blade.php        # Vista principal
└── assets/
    ├── styl/                  # Archivos Stylus (BEM)
    └── js/                    # jQuery app
```

## Versiones

- PHP: 8.3.30
- Composer: 2.9.5
- Node.js: v20.19.3
- npm: 10.2.4
