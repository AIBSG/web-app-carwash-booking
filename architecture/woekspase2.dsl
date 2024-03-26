workspace {

    model {
        client = person "Клиент" "Использует приложение для клиентов"
        partner = person "Партнер" "Использует приложение для партнеров"
        admin = person "Админ" "Регистрирует партнеров в системе"

        bookingSysyem = softwareSystem "Система бронирования"{
            clientWebApp = container "Client Web App" "Приложение для клиентов"
            partnerWebApp = container "Partner Web App""Приложение для партнеров"
            backend = container "Backend"{
                authorizationAndRegistrationService = component "Сервис авторизации и регистарции" "Управление учетными записами клиентов"
                clientService = component "Клиентский сервис" "Сервис который обрабатывает запросы с приложения для клиентов"
                partnerService = component "Партнерский сервис" "Сервис который обрабатывает запросы с приложения для клиентов"
                dataBase = component "База данных"
            }
        }
        client -> clientWebApp "Использует"
        partner -> partnerWebApp "Использует"
        admin -> dataBase "Добавляет партнера"
        clientWebApp -> authorizationAndRegistrationService "API"
        partnerWebApp -> authorizationAndRegistrationService "API"
        clientWebApp -> clientService "API"
        partnerWebApp -> partnerService "API"
        clientService -> dataBase "Запись и получение данных"
        partnerService -> dataBase "Запись и получение данных"
        authorizationAndRegistrationService -> dataBase "Запись и получение данных"


        
        
    }
    views {
            component backend {
                include *
                autolayout lr
            }
            

            theme default
        }
}