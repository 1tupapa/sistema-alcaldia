import Link from "next/link"


export const NavBar = () => {
  return (
    <>
        <header >
            <nav className="bg-blue-500 flex flex-row justify-between p-4">
              <h1>L O G O</h1>

              <ul className="flex flex-row gap-4">
                <li>
                  <Link href='/home'> Pagina Principal </Link>
                </li>
                <li>
                  <Link href='/home/transacciones'> Transacciones </Link>
                </li>
                <li>
                  <Link href='/home/trabajadores'> Trabajadores </Link>
                </li>
              </ul>

              <button>
                cerrar sesion
              </button>
            </nav>
        </header>
    </>
  )
}
