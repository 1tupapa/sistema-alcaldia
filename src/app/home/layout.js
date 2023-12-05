import { NavBar } from "@/ui/NavBar";

export const metadata = {
  title: 'Main | Sistema',
  description: 'Pagina para medir la gasolina gastada en la alcaldia de Leon'
}

export default function MainLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <NavBar />
            {children}
        </body>
      </html>
    )
  }