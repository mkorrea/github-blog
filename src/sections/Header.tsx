import logo from '/logo.svg'
import headerBackground from '../assets/header-background.png'

export function Header() {
  return (
    <header className='w-full relative max-h-[296px]'>
      <img src={logo} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      <img src={headerBackground} className='w-full bg-base-profile h-full' />
    </header>
  )
}