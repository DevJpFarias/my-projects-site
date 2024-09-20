import { Project } from '../Project/Project'

import MigufeCakeImg from '../../../public/Bolos do Migufe.png'
import BhaskarasSiteImg from '../../../public/Calculadora de Bhaskaras.png'
import RegraDeTresImg from '../../../public/Regra de Três Simples.png'
import RendimentosImg from '../../../public/Calculadora de Rendimentos.png'
import SiteListagemImg from '../../../public/Site de Listagem.png'
// import FoodStoreImg from '../../../public/FoodStore.png'
import StatsPreviewImg from '../../../public/Frontend Mentor _ Stats preview card component.png'
import ProductPreviewImg from '../../../public/Frontend Mentor _ Product preview card component.png'
import JogoDaVelha from '../../../public/Jogo da Velha.png'

interface Project {
  id: number
  title: string
  description: string
  image: string
  url: string
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Bolos do Migufe',
      description: 'Site de loja de bolos com sistema de carrinho de compras e finalização de compras pelo Whatsapp.',
      image: MigufeCakeImg,
      url: 'https://migufe-cake-store.netlify.app'
    },
    {
      id: 2,
      title: 'Calculadora de Rendimentos',
      description: 'Site feito para calcular juros, ver como seria aplicando cada mês e ver a tabela de rendimentos.',
      image: RendimentosImg,
      url: 'https://investmentamount.netlify.app/'
    },
    {
      id: 3,
      title: 'Jogo da Velha',
      description: 'Site de jogo da velha para jogar você e mais uma pessoa.',
      image: JogoDaVelha,
      url: 'https://migufe-jogo-da-velha.netlify.app/'
    },
    {
      id: 4,
      title: 'Regra de Três Simples',
      description: 'Site para calcular Regra de Três Simples com rapidez.',
      image: RegraDeTresImg,
      url: 'https://migufe-regra-de-tres.netlify.app'
    },
    {
      id: 5,
      title: 'Calculadora de Bhaskaras',
      description: 'Site para calcular Bhaskaras de forma simples, passando apenas os valores e recebendo as raízes.',
      image: BhaskarasSiteImg,
      url: 'https://migufe-bhaskara-calculator.netlify.app'
    },
    {
      id: 6,
      title: 'Site de Listagem',
      description: 'Site para criar listas de forma simples e rápida manda-las no Whatsapp.',
      image: SiteListagemImg,
      url: 'https://migufe-lista-tarefas.netlify.app'
    },
    // {
    //   id: 7,
    //   title: 'Restaurante Food',
    //   description: 'Landing Page criada para apresentação de restaurante.',
    //   image: FoodStoreImg,
    //   url: 'https://migufe-food-store.netlify.app/'
    // },
    {
      id: 99,
      title: 'Landing Page',
      description: 'Landing Page criada para apresentação de equipes.',
      image: StatsPreviewImg,
      url: 'https://stats-preview-card-component-layout.netlify.app/'
    },
    {
      id: 100,
      title: 'Card de Produto',
      description: 'Landing Page de apresentação de perfume.',
      image: ProductPreviewImg,
      url: 'https://product-preview-card-component-layout.netlify.app/'
    }
  ]

  return (
    <div className='my-7 w-full'>
      <h2 className='text-2xl text-gray-400 ml-4'>Projetos</h2>

      <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        {
          projects.map((project) => {
            return (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
              />
            )
          })
        }
      </div>
    </div>
  )
}