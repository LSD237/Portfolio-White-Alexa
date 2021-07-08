function handlerResume(event) {
  resume1.classList.remove('_active')
  resume2.classList.remove('_active')
  resume3.classList.remove('_active')
  resume4.classList.remove('_active')
  resume5.classList.remove('_active')


  let targetElement = event.currentTarget
  targetElement.classList.add('_active')
}

function handlerResumeTwo(event) {
  if (h3Resume1.classList.contains('_active')) {
    resume1_1.style = "display: block";
    resume2_2.style = "display: none";
    resume3_3.style = "display: none";
    resume4_4.style = "display: none";
    resume5_5.style = "display: none";
  } else if (h3Resume2.classList.contains('_active')) {
    resume2_2.style = "display: block";
    resume1_1.style = "display: none";
    resume3_3.style = "display: none";
    resume4_4.style = "display: none";
    resume5_5.style = "display: none";
  } else if (h3Resume3.classList.contains('_active')) {
    resume3_3.style = "display: block";
    resume1_1.style = "display: none";
    resume2_2.style = "display: none";
    resume4_4.style = "display: none";
    resume5_5.style = "display: none";
  } else if (h3Resume4.classList.contains('_active')) {
    resume4_4.style = "display: block";
    resume1_1.style = "display: none";
    resume2_2.style = "display: none";
    resume3_3.style = "display: none";
    resume5_5.style = "display: none";
  } else if (h3Resume5.classList.contains('_active')) {
    resume5_5.style = "display: block";
    resume1_1.style = "display: none";
    resume2_2.style = "display: none";
    resume3_3.style = "display: none";
    resume4_4.style = "display: none";
  }
}


let h3Resume1 = document.getElementById('resume1')
h3Resume1.addEventListener("click", handlerResume)
h3Resume1.addEventListener("click", handlerResumeTwo)

let h3Resume2 = document.getElementById('resume2')
h3Resume2.addEventListener("click", handlerResume)
h3Resume2.addEventListener("click", handlerResumeTwo)

let h3Resume3 = document.getElementById('resume3')
h3Resume3.addEventListener("click", handlerResume)
h3Resume3.addEventListener("click", handlerResumeTwo)

let h3Resume4 = document.getElementById('resume4')
h3Resume4.addEventListener("click", handlerResume)
h3Resume4.addEventListener("click", handlerResumeTwo)

let h3Resume5 = document.getElementById('resume5')
h3Resume5.addEventListener("click", handlerResume)
h3Resume5.addEventListener("click", handlerResumeTwo)

  // if (h3Resume1.classList.contains('_active')) {
  //   let resume1_1 = document.getElementById('resume1_1')
  //   resume1_1.style = "display: block";
  // } else if (h3Resume2.classList.contains('_active')) {
  //   let resume2_2 = document.getElementById('resume2_2')
  //   resume2_2.style = "display: block";
  // }