import PokemonCardContainer from "../Components/PokemonCardContainer";
import PokemonCard from "../Components/PokemonCard";

export default function Home({ pokemons }){
    console.log(pokemons.original[19])

    return (
        <div>
            <PokemonCardContainer>
                {pokemons.original.map((pokemon) => (
                    <PokemonCard pokemon={pokemon}/>
                ))}
            </PokemonCardContainer>
        </div>
    );
}