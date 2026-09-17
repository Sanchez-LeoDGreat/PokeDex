import PokemonCardContainer from "../Components/PokemonCardContainer";
import PokemonCardSkeleton from "../Components/PokemonCardSkeleton";
import PokemonCard from "../Components/PokemonCard";
import { useEffect, useState } from "react";
import { route } from "ziggy-js";

export default function Home(){
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const cached = localStorage.getItem("pokemons");

        if (cached) {
            setPokemons(JSON.parse(cached));
            setIsLoading(false);
            return;
        }

        axios.get(route("pokemons"))
            .then((response) => {
                const p = response.data.original.pokemons;
                setPokemons(p);
                localStorage.setItem("pokemons", JSON.stringify(data));
            })
            .catch((err) => {
                console.warn(err);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div>
            <PokemonCardContainer>
                {isLoading
                    ? Array.from({ length: 20 }).map((_, i) => (
                        <PokemonCardSkeleton key={i}/>
                    ))
                    : pokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                    ))
                }
            </PokemonCardContainer>
        </div>
    );
}