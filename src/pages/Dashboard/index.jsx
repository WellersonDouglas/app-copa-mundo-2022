import { UserCircle } from 'phosphor-react'
import LogoVermelha from '../../assets/logo-fundo-vermelho.svg'

export function Dashboard() {
  return (
    <div className="">
      <header className="bg-red-500 text-white p-4">
        <div className="container max-w-xl flex justify-between items-center">
          <a href="/" className="hover:transition-all hover:translate-y-1">
            <img className="w-32 md:w-40" src={LogoVermelha} alt="" />
          </a>
          <a href="/perfil">
            <UserCircle size={26} weight="bold" />
          </a>
        </div>
      </header>

      <main>
        <section id="header" className=" bg-red-500 text-white p-4">
          <div className="container max-w-xl space-y-6">
            <span>Olá Wellerson</span>
            <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
          </div>
        </section>

        <section id="content"></section>
      </main>
    </div>
  )
}
