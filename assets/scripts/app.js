
const modal = document.getElementById('add-modal');
const button = document.querySelector("header button");
const transparencia = document.getElementById('backdrop');
const cancelAgregar = modal.querySelector('.btn--passive');
const entradasUsuario = modal.querySelectorAll('input');
const confirmarAgregar = modal.querySelector('.btn--success');

function activarModal(){
  transparencia.classList.toggle('visible');
  modal.classList.toggle('visible');
}

function cancelarBtn(){
  activarModal();
}


function agregarEstudiante(){

  let estudianate = entradasUsuario[0].value;
  let exame = entradasUsuario[1].value;
  let calificacion = entradasUsuario[2].value;

  if(estudianate.trim()===''){
    alert('El estudiante no puede ser vacio')
  } 
  else if(calificacion.trim() ==='' && parseInt(calificacion.value.trim() >= 0)){
    alert("dfdsf");
  }

  activarModal();
  renderNuevoEstudiante(estudianate,exame,calificacion);
}

const renderNuevoEstudiante = (title, imageUrl, rating) => {
  const nuevoEstudiante = document.createElement('li');
  nuevoEstudiante.className = 'movie-element';
  nuevoEstudiante.innerHTML = `
    <div class="student-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="student-element__info">
      <h2>${title}</h2>
      <p>Calificación ${rating}/5</p>
    </div>
  `;
  const listRoot = document.getElementById('student-list');
  listRoot.append(nuevoEstudiante);
};


transparencia.addEventListener('click', activarModal);
button.addEventListener('click', activarModal);
cancelAgregar.addEventListener('click',cancelarBtn);
confirmarAgregar.addEventListener('click',agregarEstudiante);