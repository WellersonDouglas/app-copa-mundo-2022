import { UserCircle } from 'phosphor-react'
import LogoVermelha from '../../assets/logo-fundo-vermelho.svg'
import { CardsTime } from '../../components/Card/Card'
import { DateSelect } from '../../components/Date/DateSelect'

export function Dashboard() {
  return (
    <>
      <header className="bg-red-500 text-white">
        <div className="container max-w-xl flex justify-between items-center p-4">
          <a href="/" className="hover:transition-all hover:translate-y-1">
            <img className="w-32 md:w-40" src={LogoVermelha} alt="" />
          </a>
          <a href="/perfil">
            <UserCircle size={26} weight="bold" />
          </a>
        </div>
      </header>

      <main className="space-y-6">
        <section id="header" className=" bg-red-500 text-white">
          <div className="container max-w-xl space-y-6 p-4">
            <span>Olá Wellerson</span>
            <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content" className="container max-w-xl p-4 space-y-4">
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
                slug: 'ser',
              }}
              match={{
                time: '07:00',
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
