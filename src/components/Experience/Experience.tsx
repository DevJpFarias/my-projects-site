type Props = {
  role: string
  enterprise: string
  kindOfJob: 'Freelance' | 'Tempo Integral' | 'Meio período' | 'Contrato' | 'Temporário' | 'Estágio' | 'Outro'
  startDate: string
  endDate: string
  jobMode: 'Remoto' | 'Presencial' | 'Híbrido'
  description: string
}

export function Experience({
  role,
  enterprise,
  kindOfJob,
  startDate,
  endDate,
  jobMode,
  description
}: Props) {
  return (
    <div className="text-white w-full">
      <h3 className="text-xl">{role}</h3>

      <p className="text-sm"><span className="text-gray-300">{enterprise}</span> - <span>{kindOfJob}</span></p>

      <p className="text-sm"><span>{startDate}</span> - <span>{endDate}</span></p>
      
      <span className="text-sm">{jobMode}</span>

      <p>{description}</p>
    </div>
  )
}