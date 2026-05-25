import Image from "next/image";
import DietaryTag from "./dietary-tag";

export default function SmallRecipeCard() {
    return (
        <section className="flex flex-row w-full p-2 gap-4 border-2">
            <div className="w-1/5 aspect-square h-full overflow-clip rounded-full flex items-center justify-center">
                <Image src="/homemade-cookies.jpg" alt="Image ofHomemade Cookies" width={500} height={300} className="" />
            </div>
            <articl className="flex flex-col justify-center">
                <h1 className="font-semibold text-lg">Homemade Cookies</h1>
                <div className="flex flex-row items-center gap-2 py-1">
                    <DietaryTag tag="nutfree" />
                    <DietaryTag tag="fishfree" />
                    <DietaryTag tag="vegetarian" />
                    <DietaryTag tag="spicyfree" />
                </div>
            </articl>
        </section>
    )
}