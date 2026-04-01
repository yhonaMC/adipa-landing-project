<section id="cursos" class="courses" aria-label="Catalogo de cursos">
    <div class="courses__container container">
        <h2 class="courses__title">Nuestros Cursos</h2>
        @include('partials.category-filter', ['categories' => $categories])
        <div class="courses__grid" role="tabpanel">
            @foreach($courses as $course)
                @include('partials.course-card', ['course' => $course])
            @endforeach
        </div>
        <p class="courses__empty" style="display: none;">No se encontraron cursos en esta categoria.</p>
    </div>
</section>
