import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Henrique Silveira",
  initials: "HS",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "FullStack Developer. Amo criar projetos e soluções que ajudam as pessoas. Florianópolis, SC 🇧🇷",
  summary:
    "Engenheiro de software com mais de 2 anos de experiência. Trabalhei em startups inovadoras, produtos de grandes empresas e agências premiadas. Familiarizado com funções tanto remotas quanto presenciais. Sempre busca assumir a responsabilidade pelo projeto e entregar mais rápido do que o esperado. Confortável com desenvolvimento web, mobile e de APIs.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Ruby on Rails",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/henriquemtn",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/henriquemtn/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/henriquemtn",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@starwhenry",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "RISE",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "/rise.jpeg",
      start: "Nov 2024",
      end: "Presente",
      description:
        "Atuei como desenvolvedor FullStack, criando um LMS focado em programação, a RISE é uma empresa composta por jovens que amam desenvolver, e juntos buscam uma solução para contribuir com o ensino de tecnológia nas escolas do Brasil.",
    },
    {
      company: "Avanti",
      badges: [],
      href: "https://penseavanti.com.br/",
      location: "Remote",
      title: "Estágio - Fullstack Developer",
      logoUrl: "/avanti.jpeg",
      start: "Jun 2024",
      end: "Jan 2025",
      description:
        "Atuei como desenvolvedor FullStack na migração de uma ferramenta interna da Avanti, chamada Jobber, essencial para o apontamento de horas, acompanhamento de tarefas e comunicação com clientes. Meu principal desafio foi reconstruir o frontend, migrando de React puro para Next.js, o que me proporcionou uma curva de aprendizado significativa e uma oportunidade de otimizar o desempenho e a experiência do usuário na plataforma.",
    },
    {
      company: "VH",
      badges: [],
      href: "https://penseavanti.com.br/",
      location: "Remote",
      title: "Freelancer - Frontend Developer",
      logoUrl: "/vh.jpeg",
      start: "Ago 2023",
      end: "Jun 2024",
      description:
        "Tenho como função o Desenvolvimento de Sites, Aplicativos e Sistemas responsivos que atendem às necessidades dos clientes. Montagem de layouts para apresentação, atendimento direto com o cliente e manutenção de software.",
    },
  ],
  education: [
    {
      school: "Harvard University",
      href: "https://certificates.cs50.io/cca93398-6bc2-41b7-91e8-edf3779c6e5e.pdf?size=letter",
      degree: "CS50 - Introduction to Computer Science",
      logoUrl: "/harvard.png",
      start: "2023",
      end: "2023",
    },
    {
      school: "Harvard University",
      href: "https://certificates.cs50.io/cca93398-6bc2-41b7-91e8-edf3779c6e5e.pdf?size=letter",
      degree: "CS50 - Introduction to Programming with Python",
      logoUrl: "/harvard.png",
      start: "2023",
      end: "2023",
    },
    {
      school: "Senac Santa Catarina",
      href: "https://www.linkedin.com/school/senac-sc/posts/?feedView=all",
      degree: "Curso Técnico",
      logoUrl: "/senac.jpeg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Estácio",
      href: "https://www.linkedin.com/school/estacio/posts/?feedView=all",
      degree: "Bacharelado - Engenharia de Software",
      logoUrl: "/estacio.jpeg",
      start: "2023",
      end: "Presente",
    },
  ],
  projects: [
    {
      title: "SaaS Template",
      href: "https://linkify-io.vercel.app/",
      dates: "Jan 2025",
      active: true,
      description:
        "Projeto de template para SaaS, com foco em conversão e usabilidade, feito com NextJS, TailwindCSS e Magic UI.",
      technologies: [
        "NextJS 15",
        "TailwindCSS",
        "Magic UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://linkify-io.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/henriquemtn/template-for-saas",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/saas.png",
      video: "",
      
    },
    {
      title: "Casamento Vitor & Sharon",
      href: "https://sea7.com.br/",
      dates: "Jan 2025",
      active: true,
      description:
        "Site feito para o casamento dos meus grandes amigos Vitor & Sharon, com informações sobre o evento, localização, lista de presentes e um área de administração para os noivos.",
      technologies: [
        "NextJS 15",
        "TailwindCSS",
        "Magic UI",
        "Firebase"
      ],
      links: [
        {
          type: "Website",
          href: "https://vitoresharon.com.br/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/henriquemtn/wedding-vs",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/casamento.png",
      video: "",
    },
    {
      title: "Better UI",
      href: "https://better-ui-zeta.vercel.app/",
      dates: "Nov 2024 - Presente",
      active: true,
      description:
        "Beauty and Fast Components with TailwindCSS for free and open-source",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://better-ui-zeta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/henriquemtn/better-ui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Sea7 Group",
      href: "https://sea7.com.br/",
      dates: "Nov 2022",
      active: true,
      description:
        "Portfolio do Sea7 Group, com as embarcações disponíveis a venda, informações sobre a empresa, serviços, cases e um blog.",
      technologies: [
        "WIX",
        "Custom Components"
      ],
      links: [
        {
          type: "Website",
          href: "https://sea7.com.br/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/sea7.png",
      video: "",
    },

  ],
  hackathons: [
    {
      title: "Stardust",
      dates: "09 até 11 de Novembro, 2024",
      location: "Florianópolis, Brasil",
      description:
        "Bemobi AI é uma aplicação baseada em GenAI, desenvolvida para otimizar a experiência do cliente em serviços de assinatura com pagamentos recorrentes, utilizando tecnologia de inteligência artificial generativa. O projeto inclui funcionalidades como análise de comportamento de pagamento, sugestão de planos, e um chatbot integrado para interações personalizadas com os usuários.",
      image:
        "https://i.pinimg.com/736x/a8/15/e1/a815e1cb01ef694d10f247a020bd155a.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/hackaton-stardust/bemobi-ai",
        },
      ],
    },
  ],
} as const;
