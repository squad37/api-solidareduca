import { Router } from "express";

const alunosRoutes = Router();

alunosRoutes.get("/", (request, response) => {
  return response.json({
    nome: "Joãozinho",
    endereco: "Endereço Teste",
    idade: 10,
    série: "4º ano EF",
  });
});

export { alunosRoutes };