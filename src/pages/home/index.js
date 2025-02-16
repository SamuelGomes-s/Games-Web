import { useState } from "react";
import Container from "../../components/Container";
import GameInput from "./components/GameInput/input";

export default function Home() {

  const [inputValue, setInputValue] = useState('');

  function handleSearch() {
    alert('teste')
  }

  return (
    <Container>
      <GameInput
        placeholder="Procurando por algum jogo?"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        $onClickBtn={handleSearch}
      />
    </Container>
  );
}
