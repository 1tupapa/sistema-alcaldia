import { fonts } from "@/app/ui/Fonts";
import Table from "@/app/ui/registros/table";
import Search from "@/app/ui/search";
import { Suspense } from "react";


export default function TransPage() {

  const query = '';
  const currentPage = 1;

  return (
    <div className="w-full">
    <div className="flex w-full items-center justify-between">
      <h1 className={`${fonts.inter.className} text-2xl`}>Total de <span className="text-red-700 font-bold">registros</span> realizados</h1>
    </div>
    <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
      <Search placeholder="Busca un reporte..." />
      {/* <CreateInvoice /> */}
    </div>
    {/* el uso de la key es para que el componente se vuelva a renderizar cuando cambie la query o la pagina */}
      <Table query={query} currentPage={currentPage} />

    <div className="mt-5 flex w-full justify-center">
      {/* <Pagination totalPages={totalPages} /> */}
    </div>
  </div>
  )
}
      