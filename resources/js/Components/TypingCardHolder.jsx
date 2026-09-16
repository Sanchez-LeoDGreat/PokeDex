import TypingCard from "./TypingCard";

export default function TypingCardHolder({ types }){
    return (
        <ul className="flex flex-wrap gap-1">
            {types.map((item) => {
                let type = item.type.name;
                switch (type){
                    case "normal":
                        return <TypingCard type={type} className="bg-orange-200"/>
                    case "fire":
                        return <TypingCard type={type} className="bg-red-500 text-white"/>
                    case "water":
                        return <TypingCard type={type} className="bg-blue-400 text-white"/>
                    case "electic":
                        return <TypingCard type={type} className="bg-yellow-200"/>
                    case "grass":
                        return <TypingCard type={type} className="bg-emerald-500 text-white"/>
                    case "ice":
                        return <TypingCard type={type} className="bg-sky-300 text-white"/>
                    case "fighting":
                        return <TypingCard type={type} className="bg-red-800 text-white"/>
                    case "poison":
                        return <TypingCard type={type} className="bg-violet-700 text-white"/>
                    case "ground":
                        return <TypingCard type={type} className="bg-amber-900 text-white"/>
                    case "flying":
                        return <TypingCard type={type} className="bg-violet-400 text-white"/>
                    case "psychic":
                        return <TypingCard type={type} className="bg-rose-500 text-white"/>
                    case "bug":
                        return <TypingCard type={type} className="bg-lime-300"/>
                    case "rock":
                        return <TypingCard type={type} className="bg-yellow-600 text-white"/>
                    case "ghost":
                        return <TypingCard type={type} className="bg-purple-950 text-white"/>
                    case "dragon":
                        return <TypingCard type={type} className="bg-violet-800 text-white"/>
                    case "dark":
                        return <TypingCard type={type} className="bg-taupe-900 text-white"/>
                    case "steel":
                        return <TypingCard type={type} className="bg-gray-400 text-white"/>
                    case "fairy":
                        return <TypingCard type={type} className="bg-pink-400 text-white"/>
                    default:
                        return <TypingCard type={type} className="bg-gray-200"/>
                }
            })}
        </ul>
    );
}