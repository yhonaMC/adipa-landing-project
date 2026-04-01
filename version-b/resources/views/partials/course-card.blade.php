<article class="course-card" data-category="{{ $course['category'] }}">
    <div class="course-card__image-wrapper">
        <img src="{{ $course['image'] }}" alt="{{ $course['title'] }}" class="course-card__image" loading="lazy">
        <div class="course-card__modality">
            <span class="course-card__modality-dot course-card__modality-dot--{{ strtolower(str_replace(' ', '-', $course['modality'])) }}"></span>
            <span class="course-card__modality-text">{{ $course['modality'] }}</span>
        </div>
        <div class="course-card__rating">
            <svg class="course-card__star" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="course-card__rating-value">{{ $course['rating'] }}</span>
            <span class="course-card__rating-count">({{ $course['reviewCount'] }})</span>
        </div>
    </div>
    <div class="course-card__body">
        <div>
            <span class="course-card__type-tag">Curso</span>
            <h3 class="course-card__title">{{ $course['title'] }}</h3>
            <p class="course-card__instructor">{{ $course['instructor'] }}</p>
            <p class="course-card__date">Inicio: {{ $course['startDate'] }}</p>
        </div>
        <div>
            <div class="course-card__prices">
                <span class="course-card__price-current">${{ number_format($course['discountPrice'], 0, ',', '.') }} CLP</span>
                <span class="course-card__price-original">${{ number_format($course['originalPrice'], 0, ',', '.') }} CLP</span>
                <span class="course-card__discount">-{{ round((($course['originalPrice'] - $course['discountPrice']) / $course['originalPrice']) * 100) }}%</span>
            </div>
            <button type="button" class="course-card__cta">Ver curso</button>
        </div>
    </div>
</article>
