workspace {

    model {
        client = person "Клиент" "Использует приложение для клиентов"
        partner = person "Партнер" "Использует приложение для партнеров"
        admin = person "Админ" "Регистрирует партнеров в системе"
        
        VKIDAPI = softwareSystem "VK ID API" 
        bookingSysyem = softwareSystem "Система бронирования"{
            clientWebApp = container "Client Web App" "Приложение для клиентов" "React, VK ID SDK, Ya Maps API"
            partnerWebApp = container "Partner Web App""Приложение для партнеров" "React"
            backend = container "Backend" """ASP.NET"{
                VkIdController = component "VK ID Контроллер" "Для обмена токенами"
                registrationController = component "Контроллер регистарции" "Создание учетной записи" 
                authController = component "Контроллер авторизации" "Принимает логин и пароль, возвращает JWT токен" "JwtBearer" 
                clientAccountController = component "Контроллер аккаунта" "Просмотр/редактирование информации о аккаунте" 
                clientOrdersController = component "Контроллер просмотра и добавления броней клиентом" "" 
                partnerOrdersModerationController = component "Контроллер просмотра и подтвержения броней партнером" "Предоставляет просмотр броней автомоки с возможностью соритировки"
                //clientService = component "Клиентский сервис" "Сервис который обрабатывает запросы с приложения для клиентов"
                //partnerService = component "Партнерский сервис" "Сервис который обрабатывает запросы с приложения для клиентов"
                
                VkIdService = component "Сервис VK ID" " Обмен Silent token на Access token" 
                clientOrdersService = component "Сервис просмотра и добалвеия броней" "Просмотр броней, добаление брони, просмотр свободных броней и тд" 
                partnerOrdersModerationService = component "Сервис просмотра и подтверждение броней" "Измение статуса брони, просмотр броней (соритровать по)"
                clienAccountService = component "Сервис управленения аккаунтами клиентов" "Просмотр/редактирования аккаунта, создание аккаунта" "MailKit"
                authService = component "Сервис авторизации" "Сгениерировать токен, продлить токен, проверить логин/пароль" "JwtBearer"
            }
            dataBase = container "База данных" "PostgreSQL"
        }
        client -> clientWebApp "Использует" 
        partner -> partnerWebApp "Использует"
        admin -> dataBase "Добавляет партнера"
        clientWebApp -> VkIdController "Отпровляет данные" "HTTP"
        VkIdController -> VkIdService "Передает данные для работы с ними" "Method"
        VkIdService -> VKIDAPI "Запрос на Access token" "HTTP"
        VkIdService -> dataBase "Добаляет данные пользователя в бд" "SQL"
        clientWebApp -> registrationController "Создание учетной записи" "HTTP"
        clientWebApp -> authController "Получение токена" "HTTP"
        partnerWebApp -> authController "Получение токена" "HTTP"
        clientWebApp -> clientAccountController "Получение/редактировнаие данных" "HTTP"
        clientWebApp -> clientOrdersController "Получение/добавление данных" "HTTP"
        partnerWebApp -> partnerOrdersModerationController "Получение/редактирование данных" "HTTP"
        authController -> authService  "Method"
        registrationController -> clienAccountService "Method"
        clientAccountController -> clienAccountService "Method"
        clientOrdersController -> clientOrdersService "Method"
        partnerOrdersModerationController -> partnerOrdersModerationService "Method"
        authService -> dataBase "Проверка данных" "SQL"
        clientOrdersService -> dataBase "SQL"
        clienAccountService -> dataBase "SQL"
        partnerOrdersModerationService -> dataBase "SQL"
        
        



        
        
    }
    views {
            component backend {
                include *
                autolayout lr
                include partner
                include client
                include admin
            }
            

            theme default
        }
}