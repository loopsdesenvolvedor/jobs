import { Request, Response, Router } from "express";
const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Jobs: Conectando Talentos e Oportunidades",
    description:
      "Encontre vagas de emprego em diversas áreas, conectando você a empresas que buscam talentos. Acesse oportunidades de trabalho em tempo real, personalize sua busca e avance na sua carreira com a nossa plataforma de empregos confiável e eficiente",
  });
});

export default routes;
