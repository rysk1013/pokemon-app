import React, { useEffect } from "react";
import { getAllPokemon } from "./utils/pokemon";
import "./App.css";

function App() {
  // エンドポイント
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  // 全てのポケモンデータを取得
  const fetchPokemonData = async () => {
    return await getAllPokemon(initialURL);
  };

  // 初期画面
  useEffect(() => {
    fetchPokemonData();
  }, []);

  return <div className="App"></div>;
}

export default App;
