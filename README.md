Proyecto: E-commerce con ReactJs - CoderHouse.

En esta primera entrega he realizar gran parte de la estructura de un E-commerce. El mismo cuenta con cuatro componentes por donde se puede navegar: menú de navegación, home, detalle producto y carrito.

1-MENÚ DE NAVEGACIÓN:
	El menú se divide en 3 secciones:
    *Logo: contiene el nombre del E-commerce y al seleccionarlo nos redirecciona al Home.
    *Categorías: tenemos acceso a todas las categorías creadas y nos permite navegar a cada una viendo los productos que contiene cada una.
    *Carrito: se encuentra en proceso de creación, pero el mismo incluiría aquellos productos que agreguemos y el proceso de compra.

2-HOME:
	Muestra, mediante card, todos los productos que tenemos en nuestra API. Se detallan algunos datos como la marca, modelo y precio. En caso de haber seleccionado alguna de las categorías en el menú de navegación, se filtrará por la misma y podremos ver solo los productos que conincidan con nuestra búsqueda.

3-DETALLE PRODUCTO:
	Al seleccionar un card desde el Home nos derivará a una nueva sección, la cual contendrá la información completa del producto seleccionado (marca, modelo, precio, imagen y descripción), además de botones para aumentar/disminutir cantidad (el mismo esta atado al stock del producto) y para agregar al carrito. Desde el mismo tendremos acceso al menú de navegación, lo cual nos permite ir al Home o a alguna categoría para elegir otros productos.

4-CARRITO:
	Si bien aún esta por construirse, la idea es que se carguen los productos agregados mostrando detalles de los mismos, como: marca, modelo, precio y cantidad. Además se mostrará la cantidad de productos agregados y el saldo total a abonar. Cada producto agregado tendrá botones, los cuales permitirán aumentar/disminuir la cantidad agregada como así también eliminarlo directamente del carrito. Para terminar el proceso se creará un botón que nos permita simular el pago y finalización de la compra.

DEPENDENCIAS
	Durante el proceso de creación del sitio web utilicé algunas dependencias que me permitieron darle una mejor estética al proyecto.
    *Bootstrap: Permite darle estilos a todo el sitio.
    *React-icons: Brinda el acceso a librerías con iconos y así poder agregarlos a nuestra web. Ej: icono del carrito en el NavBar.
    *React-loader-spinner: Da acceso a varios modelos de spinner, los cuales son útiles en los casos en donde exista una demora en la esperar de resultados. Ej: simulación de espera de los datos de la API.

