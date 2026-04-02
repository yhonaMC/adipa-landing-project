FROM php:8.3-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl unzip nodejs npm \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /app

# Copy only version-b
COPY version-b/ .

# Install PHP dependencies
RUN composer install --no-dev --no-scripts --no-autoloader

# Install Node dependencies
RUN npm ci

# Finish composer autoload
RUN composer dump-autoload --optimize

# Build frontend assets
RUN npx gulp

# Setup Laravel
RUN cp .env.example .env \
    && php artisan key:generate

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
