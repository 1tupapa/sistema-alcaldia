import Link from "next/link";

export default function UserCards({ id }) {
    return (
        <div className="flex flex-wrap gap-6">
            <Link 
                href={`/home/usuarios/${id}`}
                className="block max-w-sm p-6 bg-zinc-800 border border-zinc-200 rounded-lg shadow hover:bg-zinc-700"
            >
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Alberto Altamirano Rodriguez Savebra</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Rol del usuario</p>
                <p className="text-base text-gray-500/40 pt-4">Click sobre mi para ver mas...</p>
            </Link>
            
        </div>
        
    )
}