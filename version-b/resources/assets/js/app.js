$(document).ready(function () {
  // Header hamburger toggle
  $(".header__hamburger").on("click", function () {
    var $mobileNav = $(".header__mobile-nav");
    var isOpen = !$mobileNav.prop("hidden");

    $mobileNav.prop("hidden", isOpen);
    $(this).attr("aria-expanded", !isOpen);
    $(this).attr("aria-label", isOpen ? "Abrir menu" : "Cerrar menu");
  });

  // Close mobile menu on link click
  $(".header__mobile-link").on("click", function () {
    $(".header__mobile-nav").prop("hidden", true);
    $(".header__hamburger").attr("aria-expanded", "false");
  });

  // Category filter
  $(".category-filter__pill").on("click", function () {
    var category = $(this).data("category");

    $(".category-filter__pill").removeClass("category-filter__pill--active");
    $(".category-filter__pill").attr("aria-selected", "false");
    $(this).addClass("category-filter__pill--active");
    $(this).attr("aria-selected", "true");

    if (category === "all") {
      $(".course-card").fadeIn(300);
      $(".courses__empty").hide();
    } else {
      $(".course-card").each(function () {
        if ($(this).data("category") === category) {
          $(this).fadeIn(300);
        } else {
          $(this).fadeOut(200);
        }
      });

      setTimeout(function () {
        var visibleCards = $(".course-card:visible").length;
        if (visibleCards === 0) {
          $(".courses__empty").show();
        } else {
          $(".courses__empty").hide();
        }
      }, 350);
    }
  });

  // Contact form validation
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
