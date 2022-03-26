# **E-Commerce Con Reactjs 🛒 - CoderHouse**

Sitio web creado como parte del proyecto final para el curso de Desarrollador Frontend React, de CoderHouse. 
El mismo puede dividirse en 4 secciones:

1.  **MENÚ DE NAVEGACIÓN:**
	A su vez el menú de navegación se divide en 3 secciones bien marcadas:
    - **LOGO:** contiene el nombre del E-commerce y al seleccionarlo nos redirecciona al Home.
	- ** CATEGORÍAS:** tenemos acceso a todas las categorías creadas y nos permite navegar a cada una viendo los productos que contiene cada una.
	- **CARRITO:** nos da acceso a los productos seleccionados, viendo un detalle de los mismos.

1. **HOME:**
	- Muestra, mediante cards, todos los productos que tenemos en nuestra API. Se detallan algunos datos como la marca, modelo y precio. En caso de haber seleccionado alguna de las categorías en el menú de navegación, se filtrará por la misma y podremos ver solo los productos que conincidan con nuestra búsqueda.

1. **DETALLE PRODUCTO:**
	- Al seleccionar una card desde el Home nos derivará a una nueva sección, la cual contendrá la información completa del producto seleccionado (marca, modelo, precio, imagen y descripción), además de botones para aumentar/disminutir cantidad de ítems (el mismo esta atado al stock del producto) y otro para agregar al carrito, al presionarlo no solo se agrega el producto a nuestro carrito sino que se modifica la vista, mostrando 2 nuevos botones, los cuales nos permite seguir comprando o ir directamente a la sección del carrito y finalizar la compra. 
	- Desde el detalle tendremos acceso al menú de navegación, lo cual nos permite ir al Home o a alguna categoría para elegir otros productos.

1. **CARRITO:**
	- En esta sección nos mostrará todos los productos que agregamos a nuestro carrito, los cuales están almacenados en el localStorage. Además de los datos tendremos la posibilidad de modificar la cantidad de productos agregados (proceso en construcción), como así también remover determinado producto del carrito. Al final de la pantalla tendremos un botón que nos permite vaciar por completo nuestro carrito, si así lo deseamos.
	- Por último, al no existir ningún producto a nuestro carrito (ya sea por eliminarlos manualmente o desde el botón vaciar), nos figurará una alerta indicando que el carrito esta vacio y nos redireccionará automáticamente al Home, para poder continuar comprando.
	- ❗❗**IMPORTANTE:** Esta sección no esta finalizada, las funcionalidades de agregar/disminuir cantidad de productos no esta generado como así también resta crear el método para simular el pago.

## **DEPENDENCIAS**
Durante el proceso de creación del sitio web utilicé algunas dependencias que me permitieron darle una mejor estética al proyecto.
- **BOOTSTRAP:** Permite darle estilos a todo el sitio.
- **REACT-ICONS:** Brinda el acceso a librerías con iconos y así poder agregarlos a nuestra web. Ej: icono del carrito en el NavBar.
- **REACT-LOADER-SPINNER:** Da acceso a varios modelos de spinner, los cuales son útiles en los casos en donde exista una demora en la esperar de resultados. Ej: simulación de espera de los datos de la API.
- **SWEETALERT2:** Permite crear alertas mas vistosas para nuestro poryecto.
