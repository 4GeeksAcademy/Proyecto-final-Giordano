Tickeate: Plataforma para Publicación y Venta de Entradas de Eventos

Tickeate es una plataforma web que permite a los usuarios publicar eventos y poner a la venta entradas para estos eventos. Desarrollada utilizando React.js para el frontend y Python/Flask para la API backend, Tickeate es una solución completa para la gestión de eventos y venta de entradas.

Características Principales
 - Integración con Pipenv para la gestión de paquetes.
 - Uso de archivos `.env` para la configuración de variables de entorno.
 - Implementación de Stripe para la gestión de pagos en línea.
 - Integración de SQLAlchemy para la abstracción de bases de datos.
   
Instalación

Instalación del Backend
1. Instala los paquetes de Python:
`$ pipenv install`
3. Realiza las migraciones de la base de datos:
`$ pipenv run migrate` # omite este paso si no has hecho cambios en los modelos en ./src/api/models.py
4. Ejecuta las migraciones:
`$ pipenv run upgrade`
5. Ejecuta la aplicación:
`$ pipenv run start`

Instalación del Front-End
1. Instala los paquetes del frontend:
`$ npm install`
2. Inicia el servidor de desarrollo:
`$ npm run start`

Integración de Stripe
Para habilitar la gestión de pagos con Stripe, asegúrate de instalar las siguientes dependencias:
1. Dependencias del frontend:
`$ npm install @stripe/react-stripe-js @stripe/stripe-js`
2. Dependencias del backend:
`$ pipenv install stripe`

Este proyecto fue desarrollado por Dário Duarte, Julio Vasquez y Giordano Lara como parte de su formación en 4Geeks Academy.
Puedes encontrar otros templates y recursos similares en la página de Github de la escuela.
