<section id="cursos" class="courses" aria-label="Catalogo de cursos">
    <div class="courses__container container">
        {{-- Mobile: filter toggle + sort --}}
        <div class="courses__mobile-bar">
            <button type="button" class="courses__filter-toggle" aria-label="Abrir filtros">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="courses__filter-icon" aria-hidden="true">
                    <line x1="4" y1="6" x2="20" y2="6"/>
                    <line x1="8" y1="12" x2="20" y2="12"/>
                    <line x1="12" y1="18" x2="20" y2="18"/>
                </svg>
                Filtros
            </button>
            <div class="courses__sort courses__sort--mobile">
                <div class="courses__sort-bar">
                    <span class="courses__sort-count"><strong class="courses__sort-count-num">{{ count($courses) }}</strong> cursos encontrados</span>
                    <div class="courses__sort-control">
                        <label for="sort-select-mobile" class="courses__sort-label">ORDENAR POR</label>
                        <select id="sort-select-mobile" class="courses__sort-select js-sort-select">
                            <option value="todos">Todos</option>
                            <option value="mayor-precio">Mayor Precio</option>
                            <option value="menor-precio">Menor Precio</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="courses__layout">
            {{-- Sidebar --}}
            <aside class="courses__sidebar">
                @include('partials.sidebar-filter')
            </aside>

            {{-- Mobile sidebar backdrop --}}
            <div class="courses__sidebar-backdrop"></div>

            {{-- Mobile sidebar panel --}}
            <div class="courses__sidebar-mobile" role="dialog" aria-modal="true" aria-label="Filtros">
                @include('partials.sidebar-filter')
            </div>

            {{-- Main content --}}
            <div class="courses__main">
                {{-- BlackSale promotional banner --}}
                <div class="courses__banner">
                    <div class="courses__banner-stars">
                        <span></span><span></span><span></span><span></span><span></span>
                        <span></span><span></span><span></span><span></span><span></span>
                    </div>
                    <div class="courses__banner-content">
                        <span class="courses__banner-logo">
                            <span class="courses__banner-logo--dark">BLACK</span><span class="courses__banner-logo--red">SALE</span><span class="courses__banner-logo--white">.CL</span>
                        </span>
                        <div class="courses__banner-discount">
                            <span class="courses__banner-number">35</span>
                            <div class="courses__banner-percent">
                                <span>%</span>
                                <span>Hasta</span>
                            </div>
                            <span class="courses__banner-off">OFF</span>
                        </div>
                    </div>
                </div>

                {{-- Sort bar (desktop) --}}
                <div class="courses__sort courses__sort--desktop">
                    <div class="courses__sort-bar courses__sort-bar--redesign">
                        <h2 class="courses__sort-heading">Cursos que te permitirán potenciar tu carrera.</h2>
                        <div class="courses__sort-dropdown" id="sort-dropdown-desktop">
                            <span class="courses__sort-label">ORDENAR POR</span>
                            <button type="button" class="courses__sort-trigger js-sort-trigger">
                                <span class="courses__sort-trigger-text js-sort-trigger-text">Todos</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="courses__sort-chevron">
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </button>
                            <div class="courses__sort-menu js-sort-menu" style="display: none;">
                                <button type="button" class="courses__sort-option js-sort-option" data-value="todos">Todos</button>
                                <button type="button" class="courses__sort-option js-sort-option" data-value="mayor-precio">Mayor Precio</button>
                                <button type="button" class="courses__sort-option js-sort-option" data-value="menor-precio">Menor Precio</button>
                                <button type="button" class="courses__sort-option js-sort-option" data-value="mas-proximo">Más próximo</button>
                                <button type="button" class="courses__sort-option js-sort-option" data-value="menos-proximo">Menos próximo</button>
                            </div>
                        </div>
                    </div>
                </div>

                {{-- Grid --}}
                <div class="courses__grid" role="list">
                    @foreach($courses as $course)
                        <div class="courses__grid-item" role="listitem">
                            @include('partials.course-card', ['course' => $course])
                        </div>
                    @endforeach
                </div>

                <p class="courses__empty" style="display: none;">No se encontraron cursos para tu busqueda.</p>
            </div>
        </div>
    </div>
</section>
