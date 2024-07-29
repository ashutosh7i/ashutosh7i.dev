import localFont from 'next/font/local'

// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
const abrade = localFont({ src: '../../public/assets/customFonts/Abrade-Regular.ttf' })
const eduSABegineer = localFont({ src: '../../public/assets/customFonts/EduSABeginner-Regular.ttf' })
export { abrade, eduSABegineer }