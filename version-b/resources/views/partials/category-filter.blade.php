<div class="category-filter" role="tablist" aria-label="Filtrar cursos por categoria">
    <button type="button" role="tab" aria-selected="true" class="category-filter__pill category-filter__pill--active" data-category="all">
        Todos
    </button>
    @foreach($categories as $category)
        <button type="button" role="tab" aria-selected="false" class="category-filter__pill" data-category="{{ $category['id'] }}">
            {{ $category['name'] }}
        </button>
    @endforeach
</div>
