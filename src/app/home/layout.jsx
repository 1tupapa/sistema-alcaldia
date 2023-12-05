import SideNav from "../ui/main/side-Nav"

export const metadata = {
  title: 'Main | Sistema',
  description: 'Pagina para medir la gasolina gastada en la alcaldia de Leon'
}

export default function MainLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
              <div className="w-full flex-none md:w-64">
                  <SideNav />
              </div>
              <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{ children }</div>
          </div>
        </body>
      </html>
    )
  }