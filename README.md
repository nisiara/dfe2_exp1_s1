# Desarrollo Frontend II
Aplicación web básica desarrollada con React la cual despliega un catálogo de vehículos. La finalidad es usar la libreria de React Router para navegar por las distintas 'páginas' de la aplicación.

## ✨ Características

- **Página principal**: Muestra una imagen de bienvenida de la automotora
- **Filtrado por tipo**: Permite visualizar vehículos filtrados por categoría (Sedán, SUV, Deportivo, etc)
- **Rutas dinámicas**: Navegación mediante React Router DOM v7
- **Listado dinámico**: Los tipos de vehículos se generan automáticamente desde los datos

## 🛠️ Tecnologías utilizadas

- React
- React Router DOM v7.9.4
- SASS para estilos
- Vite

## 📐 Estructura de rutas

- `/` - Página principal con imagen de vitrina
- `/type/:type` - Listado de vehículos filtrados por tipo (ej: `/type/sedan`)

## ⚙️ Componentes principales

- **HomePage**: Página de inicio con imagen de la automotora
- **CarTypePage**: Página que recibe el parámetro de tipo y filtra los vehículos
- **CarList**: Componente que lista los vehículos según el tipo recibido

## ✏️ Datos

Los datos de los vehículos se encuentran en `/public/data/data.js`