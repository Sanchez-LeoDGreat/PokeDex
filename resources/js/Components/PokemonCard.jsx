import TypingCardContainer from "./TypingCardContainer";
import TypingCard from "./TypingCard";

export default function PokemonCard({ pokemon }){
    return (
        <li className="border-2 rounded-md shadow-md text-lg pb-1 w-[calc(33.33%-0.45rem)] md:w-[calc(16.667%-0.45rem)] place-items-center">
            <p className="text-center capitalize w-full bg-black text-white">{ pokemon.name }</p>
            <div className="relative">
                <span className="absolute z-10 left-1">{ pokemon.id }</span>
                <img src={pokemon?.sprites?.front_default || ''} alt={pokemon.name} className="w-[calc(30dvw-0.4rem)] max-h-48"/>
            </div>
            <TypingCardContainer>
                {pokemon.types.map((t, i) => <TypingCard key={`${pokemon.id}-${i}`} type={t.type.name}/>)}
            </TypingCardContainer>
        </li>
    );
}
