# Variables de Entorno - Dockerizar Aplicación - Pokedex

Esta sección se enfoca en las variables de entorno y dockerizar la API REST. Los temas que se ven son:

- Dockerizacion de la `API REST`.
- Mongo Atlas.
- Creación de `Env file`.
- Uso de `joi`.
- Validation de `Schemas`.
- `Configuration Module`.
- Despliegues.
- Creación de `Dockerfile`.

### Configuraciones para levantar nuestro proyecto

1. Clonar el repositorio.
2. Renombrar el archivo `.env.template` a `.env` y definir las variables de entorno. 
3. Ejecutar el comando: 
```
npm install
```
4. Tener `Nest CLI` instalando: 
```
npm i -g @nestjs/cli
```
5. Levantar la base de datos: 
```
docker-compose up -d
```
6. Levantar el proyecto con el comando: 
```
npm run start:dev
```
7. Reconstruir la base de datos con la semilla `SEED` por petición de tipo `GET` y la variable `PORT`:
```
http://localhost:PORT/api/v2/seed
```

### Tecnologías usadas:
* MongoDB
* Nest
* Docker