import { Button } from "@/app/Components/button";
import { SectionTitle } from '@/app/Components/section-title';
import { TechBadge } from "@/app/Components/tech-badge";
import {Link} from '@/app/Components/link';
import { TbBrandGithub } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { HiArrowNarrowLeft } from 'react-icons/hi';

export const ProjectDetails = () => {
  return(
    <section className='w-full sm:min-h-[740px] flex flex-col items-center justify-end relative pb-10 sm:pb-24 py-24 px-6 overflow-hidden'>
      <div className='absolute inset-0 z-[-1] '
      style={{
        background: "url(/images/hero-bg.png) no-repeat center/cover, url(https://assets.explora.com/app/uploads/2023/03/Ladera-sur-beneficios-3.jpg) no-repeat center/cover"
      }}>
      </div>

      <SectionTitle
        subtitle='projetos'
        title="Bookwise"
        className='text-center items-center sm:[&>h3]:text-4xl'>
      </SectionTitle>

      <p className='text-gray-400 text-center max-w-[640px] my-4 sm:my-6 text-sm sm:text-base'>
        Bokwise é uma plataforma de avaliação de livros que foi desenvolvida durante o bootcamp Ignite da Rockdtar games production
      </p>

      <div className='w-full max-w-[330px] flex flex-wrap gap-2 items-center justify-center'>
        <TechBadge name='Next.js' />
        <TechBadge name='Next.js' />
        <TechBadge name='Next.js' />
        <TechBadge name='Next.js' />
        <TechBadge name='Next.js' />
        <TechBadge name='Next.js' />
      </div>

      <div className='my-6 sm:my-12 flex items-center gap-2 sm:gap-4 flex-col sm:flex-row'>
        <a href='https://github.com' target='_blank'>
          <Button className='min-w-[180px]'>
            <TbBrandGithub size={20}/>
            Repositório
          </Button>
        </a>
        <a href='https://github.com' target='_blank'>
          <Button className='min-w-[180px]'>
            <FiGlobe size={20}/>
            Projeto Online
          </Button>
        </a>
      </div>

      <Link href="/projects">
        <HiArrowNarrowLeft />
        Voltar para projetos
      </Link>
    </section>
  )
}