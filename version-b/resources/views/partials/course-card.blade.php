<article class="course-card" data-category="{{ $course['category'] }}" data-modality="{{ $course['modality'] }}" data-price="{{ $course['discountPrice'] }}">
    {{-- Countdown timer bar --}}
    <div class="course-card__countdown">
        <span class="course-card__countdown-label">Descuento termina en</span>
        <span class="course-card__countdown-timer">
            <span>{{ str_pad($course['discountEndsIn']['days'], 2, '0', STR_PAD_LEFT) }}</span><span class="course-card__countdown-unit">D</span>
            <span class="course-card__countdown-sep">:</span>
            <span>{{ str_pad($course['discountEndsIn']['hours'], 2, '0', STR_PAD_LEFT) }}</span><span class="course-card__countdown-unit">H</span>
            <span class="course-card__countdown-sep">:</span>
            <span>{{ str_pad($course['discountEndsIn']['minutes'], 2, '0', STR_PAD_LEFT) }}</span><span class="course-card__countdown-unit">M</span>
            <span class="course-card__countdown-sep">:</span>
            <span>{{ str_pad($course['discountEndsIn']['seconds'], 2, '0', STR_PAD_LEFT) }}</span><span class="course-card__countdown-unit">S</span>
        </span>
    </div>

    {{-- Image area --}}
    <div class="course-card__image-wrapper">
        <img src="{{ $course['image'] }}" alt="{{ $course['title'] }}" class="course-card__image" loading="lazy">

        {{-- Rating badge (bottom-left) --}}
        <div class="course-card__rating">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="#FACC15" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="course-card__rating-value">{{ $course['rating'] }}</span>
        </div>

        {{-- Modality badge (bottom-right) --}}
        <div class="course-card__modality">
            <div class="course-card__tooltip-group">
                <div class="course-card__tooltip-trigger">
                    <span>i</span>
                </div>
                <div class="course-card__tooltip-box">
                    {{ $course['tooltipText'] }}
                </div>
            </div>
            <span class="course-card__modality-text">{{ $course['modality'] }}</span>
            <span class="course-card__modality-dot course-card__modality-dot--{{ strtolower(str_replace(' ', '-', $course['modality'])) }}"></span>
        </div>
    </div>

    {{-- Card body --}}
    <div class="course-card__body">
        {{-- Category tag --}}
        <span class="course-card__type-tag">{{ $course['type'] }}</span>

        <div>
            {{-- Title --}}
            <h3 class="course-card__title">{{ $course['type'] }}: {{ $course['title'] }}</h3>

            {{-- Date + Status row --}}
            <div class="course-card__date-status">
                <div class="course-card__date">
                    <svg height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span>Inicio : {{ $course['startDate'] }}</span>
                </div>
                <div class="course-card__status">
                    <span class="course-card__status-dot"></span>
                    <span>{{ $course['status'] }}</span>
                </div>
            </div>
        </div>

        <div>
            {{-- Price section --}}
            <div class="course-card__prices">
                <div class="course-card__price-row">
                    <svg height="20" viewBox="0 0 24 24" fill="#ff4500" aria-hidden="true">
                        <path d="M12 2C12 2 7 8 7 13a5 5 0 0010 0c0-3-2-6-2-6s-1 3-3 3c0-2 0-8 0-8z"/>
                    </svg>
                    <span class="course-card__price-current">${{ number_format($course['discountPrice'], 0, ',', '.') }} CLP</span>
                    <span class="course-card__discount">-{{ round((($course['originalPrice'] - $course['discountPrice']) / $course['originalPrice']) * 100) }}%</span>
                </div>
                <div class="course-card__price-original-row">
                    <span class="course-card__price-original">${{ number_format($course['originalPrice'], 0, ',', '.') }} CLP</span>
                </div>
            </div>

            {{-- Buttons row --}}
            <div class="course-card__buttons">
                <button type="button" class="course-card__cta">Ver detalle +</button>
                <button type="button" class="course-card__cart-btn" aria-label="Agregar al carrito">
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="9" cy="21" r="1"/>
                        <circle cx="20" cy="21" r="1"/>
                        <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</article>
