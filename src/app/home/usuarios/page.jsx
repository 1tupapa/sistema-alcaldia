import { fonts } from "@/app/ui/Fonts";
import UserCards from "@/app/ui/usuarios/user-cards";

export default function UserPage() {
    return (
      <main>
        <h1 className={`${fonts.inter.className} text-2xl mb-6`}>Lista de <span className="text-blue-700 font-bold">usuarios</span> registrados</h1>

        <UserCards />
      </main>
    )
}