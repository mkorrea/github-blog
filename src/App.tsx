import { Card } from './components/Card'
import { Input } from './components/Input'
import { Header } from './sections/Header'
import { Profile } from './sections/Profile'

export function App() {

  return (
    <div className="bg-base-background w-dvh h-full font-Nunito flex flex-col">        
        <Header />

        <main className='max-w-[864px] mx-auto space-y-[72px]'>
          <Profile />

          <section className='space-y-12'>
            <article className='space-y-3'>
              <div className='flex justify-between items-center'>
                <h2 className='text-base-subtitle text-lg font-bold'>Publicações</h2>
                <span className='text-base-span text-sm'>6 publicações</span>
              </div>
              
              <Input />
            </article>

            <article className='grid grid-cols-2 gap-8'>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />

            </article>
          </section>

        </main>
    </div>
  )
}
