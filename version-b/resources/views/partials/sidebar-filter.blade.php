<div class="sidebar-filter">
    {{-- Header row --}}
    <div class="sidebar-filter__header">
        <span class="sidebar-filter__title">Filtros</span>
        <button type="button" class="sidebar-filter__clear-btn">Borrar filtros</button>
    </div>

    {{-- Mobile close button (only shown inside mobile panel) --}}
    <button type="button" class="sidebar-filter__close" aria-label="Cerrar filtros">&times;</button>

    {{-- Filter sections --}}
    <div class="sidebar-filter__sections">
        {{-- Area Tematica --}}
        <div class="sidebar-filter__section" data-section="area">
            <button type="button" class="sidebar-filter__section-header" aria-expanded="true">
                <span>Area Tematica</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sidebar-filter__chevron" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
            <div class="sidebar-filter__section-body">
                <label class="sidebar-filter__checkbox-item">
                    <span class="sidebar-filter__checkbox-box"></span>
                    <input type="checkbox" class="sidebar-filter__checkbox-input" data-filter="category" value="psicologia-clinica">
                    <span class="sidebar-filter__checkbox-label">Psicologia Clinica y Salud Mental</span>
                </label>
                <label class="sidebar-filter__checkbox-item">
                    <span class="sidebar-filter__checkbox-box"></span>
                    <input type="checkbox" class="sidebar-filter__checkbox-input" data-filter="category" value="neurociencias">
                    <span class="sidebar-filter__checkbox-label">Neurociencias</span>
                </label>
                <label class="sidebar-filter__checkbox-item">
                    <span class="sidebar-filter__checkbox-box"></span>
                    <input type="checkbox" class="sidebar-filter__checkbox-input" data-filter="category" value="psicologia-infantil">
                    <span class="sidebar-filter__checkbox-label">Psicologia Infantil</span>
                </label>
                <label class="sidebar-filter__checkbox-item">
                    <span class="sidebar-filter__checkbox-box"></span>
                    <input type="checkbox" class="sidebar-filter__checkbox-input" data-filter="category" value="terapia-de-pareja">
                    <span class="sidebar-filter__checkbox-label">Terapia de Pareja</span>
                </label>
            </div>
        </div>

        {{-- Modalidad --}}
        <div class="sidebar-filter__section" data-section="modalidad">
            <button type="button" class="sidebar-filter__section-header" aria-expanded="true">
                <span>Modalidad</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sidebar-filter__chevron" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
            <div class="sidebar-filter__section-body">
                <label class="sidebar-filter__checkbox-item">
                    <span class="sidebar-filter__checkbox-box"></span>
                    <input type="checkbox" class="sidebar-filter__checkbox-input" data-filter="modality" value="En Vivo">
                    <span class="sidebar-filter__checkbox-label">En Vivo</span>
                </label>
                <label class="sidebar-filter__checkbox-item">
                    <span class="sidebar-filter__checkbox-box"></span>
                    <input type="checkbox" class="sidebar-filter__checkbox-input" data-filter="modality" value="Online">
                    <span class="sidebar-filter__checkbox-label">Online</span>
                </label>
                <label class="sidebar-filter__checkbox-item">
                    <span class="sidebar-filter__checkbox-box"></span>
                    <input type="checkbox" class="sidebar-filter__checkbox-input" data-filter="modality" value="Presencial">
                    <span class="sidebar-filter__checkbox-label">Presencial</span>
                </label>
            </div>
        </div>

        {{-- Rango de Precio --}}
        <div class="sidebar-filter__section" data-section="precio">
            <button type="button" class="sidebar-filter__section-header" aria-expanded="true">
                <span>Rango de Precio</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sidebar-filter__chevron" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </button>
            <div class="sidebar-filter__section-body">
                <div class="sidebar-filter__price-range">
                    <div class="sidebar-filter__price-labels">
                        <span id="price-min-label">$0</span>
                        <span id="price-max-label">$600.000</span>
                    </div>
                    <div class="sidebar-filter__price-slider">
                        <label for="price-min" class="sidebar-filter__price-slider-label">Precio minimo</label>
                        <input type="range" id="price-min" class="sidebar-filter__range-input" min="0" max="600000" step="10000" value="0">
                    </div>
                    <div class="sidebar-filter__price-slider">
                        <label for="price-max" class="sidebar-filter__price-slider-label">Precio maximo</label>
                        <input type="range" id="price-max" class="sidebar-filter__range-input" min="0" max="600000" step="10000" value="600000">
                    </div>
                    <p class="sidebar-filter__price-hint">$0 - $600.000</p>
                </div>
            </div>
        </div>
    </div>
</div>
