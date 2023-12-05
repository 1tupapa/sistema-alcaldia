import { HostIcon, Icons, LockIcon } from "@/app/plugins/Icons";
import Link from "next/link";
import { fonts } from "../Fonts";

const { FuelIcon, UserIcon, CalendarIcon } = Icons;

export default function CreateForm() {


    return (
    <form className="">
      <h1 className={`${fonts.inter.className} text-2xl text-center`}>Crea un <span className="text-red-900">registro</span></h1>
      <div className="rounded-md bg-gray-50 p-4 md:p-6 w-1/2">
        {/* employee Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Elige un trabajador
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              value=""
            >
              <option value="" disabled>
                Selecciona un trabajador
              </option>
              {/* TODO:Funcion para mostrar todos los usuarios */}
              {/* {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))} */}
            </select>
            <UserIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* fuel Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Ingrese la cantidad de gasolina 
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="ingrese la cantidad en litros"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <FuelIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/*  Date */}
        <div className="mb-4">
          <label htmlFor="date" className="mb-2 block text-sm font-medium">
            Fecha de registro
          </label>
          <div className="relative">
            <input
              id="date"
              name="date"
              type="date"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        {/*  Status */}
        
      </div>
      <div className="mt-6 flex justify-start gap-4">
        <button type="submit">Create Invoice</button>

        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
      </div>
    </form>
    )
}