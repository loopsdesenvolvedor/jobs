import { Request, Response, Router } from "express";
const routes = Router();

type SearchRequest = {
  text: "text" | "search";
  name: string;
  id: string;
  placeholder: string;
  icon?: string;
};

routes.get("/", (req: Request, res: Response) => {
  const inputsSearch: SearchRequest[] = [
    {
      text: "text",
      name: "location",
      id: "location",
      placeholder: "Cidade, região, estado... ",
      icon: `
            <svg stroke="currentColor"
              fill="currentColor" stroke-width="0"
              viewBox="0 0 384 512" height="200px"
              width="200px" xmlns="http://www.w3.org/2000/svg"><path
                  d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0
                  85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97
                  99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192
                  272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80
                  35.817 80 80 80z"></path>
            </svg>
        `,
    },
    {
      text: "text",
      name: "jobs",
      id: "jobs",
      placeholder: "Buscar uma vaga, cargo, empresa...",
      icon: `
            <svg stroke="currentColor"
              fill="currentColor" stroke-width="0"
              viewBox="0 0 24 24" height="200px"
              width="200px" xmlns="http://www.w3.org/2000/svg"><path
              fill="none" d="M0 0h24v24H0V0z"></path><path
                  d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0
                  16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59
                  4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6
                  0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          `,
    },
  ];
  res.render("index", {
    title: "Jobs: Conectando Talentos e Oportunidades",
    description:
      "Encontre vagas de emprego em diversas áreas, conectando você a empresas que buscam talentos. Acesse oportunidades de trabalho em tempo real, personalize sua busca e avance na sua carreira com a nossa plataforma de empregos confiável e eficiente",
    inputsSearch,
  });
});

export default routes;
