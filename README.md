# Trabajo Práctico - Construcción de Interfaces de Usuario

**Trabajo Práctico de React: Desarrollo de Frontend en React para el Sistema de Gestión de Productos**

### Descripción del Proyecto

Diseñar y desarrollar una aplicación web utilizando React. El sitio deberá ser visualmente atractivo y funcional.
Descripción del Proyecto: La empresa de manufactura que desarrolló el sistema backend
para gestionar productos, fabricantes y componentes desea ahora un frontend en React que
permita a los usuarios visualizar la información almacenada en la API de gestión de
productos. El sistema solo necesita mostrar información, sin opciones de modificación ni
eliminación, enfocándose en la navegación y presentación del catálogo de productos.
Objetivo: Construir una aplicación web en React que consuma el backend de la API de
gestión de productos. La aplicación permitirá a los usuarios navegar por un catálogo de
productos, visualizar detalles de productos específicos y sus fabricantes y componentes
asociados.

### Objetivo

Construir una aplicación web en React que consuma el backend de la API de gestión de productos. La aplicación permitirá a los usuarios:

- Navegar por un catálogo de productos.
- Visualizar detalles de productos específicos.
- Consultar fabricantes y componentes asociados.

## Páginas

Para cumplir con el trabajo, deben generar 4 páginas Web con las siguientes características
(como mínimo esto, si agregan más no hay problema)

### Página Principal: Inicio
Debe contener:
- Presentación de la empresa, incluyendo su historia y filosofía.
- Un menú de navegación que permita acceder a todas las secciones de la página.
- Imágenes representativas del local y demás, con texto alternativo adecuado.
- Links en imágenes. Estos links deben abrir en pestañas nuevas y deben ser videos de Youtube sobre lo que muestre la imagen.
- Un video incrustado (iframe) de YouTube.
- Párrafos y títulos descriptivos.
- Información de contacto, como dirección, teléfono y horario de apertura.
- Mapa interactivo (iframe de Google Maps) mostrando la ubicación.
- En el pie de página deben estar los datos de los integrantes del grupo.

### Página de Catálogo de Productos
Debe mostrar:
- Mostrar una lista de productos disponibles, con nombre, descripción, precio y la imagen en cada tarjeta.
- Permitir al usuario hacer clic en un producto para ver más detalles.
- Uso de `fetch` para obtener datos desde la API.
- **Opcional**: Deberá ser dinámica esta sección, es decir, dado una lista de productos, el usuario va a poder seleccionar los productos que desee y su cantidad.
Además, deberá tener un botón para calcular el precio total de los productos que seleccionó el usuario del catálogo.

### Página de Detalle de Producto
Debe mostrar:
- Detalles completos de un producto seleccionado, incluyendo información como descripción, precio y componentes asociados.
- Listar los fabricantes y componentes del producto con enlaces a sus respectivas páginas de detalles.

### Página de Fabricantes y Componentes
Debe mostrar:
- Página dedicada para mostrar la lista completa de fabricantes y componentes, accesibles desde la página principal.

## Requisitos Técnicos

### Componentes y Props
- Crear componentes reutilizables para listar productos, fabricantes y componentes.
- Usar props para pasar los datos a cada componente de detalle y así mostrar la información de cada producto, fabricante y componente en una tarjeta o lista.

### Framework CSS
- Usar un framework CSS como Bootstrap, Material UI o Tailwind para estilizar la aplicación.
- Aplicar estilos personalizados para resaltar el diseño de un catálogo de productos.

### Estado y Ciclo de Vida
- Utilizar el estado en los componentes para almacenar la información obtenida desde la API.
- Implementar métodos de ciclo de vida o hooks como useEffect para cargar la lista de productos, fabricantes y componentes cuando sea necesario.

### Eventos
- Agregar manejadores de eventos para acciones simples, como hacer clic en un producto para ver más detalles o seleccionar un fabricante.
- Asegurarse de que los eventos actualicen la visualización en la interfaz sin modificar los datos del backend.

### Rutas y Navegación
- Configurar rutas con `react-router-dom` para navegar entre las diferentes secciones de la aplicación: una página principal de catálogo de productos y una página de
detalles para cada producto.
- Crear rutas específicas para detalles de productos, como una ruta específica para los detalles de un producto(`/productos/:id`) que muestre la información
completa del producto seleccionado.

### Fetch y Consumo de APIs
- Usar `fetch` o `axios` para obtener datos de la API mediante los métodos GET.
- Cargar y mostrar datos de productos, fabricantes y componentes, y manejar errores en caso de fallos en la conexión o en la carga de datos.

## Backend

Pueden usar la aplicación creada en la materia de Estrategia de Persistencia (usar el paquete "cors") o esta aplicación de backend:  
[Backend disponible en GitHub](https://github.com/CIU-UnaHur/tp-backend)

Acuerdense para correr la aplicación de Backend hacer:
```bash
npm i
```
```bash
npm run dev
```

### Rutas de la API
- `http://localhost:5000/productos`: Obtener todos los productos.
- `http://localhost:5000/productos/:id`: Obtener un producto específico.
- `http://localhost:5000/productos/:id/fabricantes`: Obtener fabricantes de un producto.
- `http://localhost:5000/productos/:id/componentes`: Obtener componentes de un producto.
- `http://localhost:5000/fabricantes`: Obtener todos los fabricantes.
- `http://localhost:5000/componentes`: Obtener todos los componentes.

## Instrucciones
La aplicación en React deberá tener al menos los siguientes componentes:
- Header: Deberá mostrar el nombre de la empresa y un menú de navegación.
- Footer: Deberá incluir los datos de los integrantes del grupo.

Organizar los componentes en una carpeta llamada components.

### Entrega

1. Subir el código del proyecto a un repositorio público en GitHub.
2. Incluir un archivo `README.md` con:
   - Descripción del proyecto.
   - Instrucciones para correr la aplicación.
3. Enviar el link al repositorio al correo: [lucas.figarola@unahur.edu.ar](mailto:lucas.figarola@unahur.edu.ar) (incluir los datos de los integrantes del grupo).

**Fecha límite**: Jueves 28/11 a las 18:00 hs.
