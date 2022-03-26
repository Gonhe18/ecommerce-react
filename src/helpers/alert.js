import Swal from 'sweetalert2'

export const carritoVacio = (carrito) => {
  if (carrito.length === 0) {
    Swal.fire({
      html: '<img src="./img/carrito-vacio.png" style= "width: 175px"/>',
      title: "Carrito vacío",
      timerProgressBar: true,
      timer: 1500,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then(function () {
      window.location = "./index.html";
    });
  }
};
