import Image from "next/image";
import { LuMilk, LuWheat } from "react-icons/lu";

export default function SmallRecipeCard() {
    return (
        <section className="flex flex-row w-full p-4 gap-6 border-2">
            <div className="w-1/4 aspect-square h-full overflow-clip rounded-full flex items-center justify-center">
                <Image src="/homemade-cookies.jpg" alt="Image ofHomemade Cookies" width={500} height={300} className="" />
            </div>
            <articl className="flex flex-col gap-2 justify-center">
                <h1 className="font-semibold text-lg">Homemade Cookies</h1>
                <div className="flex flex-row items-center gap-2 *:rounded-full *:p-1 *:bg-gray-400 text-3xl">
                    <LuMilk />
                    <LuWheat />
                </div>
            </articl>
        </section>
    )
}