import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UserApp } from "./UserApp";
//import { PrimerComponente } from "./PrimerComponente"; <PrimerComponente Titulo = {"Mi Primer Componente"} Subtitulo = {"Mi Subtitulo secundario"}/>
// import { ContadorApp } from "./ContadorApp"; <ContadorApp value = {0} /> dentro del StricMode
//import { ListadoApp } from "./ListadoApp"; <ListadoApp/> dentro del StricMode
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserApp></UserApp>
  </StrictMode>
);
