import { Formation } from "../Formation/Formation"

interface Course {
  id: number
  college: string
  area: string
  course: string
  startDate: string
  endDate: string
}

export function Formations() {
  const courses: Course[] = [
    {
      id: 1,
      college: 'Cruzeiro do Sul Virtual',
      area: 'Curso Superior de Tecnologia (CST)',
      course: 'Análise e Desenvolvimento de Sistemas',
      startDate: 'Agosto de 2024',
      endDate: 'Agosto de 2026'
    },
    {
      id: 2,
      college: 'Rocketseat',
      area: 'Bootcamp',
      course: 'NodeJS, ReactJS, React Native',
      startDate: 'Maio de 2021',
      endDate: 'Setembro de 2023'
    },
    {
      id: 3,
      college: 'Curso em Vídeo',
      area: 'Programação',
      course: 'Algoritmo, HTML, CSS, JavaScript, Python',
      startDate: 'Março de 2020',
      endDate: 'Maio de 2021'
    },
  ]

  return (
    <div className='my-7 w-full'>
      <h2 className='text-2xl text-gray-400 ml-4 mb-2'>Formação Acadêmica</h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-2 pl-6 gap-5">
        {
          courses.map((course) => {
            return (
              <Formation
                key={course.id}
                college={course.college}
                area={course.area}
                course={course.course}
                startDate={course.startDate}
                endDate={course.endDate}
              />
            )
          })
        }
      </div>
    </div>
  )
}