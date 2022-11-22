import React, { useEffect } from "react";
// import { useCapturarNome } from "./hooks/useCapturarNome";
// import { useCapturarPostagens } from "./hooks/useCapturarPostagens";
import { useRequestData } from "./hooks/useRequestData";
import { BASE_URL, BASE_URL_HP } from "./constants/constants";
function App() {
  // const nomeUsuarios = useCapturarNome();
  // const postagens = useCapturarPostagens();
  const [nomeUsuarios, loadingUsuarios, erroUsuarios] = useRequestData(
    [],
    BASE_URL,
    "users"
  );
  const [postagens, loadingPostagens, erroPostagens] = useRequestData(
    [],
    BASE_URL,
    "comments"
  );
  const [personagens] = useRequestData([], BASE_URL_HP, "/characters");
  const [spells] = useRequestData([], BASE_URL_HP, "/spells");
  const [house] = useRequestData(
    [],
    BASE_URL_HP,
    "/characters/house/gryffindor"
  );
  console.log(house);
  return (
    <>
      <p>Exercício 1</p>
      {erroUsuarios && (
        <p>Falha na requisição dos usuários, tente novamente.</p>
      )}
      {!erroUsuarios && !loadingUsuarios ? (
        nomeUsuarios.map((usuario) => {
          return <p key={usuario.id}>{usuario.name}</p>;
        })
      ) : (
        <p>carregando usuarios...</p>
      )}
      <hr />
      <p>Exercício 2</p>
      {erroPostagens && (
        <p>Falha na requisição de postagens. Por favor, tente mais tarde</p>
      )}
      {!loadingPostagens ? (
        postagens.map((post) => {
          return <p key={post.id}>{post.body}</p>;
        })
      ) : (
        <p>Carregando postagens...</p>
      )}
      <p>Exercício 3 - HP Personagens</p>
      {personagens.map((personagem) => {
        return (
          <p>
            {personagem.name} - {personagem.house}
          </p>
        );
      })}
      <p>Spells</p>
      {spells.map((spell) => {
        return (
          <p>
            {spell.name} - {spell.description}
          </p>
        );
      })}
    </>
  );
}

export default App;
