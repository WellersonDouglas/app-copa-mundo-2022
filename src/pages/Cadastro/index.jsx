import { ArrowLeft } from 'phosphor-react'
import { InputForm } from '~/components/Input/InputForm'
import LogoBranca from '../../assets/logo-fundo-branco.svg'

export function Cadastro() {
  return (
    <div>
      <header className="p-4 border-b border-red-300">
        <div className="container max-w-xl flex justify-center">
          <img className="w-32 md:w-40" src={LogoBranca} alt="" />
        </div>
      </header>

      <main className="container max-w-xl p-4">
        <div className="p-4 flex space-x-4 items-center">
          <a href="/">
            <ArrowLeft size={24} weight="bold" />
          </a>
          <h2 className="text-xl font-bold">Crie sua conta</h2>
        </div>

        <form className="space-y-6 p-4">
          <InputForm
            type="text"
            name="name"
            label="Seu nome"
            placeholder="Digite seu nome"
          />

          <InputForm
            type="text"
            name="username"
            label="Seu nome de usuário"
            placeholder="Digite um nome de usuário"
          />
          <InputForm
            type="email"
            name="email"
            label="Seu e-mail"
            placeholder="Digite seu e-mail"
          />
          <InputForm
            type="password"
            name="password"
            label="Sua senha"
            placeholder="Digite sua senha"
          />

          <a
            href="/dashboard"
            className="block w-full text-center text-white bg-red-700 px-6 py-3 rounded-xl transition-colors hover:bg-red-500
          "
          >
            Criar minha conta
          </a>
        </form>
      </main>
    </div>
  )
}
