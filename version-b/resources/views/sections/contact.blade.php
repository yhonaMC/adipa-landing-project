<section id="contacto" class="contact" aria-label="Formulario de contacto">
    <div class="contact__container container">
        <h2 class="contact__title">Contactanos</h2>

        <div class="contact__success" style="display: none;" role="alert">
            <div class="contact__success-icon">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
            </div>
            <h3 class="contact__success-title">Mensaje enviado con exito</h3>
            <p class="contact__success-text">Nos pondremos en contacto contigo pronto.</p>
            <button type="button" class="contact__success-btn">Enviar otro mensaje</button>
        </div>

        <form class="contact__form" novalidate>
            <div class="contact__field">
                <label for="contact-name" class="contact__label">Nombre</label>
                <input type="text" id="contact-name" name="name" class="contact__input" placeholder="Tu nombre">
                <p class="contact__error" data-field="name"></p>
            </div>

            <div class="contact__field">
                <label for="contact-email" class="contact__label">Email</label>
                <input type="email" id="contact-email" name="email" class="contact__input" placeholder="tu@email.com">
                <p class="contact__error" data-field="email"></p>
            </div>

            <div class="contact__field">
                <label for="contact-message" class="contact__label">Mensaje</label>
                <textarea id="contact-message" name="message" rows="4" class="contact__input contact__input--textarea" placeholder="Escribe tu mensaje aqui..."></textarea>
                <p class="contact__error" data-field="message"></p>
            </div>

            <button type="submit" class="contact__submit">Enviar mensaje</button>
        </form>
    </div>
</section>
