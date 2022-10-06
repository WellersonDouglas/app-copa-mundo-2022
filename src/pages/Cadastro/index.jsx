import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { ArrowLeft } from 'phosphor-react'
import { InputForm } from '~/components/Input/InputForm'
import LogoBranca from '../../assets/logo-fundo-branco.svg'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Preencha seu nome'),
  username: Yup.string().required('Preencha seu nome de usuário'),
  email: Yup.string()
    .email('Informe um e-mail válido')
    .required('Informe seu e-mail'),
  password: Yup.string().required('Digite uma senha'),
})

export function Cadastro() {
  const formik = useFormik({
    onSubmit: async (values) => {
      await axios({
        method: 'post',
        baseURL: 'http://localhost:3333',
        url: '/users',
        data: values,
      })
    },
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
    validationSchema,
  })

  //

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

        <form onSubmit={formik.handleSubmit} className="space-y-6 p-4">
          <InputForm
            type="text"
            name="name"
            label="Seu nome"
            placeholder="Digite seu nome"
            error={formik.errors.name && formik.touched.name}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <InputForm
            type="text"
            name="username"
            label="Seu nome de usuário"
            placeholder="Digite um nome de usuário"
            error={formik.errors.username && formik.touched.username}
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputForm
            type="email"
            name="email"
            label="Seu e-mail"
            placeholder="Digite seu e-mail"
            error={formik.errors.email && formik.touched.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputForm
            type="password"
            name="password"
            label="Sua senha"
            placeholder="Digite uma senha"
            error={formik.errors.password && formik.touched.password}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <button
            type="submit"
            disabled={!formik.isValid}
            className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl transition-colors hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed
          "
          >
            Criar minha conta
          </button>
        </form>
      </main>
    </div>
  )
}
