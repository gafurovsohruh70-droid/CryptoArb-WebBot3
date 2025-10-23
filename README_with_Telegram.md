# 🪙 CryptoArb-WebBot  
**Интеллектуальный арбитражный веб-бот с Telegram-интеграцией и автообновляемой панелью**

<p align="center">
  <a href="https://cryptoarb-webbot.railway.app" target="_blank">
    <img src="https://img.shields.io/badge/Web%20Panel-Live%20Demo-38B2AC?style=for-the-badge&logo=vercel" alt="Web Demo">
  </a>
  <a href="https://t.me/cryptoarb_web_bot" target="_blank">
    <img src="https://img.shields.io/badge/Telegram-Bot-blue?style=for-the-badge&logo=telegram" alt="Telegram Bot">
  </a>
  <a href="https://github.com/username/cryptoarb-webbot" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-Repo-black?style=for-the-badge&logo=github" alt="GitHub Repo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs">
  <img src="https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwindcss">
  <img src="https://img.shields.io/badge/Telegram%20Bot-Telegraf-blue?logo=telegram">
  <img src="https://img.shields.io/badge/PostgreSQL-16-blue?logo=postgresql">
  <img src="https://img.shields.io/badge/Deployed%20on-Railway-0B0D0E?logo=railway">
  <img src="https://img.shields.io/badge/License-MIT-green">
</p>

---

## 📖 Описание

**CryptoArb-WebBot** — это комплексная система для мониторинга криптоарбитражных возможностей в реальном времени.  
Проект объединяет **Next.js веб-панель** и **Telegram-бота**, синхронизированных через общую базу данных PostgreSQL.  
Пользователи получают автоматические уведомления при обнаружении выгодных спредов между биржами.

---

## ⚙️ Основные возможности

### 💻 Веб-панель
- Таблица активных торговых пар (только с актуальными спредами)  
- Столбиковый график Recharts  
- Автообновление данных каждые 30 секунд  
- Переключение темы 🌙 / ☀️  
- Перевод интерфейса 🇷🇺 / 🇬🇧  
- История уведомлений (24 часа)  
- Панель пользователей (добавление друзей)  
- Виджет статуса бота “🟢 Активен / 🔴 Отключён”  
- Современный адаптивный дизайн (Tailwind + Dark/Light UI)

### 🤖 Telegram-бот
- Находит арбитражные пары между биржами  
- Исключает пары с приостановленным вводом/выводом  
- Уведомляет, если спред > **1%**  
- Не спамит — одно уведомление до исчезновения спреда  
- Ведёт историю уведомлений в базе данных  
- Команды: `/start`, `/help`, `/panel`  
- Работает автономно в фоне (Polling)

---

## 🧩 Архитектура

```mermaid
graph TD
A[PostgreSQL DB] <--> B[Telegram Bot]
A --> C[Next.js API]
C --> D[Web Panel]

B -->|HTTP запрос /api/spreads| C
D -->|Interval 30s автообновление| C
```

---

## 🧠 Технологический стек

| Компонент | Технологии |
|------------|-------------|
| Frontend | Next.js 14, React 18, TailwindCSS, Recharts, i18next |
| Backend | Node.js (API Routes), Prisma ORM |
| Bot | Telegraf.js |
| Database | PostgreSQL |
| DevOps | Docker, Railway, GitHub Actions |
| Design | Tailwind + Light/Dark Themes |

---

## 🧱 Структура проекта

```
cryptoarb-webbot/
├── web/                     # Веб-интерфейс (Next.js)
├── bot/                     # Telegram-бот (Telegraf)
├── prisma/                  # ORM-схема Prisma
├── docs/                    # Документация проекта
│   ├── LOCAL_SETUP.md
│   ├── DEPLOY_RAILWAY.md
│   ├── ARCHITECTURE.md
│   └── API_REFERENCE.md
├── docker-compose.yml       # Локальный запуск
└── .github/workflows/       # CI/CD деплой
```

---

## 🧰 Запуск проекта

### 🔧 Локально
```bash
docker-compose up --build
```
Затем открой:  
👉 [http://localhost:3000](http://localhost:3000)

### ☁️ Деплой на Railway
Подробная инструкция: [docs/DEPLOY_RAILWAY.md](./docs/DEPLOY_RAILWAY.md)

---

## 🧪 API эндпоинты

| Endpoint | Метод | Описание |
|-----------|--------|-----------|
| `/api/spreads` | GET | Список активных пар и спредов |
| `/api/status` | GET | Статус бота и панели |
| `/api/notifications` | GET | История уведомлений (24ч) |
| `/api/users` | GET | Пользователи |
| `/api/add-friend` | POST | Добавление друга |
| `/api/settings` | POST | Настройки темы и языка |

📘 Подробнее: [docs/API_REFERENCE.md](./docs/API_REFERENCE.md)

---

## 🚀 Особенности
- Полностью автоматический деплой (GitHub → Railway)  
- Минимальная задержка данных  
- Универсальный дизайн под desktop и mobile  
- Безопасное хранение токенов (ENV + Prisma)  
- Поддержка мультиязычности и тем  

---

## 🧩 Лицензия
Проект распространяется под лицензией **MIT**.  
Свободно используйте, дорабатывайте и деплойте под свои нужды.
