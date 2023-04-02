/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingresa tu nombre.");
  datosPersona.edad = 2023 - parseInt(prompt("Ingresa el año en que naciste"));
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives");
  siNo = () => {
    let decision = confirm("Te interesa Javascript");
    if (decision == true) {
      datosPersona.interesPorJs = "Si";
    } else {
      datosPersona.interesPorJs = "No";
    }
  };

  siNo();

  console.log(datosPersona);
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.querySelector("#nombre").innerText = datosPersona.nombre;
  document.querySelector("#edad").innerText = datosPersona.edad;
  document.querySelector("#ciudad").innerText = datosPersona.ciudad;
  document.querySelector("#javascript").innerText = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila");
  const caja = document.querySelector(".caja");
  if (!caja) {
    listado.forEach((noticia) => {
      fila.innerHTML += `<article class = "caja">
      <img src="${noticia.imgUrl}" alt="logo de ${noticia.lenguajes}">
      <p class="lenguajes">Lenguajes: ${noticia.lenguajes}</p>
      <p class="bimestre">Bimestre: ${noticia.bimestre}</p>
      </article>`;
    });
  }
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector("#sitio");

  sitio.classList.toggle("dark");
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

window.addEventListener("keypress", function (e) {
  let contador = 0;
  const oculto = document.querySelector(".oculto");
  if (e.key == "f" && oculto) {
    oculto.classList.remove("oculto");
  }
});
