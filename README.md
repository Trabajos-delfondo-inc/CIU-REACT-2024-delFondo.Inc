# Trabajo Práctico - Construcción de Interfaces de Usuario

**Trabajo Práctico de React: Desarrollo de Frontend en React para el Sistema de Gestión de Productos**

## Descripción del Proyecto

La empresa de manufactura que desarrolló el sistema backend para gestionar productos, fabricantes y componentes desea ahora un frontend en React que permita a los usuarios visualizar la información almacenada en la API de gestión de productos. El sistema solo necesita mostrar información, sin opciones de modificación ni eliminación, enfocándose en la navegación y presentación del catálogo de productos.

### Objetivo

Construir una aplicación web en React que consuma el backend de la API de gestión de productos. La aplicación permitirá a los usuarios:

- Navegar por un catálogo de productos.
- Visualizar detalles de productos específicos.
- Consultar fabricantes y componentes asociados.

## Páginas

### Página Principal: Inicio
Debe contener:
- Presentación de la empresa, incluyendo su historia y filosofía.
- Menú de navegación para acceder a todas las secciones.
- Imágenes representativas con texto alternativo y links a videos de YouTube.
- Un video incrustado (iframe) de YouTube.
- Párrafos y títulos descriptivos.
- Información de contacto: dirección, teléfono y horario.
- Mapa interactivo (iframe de Google Maps) mostrando la ubicación.
- Pie de página con los datos de los integrantes del grupo.

### Página de Catálogo de Productos
Debe mostrar:
- Lista de productos con nombre, descripción, precio e imagen.
- Posibilidad de hacer clic en un producto para ver más detalles.
- Uso de `fetch` para obtener datos desde la API.
- **Opcional**: Selección de productos y cálculo de precio total.

### Página de Detalle de Producto
Debe mostrar:
- Detalles completos de un producto, incluyendo descripción, precio y componentes asociados.
- Lista de fabricantes y componentes con enlaces a sus páginas de detalles.

### Página de Fabricantes y Componentes
Debe mostrar:
- Lista completa de fabricantes y componentes.

## Requisitos Técnicos

### Componentes y Props
- Crear componentes reutilizables para listar productos, fabricantes y componentes.
- Usar props para mostrar información en componentes de detalle.

### Framework CSS
- Usar un framework CSS como Bootstrap, Material UI o Tailwind.
- Aplicar estilos personalizados.

### Estado y Ciclo de Vida
- Usar estado para almacenar información de la API.
- Implementar hooks como `useEffect` para cargar datos.

### Eventos
- Manejadores de eventos para acciones simples como clics en productos.

### Rutas y Navegación
- Configurar rutas con `react-router-dom`.
- Crear rutas específicas para detalles de productos (`/productos/:id`).

### Fetch y Consumo de APIs
- Usar `fetch` o `axios` para obtener datos de la API.
- Manejar errores en la carga de datos.

## Backend

Pueden usar la aplicación creada en la materia de Estrategia de Persistencia o esta aplicación de backend:  
[Backend disponible en GitHub](https://github.com/CIU-UnaHur/tp-backend)

### Rutas de la API
- `http://localhost:5000/productos`: Obtener todos los productos.
- `http://localhost:5000/productos/:id`: Obtener un producto específico.
- `http://localhost:5000/productos/:id/fabricantes`: Obtener fabricantes de un producto.
- `http://localhost:5000/productos/:id/componentes`: Obtener componentes de un producto.
- `http://localhost:5000/fabricantes`: Obtener todos los fabricantes.
- `http://localhost:5000/componentes`: Obtener todos los componentes.

### Instrucciones para correr el backend
1. Instalar dependencias: `npm i`
2. Ejecutar: `npm run dev`

## Instrucciones de Entrega

1. Subir el código del proyecto a un repositorio público en GitHub.
2. Incluir un archivo `README.md` con:
   - Descripción del proyecto.
   - Instrucciones para correr la aplicación.
3. Enviar el link al repositorio al correo: [lucas.figarola@unahur.edu.ar](mailto:lucas.figarola@unahur.edu.ar).

**Fecha límite**: Jueves 28/11 a las 18:00 hs.
