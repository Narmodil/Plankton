FROM node:18-alpine

# Установка зависимостей для headless Chrome (если нужен)
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont

WORKDIR /app

# Копируем package файлы и устанавливаем зависимости
COPY package*.json ./
RUN npm ci --only=production

# Копируем исходный код
COPY . .

# Создаем production build
RUN npm run build

# Переменные окружения
ENV NODE_ENV=production
ENV PORT=3000

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]

# Метаданные
LABEL maintainer="Дмитрий <@borealdrive>"
LABEL version="0.1.0"
LABEL description="Plankton - Decentralized Agent Ecosystem"