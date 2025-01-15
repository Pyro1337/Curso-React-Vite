import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import { PrimerComponente } from "./PrimerComponente"; <PrimerComponente Titulo = {"Mi Primer Componente"} Subtitulo = {"Mi Subtitulo secundario"}/>
// import { ContadorApp } from "./ContadorApp"; <ContadorApp value = {0} /> dentro del StricMode
import { ListadoApp } from "./ListadoApp";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListadoApp/>
  </StrictMode>
);
