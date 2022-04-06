# **E-Commerce Con Reactjs 🛒 - CoderHouse**

Sitio web creado como parte del proyecto final para el curso de Desarrollador Frontend React, de CoderHouse. Utilizando las herramientas aprendidas durante la cursada.
El sitio puede dividirse en 4 secciones:

1.  **MENÚ DE NAVEGACIÓN:**
	A su vez se divide en 3 secciones bien marcadas:
    - **LOGO:** contiene el nombre del E-commerce y al seleccionarlo nos redirecciona al Home.
	- **CATEGORÍAS:** tenemos acceso a todas las categorías creadas y nos permite filtrar los productos que contiene cada una.
	- **CARRITO:** nos da acceso a los productos previamente agregados, viendo el detalle de los mismos.

1. **HOME:**
	- Muestra, mediante cards, todos los productos obtenidos desde Firebase. Se detallan algunos datos como la marca, modelo y precio. En caso de haber seleccionado alguna de las categorías en el menú de navegación, se filtrará por la misma y podremos ver solo los productos que conincidan con nuestra búsqueda.

1. **DETALLE PRODUCTO:**
	- Al seleccionar una card desde el Home nos derivará a una nueva sección, la cual contendrá la información completa del producto seleccionado (marca, modelo, precio, imagen y descripción), además de botones para aumentar/disminutir cantidad de ítems, los cuales esta atado al stock del producto y en caso de que haya pocos productos se notifica que son los últimos productos como así también se informa en el caso de que ya no hay stock, dando la posibilidad de volver al home y seguir comprando. Además hay otro para agregar al carrito, al presionarlo no solo se agrega el producto a nuestro carrito sino que se modifica la vista, mostrando 2 nuevos botones, los cuales nos permite seguir comprando o ir directamente a la sección del carrito y finalizar la compra. 
	- Desde el detalle tendremos acceso al menú de navegación, lo cual nos permite ir al Home o a alguna categoría para elegir otros productos.

1. **CARRITO:**
	- En esta sección nos mostrará todos los productos que agregamos a nuestro carrito, los cuales están almacenados en el localStorage. Además de los datos tendremos la posibilidad de modificar la cantidad de productos agregados, como así también remover determinado producto del carrito. Al final de la pantalla tendremos un botón que nos permite vaciar por completo nuestro carrito, si así lo deseamos.
	- Al no existir ningún producto en nuestro carrito (ya sea por eliminarlos manualmente o desde el botón vaciar), nos figurará en la pantalla que el carrito se encuentra vacio dando la posibilidad de volver al home para continuar comprando.
	- Además de la lista de productos seleccionados nos figura un formulario, el cual nos solicita cargar algunos datos para poder generar la orden de compra. Al generarla nos figurará una alerta indicando que la compra fue exitosa y detallando el ID de dicha orden, la misma se almacena en Firebase. Al realizar este proceso el carrito se vacia y nos habilita la posibilidad de volver al home.

## **DEPENDENCIAS**
Durante el proceso de creación del sitio web utilicé algunas dependencias que me permitieron darle una mejor estética al proyecto.
- **BOOTSTRAP:** Permite darle estilos a todo el sitio.
- **REACT-ICONS:** Brinda el acceso a librerías con iconos y así poder agregarlos a nuestra web. Ej: icono del carrito en el NavBar.
- **REACT-LOADER-SPINNER:** Da acceso a varios modelos de spinner, los cuales son útiles en los casos en donde exista una demora en la esperar de resultados. Ej: simulación de espera de los datos de la API.
- **SWEETALERT2:** Permite crear alertas mas vistosas para nuestro poryecto.
- **FIREBASE:** Aplicación de Google que nos permite utilizarla como base de dato y almacenar y consumir nuestra API de productos.
