import Image from "next/image";

export const ProjectCard =() => {
  return(
    <div className='rounded-lg h-[436px] flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group'>
      <div className="w-full h-48 overflow-hidden" >
        <Image
          width={380}
          height={200}
          src="/images/profile-pic.jpeg"
          alt=""
          unoptimized
          className='w-full h-full object-cover group-hover:scale-110 duration-500 transition-all'
        />
      </div>

      <div className='flex-1 flex flex-col p-8'>
        <strong className='font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all'>BookWise</strong>
        <p className='mt-2 text-gray-400 line-clamp-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also</p>
        <span className='text-gray-300 text-sm font-medium block mt-auto truncate'>Next React, TypeScript, PrismaJava, C, Python, Scrum, Node, SQL,GITHUB</span>
      </div>
    </div>
  )
}
