export default function PokemonCardSkeleton() {
    return (
        <li className="animate-pulse bg-gray-200 rounded-lg w-[calc(16.667%-0.45rem)] pb-1">
            <p className="bg-gray-300 w-full rounded text-center text-gray-300 select-none">-</p>
            <div className="h-54 w-[calc(30dvw-0.4rem)] rounded"></div>
            <ul className="flex flex-wrap gap-1 rounded justify-center">
                <li className="bg-gray-300 uppercase rounded-sm select-none px-2 text-gray-300">typing</li>
                <li className="bg-gray-300 uppercase rounded-sm select-none px-2 text-gray-300">typing</li>
            </ul>
        </li>
    );
}