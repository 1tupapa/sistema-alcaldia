import { Icons,  } from "@/app/plugins/Icons";
import Link from "next/link";

const { UpdateIcon, TrashIcon } = Icons;

export function UpdateRegister({ id }) {
    return (
        <Link
        href={`/home/registros/update/${id}`}
        className="rounded-md border p-2 hover:bg-gray-100"
    >
        
     <UpdateIcon className="w-5" />   
    </Link>
    )
}

export function DeleteRegister({ id }) {
    return (
      <>
        <button className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </>
    );
  }

