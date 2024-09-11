import Img from '../public/79186af5-5b30-486c-849f-9141d944e490.jpeg'
import { Experiences } from './components/Experiences/Experiences'
import { Projects } from './components/Projects/Projects'

export function App() {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-800 h-full w-full'>
      <div className='bg-gray-900 w-11/12 lg:w-4/5 py-3 flex flex-col items-center justify-center my-4 rounded-md'>
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

        <Experiences />

        <Projects />
      </div>
    </div>
  )
}
