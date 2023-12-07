import Image from "next/image";

export default function Table() {

    // Todo: Realizar la consulta a la base de datos para obtener los datos de la tabla

    return (
        <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {/* {invoices?.map((invoice) => ( */}
              <div
                // key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 items-center">
                      <p>nombre del cliente</p> {/*invoice.name*/}
                    </div>
                    <p className="text-sm text-gray-500">email</p> {/*invoice.email*/}
                  </div>
                  {/* <InvoiceStatus status={invoice.status} /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">cantidad de gasolina</p> {/*invoice.mount*/}
                    {/* <p>{formatDateToLocal(invoice.date)}</p> */}
                  </div>
                  <div className="flex justify-end gap-2">
                    {/* <UpdateInvoice id={invoice.id} />
                    <DeleteInvoice id={invoice.id} /> */}
                  </div>
                </div>
              </div>
            {/* ))} */}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Trabajador
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Gasolina
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tipo de gasolina
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fecha
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Autorizado
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Placa
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Tipo de vehiculo
                </th>
                
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {/* {invoices?.map((invoice) => ( */}
                <tr
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    Luis Alberto Zoza Ochoa {/*invoice.name*/}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    20 {/*invoice.amount*/}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    Diseal {/*invoice.type*/}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    12-12-2023 {/*formatDateToLocal(invoice.date)*/}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    Luis enrique Florez Dias {/*invoice.authorized*/}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    CH-4102-M {/*invoice.plate*/}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    Camioneta {/*invoice.vehicleType*/}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* <InvoiceStatus status={invoice.status} /> */}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} /> */}
                    </div>
                  </td>
                </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    )
}