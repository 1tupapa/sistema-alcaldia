import { HostIcon, Icons, LockIcon } from "@/app/plugins/Icons";
import Link from "next/link";
import { fonts } from "../Fonts";
import Buttom from "../buttom";

const { FuelIcon, UserIcon, CalendarIcon, VirusIcon, LicenseIcon, TypeIcon, CarIcon } = Icons;

export default function CreateForm() {

    const date = new Date().toISOString().split("T")[0];

    return (
    <form className="">
      <h1 className={`${fonts.inter.className} text-2xl text-center`}>Crea un <span className="text-red-900">registro</span></h1>
      <div className="flex flex-row justify-evenly">
        {/* Parte 1 del formulario */}
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
                required
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
                  step="1"
                  required
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
                defaultValue={date}
                required
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* boss acept */}
          <div className="mb-4">
            <label htmlFor="boss" className="mb-2 block text-sm font-medium">
              Persona que autorizo el registro
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="boss"
                  name="boss"
                  type="text"
                  required
                  placeholder="ingrese el nombre de la persona que autorizo el registro"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <VirusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>

        </div>
        {/* Parte 2 del formulario */}
        <div className="rounded-md bg-gray-50 p-4 md:p-6 w-1/2">
          {/* placa de moto */}
          <div className="mb-4">
            <label htmlFor="license" className="mb-2 block text-sm font-medium">
              Placa de la moto
            </label>
            <div className="relative">
              <input
                id="license"
                name="license"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                placeholder="ingrese la placa de la moto"
                required
              >
              </input>
              <LicenseIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* type fuel */}
          <div className="mb-4">
            <label htmlFor="typeOfFuel" className="mb-2 block text-sm font-medium">
              Elige un tipo de gasolina
            </label>
            <div className="relative">
              <select
                id="typeOfFuel"
                name="typeOfFuel"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                value=""
                required
              >
                <option value="" disabled>
                  Tipo de gasolina
                </option>
                {/* TODO:Funcion para mostrar los tipos de gasolina */}
                {/* {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))} */}
              </select>
              <TypeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* type of vehicle */}
          <div className="mb-4">
            <label htmlFor="typeOfVehicle" className="mb-2 block text-sm font-medium">
              Elige un tipo de vehiculo
            </label>
            <div className="relative">
              <select
                id="typeOfVehicle"
                name="typeOfVehicle"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                value=""
                required
              >
                <option value="" disabled>
                  Tipo de vehiculo
                </option>
              </select>
              <CarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          {/* pipa Person */}
          <div className="mb-4">
            <label htmlFor="pipa" className="mb-2 block text-sm font-medium">
              Persona encargada de la pipa
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  id="pipa"
                  name="pipa"
                  type="text"
                  placeholder="ingrese el nombre de la persona encargada de la pipa"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
                />
                <VirusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </div>

        </div>
      </div>
        {/*  Status */}
      <div className="mt-6 p-6 flex justify-start gap-4">
        <Buttom>
          Guardar
        </Buttom>

        <Link
          href="/home"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Canelar
        </Link>
      </div>
    </form>
    )
}