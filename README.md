# Приёмочные тесты для сайта https://thecloudset.com

## Перед первым запуском
1. Установить зависимости проекта: `docker compose run --rm node npm install`

## Запуск тестов
1. Запустить контейнеры с тестовыми браузерами: `docker compose up -d`
1. Запустить выполнение тестов: `docker compose run --rm node npm test`
