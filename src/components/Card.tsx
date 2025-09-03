export function Card() {
  return (
    <div className='bg-base-post rounded-[10px] p-8 space-y-5'>
      <div className='flex justify-between gap-x-4'>
        <h2 className='text-base-title text-xl font-bold'>JavaScript data types and data structures</h2>
        <span className='text-base-span text-sm min-w-fit mt-[5px]'>Há 1 dia</span>
      </div>
      <p className='text-base-text line-clamp-4'>
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
      </p>
    </div>
  )
}