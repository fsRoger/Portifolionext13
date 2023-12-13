import { Link } from "@/app/Components/link"
import { TechBadge } from '@/app/Components/tech-badge'
import  Image  from "next/image"
import { HiArrowNarrowRight } from 'react-icons/hi'


export const ProjectCard = () => {
  return(
    <div className='flex gap-6 lg:gap-12 flex-col lg:flex-row'>
      <div className='w-full h-full'>
        <Image 
          width={420}
          height={304}
          src="/images/icons/project-title-icon.svg"
          alt="Thumbnail do projeto BookWise"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        
        />
      </div>

      <div>
        <h3 className='flex items-center gap-3 font-medium text-lg text-gray-50'>
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          BookWise
        </h3>

        <p className='text-gray-400 my-6'>
          lorem20sdfdsfds fds fdsfsd fsdfsdfsdf dssd fsd fsdf sdfs dfsdf sdfsdfsdfsd fsdf sdfsdfsdfs fsd fsdf sdf sdf sd fsdf sd fsdfsdfsdfsdfsdfsdf sdfsd fsd fsd
        </p>

        <div className='flex gap-x-2 gap-y-3 flex-wrap nb-8 lg:max-w[350px]'>
          <TechBadge name="next.js" />
          <TechBadge name="next.js" />
          <TechBadge name="next.js" />
          <TechBadge name="next.js" />
          <TechBadge name="next.js" />
        </div>

        <Link href="/projects/book-wise">
          ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}