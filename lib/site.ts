export type Project = {
  src: string;
  title: string;
  tag: string;
  description: string;
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type Social = {
  label: string;
  href: string;
};

export const site = {
  name: "Daniel Souza",
  role: "Motion Graphic Designer",
  yearsOfExperience: 10,
  available: true,
  intro: [
    "Transformo ideias em movimento. Com mais de 5 anos de experiência, crio identidades animadas, peças de motion design e narrativas que dão vida a marcas.",
    "Atuo da direção de arte à finalização, combinando design, animação e storytelling para entregar projetos que comunicam com impacto em qualquer formato.",
  ],
  marquee: [
    "Motion Design",
    "Direção de Arte",
    "Animação 2D",
    "Identidade Visual",
    "Storytelling",
    "Criação de Conteúdo",
    "Edição",
    "Design de Som",
  ],
  projects: [
    {
      src: "/videos/1.mp4",
      title: "Projeto 01",
      tag: "Identidade em movimento",
      description:
        "Identidade visual animada para uma marca que precisava se destacar no digital.",
    },
    {
      src: "/videos/2.mp4",
      title: "Projeto 02",
      tag: "Motion de produto",
      description:
        "Peça de motion para lançamento de produto, do roteiro à entrega final.",
    },
    {
      src: "/videos/3.mp4",
      title: "Projeto 03",
      tag: "Narrativa animada",
      description:
        "Storytelling animado combinando tipografia, ritmo e trilha sonora.",
    },
  ],
  email: "7danielsouza@gmail.com",
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Behance", href: "https://behance.net/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};
