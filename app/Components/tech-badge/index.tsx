type TechBadgeProps = {
  name: string;
}

export const TechBadge = ({name}: TechBadgeProps)=> {
  return (
    <span className='text-emerald-400 bg-emerald-900/80 text-sn py-1 px-3 rounded-lg'>
      {name}
  
    </span>
  )
}