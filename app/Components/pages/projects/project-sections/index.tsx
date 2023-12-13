import Image from "next/image";

const sections = [
  {
    title: 'Login',
    image: 'https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_1280.jpg'
  },
  {
    title: 'Home',
    image: 'https://cdn.pixabay.com/photo/2016/03/07/09/34/kid-1241817_1280.jpg'
  }
]

export const ProjectSections = () => {
  return(
    <section className="container my-12 md:my-32 flex-col gap-8 md:gap-32 ">
      {sections.map(section => (
        <div key={section.title} className='flex flex-col items-center gap-6 md:gap-12 '>
          <h2 className='text-2xl md:text-3xl font-medium text-gray-300'>
            {section.title}
          </h2>
          <Image
            src={section.image}
            width={1080}
            height={672}
            className='w-full aspect-auto rounded-lg object-cover'
            alt={`imagem da sessao ${section.title}`}
            unoptimized
          
          />
        </div>
      ))}
      
    </section>
  )
}