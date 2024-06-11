## Features 
- Users (admin and user role) - user maybe in this case hospital staff
- User management (Only admin can create new user with role)
- Authentication - Using laravel default authentication with react and inertia
- Authorization - Route, API and Component based authorization based on user roles (admin and user)
- Tanstack Table (Reusable)
- Search Filter
- Form helper with inertia
- Patient management (And histories)
- Toast notify
- Pagination

### ENV Setup

#### Copy .env.example file then create .env file and paste. Update the database credentials

- DB_CONNECTION=mysql
- DB_HOST=127.0.0.1
- DB_PORT=3306
- DB_DATABASE=patient_management
- DB_USERNAME=
- DB_PASSWORD=

### Laravel Setup
```php
   composer install
   php artisan generate:key
   php artisan migrate
   php artisan db:seed
   php artisan serve
```
