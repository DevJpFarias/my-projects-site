import Img from '../../../public/79186af5-5b30-486c-849f-9141d944e490.jpeg'

export function Infos() {
  return (
    <>
      <img
        className="h-32 w-32 m-auto mb-4 rounded-full overflow-hidden ring-2 ring-[gray]"
        alt="Minha foto sorrindo"
        src={Img}
      />
    
      <h1 className='text-2xl text-white mb-2'>
        @DevJpFarias
      </h1>

      <p className='text-gray-300 text-center'>
        Meu nome é João Paulo e esse site é para agrupar meus projetos!
      </p>
    </>
  )
}