# Приёмочные тесты для сайта https://thecloudset.com

## Перед первым запуском
1. Установить зависимости проекта: `docker-compose run --rm php composer install`

## Запуск тестов
1. Запустить контейнеры с тестовыми браузерами: `docker-compose up -d hub`
1. Запустить выполнение тестов: `docker-compose run --rm php vendor/bin/behat`
