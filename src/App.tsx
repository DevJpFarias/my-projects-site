import { Experiences } from './components/Experiences/Experiences'
import { Formations } from './components/Formations/Formations'
import { Infos } from './components/Infos/Infos'
import { Projects } from './components/Projects/Projects'

export function App() {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-800 h-full w-full'>
      <div className='bg-gray-900 w-11/12 lg:w-4/5 py-3 flex flex-col items-center justify-center my-4 rounded-md'>
        <Infos />

        <Experiences />

        <Formations />

        <Projects />
      </div>
    </div>
  )
}
