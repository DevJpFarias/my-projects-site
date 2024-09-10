type Props = {
  image: string
  title: string
  description: string
  url: string
}

export function Project({ title, description, image, url }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-col items-center gap-5 m-5 bg-gray-800 rounded-lg h-80 text-white"
    >
      <img src={image} alt="" className='h-1/2 w-full rounded-t-lg'/>

      <div className="flex flex-col gap-5 items-center justify-center">
        <h3>{title}</h3>

        <p className="px-2 text-center">{description}</p>
      </div>
    </a>
  )
}