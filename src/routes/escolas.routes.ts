import { Router } from "express";

const escolasRoutes = Router();

escolasRoutes.get("/", (request, response) => {
  return response.json({
    nome: "Escola Teste",
    endereço: "Endereço Teste",
    pontos: 10,
    parceira: true,
  });
});

export { escolasRoutes };
