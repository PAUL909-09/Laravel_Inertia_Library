# Full Setup (Laravel + Inertia)

##Clone Repository

```bash
git clone https://github.com/PAUL909-09/Laravel_Inertia_Library.git
```
---

## 1️⃣ Enter Project

```bash
cd Laravel_Inertia_Library
```

---

## 2️⃣ Install PHP Dependencies (Composer)

Make sure PHP + Composer are installed.

```bash
composer install
```

If error → check PHP version:

```bash
php -v
```

Laravel 10/11 usually requires **PHP 8.1+**

---

## 3️⃣ Setup Environment File

```bash
cp .env.example .env
```

Edit `.env` and configure database:

```env
DB_DATABASE=your_db
DB_USERNAME=root
DB_PASSWORD=
```

---

## 4️⃣ Generate App Key

```bash
php artisan key:generate
```

---

## 5️⃣ Install Node Dependencies (Inertia frontend)

```bash
npm install
```

If you don’t have Node:

```bash
node -v
```

Laravel + Vite usually needs **Node 16+**

---

## 6️⃣ Run Migrations

```bash
php artisan migrate
```

---

## 7️⃣ Run Dev Server

Terminal 1:

```bash
php artisan serve
```

Terminal 2:

```bash
npm run dev
```

Open:

```
http://127.0.0.1:8000
```

---

# Common Issues

### ❌ Composer not found

Install from: [https://getcomposer.org](https://getcomposer.org)

### ❌ npm not found

Install Node from: [https://nodejs.org](https://nodejs.org)

### ❌ Vite errors

Try:

```bash
npm run build
```





