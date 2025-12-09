
# PROYECTO 5: Aplicación Web con React
## Alumno: Ignacio Prieto

A brief description of what this project does and who it's for

Explorador de Anime y Manga (Jikan API Client)
Este proyecto es una aplicación web dinámica desarrollada con React y Material UI (MUI). Su objetivo principal es demostrar el consumo eficiente de una API externa (Jikan API) para mostrar información de Top Animes y Mangas, además de integrar contenido aleatorio.

Tecnologías y Librerías Utilizadas
Categoría - Librería
Framework - React (Vite/CRA)
Estilos/UI - Material UI (MUI)
Llamadas HTTP - Axios
Rutas - React Router DOM v6

API y Endpoints Consumidos
Este proyecto interactúa con la Jikan API (API no oficial de MyAnimeList), una API pública que no requiere clave de autenticación (API Key).

Endpoint - Método HTTP - Uso en el Proyecto
/top/anime - GET - Obtener las listas de los animes mejor calificados.
/top/manga - GET - Obtener las listas de los mangas mejor calificados.

Guía de Instalación
Sigue estos pasos para clonar el repositorio, instalar las dependencias e iniciar el proyecto en tu máquina local.
1. Clonar el Repositorio: Abre tu terminal y ejecuta el siguiente comando para clonar el proyecto desde GitHub:
Bash
git clone https://github.com/NachoPrietoS/Proyecto-5-UDD-C20.git

Navega al directorio del proyecto:
Bash
cd Proyecto-5-UDD-C20

2. Instalación de DependenciasAntes de iniciar el servidor, debes instalar todas las librerías listadas anteriormente (Axios, MUI, Router, etc.).Ejecuta el siguiente comando:
Bash
npm install

3. Iniciar el ProyectoUna vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo.
Bash
npm run dev

El proyecto se abrirá automáticamente en tu navegador, generalmente en la dirección http://localhost:5173 (si estás usando Vite) o http://localhost:3000.