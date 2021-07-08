// import './assets/Images/ikon/map/mappin.png'

import logo from './assets/Images/ikon/WA..png'
import happyYoungManPointingFingerAside from './assets/Images/Pfotos/happy-young-man-pointing-finger-aside.png'
import corporateManHoldingIpadMediumShot from './assets/Images/Pfotos/corporate-man-holding-ipad-medium-shot_585.jpg'

import iconWebDesign from './assets/Images/ikon/Services/iconWebDesign.svg'
import iconInterfaceDesign from './assets/Images/ikon/Services/iconInterfaceDesign.svg'
import iconWebDevelopment from './assets/Images/ikon/Services/iconWebDevelopment.svg'
import iconUxDesign from './assets/Images/ikon/Services/iconUxDesign.svg'
import iconMotionGraphic from './assets/Images/ikon/Services/iconMotionGraphic.svg'
import iconSeoOptimize from './assets/Images/ikon/Services/iconSeoOptimize.svg'

import iconEducation from './assets/Images/ikon/Resume/iconEducation.svg'
import iconWorkHistory from './assets/Images/ikon/Resume/iconWorkHistory.svg'
import iconProgrammingSkill from './assets/Images/ikon/Resume/iconProgrammingSkill.svg'
import iconDesignerSkills from './assets/Images/ikon/Resume/iconDesignerSkills.svg'
import iconSeoSkills from './assets/Images/ikon/Resume/iconSeoSkills.svg'


function imgCreater(pathToImg, nameClass, description) {
  let image = document.createElement('img')
  image.src = pathToImg
  image.className = 'img-responsive'
  image.alt = description
  nameClass = document.querySelector('.' + nameClass)
  nameClass.prepend(image)

}
function imgCreaterStatic(pathToImg, nameClass, description) {
  let image = document.createElement('img')
  image.src = pathToImg
  image.alt = description
  nameClass = document.querySelector('.' + nameClass)
  nameClass.prepend(image)
}

imgCreater(logo, 'logo', 'логотип')
imgCreater(happyYoungManPointingFingerAside, 'happyYoungManPointingFingerAside', 'happy-young-man-pointing-finger-aside')
imgCreater(corporateManHoldingIpadMediumShot, 'corporateManHoldingIpadMediumShot', 'corporate-man-holding-ipad-medium-shot')

imgCreaterStatic(iconWebDesign, 'iconWebDesign', 'icon Web Design')
imgCreaterStatic(iconInterfaceDesign, 'iconInterfaceDesign', 'icon Interface Design')
imgCreaterStatic(iconWebDevelopment, 'iconWebDevelopment', 'icon Web Development')
imgCreaterStatic(iconUxDesign, 'iconUxDesign', 'icon UX Design')
imgCreaterStatic(iconMotionGraphic, 'iconMotionGraphic', 'icon Motion Graphic')
imgCreaterStatic(iconSeoOptimize, 'iconSeoOptimize', 'icon SEO Optimize')

imgCreaterStatic(iconEducation, 'iconEducation', 'icon Education')
imgCreaterStatic(iconWorkHistory, 'iconWorkHistory', 'icon Work History')
imgCreaterStatic(iconProgrammingSkill, 'iconProgrammingSkill', 'icon Programming Skill')
imgCreaterStatic(iconDesignerSkills, 'iconDesignerSkills', 'icon Designer Skills')
imgCreaterStatic(iconSeoSkills, 'iconSeoSkills', 'icon SEO Skills')
