import { FaqItem, FeatureItem, ModuleItem, BenefitItem } from "./types";

export const FEATURES: FeatureItem[] = [
    {
        iconName: 'chart',
        title: 'Crescimento Exponencial',
        description: 'Empresas estão desesperadas para automatizar atendimento e vendas.'
    },
    {
        iconName: 'clock',
        title: 'Sem Conhecimento Técnico',
        description: 'Com o método certo, você não precisa saber programar uma linha de código.'
    },
    {
        iconName: 'laptop',
        title: 'Liberdade Geográfica',
        description: 'Trabalhe de casa, sem aparecer e construa um negócio real.'
    }
];

export const MODULES: ModuleItem[] = [
    {
        id: 1,
        title: "Fundamentos & Mindset de Negócio",
        lessons: [
            "Boas-vindas e Visão Geral",
            "Como funciona o mercado de Agentes de IA",
            "O modelo de negócio de R$ 10k/mês"
        ]
    },
    {
        id: 2,
        title: "IA & Automação (A Técnica)",
        lessons: [
            "Vibe Coding: Programando sem saber código",
            "Dominando o N8N (Automação de Fluxos)",
            "Criando seu primeiro Agente em 2 horas"
        ]
    },
    {
        id: 3,
        title: "Máquina de Vendas & Funis",
        lessons: [
            "O conceito de Funis de Vendas com IA",
            "Como escolher o nicho certo para vender",
            "Precificação e Negociação High-Ticket"
        ]
    },
    {
        id: 4,
        title: "Posicionamento de Autoridade",
        lessons: [
            "Branding Pessoal para Consultores",
            "Linkedin e Instagram para atração de leads"
        ]
    }
];

export const BENEFITS: BenefitItem[] = [
    {
        id: 1,
        title: "Networking de Elite",
        description: "Acesso a um grupo exclusivo de empresários e consultores para fechar parcerias e trocar experiências de campo de batalha.",
        iconName: "users"
    },
    {
        id: 2,
        title: "Mentoria Ao Vivo",
        description: "Encontros quinzenais comigo para analisar suas estratégias, tirar dúvidas técnicas e destravar seu crescimento.",
        iconName: "video"
    },
    {
        id: 3,
        title: "Kit de Aceleração",
        description: "Receba meus templates de contratos, scripts de vendas validados e fluxos de automação prontos para copiar e colar.",
        iconName: "file"
    },
    {
        id: 4,
        title: "Atualizações Constantes",
        description: "O mercado de IA muda toda semana. Eu filtro o que importa e trago mastigado para você não perder tempo.",
        iconName: "zap"
    }
];

export const FAQ_ITEMS: FaqItem[] = [
    {
        id: 1,
        question: "Sou iniciante, vai funcionar para mim?",
        answer: "Sim. O método foi desenvolvido justamente para quem não sabe nada sobre programação ou IA e deseja começar do zero absoluto."
    },
    {
        id: 2,
        question: "Preciso de computador potente?",
        answer: "Não. A maioria das ferramentas roda na nuvem (no navegador). Um computador básico ou até mesmo um tablet já permite começar."
    },
    {
        id: 3,
        question: "O acesso é imediato?",
        answer: "Sim. Assim que o pagamento é aprovado, você recebe o acesso à área de membros no seu e-mail imediatamente."
    }
];