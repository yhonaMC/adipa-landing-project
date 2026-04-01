<header class="header">
    {{-- Primary Bar (70px) --}}
    <div class="header__primary">
        <div class="header__primary-inner container">
            {{-- Logo --}}
            <a href="/" class="header__logo" aria-label="ADIPA Home">
                <span class="header__logo-text">
                    <span class="header__logo-letter header__logo-letter--purple">A</span><span class="header__logo-letter header__logo-letter--blue">D</span><span class="header__logo-letter header__logo-letter--purple">I</span><span class="header__logo-letter header__logo-letter--blue">P</span><span class="header__logo-letter header__logo-letter--purple">A</span>
                </span>
            </a>

            {{-- Search Bar (desktop only) --}}
            <div class="header__search">
                <div class="header__search-wrapper">
                    <input type="text" placeholder="¿Que quieres aprender?" class="header__search-input" aria-label="Buscar cursos" readonly>
                    <button type="button" class="header__search-btn" aria-label="Buscar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="11" cy="11" r="8"/>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                    </button>
                </div>
            </div>

            {{-- Right Actions (desktop) --}}
            <div class="header__actions">
                <a href="#login" class="header__action-link">Iniciar Sesion</a>
                <a href="#register" class="header__btn header__btn--primary">Registrate</a>
                <button type="button" class="header__cart-btn" aria-label="Carrito de compras">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                    </svg>
                </button>
            </div>

            {{-- Hamburger (mobile) --}}
            <button type="button" class="header__hamburger" aria-label="Abrir menu" aria-expanded="false">
                <span class="header__hamburger-line"></span>
                <span class="header__hamburger-line"></span>
                <span class="header__hamburger-line"></span>
            </button>
        </div>
    </div>

    {{-- Secondary Bar (60px, desktop only) --}}
    <nav class="header__secondary" aria-label="Navegacion secundaria">
        <div class="header__secondary-inner container">
            <a href="#descubre" class="header__nav-link">Descubre ADIPA
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <a href="#recursos" class="header__nav-link">Recursos
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <a href="#seminarios" class="header__nav-link">Seminarios</a>
            <a href="#congreso" class="header__nav-link">Congreso</a>
            <a href="#especializaciones" class="header__nav-link">Especializaciones</a>
            <a href="#acreditaciones" class="header__nav-link">Acreditaciones</a>
            <a href="#sesiones-magistrales" class="header__nav-link">Sesiones Magistrales</a>
            <a href="#diplomados" class="header__nav-link">Diplomados</a>
            <a href="#cursos" class="header__nav-link header__nav-link--current" aria-current="page">Cursos</a>
        </div>
    </nav>

    {{-- Mobile Menu --}}
    <div class="header__mobile-menu" hidden>
        <nav class="header__mobile-nav" aria-label="Navegacion movil">
            <a href="#descubre" class="header__mobile-link">
                <span>Descubre ADIPA</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <a href="#recursos" class="header__mobile-link">
                <span>Recursos</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
            <a href="#seminarios" class="header__mobile-link"><span>Seminarios</span></a>
            <a href="#congreso" class="header__mobile-link"><span>Congreso</span></a>
            <a href="#especializaciones" class="header__mobile-link"><span>Especializaciones</span></a>
            <a href="#acreditaciones" class="header__mobile-link"><span>Acreditaciones</span></a>
            <a href="#sesiones-magistrales" class="header__mobile-link"><span>Sesiones Magistrales</span></a>
            <a href="#diplomados" class="header__mobile-link"><span>Diplomados</span></a>
            <a href="#cursos" class="header__mobile-link header__mobile-link--current" aria-current="page"><span>Cursos</span></a>
            <div class="header__mobile-actions">
                <a href="#login" class="header__btn header__btn--outline">Iniciar Sesion</a>
                <a href="#register" class="header__btn header__btn--primary">Registrate</a>
            </div>
        </nav>
    </div>
</header>
