import React, { useEffect, useState } from "react";
import { getAllPokemon } from "./utils/pokemon";
import "./App.css";

function App() {
  // エンドポイント
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  const [loading, setLoading] = useState(true);

  // 初期画面
  useEffect(() => {
    // 全てのポケモンデータを取得
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL);
      console.log(res);
      setLoading(false);
    };

    fetchPokemonData();
  }, []);

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
