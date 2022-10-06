import { ArrowLeft } from 'phosphor-react'
import LogoVermelha from '../../assets/logo-fundo-vermelho.svg'
import { CardsTime } from '../../components/Card/Card'
import { DateSelect } from '../../components/Date/DateSelect'

export function Perfil() {
  return (
    <>
      <header className="bg-red-500 text-white">
        <div className="container max-w-xl flex justify-between items-center p-4">
          <a href="/" className="hover:transition-all hover:translate-y-1">
            <img className="w-32 md:w-40" src={LogoVermelha} alt="" />
          </a>
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className=" bg-red-500 text-white">
          <div className="container max-w-xl space-y-6 p-4">
            <a href="/dashboard">
              <ArrowLeft size={24} weight="bold" />
            </a>
            <h3 className="text-2xl font-bold">Wellerson Douglas</h3>
          </div>
        </section>

        <section id="content" className="container max-w-xl p-4 space-y-4">
          <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>
          <DateSelect />
          <div className="space-y-4">
            <CardsTime
              timeA={{
                slug: 'sui',
              }}
              timeB={{
                slug: 'cam',
              }}
              match={{
                time: '07:00',
              }}
            />

            <CardsTime
              timeA={{
                slug: 'bra',
              }}
              timeB={{
                slug: 'arg',
              }}
              match={{
                time: '15:00',
              }}
            />

            <CardsTime
              timeA={{
                slug: 'por',
              }}
              timeB={{
                slug: 'uru',
              }}
              match={{
                time: '07:00',
              }}
            />
          </div>
        </section>
      </main>
    </>
  )
}
