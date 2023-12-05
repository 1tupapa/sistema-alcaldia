'use client';

import { Icons } from "@/plugins/Icons";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

export const LoginForm = () => {

    const inputStyle = "rounded-2xl py-5 px-2 pl-8 bg-zinc-300 hover:bg-zinc-200 focus:bg-zinc-200 text-sm border-2 border-zinc-500/40 h-8 w-full"

    const { UserIcon, LockIcon } = Icons;

  return (
    <main 
        className="flex justify-center items-center mx-auto my-auto h-screen"
        style={{backgroundImage: `url(/alcaldia.webp)`
        , backgroundSize: `cover`,
        backgroundPosition: `center`,
    }}
    >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="pt-28 pb-10 pl-12 pr-12 bg-zinc-200 rounded-md shadow-2xl relative">
        <form className="flex flex-col gap-8">
            
            <Image
                src="/logo-alcaldia.webp"
                priority={true}
                alt="Logo"
                width={150}
                height={150}
                className="mx-auto absolute -top-14 left-1/2 transform -translate-x-1/2"
            />

            <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg" />
                <input 
                    className={`${inputStyle}`}  
                    type="email" placeholder="Ingrese su Usuario" 
                />
            </div>
            <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg" />
                <input 
                    className={`${inputStyle}`} 
                    type="password" placeholder="Ingrese su contraseña" 
                />
            </div>

            <label className="flex items-center gap-8">
                <div >
                    <input type="checkbox" className="mr-1"/>
                    <span className="text-sm text-gray-600">Recordar contraseña</span>
                </div>
                <button>
                    <a href="#" className="text-sm text-blue-950 hover:text-blue-900">¿Olvido su contraseña?</a>
                </button>
            </label>
            <Link
                className="bg-blue-950 text-center text-white rounded-lg p-2 text-sm font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-900 duration-200" 
                type="submit"
                href='/home' 
            >
                Iniciar Sesion
            </Link>
            <button 
                className="bg-red-700 text-center text-white rounded-lg p-2 text-sm font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-200"
                onClick={ () => signIn('google') }
            >
                Google
            </button>
        </form>
    </div>
</main>
  )
}
