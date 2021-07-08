// //* Переключение li над слайдером и Смена слайдеров (от нажатия на li)
// ulPortfolio.addEventListener('click', function (event) {
//   if (event.target.tagName != 'LI') return

//   let childrenContainerLi = event.target.parentElement.querySelectorAll('li')
//   if (!childrenContainerLi) return // Елси нет детей('li') то выходим

//   if (!event.target.classList.contains('_activeLiPortfolio')) {
//     for (const elem of childrenContainerLi) {
//       if (elem.classList.contains('_activeLiPortfolio')) {
//         elem.classList.remove('_activeLiPortfolio')
//       }
//     }
//     event.target.classList.add('_activeLiPortfolio')
//   }

//   let childrenContainerSlider = slidersContainerPortfolio.parentElement.querySelectorAll('.slider')
//   let portfolioSlider = document.querySelector(`.portfolioSlider${event.target.id.replace('portfolioLi', '')}`)

//   for (const elem of childrenContainerSlider) {
//     elem.classList.remove('_activeSliderPortfolio')
//   }
//   portfolioSlider.classList.add('_activeSliderPortfolio')

//   //*для моб слайдера
//   let childrenContainerSliderMob = slidersContainerPortfolio.parentElement.querySelectorAll('.slider_mob')
//   let portfolioSliderMob = document.querySelector(`.portfolioSliderMob${event.target.id.replace('portfolioLi', '')}`)

//   for (const elem of childrenContainerSliderMob) {
//     elem.classList.remove('_activeSliderMobPortfolio')
//   }
//   portfolioSliderMob.classList.add('_activeSliderMobPortfolio')
// })


// //* Переключение кружков-кнопок под слайдером
// slidersContainerPortfolio.addEventListener('click', function (event) {
//   if (event.target.tagName != 'LABEL') return

//   let childrenContainer = event.target.parentElement.querySelectorAll('label')

//   if (!event.target.classList.contains('_activeEllipsePortfolio')) {
//     for (const elem of childrenContainer) {
//       if (elem.classList.contains('_activeEllipsePortfolio')) {
//         elem.classList.remove('_activeEllipsePortfolio')
//       }
//     }
//     event.target.classList.add('_activeEllipsePortfolio')
//   }
// })
