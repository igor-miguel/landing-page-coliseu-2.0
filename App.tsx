import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Laptop, CheckCircle, ShieldCheck, Menu, X, Check, Play, Users, Video, Zap, FileText } from 'lucide-react';

/* --- DADOS --- */
const FEATURES = [
  { iconName: 'chart', title: 'Crescimento Exponencial', description: 'Empresas estão desesperadas para automatizar atendimento e vendas.' },
  { iconName: 'clock', title: 'Sem Conhecimento Técnico', description: 'Com o método certo, você não precisa saber programar uma linha de código.' },
  { iconName: 'laptop', title: 'Liberdade Geográfica', description: 'Trabalhe de casa, sem aparecer e construa um negócio real.' }
];

const MODULES = [
  { id: '01', title: 'Fundamentos & Mindset', lessons: ['Boas-vindas e Visão Geral', 'Como funciona o mercado', 'O modelo de negócio de R$ 10k/mês'] },
  { id: '02', title: 'IA & Automação (A Técnica)', lessons: ['Vibe Coding: Programando sem saber código', 'Dominando o N8N', 'Criando seu primeiro Agente'] },
  { id: '03', title: 'Máquina de Vendas & Funis', lessons: ['O conceito de Funis de Vendas', 'Como escolher o nicho', 'Precificação High-Ticket'] },
  { id: '04', title: 'Posicionamento de Autoridade', lessons: ['Branding Pessoal para Consultores', 'Linkedin e Instagram para atração', 'Fechamento de contratos'] }
];

const BENEFITS = [
  { id: 1, iconName: 'users', title: 'Networking de Elite', description: 'Acesso a um grupo exclusivo de empresários e consultores para fechar parcerias.' },
  { id: 2, iconName: 'video', title: 'Mentoria Ao Vivo', description: 'Encontros quinzenais comigo para analisar suas estratégias e tirar dúvidas.' },
  { id: 3, iconName: 'file', title: 'Kit de Aceleração', description: 'Receba meus templates de contratos, scripts de vendas validados e fluxos.' },
  { id: 4, iconName: 'zap', title: 'Atualizações Constantes', description: 'O mercado de IA muda toda semana. Eu filtro o que importa e trago mastigado.' }
];

const FAQ_ITEMS = [
  { question: 'Sou iniciante, vai funcionar para mim?', answer: 'Sim. O método foi desenvolvido justamente para quem não sabe nada sobre programação ou IA e deseja começar do zero absoluto.' },
  { question: 'Preciso de computador potente?', answer: 'Não. Como usamos ferramentas em nuvem, qualquer computador com acesso à internet funciona.' },
  { question: 'O acesso é imediato?', answer: 'Sim! Assim que o pagamento é aprovado, você recebe o acesso à plataforma e à comunidade.' },
  { question: 'Tem garantia?', answer: 'Sim, garantia incondicional de 7 dias. Se não gostar, devolvemos 100% do valor.' }
];

/* --- COMPONENTES --- */
const Button = ({ children, variant = 'primary', className = '', href = '#' }: any) => {
  const base = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-sm uppercase cursor-pointer";
  const primary = "bg-[#D4AF37] text-black hover:bg-[#C5A028] hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]";
  const outline = "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black";
  
  return (
    <a href={href} className={`${base} ${variant === 'outline' ? outline : primary} ${className}`}>
      {children}
    </a>
  );
};

const FaqAccordion = ({ items }: { items: any[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border-b border-gray-200 pb-4">
          <button 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex justify-between items-center py-4 text-left hover:text-[#D4AF37] transition-colors"
          >
            <span className="font-serif font-bold text-lg text-black">{item.question}</span>
            <span className="text-[#D4AF37] text-2xl font-light">{openIndex === idx ? '−' : '+'}</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pb-4 text-gray-600 font-light leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* --- PÁGINA PRINCIPAL --- */
const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="antialiased font-sans bg-[#050505] min-h-screen text-gray-100 selection:bg-[#D4AF37] selection:text-black">
      
      {/* NAVBAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/95 backdrop-blur-md py-4 shadow-lg border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-white font-bold text-2xl font-serif tracking-tighter">
            COMUNIDADE <span className="text-[#D4AF37]">COLISEU</span>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" href="#oferta" className="px-6 py-2 text-xs">GARANTIR VAGA</Button>
          </div>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 py-6 px-6 flex flex-col items-center shadow-xl">
             <Button variant="outline" href="#oferta" onClick={() => setMobileMenuOpen(false)}>GARANTIR VAGA</Button>
          </div>
        )}
      </nav>

      {/* 1. HERO SECTION (COM A HEADLINE CORRIGIDA) */}
      <header className="relative pt-40 pb-24 md:pt-52 md:pb-32 overflow-hidden bg-[#050505]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[150px] opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          
          {/* AQUI ESTÁ A MÁGICA DO GRADIENTE E ALINHAMENTO */}
          <h1 className="text-5xl md:text-7xl font-serif font-normal leading-tight text-white mb-8">
            Fature R$10.000/mês com <br />
            <span className="italic font-medium bg-gradient-to-r from-[#B08D1F] via-[#F2D06B] to-[#B08D1F] bg-clip-text text-transparent">
              Inteligência Artificial
            </span> <br />
            começando do zero.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Você terá acesso a uma estrutura completa dentro da <strong>Comunidade Coliseu</strong>, além do meu acompanhamento próximo para escalar seu faturamento.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Button href="#oferta" className="px-10 py-5 text-base md:text-lg w-full md:w-auto">
              QUERO GARANTIR MINHA VAGA AGORA
            </Button>
            <p className="text-gray-500 text-xs uppercase tracking-widest">
              De <span className="line-through text-gray-600">R$ 4.997</span> por apenas <strong>12x R$ 103,10</strong>
            </p>
          </div>
        </div>
      </header>

      {/* 2. MARKET CONTEXT */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-black">
            Por que Agentes de IA são a maior oportunidade da década?
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-10"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto font-light">
            O mercado ultrapassou <strong>120 bilhões de dólares</strong>. Enquanto a maioria discute, um grupo seleto usa essa tecnologia para vender serviços de alta demanda.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="p-8 border border-gray-100 shadow-xl rounded-sm hover:-translate-y-2 transition-transform duration-300 bg-white">
                <div className="mb-6 flex justify-center text-[#D4AF37]">
                  {feature.iconName === 'chart' && <TrendingUp size={48} />}
                  {feature.iconName === 'clock' && <Clock size={48} />}
                  {feature.iconName === 'laptop' && <Laptop size={48} />}
                </div>
                <h3 className="font-bold text-xl mb-3 font-serif text-black">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SALES LETTER */}
      <section className="py-24 bg-white text-black border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 font-light text-lg md:text-xl leading-relaxed text-gray-800 space-y-6">
           
           <p>Se você está lendo isso agora, provavelmente já percebeu uma coisa:</p>
           
           <h3 className="font-bold text-3xl font-serif text-black mt-8">O mercado de Inteligência Artificial explodiu.</h3>
           
           <p>Não é tendência. Não é hype.<br />É realidade — e quem entendeu isso cedo já está faturando como nunca.</p>
           
           <p>Empresas sendo vendidas por milhões. Agências tradicionais desaparecendo.<br />
           Profissionais comuns ganhando em poucas semanas o que não ganhavam em meses.</p>
           
           <p className="font-medium">E, por mais estranho que pareça, <strong>eu fui uma dessas pessoas.</strong></p>

           <div className="pl-6 border-l-4 border-[#D4AF37] italic text-gray-600 bg-gray-50 p-6 rounded-r-sm my-8">
              <p>Há pouco tempo, eu era só mais um curioso estudando IA no meu tempo livre.<br />
              Mas algo aconteceu.</p>
           </div>

           <p>Faturei meus <strong>primeiros R$10.000 em 20 dias.</strong><br/>
           Só usando IA. Sem equipe. Sem estrutura. Sem complicar.</p>

           <p>E quando isso aconteceu, eu percebi:</p>
           <p className="italic font-medium text-black">“Se eu consegui isso do zero… qualquer pessoa com método consegue também.”</p>

           <p>Foi aí que eu entrei de cabeça no mercado.<br/>
           Comecei a vender soluções reais para empresas, fechei projetos grandes… e, em poucos meses, <strong>meu faturamento total passou de R$300.000.</strong></p>

           <p>E sim — tudo isso em 4 a 5 meses de projeto.</p>

           <p>Hoje eu atendo empresas gigantes de Belo Horizonte e região, construo agentes de IA complexos, automações de atendimento, sistemas de vendas…<br/>
           E, no meio desse crescimento todo, ficou claro uma coisa:</p>

           <h3 className="text-3xl font-serif font-bold text-black mt-12 mb-6">Quase ninguém sabe VENDER IA.</h3>

           <ul className="space-y-2 list-disc pl-5 marker:text-[#D4AF37] text-gray-700 mb-8">
              <li>Quase ninguém sabe precificar.</li>
              <li>Quase ninguém sabe se posicionar.</li>
              <li>Quase ninguém sabe conduzir uma reunião.</li>
              <li>Quase ninguém entende FUNIL.</li>
              <li>Quase ninguém tem um negócio — tem só um monte de prompts.</li>
           </ul>

           <p>E é exatamente por isso que a maioria não sai do zero.</p>
           <p>Templates não fazem você crescer.<br/>Promptzinho de “agente mágico” não paga boletos.<br/>Curso raso não te leva para lugar algum.</p>

           <p>O que muda a sua vida é isso:</p>

           <div className="bg-black text-white p-10 rounded-sm shadow-2xl my-12 border border-[#D4AF37]">
              <p className="text-2xl font-serif font-bold text-center mb-6 text-[#D4AF37]">Aprender um NEGÓCIO.</p>
              <ul className="space-y-4 text-gray-300 text-base">
                  <li className="flex gap-3"><Check className="text-[#D4AF37] shrink-0" /> Aprender a vender.</li>
                  <li className="flex gap-3"><Check className="text-[#D4AF37] shrink-0" /> Aprender a fechar contrato.</li>
                  <li className="flex gap-3"><Check className="text-[#D4AF37] shrink-0" /> Aprender IA de verdade — com aplicação real.</li>
              </ul>
           </div>

           <p>E é exatamente isso que eu ensino.</p>
           <p>Eu pego uma pessoa completamente iniciante — literalmente do zero — e mostro:</p>

           <ul className="space-y-4 my-8">
              <li className="flex gap-3 items-start"><span className="text-[#D4AF37] font-bold">01.</span> Como funciona o mercado de IA hoje (de verdade, não o marketing colorido que você vê por aí).</li>
              <li className="flex gap-3 items-start"><span className="text-[#D4AF37] font-bold">02.</span> Como criar serviços que as empresas realmente pagam.</li>
              <li className="flex gap-3 items-start"><span className="text-[#D4AF37] font-bold">03.</span> Como se posicionar para não ser visto como “mais um curioso de IA”.</li>
              <li className="flex gap-3 items-start"><span className="text-[#D4AF37] font-bold">04.</span> Como conduzir reuniões que fecham contrato.</li>
              <li className="flex gap-3 items-start"><span className="text-[#D4AF37] font-bold">05.</span> Como precificar soluções para ganhar dinheiro de verdade.</li>
              <li className="flex gap-3 items-start"><span className="text-[#D4AF37] font-bold">06.</span> Como montar seu funil, seu comercial e sua operação.</li>
              <li className="flex gap-3 items-start"><span className="text-[#D4AF37] font-bold">07.</span> Como entregar projetos para clientes reais.</li>
           </ul>

           <p className="mt-8 font-medium">E, principalmente:</p>
           <p className="font-bold text-2xl text-black">Como faturar seus primeiros R$10.000 em IA — do zero — no menor tempo possível.</p>

           <p>Esse é o meu compromisso.<br/>Sem enrolação. Sem teoria vazia. Sem “hack secreto”. Sem depender de sorte.</p>
           
           <p>Eu vou te mostrar do começo ao fim como eu construí meu negócio — exatamente o mesmo caminho que me levou a fechar contratos grandes com empresas que você conhece.</p>

           <p className="italic">E, sinceramente?</p>
           <p>O mercado está tão quente, tão carente e tão cheio de demanda, que quem aprender isso agora se torna inevitável.</p>

           <p>Essa é a sua chance de entrar na frente.<br/>De construir um negócio de verdade.<br/>E de ser pago pelo que você sabe — não pelo que você decora.</p>

           <p className="font-bold text-black mt-6">Se você está cansado de brincar com IA…<br/>E quer finalmente ganhar dinheiro com isso…<br/>Então agora é o momento.</p>

           <p>Eu vou te levar do zero aos R$10.000 com IA — mesmo que:</p>
           <ul className="list-disc pl-5 marker:text-[#D4AF37] text-gray-700">
               <li>você não seja técnico,</li>
               <li>nunca tenha vendido nada,</li>
               <li>ou ache que “não sabe suficiente”.</li>
           </ul>

           <p className="mt-6">Eu já fiz isso.<br/>Eu faço isso todo dia.<br/>E agora eu vou te mostrar como fazer também.</p>

           <div className="text-center pt-8 pb-4">
              <Button href="#oferta" className="w-full md:w-auto px-12 py-5 text-lg shadow-xl">CLIQUE AQUI E COMECE AGORA</Button>
           </div>
           
           <p className="text-center text-sm text-gray-500">
               Porque o mercado não vai esperar.<br/>
               E a sua vida não muda com mais um template…<br/>
               mas muda com a decisão certa.
           </p>
        </div>
      </section>

      {/* 4. PERFIL DO MEMBRO */}
      <section className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
           <div className="w-full md:w-1/2 h-[600px] relative rounded-sm overflow-hidden opacity-90">
              <img src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000" className="w-full h-full object-cover" alt="Coliseu" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
           </div>
           <div className="w-full md:w-1/2">
             <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Perfil do Membro</span>
             <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">Esta Comunidade é para você?</h2>
             <div className="space-y-6">
               {[
                 "Você que já comprou diversos cursos, tentou sozinho e não teve resultado.",
                 "Você que quer construir um negócio digital sólido de verdade com IA.",
                 "Você que está cansado de promessas vazias e busca um método validado.",
                 "Você que entende que a IA é o futuro e não quer ficar para trás."
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4">
                   <div className="mt-1 w-6 h-6 rounded-full border border-[#D4AF37] flex items-center justify-center shrink-0">
                     <Check size={14} className="text-[#D4AF37]" />
                   </div>
                   <p className="text-gray-300 font-light text-lg">{item}</p>
                 </div>
               ))}
             </div>
             <a href="#oferta" className="inline-block mt-10 text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors uppercase text-xs tracking-widest">
               Sim, eu quero garantir minha vaga
             </a>
           </div>
        </div>
      </section>

      {/* 5. BENEFÍCIOS */}
      <section className="py-24 bg-[#0a0a0a] text-white border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white">Por que entrar no Coliseu?</h2>
            <div className="w-16 h-px bg-[#D4AF37] mx-auto mt-6"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
             {BENEFITS.map((b) => (
               <div key={b.id} className="p-8 border border-white/10 hover:border-[#D4AF37]/50 transition-colors bg-[#050505] group">
                 <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                    {b.iconName === 'users' && <Users size={24} />}
                    {b.iconName === 'video' && <Video size={24} />}
                    {b.iconName === 'zap' && <Zap size={24} />}
                    {b.iconName === 'file' && <FileText size={24} />}
                 </div>
                 <h3 className="text-xl font-serif font-bold mb-2 text-white">{b.title}</h3>
                 <p className="text-sm text-gray-400 leading-relaxed">{b.description}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 6. CURRICULUM */}
      <section className="py-24 bg-[#050505] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif text-white">O que você vai aprender</h2>
             <p className="text-gray-400 mt-4 font-light">Um passo a passo completo, do zero ao avançado.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
             {MODULES.map((mod) => (
               <div key={mod.id} className="relative bg-[#0A0A0A] border border-white/10 p-8 rounded-sm overflow-hidden hover:border-[#D4AF37]/30 transition-colors">
                  <span className="absolute top-0 right-0 text-[10rem] font-serif font-bold text-[#D4AF37] opacity-5 leading-none -mt-4 -mr-4 pointer-events-none">{mod.id}</span>
                  <div className="relative z-10">
                     <h3 className="text-[#D4AF37] font-serif italic text-2xl mb-1">{mod.id}.</h3>
                     <h4 className="text-xl font-bold uppercase tracking-wide mb-6 text-white">{mod.title}</h4>
                     <ul className="space-y-3">
                        {mod.lessons.map((lesson, i) => (
                           <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                              <Play size={10} className="text-[#D4AF37] fill-[#D4AF37]" /> {lesson}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. OFERTA */}
      <section id="oferta" className="py-24 bg-[#050505] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Caprichei MUITO nessa oferta.</h2>
          <p className="text-gray-400 mb-10">Veja tudo o que você recebe ao se tornar Membro Fundador:</p>
          
          <div className="bg-[#0a0a0a] border border-[#D4AF37]/30 p-8 md:p-14 relative shadow-[0_0_60px_rgba(212,175,55,0.1)] max-w-xl mx-auto rounded-sm">
             <div className="absolute top-0 right-0 bg-[#D4AF37] text-black text-[10px] font-bold px-8 py-1 uppercase rotate-12 translate-x-8 translate-y-4 shadow-lg">Oferta Limitada</div>

             <div className="space-y-4 mb-10 text-left">
               {[
                 {txt: "Curso Completo de IA e Vendas", val: "(De R$ 2.997)"},
                 {txt: "Acesso à Comunidade de Networking", val: "(De R$ 997)"},
                 {txt: "Encontros Semanais Ao Vivo", val: "(Inestimável)"},
                 {txt: "Templates de Contratos e Scripts", val: "(Bônus)"}
               ].map((it, i) => (
                 <div key={i} className="flex items-center gap-3 text-gray-300">
                   <CheckCircle className="text-green-500 w-5 h-5 shrink-0" /> 
                   <span>{it.txt} <span className="text-xs text-gray-600 ml-1">{it.val}</span></span>
                 </div>
               ))}
             </div>
             
             <div className="w-full h-px bg-white/10 mb-8" />
             
             <div className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-2">Valor Promocional</div>
             <div className="flex justify-center items-end gap-2 mb-8">
               <span className="text-2xl text-gray-500 mb-2 font-light">12x</span>
               <span className="text-6xl text-white font-serif font-bold text-[#D4AF37]">103,10</span>
             </div>
             <p className="text-gray-500 text-sm mb-8">ou R$ 997,00 à vista</p>

             <Button href="https://pay.herospark.com/comunidade-coliseu-372393" className="w-full py-4 text-lg mb-6">QUERO GARANTIR MINHA VAGA</Button>
             
             <div className="flex items-center justify-center gap-3 opacity-80">
               <ShieldCheck className="text-[#D4AF37]" />
               <div className="text-left text-xs">
                 <p className="text-white font-bold">Garantia de 7 Dias</p>
                 <p className="text-gray-500">Risco zero. Não gostou? Devolvemos tudo.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. BIO MENTOR */}
      <section className="py-24 bg-[#E5E0D8] text-black">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
           <div className="w-full md:w-5/12">
              <div className="border p-2 border-black/10 bg-white shadow-lg rotate-1">
                 <img src="https://github.com/igor-miguel/landing-page-coliseu-2.0/blob/main/image_1.png?raw=true" alt="Igor Miguel" className="w-full grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
           </div>
           <div className="w-full md:w-7/12">
              <span className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-4 block">SEU MENTOR</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-black">Quem é Igor Miguel?</h2>
              <div className="w-16 h-1 bg-black mb-8"></div>
              <div className="space-y-6 text-lg font-light text-gray-800 leading-relaxed">
                 <p>Estrategista Digital e Especialista em Inteligência Artificial. Há anos no mercado digital, eu vim do zero, exatamente como você.</p>
                 <p>Eu não queria mais ter que contar moeda. Eu queria uma vida digna. E hoje, todos esses sonhos se tornaram realidade graças ao mercado digital e à revolução da IA.</p>
                 <p className="font-medium text-black">Minha missão agora é simples: te entregar o mapa. Não vendo sorte, vendo processos previsíveis de faturamento.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-black">Perguntas Frequentes</h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-white/10 text-center text-gray-600 text-xs uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Comunidade Coliseu. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default App;
