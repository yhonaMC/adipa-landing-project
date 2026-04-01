<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ADIPA | Cursos de Psicologia y Salud Mental</title>
    <meta name="description" content="Plataforma de educacion continua especializada en psicologia y salud mental.">
    <meta name="keywords" content="psicologia, salud mental, cursos, diplomados, ADIPA, educacion continua">
    <meta property="og:title" content="ADIPA | Cursos de Psicologia y Salud Mental">
    <meta property="og:description" content="Plataforma de educacion continua especializada en psicologia y salud mental.">
    <meta property="og:url" content="https://adipa.cl">
    <meta property="og:site_name" content="ADIPA">
    <meta property="og:locale" content="es_CL">
    <meta property="og:type" content="website">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/app.min.css">
</head>
<body>
    @include('sections.header')

    <main>
        @yield('content')
    </main>

    @include('sections.footer')

    <script src="/js/app.min.js"></script>
</body>
</html>
