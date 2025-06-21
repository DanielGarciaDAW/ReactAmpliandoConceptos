import PokemonCard from "./PokemonCard";

function PokemonList({ pokemons }) {
  return (
    <ul className="pokemon-list">
        <PokemonCard></PokemonCard>
    </ul>
  );
}

export default PokemonList;