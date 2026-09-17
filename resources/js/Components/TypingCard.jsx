export default function TypingCard({ type }){
    const typeColors = {
        normal: "bg-orange-200",
        fire: "bg-red-500 text-white",
        water: "bg-blue-400 text-white",
        electric: "bg-yellow-200",
        grass: "bg-emerald-500 text-white",
        ice: "bg-sky-300 text-white",
        fighting: "bg-red-800 text-white",
        poison: "bg-violet-700 text-white",
        ground: "bg-amber-900 text-white",
        flying: "bg-violet-400 text-white",
        psychic: "bg-rose-500 text-white",
        bug: "bg-lime-300",
        rock: "bg-yellow-600 text-white",
        ghost: "bg-purple-950 text-white",
        dragon: "bg-violet-800 text-white",
        dark: "bg-gray-800 text-white",
        steel: "bg-gray-400 text-white",
        fairy: "bg-pink-400 text-white",
    };

    return (
        <li className={`${typeColors?.[`${type}`]} uppercase rounded-sm px-2`}>{ type }</li>
    );
}