async function gerarPokemon(num) {
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
   const json = response => response.json()
   return {
      name: json.name,
      type1: json.types[0].type.name,
      type2: json.types[1].type.name,
      sprite: json.sprites.other.showdown.front_default
   }
}
