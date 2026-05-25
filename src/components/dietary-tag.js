import { LuCandyOff, LuEggOff, LuFishOff, LuMilkOff, LuNutOff, LuSalad, LuSlash, LuVegan, LuWheatOff } from "react-icons/lu";
import { TbDropletFilled, TbDropletMinus, TbPepperOff } from "react-icons/tb";

const item = {
    lactosefree: {
        icon: <div className="flex items-center justify-center relative overflow-clip">
            <TbDropletFilled aria-label="lactosefri" />
            <LuSlash className="absolute text-blue-400 text-4xl -top-[32%] -left-[32%]"/>
            <LuSlash className="absolute"/>
        </div>,
        bg: "blue",
        color: "white"
    },
    dairyfree: {
        icon: <LuMilkOff aria-label="dairyfri" />,
        bg: "blue",
        color: "white"
    },
    glutenfree: {
        icon: <LuWheatOff aria-label="glutenfri" />,
        bg: "yellow",
        color: "black"
    },
    vegan: {
        icon: <LuVegan aria-label="Vegansk" />,
        bg: "green",
        color: "white"
    },
    nutfree: {
        icon: <LuNutOff aria-label="nøttefri" />,
        bg: "red",
        color: "white"
    },
    eggfree: {
        icon: <LuEggOff aria-label="eggfri" />,
        bg: "yellow",
        color: "black"
    },
    fishfree: {
        icon: <LuFishOff aria-label="fiskfri" />,
        bg: "blue",
        color: "white"
    },
    vegetarian: {
        icon: <LuSalad aria-label="vegetarisk" />,
        bg: "green",
        color: "white"
    },
    sugerfree: {
        icon: <LuCandyOff aria-label="sukkerfri" />,
        bg: "red",
        color: "white"
    },
    spicyfree: {
        icon: <TbPepperOff aria-label="spicyfri" />,
        bg: "green",
        color: "white"
    }
}

export default function DietaryTag({ children, tag }) {
    return (
        <div className={`rounded-full p-1 bg-${item?.[tag]?.bg}-400 text-${item?.[tag]?.color} text-2xl`}>
            {item?.[tag]?.icon}
        </div>
    )
}