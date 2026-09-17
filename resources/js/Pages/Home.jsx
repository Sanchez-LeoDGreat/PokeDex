import PokemonCardContainer from "../Components/PokemonCardContainer";
import PokemonCardSkeleton from "../Components/PokemonCardSkeleton";
import PokemonCard from "../Components/PokemonCard";
import { useEffect, useRef, useState } from "react";
import { route } from "ziggy-js";

export default function Home(){
    const [data, setData] = useState({});
    const [pokemons, setPokemons] = useState([]);
    const [nextURL, setNextURL] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const loadingRef = useRef(null);

    useEffect(() => {
        const cached = localStorage.getItem("data");

        if (cached) {
            const cacheData = JSON.parse(cached);
            setData(cacheData);
            setNextURL(cacheData.next);
            setPokemons(cacheData.pokemons);
            setIsLoading(false);
            return;
        }

        axios.get(route("pokemons"))
            .then((response) => {
                const newData = response.data.original;
                const newPokemons = response.data.original.pokemons;

                setData(newData);
                setNextURL(newData.next);
                setPokemons(newPokemons);

                localStorage.setItem("data", JSON.stringify(data));
            })
            .catch((err) => console.warn(err))
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !isLoading && nextURL != null){
                setIsLoading(true);
                const urlObject = new URL(nextURL);
                const offset = pokemons.length;
                const limit = urlObject.searchParams.get('limit');

                axios.get(route("pokemons.more", { offset , limit }))
                    .then((response) => {
                        const newData = response.data.original;
                        const newPokemons = response.data.original.pokemons;

                        setData(prev => ({
                            next: nextURL,
                            pokemons: [...prev.pokemons, ...newPokemons]
                        }));
                        setNextURL(newData.next);
                        setPokemons(prev => [...prev, ...newPokemons]);

                        localStorage.setItem("data", JSON.stringify(data));
                    })
                    .catch((err) => console.warn(err))
                    .finally(() => setIsLoading(false));
            }
        });

        if (loadingRef.current) observer.observe(loadingRef.current);

        return () => observer.disconnect();
    }, [nextURL, isLoading])

    return (
        <div>
            <PokemonCardContainer>
                {Array.isArray(pokemons) && pokemons.map((pokemon, i) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon}/>
                ))}

                {isLoading &&
                    Array.from({ length: 12 }).map((_, i) => (
                        <PokemonCardSkeleton key={i}/>
                    ))
                }
            </PokemonCardContainer>
            <div ref={loadingRef}/>
        </div>
    );
}