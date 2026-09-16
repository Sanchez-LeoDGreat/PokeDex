export default function PokemonCardContainer({ children }){
    return (
        <ul className="flex flex-wrap gap-2">
            { children }
        </ul>
    );
}