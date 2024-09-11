import { Experience } from "../Experience/Experience";

interface Job {
  role: string
  enterprise: string
  kindOfJob: 'Freelance' | 'Tempo Integral' | 'Meio período' | 'Contrato' | 'Temporário' | 'Estágio' | 'Outro'
  startDate: string
  endDate: string
  jobMode: 'Remoto' | 'Presencial' | 'Híbrido'
  description: string
}

export function Experiences() {
  const jobs: Job[] = [
    {
      role: 'Desenvolvedor Backend Pleno - NestJS',
      enterprise: 'Oak Apps',
      kindOfJob: 'Freelance',
      startDate: 'Novembro de 2022',
      endDate: 'Abril de 2024',
      jobMode: 'Remoto',
      description: ''
    },
    {
      role: 'Desenvolvedor Mobile Pleno - React Native',
      enterprise: 'Oak Apps',
      kindOfJob: 'Freelance',
      startDate: 'Março de 2023',
      endDate: 'Novembro de 2023',
      jobMode: 'Remoto',
      description: ''
    },
    {
      role: 'Desenvolvedor Frontend Junior - ReactJS',
      enterprise: 'Studywise',
      kindOfJob: 'Freelance',
      startDate: 'Janeiro de 2023',
      endDate: 'Março de 2023',
      jobMode: 'Remoto',
      description: ''
    },
    {
      role: 'Testador de Software',
      enterprise: 'TechSavvy Brasil',
      kindOfJob: 'Tempo Integral',
      startDate: 'Dezembro de 2021',
      endDate: 'Janeiro de 2023',
      jobMode: 'Remoto',
      description: ''
    },
    {
      role: 'Desenvolvedor Backend Junior - NodeJS',
      enterprise: 'Oak Apps',
      kindOfJob: 'Freelance',
      startDate: 'Setembro de 2021',
      endDate: 'Maio de 2022',
      jobMode: 'Remoto',
      description: ''
    }
  ]

  return (
    <div className='my-7 w-full'>
      <h2 className='text-2xl text-gray-400 ml-4 mb-2'>Experiência</h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 pl-6 gap-5">
        {
          jobs.map((job) => {
            return (
              <Experience
                role={job.role}
                enterprise={job.enterprise}
                kindOfJob={job.kindOfJob}
                startDate={job.startDate}
                endDate={job.endDate}
                jobMode={job.jobMode}
                description={job.description}
              />
            )
          })
        }
      </div>
    </div>
  )
}