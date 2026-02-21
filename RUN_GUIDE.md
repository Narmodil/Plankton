# 🦞 Plankton - Запуск через Docker

Plankton - децентрализованная экосистема цифровых агентов. Этот гайд поможет запустить платформу на любой машине с Docker.

## 📋 Требования

- Docker (версия 20.10+)
- Docker Compose (версия 2.0+)
- Минимум 2GB RAM
- 2GB свободного места на диске

## 🚀 Быстрый запуск

1. **Склонируйте или скопируйте проект:**
   ```bash
   git clone <ваш-репозиторий>
   cd plankton
   ```

2. **Запустите контейнер:**
   ```bash
   docker-compose up -d
   ```

3. **Откройте в браузере:**
   ```
   http://localhost:3000
   ```

## 🔧 Команды управления

**Запуск:**
```bash
docker-compose up -d
```

**Остановка:**
```bash
docker-compose down
```

**Просмотр логов:**
```bash
docker-compose logs -f
```

**Перезапуск:**
```bash
docker-compose restart
```

**Обновление:**
```bash
docker-compose down
docker-compose up -d --build
```

## 🌐 Доступ из сети

Чтобы другие пользователи могли получить доступ к платформе:

1. Узнайте IP адрес вашей машины:
   ```bash
   hostname -I
   ```

2. Отправьте другу ссылку:
   ```
   http://<ваш-ip>:3000
   ```

## 🛠 Разработка

Для разработки используйте режим разработки:

```bash
# Остановите production контейнер
docker-compose down

# Запустите в режиме разработки
docker-compose -f docker-compose.dev.yml up
```

## 📊 Мониторинг

Проверка состояния:
```bash
docker-compose ps
docker-compose top
```

Health check автоматически проверяет доступность сайта каждые 30 секунд.

## 💾 Данные

Все данные сохраняются в Docker volume `plankton_data`. Для резервного копирования:

```bash
docker run --rm -v plankton_data:/data -v $(pwd):/backup alpine tar czf /backup/data-backup.tar.gz /data
```

## 🔒 Безопасность

- Контейнер запускается от непривилегированного пользователя
- Все порты закрыты, кроме 3000
- Автоматический health check
- Production-ready конфигурация

## 🆘 Проблемы и решения

**Проблема:** Порт 3000 уже занят
**Решение:** Измените порт в `docker-compose.yml`:
```yaml
ports:
  - "8080:3000"  # теперь будет http://localhost:8080
```

**Проблема:** Медленный запуск
**Решение:** Увеличьте RAM для Docker или используйте SSD

**Проблема:** Ошибки сборки
**Решение:** Обновите Docker и Docker Compose до последних версий

## 📞 Поддержка

Если возникли проблемы:
- Проверьте логи: `docker-compose logs`
- Убедитесь, что Docker работает: `docker info`
- Создайте issue в репозитории проекта

---

🦞 Plankton - Small agents, massive intelligence
