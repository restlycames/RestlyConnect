# RestlyConnect Subscription Server

## Структура проекта
```
vercel-sub/
├── api/
│   └── sub.js       ← Основной файл с конфигом и заголовками
├── vercel.json      ← Настройки маршрутов
└── README.md
```

## Как задеплоить на Vercel

1. Установи Vercel CLI:
   ```
   npm install -g vercel
   ```

2. Войди в аккаунт:
   ```
   vercel login
   ```

3. Задеплой из папки проекта:
   ```
   cd vercel-sub
   vercel --prod
   ```

4. Твоя ссылка на подписку будет:
   ```
   https://ВАШ-ПРОЕКТ.vercel.app/sub
   ```

## Или через GitHub (проще)

1. Создай новый репозиторий на GitHub
2. Залей туда эти файлы
3. Зайди на vercel.com → New Project → Import из GitHub
4. Vercel сам всё задеплоит, ссылка будет готова

## Добавить новые серверы

Открой `api/sub.js` и в массив `config` добавь ещё один объект конфига с новым тегом `ru2`, `ru3` и т.д.
Балансер уже настроен на `["ru1","ru2","ru3","ru4","ru5"]` — просто добавляй outbounds с нужными тегами.

## HTTP заголовки которые отдаёт сервер

- `profile-title: RestlyConnect`
- `support-url: https://t.me/restlyconnect`  
- `profile-update-interval: 24`
- `announce: UPD: 22.02.2026 22:15 | тгк @restlyconnect`
