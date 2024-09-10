import { Project } from './components/Project/Project'
import Img from '../public/79186af5-5b30-486c-849f-9141d944e490.jpeg'

interface Project {
  title: string
  description: string
  imageUrl: string
  url: string
}

export function App() {
  const projects: Project[] = [
    {
      title: 'Bolos do Migufe',
      description: 'Site de loja de bolos com sistema de carrinho de compras.',
      imageUrl: '../public/Bolos-do-Migufe.jpeg',
      url: 'https://migufe-cake-store.netlify.app'
    },
    {
      title: 'Calculadora de Rendimentos',
      description: 'Site feito para calcular juros, ver como seria aplicando cada mês e ver a tabela de rendimentos.',
      imageUrl: '../public/Calculadora-de-Rendimentos_1.jpeg',
      url: 'https://investmentamount.netlify.app/'
    },
    {
      title: 'Regra de Três Simples',
      description: 'Site para calcular Regra de Três Simples com rapidez.',
      imageUrl: '../public/Regra-de-Três-Simples.jpeg',
      url: 'https://migufe-regra-de-tres.netlify.app'
    },
    {
      title: 'Calculadora de Bhaskaras',
      description: 'Site para calcular Bhaskaras de forma simples, passando apenas os valores e recebendo as raízes.',
      imageUrl: '../public/Calculadora-de-Bhaskaras.jpeg',
      url: 'https://migufe-bhaskara-calculator.netlify.app'
    },
    {
      title: 'Site de Listagem',
      description: 'Site para criar listas de forma simples e rápida manda-las no Whatsapp.',
      imageUrl: '../public/Site-de-Listagem_1.jpeg',
      url: 'https://migufe-lista-tarefas.netlify.app'
    }
  ]

  return (
    <div className='flex flex-col items-center justify-center bg-gray-800 h-full w-full'>
      <div className='bg-gray-900 w-11/12 lg:w-2/3 py-3 flex flex-col items-center justify-center my-4 rounded-md'>
        <img
          className="h-32 w-32 m-auto mb-4 rounded-full overflow-hidden ring-2 ring-[gray]"
          src={Img}
          alt="Minha foto sorrindo"
        />
        
        <h1 className='text-2xl text-white mb-2'>
          @DevJpFarias
        </h1>

        <p className='text-gray-300'>Meu nome é João Paulo e esse site é para agrupar meus projetos!</p>

        <div className='my-7'>
          <h2 className='text-2xl text-gray-400 ml-4'>Projetos</h2>

          <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            {
              projects.map((project) => {
                return (
                  <Project
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    imageUrl={project.imageUrl}
                    url={project.url}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
