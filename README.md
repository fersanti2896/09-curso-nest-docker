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
2. Ejecutar el comando: 
```
npm install
```
3. Tener `Nest CLI` instalando: 
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos: 
```
docker-compose up -d
```
5. Reconstruir la base de datos con la semilla `SEED` por petición de tipo `GET`:
```
http://localhost:3000/api/v2/seed
```

### Tecnologías usadas:
* MongoDB
* Nest