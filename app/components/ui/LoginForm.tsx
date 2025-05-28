'use client'

import { useContext, useState } from 'react'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc' // Ícone do Google
import { UserContext } from '@/app/contexts/UserContext'
import { Loader } from 'lucide-react'

export default function LoginForm() {
    const {login, loading, error} = useContext(UserContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(email, password);
  }

  const handleGoogleLogin = () => {
    console.log('Login com Google (aqui você chama a função de login real)')
    // Ex: signIn('google') do NextAuth
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6"
    >
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800">Bem-vindo de volta</h1>
        <p className="text-sm text-gray-500">Faça login para continuar</p>
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      
      {/* Login tradicional */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Senha
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

        {/* Separador */}
      <div className="flex items-center gap-2">
        <hr className="flex-grow border-gray-300" />
        <span className="text-sm text-gray-400">ou</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      {/* Google Login */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="flex items-center justify-center w-full border border-gray-300 py-3 rounded-md hover:bg-gray-100 transition"
      >
        <FcGoogle className="mr-2 text-xl" />
        <span className="text-sm font-medium text-gray-700">Entrar com Google</span>
      </button>

      <div className="text-right">
        <Link href="/esqueci-senha" className="text-sm text-blue-600 hover:underline">
          Esqueceu a senha?
        </Link>
      </div>

        <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
            {loading ? (
                <Loader className='animate-spin' />
            ) : 'Entrar'}
      </button>

      <p className="text-center text-sm text-gray-600">
        Não tem uma conta?{' '}
        <Link href="/cadastro" className="text-blue-600 hover:underline">
          Cadastre-se
        </Link>
      </p>
    </form>
  )
}
