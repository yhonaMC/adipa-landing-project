$(document).ready(function () {
  // ========== Mobile Menu ==========
  $(".header__hamburger").on("click", function () {
    var $mobileMenu = $(".header__mobile-menu");
    var isOpen = !$mobileMenu.prop("hidden");

    $mobileMenu.prop("hidden", isOpen);
    $(this).attr("aria-expanded", !isOpen);
    $(this).attr("aria-label", isOpen ? "Abrir menu" : "Cerrar menu");
  });

  // Close mobile menu on link click
  $(".header__mobile-link").on("click", function () {
    $(".header__mobile-menu").prop("hidden", true);
    $(".header__hamburger").attr("aria-expanded", "false");
  });

  // ========== Hero Search Cursor ==========
  var $heroInput = $('#hero-search-input');
  var $heroCursor = $('#hero-search-cursor');
  $heroInput.on('focus', function() {
    $heroCursor.hide();
  });
  $heroInput.on('blur', function() {
    if (!$heroInput.val()) {
      $heroCursor.show();
    }
  });

  // ========== Course Filtering ==========
  function filterAndSort() {
    var searchVal = $("#hero-search-input").val().trim().toLowerCase();

    // Gather active category filters
    var activeCategories = [];
    $(".courses__sidebar .sidebar-filter__checkbox-input[data-filter='category']:checked, .courses__sidebar-mobile .sidebar-filter__checkbox-input[data-filter='category']:checked").each(function () {
      var val = $(this).val();
      if (activeCategories.indexOf(val) === -1) {
        activeCategories.push(val);
      }
    });

    // Gather active modality filters
    var activeModalities = [];
    $(".courses__sidebar .sidebar-filter__checkbox-input[data-filter='modality']:checked, .courses__sidebar-mobile .sidebar-filter__checkbox-input[data-filter='modality']:checked").each(function () {
      var val = $(this).val();
      if (activeModalities.indexOf(val) === -1) {
        activeModalities.push(val);
      }
    });

    // Price range
    var priceMin = parseInt($("#price-min").val(), 10) || 0;
    var priceMax = parseInt($("#price-max").val(), 10) || 600000;

    var visibleCount = 0;

    $(".course-card").each(function () {
      var $card = $(this);
      var title = $card.find(".course-card__title").text().toLowerCase();
      var category = $card.data("category");
      var modality = $card.data("modality");
      var price = parseInt($card.data("price"), 10);
      var show = true;

      // Search filter
      if (searchVal && title.indexOf(searchVal) === -1 && category.indexOf(searchVal) === -1) {
        show = false;
      }

      // Category filter
      if (activeCategories.length > 0 && activeCategories.indexOf(category) === -1) {
        show = false;
      }

      // Modality filter
      if (activeModalities.length > 0 && activeModalities.indexOf(modality) === -1) {
        show = false;
      }

      // Price range filter
      if (price < priceMin || price > priceMax) {
        show = false;
      }

      if (show) {
        $card.closest(".courses__grid-item").show();
        visibleCount++;
      } else {
        $card.closest(".courses__grid-item").hide();
      }
    });

    // Update count
    $(".courses__sort-count-num").text(visibleCount);

    // Show/hide empty message
    if (visibleCount === 0) {
      $(".courses__empty").show();
    } else {
      $(".courses__empty").hide();
    }

    // Apply sort
    sortCourses();
  }

  // ========== Sort Functionality ==========
  function sortCourses() {
    var sortVal = $(".js-sort-select").first().val();
    var $grid = $(".courses__grid");
    var $items = $grid.children(".courses__grid-item").filter(":visible");

    if (sortVal === "todos") return;

    $items.sort(function (a, b) {
      var priceA = parseInt($(a).find(".course-card").data("price"), 10);
      var priceB = parseInt($(b).find(".course-card").data("price"), 10);

      if (sortVal === "mayor-precio") {
        return priceB - priceA;
      } else if (sortVal === "menor-precio") {
        return priceA - priceB;
      }
      return 0;
    });

    $items.each(function () {
      $grid.append($(this));
    });
  }

  // Search input handler
  $("#hero-search-input").on("input", function () {
    filterAndSort();
  });

  // Suggestion chip click
  $(".hero-search__chip").on("click", function () {
    var chipText = $(this).data("chip");
    $("#hero-search-input").val(chipText);
    filterAndSort();
  });

  // Sort select change — sync both selects
  $(".js-sort-select").on("change", function () {
    var val = $(this).val();
    $(".js-sort-select").val(val);
    filterAndSort();
  });

  // ========== Custom Sort Dropdown ==========
  $(document).on('click', '.js-sort-trigger', function() {
    var $menu = $(this).siblings('.js-sort-menu');
    var $chevron = $(this).find('.courses__sort-chevron');
    $menu.toggle();
    $chevron.toggleClass('courses__sort-chevron--open');
  });

  $(document).on('click', '.js-sort-option', function() {
    var val = $(this).data('value');
    var label = $(this).text();
    var $dropdown = $(this).closest('.courses__sort-dropdown');
    $dropdown.find('.js-sort-trigger-text').text(label);
    $dropdown.find('.js-sort-menu').hide();
    $dropdown.find('.courses__sort-chevron').removeClass('courses__sort-chevron--open');
    // Mark active
    $dropdown.find('.js-sort-option').removeClass('courses__sort-option--active');
    $(this).addClass('courses__sort-option--active');
    // Trigger existing sort logic
    $('.js-sort-select').val(val).trigger('change');
  });

  // Close dropdown when clicking outside
  $(document).on('click', function(e) {
    if (!$(e.target).closest('.courses__sort-dropdown').length) {
      $('.js-sort-menu').hide();
      $('.courses__sort-chevron').removeClass('courses__sort-chevron--open');
    }
  });

  // Sidebar checkbox filtering (handler merged with Active Filter Tags section below)
  $(document).on("change", ".sidebar-filter__checkbox-input", function () {
    // Sync checkboxes between desktop and mobile sidebars
    var filterType = $(this).data("filter");
    var filterVal = $(this).val();
    var isChecked = $(this).is(":checked");

    $(".sidebar-filter__checkbox-input[data-filter='" + filterType + "'][value='" + filterVal + "']").prop("checked", isChecked);

    filterAndSort();
    updateActiveTags();
  });

  // Price range inputs
  $(document).on("input", "#price-min, #price-max", function () {
    var min = parseInt($("#price-min").val(), 10);
    var max = parseInt($("#price-max").val(), 10);
    $("#price-min-label").text("$" + min.toLocaleString("es-CL"));
    $("#price-max-label").text("$" + max.toLocaleString("es-CL"));
    filterAndSort();
  });

  // Clear filters
  $(document).on("click", ".sidebar-filter__clear-btn", function () {
    $(".sidebar-filter__checkbox-input").prop("checked", false);
    $("#price-min").val(0);
    $("#price-max").val(600000);
    $("#price-min-label").text("$0");
    $("#price-max-label").text("$600.000");
    $("#hero-search-input").val("");
    filterAndSort();
  });

  // Collapsible filter sections
  $(document).on("click", ".sidebar-filter__section-header", function () {
    var $header = $(this);
    var $body = $header.next(".sidebar-filter__section-body");
    var isOpen = $header.attr("aria-expanded") === "true";

    if (isOpen) {
      $header.attr("aria-expanded", "false");
      $body.slideUp(200);
    } else {
      $header.attr("aria-expanded", "true");
      $body.slideDown(200);
    }
  });

  // Sidebar mobile open/close with backdrop
  $(".courses__filter-toggle").on("click", function () {
    $(".courses__sidebar-mobile").addClass("courses__sidebar-mobile--open");
    $(".courses__sidebar-backdrop").css("display", "block");
    $("body").css("overflow", "hidden");
  });

  function closeMobileSidebar() {
    $(".courses__sidebar-mobile").removeClass("courses__sidebar-mobile--open");
    $(".courses__sidebar-backdrop").css("display", "none");
    $("body").css("overflow", "");
  }

  $(".courses__sidebar-backdrop").on("click", function () {
    closeMobileSidebar();
  });

  $(document).on("click", ".sidebar-filter__close", function () {
    closeMobileSidebar();
  });

  // ========== Quick Nav ==========
  $(document).on('click', '.js-quick-nav', function() {
    var $this = $(this);
    var isActive = $this.hasClass('sidebar-filter__quick-nav-item--active');
    $('.js-quick-nav').removeClass('sidebar-filter__quick-nav-item--active');

    if (!isActive) {
      $this.addClass('sidebar-filter__quick-nav-item--active');
    }

    var navId = isActive ? null : $this.data('nav');
    applyQuickNav(navId);
  });

  function applyQuickNav(navId) {
    var $cards = $('.courses__grid-item');

    // First show all cards
    $cards.show();

    if (!navId) {
      // Re-apply existing filters
      filterAndSort();
      return;
    }

    // Get visible cards as array for sorting
    var cardsArray = $cards.toArray();

    if (navId === 'top-10') {
      cardsArray.sort(function(a, b) {
        var rA = parseFloat($(a).find('.course-card__rating-value').text()) || 0;
        var rB = parseFloat($(b).find('.course-card__rating-value').text()) || 0;
        return rB - rA;
      });
      // Show only top 10
      cardsArray.forEach(function(card, i) {
        $(card).toggle(i < 10);
      });
    } else if (navId === 'populares') {
      cardsArray.sort(function(a, b) {
        var rA = parseFloat($(a).find('.course-card__rating-value').text()) || 0;
        var rB = parseFloat($(b).find('.course-card__rating-value').text()) || 0;
        return rB - rA;
      });
    } else if (navId === 'valorados') {
      cardsArray.sort(function(a, b) {
        var rA = parseFloat($(a).find('.course-card__rating-value').text()) || 0;
        var rB = parseFloat($(b).find('.course-card__rating-value').text()) || 0;
        return rB - rA;
      });
    } else if (navId === 'nuevos') {
      // Sort by date (newest first) - dates are in DD/MM/YYYY format
      cardsArray.sort(function(a, b) {
        var dateA = parseDateFromCard($(a));
        var dateB = parseDateFromCard($(b));
        return dateB - dateA;
      });
    } else if (navId === 'ofertas') {
      // Show only discounted courses (those with countdown)
      $cards.each(function() {
        var hasDiscount = $(this).find('.course-card__countdown').length > 0;
        $(this).toggle(hasDiscount);
      });
    } else if (navId === 'pre-lanzamiento') {
      // Show only "Proximo a iniciar"
      $cards.each(function() {
        var status = $(this).find('.course-card__status span:last').text().trim();
        $(this).toggle(status === 'Proximo a iniciar');
      });
    }

    // Re-append sorted cards to maintain DOM order
    if (['top-10', 'populares', 'valorados', 'nuevos'].indexOf(navId) !== -1) {
      var $grid = $('.courses__grid');
      cardsArray.forEach(function(card) {
        $grid.append(card);
      });
    }

    updateCount();
  }

  function parseDateFromCard($card) {
    var dateText = $card.find('.course-card__date span').text().replace('Inicio : ', '').trim();
    var parts = dateText.split('/');
    if (parts.length === 3) {
      return new Date(parts[2], parts[1] - 1, parts[0]).getTime();
    }
    return 0;
  }

  function updateCount() {
    var visible = $('.courses__grid-item:visible').length;
    $('.courses__sort-count-num').text(visible);
  }

  // ========== Active Filter Tags ==========
  function updateActiveTags() {
    var tags = [];
    var seen = {};
    $('.sidebar-filter__checkbox-input:checked').each(function() {
      var $input = $(this);
      var filterType = $input.data('filter');
      var value = $input.val();
      var key = filterType + ':' + value;
      if (seen[key]) return;
      seen[key] = true;
      var label = $input.siblings('.sidebar-filter__checkbox-label').text();
      tags.push('<span class="sidebar-filter__active-tag">' + label +
        '<button type="button" class="sidebar-filter__active-tag-remove js-remove-tag" data-filter="' + filterType + '" data-value="' + value + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
        '</button></span>');
    });
    var $allContainers = $('.js-active-tags');
    if (tags.length > 0) {
      $allContainers.html(tags.join('')).show();
    } else {
      $allContainers.hide();
    }
  }

  // Remove tag by clicking X
  $(document).on('click', '.js-remove-tag', function() {
    var filterType = $(this).data('filter');
    var value = $(this).data('value');
    var $checkbox = $('.sidebar-filter__checkbox-input[data-filter="' + filterType + '"][value="' + value + '"]');
    $checkbox.prop('checked', false).trigger('change');
  });

  // ========== Contact Form Validation ==========
  $(".contact__form").on("submit", function (e) {
    e.preventDefault();

    var isValid = true;
    var name = $("#contact-name").val().trim();
    var email = $("#contact-email").val().trim();
    var message = $("#contact-message").val().trim();

    $(".contact__error").hide().text("");
    $(".contact__input").removeClass("contact__input--error");

    if (name.length < 2) {
      $('[data-field="name"]').text("El nombre debe tener al menos 2 caracteres.").show();
      $("#contact-name").addClass("contact__input--error");
      isValid = false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      $('[data-field="email"]').text("Ingresa un email valido.").show();
      $("#contact-email").addClass("contact__input--error");
      isValid = false;
    }

    if (message.length < 10) {
      $('[data-field="message"]').text("El mensaje debe tener al menos 10 caracteres.").show();
      $("#contact-message").addClass("contact__input--error");
      isValid = false;
    }

    if (isValid) {
      $(".contact__form").hide();
      $(".contact__success").fadeIn(300);
    }
  });

  $(".contact__input").on("input", function () {
    var fieldName = $(this).attr("name");
    $('[data-field="' + fieldName + '"]').hide();
    $(this).removeClass("contact__input--error");
  });

  $(".contact__success-btn").on("click", function () {
    $(".contact__success").hide();
    $(".contact__form").fadeIn(300);
    $(".contact__form")[0].reset();
  });

});
