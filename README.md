# Eurovision Carousel 🎶

# [👉 ENLACE A LA PÁGINA WEB 👈](https://eurovision-carousel.vercel.app)

## Descripción del Proyecto

Este proyecto es una aplicación web interactiva desarrollada para visualizar la historia y los detalles del **Festival de la Canción de Eurovisión**. La aplicación consume datos en tiempo real de una API pública y los presenta a través de una interfaz moderna y dinámica.

El objetivo principal es permitir a los usuarios explorar las diferentes ediciones del festival, conocer a los participantes, ver los resultados de las votaciones y acceder a detalles multimedia.

## Funcionalidades Principales

Hemos implementado las siguientes características:

- **Navegación por Años**: Un selector intuitivo para elegir y cargar la información de cualquier edición del festival.
- **Carrusel de Participantes**: Visualización fluida de los artistas y canciones mediante `Embla Carousel`.
- **Detalles Completos**:
  - **Información del Artista**: Tarjetas detalladas con foto y datos del país.
  - **Letras (Lyrics)**: Visualización de la letra de las canciones participantes.
  - **Resultados y Puntuaciones**: Desglose de puntos recibidos (Jurado vs Televoto).
  - **Multimedia**: Integración de videos de las actuaciones.
- **Interfaz Reactiva**: Diseño adaptable (Responsive) utilizando Tailwind CSS para asegurar una buena experiencia en móviles y escritorio.
- **Gestión de Estados**: Manejo eficiente de la carga de datos (Loading states).

## Stack Tecnológico

- **Frontend**: React + Vite
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + CSS Modules
- **Componentes UI**: Radix UI (primitivos), Embla Carousel
- **Iconos**: Lucide React
- **Datos**: API REST externa (`eurovisionapi.runasp.net`)

## Actualización Reciente (Fix API)

Se ha realizado una corrección crítica en la capa de conexión con la API (`src/api/api.ts`).
Debido a cambios en el proveedor de datos, se han actualizado los endpoints para apuntar a la nueva estructura de rutas:

- Se ha migrado de `/api/contests/...` a `/api/senior/contests/...`.
- Esto soluciona el problema de carga infinita ("Loading...") que ocurría al intentar obtener los datos de las ediciones y listas de años.

---

_Desarrollado como practica de desarrollo web moderno._
