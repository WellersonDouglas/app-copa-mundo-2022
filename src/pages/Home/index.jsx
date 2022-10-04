import LogoVinho from '../../assets/logo-fundo-vinho.svg'
import CapaHome from '../../assets/Mask group.png'

export function Home() {
  return (
    <div className="md:h-screen lg:h-screen bg-red-700 text-white flex flex-col items-center p-4 space-y-6">
      <header className="flex justify-center container max-w-5xl p-4">
        <img className="w-40" src={LogoVinho} alt="" />
      </header>

      <div className="container max-w-5xl flex-1 flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <div className="md:flex-1 flex justify-center">
          <img className="w-full max-w-sm" src={CapaHome} alt="" />
        </div>

        <div className="flex flex-col space-y-6 md:flex-1">
          <h1 className="text-3xl text-center font-bold md:text-left">
            Dê o seu palpite na Copa do Mundo do Catar 2022!
          </h1>

          <a
            href="/cadastro"
            className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl font-bold transition-colors hover:text-white hover:border-white border hover:bg-red-500"
          >
            Criar minha conta
          </a>

          <a
            href="/login"
            className="text-center text-white border border-white text-xl px-8 py-4 rounded-xl font-bold hover:border-white hover:bg-red-500"
          >
            Fazer login
          </a>
        </div>
      </div>
    </div>
  )
}
