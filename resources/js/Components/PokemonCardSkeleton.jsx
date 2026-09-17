export default function PokemonCardSkeleton() {
    return (
        <li className="animate-pulse bg-gray-200 w-[calc(33.33%-0.45rem)] md:w-[calc(16.667%-0.45rem)] pb-1">
            <p className="bg-gray-300 w-full rounded text-center text-gray-300 select-none">-</p>
            <div className="w-[calc(30dvw-0.4rem)] min-h-48 rounded flex-auto"></div>
        </li>
    );
}