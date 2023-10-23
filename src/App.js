import React, { useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import "./App.css";

function App() {
  // エンドポイント
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);

  // 初期画面
  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンデータを取得
      let res = await getAllPokemon(initialURL);
      // 各ポケモンの詳細データを取得
      loadPokemon(res.results);
      setLoading(false);
    };

    const loadPokemon = async (data) => {
      let _pokemonData = await Promise.all(
        data.map((pokemon) => {
          let pokemonRecord = getPokemon(pokemon.url);
          return pokemonRecord;
        })
      );
      setPokemonData(_pokemonData);
    };

    fetchPokemonData();
  }, []);

  console.log(pokemonData);

  return (
    <div className="App">
      {loading ? (
        <h1>ロード中・・・</h1>
      ) : (
        <h1>ポケモンデータを取得しました</h1>
      )}
    </div>
  );
}

export default App;
