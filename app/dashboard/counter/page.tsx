import { Metadata } from "next";
import { CartCounter } from "./components";



export const metadata: Metadata= {
    title: "Shopping Cart",
    description: "Es una pagina de un contador Simple",
}

export default function CounterPager() {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
          <span>Productos en el carrito</span>
            <CartCounter value={20} />
      </div>
    )
  }
  