import { TypeAnimation } from 'react-type-animation'

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Marketing Digital',
        1500,
        'Desarollo Web',
        1500,
        'Diseño Grafico',
        1500,
        'Desarollo Movil',
        1500,
      ]}
      speed={50}
      className="text-2xl md:text-3xl text-[#1E90FF] font-bold uppercase"
      repeat={Infinity}
    />
  )
}
export default TextEffect
