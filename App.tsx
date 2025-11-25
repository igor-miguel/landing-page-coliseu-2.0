import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Laptop, CheckCircle, ShieldCheck, Menu, X, Check, Play, Users, Video, Zap, FileText } from 'lucide-react';
import { Button } from './components/Button';
import { FaqAccordion } from './components/Accordion';
import { FEATURES, MODULES, FAQ_ITEMS, BENEFITS } from './constants';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Navbar = () => (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'} border-b border-white/5`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="text-white select-none hover:scale-105 transition-transform duration-300">
            {/* LOGO NO INÍCIO (NAVBAR) */}
            <img src="https://i.imgur.com/t2yhlEd.png" alt="Comunidade Coliseu" className="h-12 w-auto object-contain" />
          </div>
          
          <div className="hidden md:block">
            <Button variant="outline" href="#oferta" className="px-6 py-2 text-xs">
              Garantir Vaga
            </Button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 py-6 px-6 flex flex-col items-center animate-fade-in-down shadow-xl">
           <Button variant="outline" href="#oferta" onClick={() => setMobileMenuOpen(false)}>
              Garantir Vaga
            </Button>
        </div>
      )}
    </nav>
  );

  return (
    <div className="antialiased font-sans selection:bg-gold-400 selection:text-black bg-rich-black min-h-screen text-gray-100">
      <Navbar />

      {/* 1. Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-white mb-8">
            Fature R$10.000/mês com <br />
            <span className="text-gold-gradient italic">Inteligência Artificial</span> <br />
            começando do zero.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
            Você terá acesso a uma estrutura completa dentro da <strong>Comunidade Coliseu</strong>, além do meu acompanhamento próximo e de um time de especialistas para transformar o seu negócio e escalar o seu faturamento de forma previsível e com qualidade de vida.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button href="#oferta" className="px-12 py-5 text-base md:text-lg animate-pulse-slow w-full md:w-auto">
              Quero Garantir Minha Vaga Agora
            </Button>
            <div className="text-center space-y-2">
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                De <span className="line-through decoration-red-500 text-gray-600">R$ 4.997</span> por apenas <strong>12x R$ 103,10</strong>
                </p>
                <p className="text-red-400 text-xs flex items-center justify-center gap-2">
                <Clock className="w-3 h-3" /> 
                Atenção: O desconto para fundadores pode acabar a qualquer momento.
                </p>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Market Context (Why) */}
      <section className="pt-24 pb-12 bg-white text-rich-black border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Por que Agentes de IA são a maior oportunidade da década?</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mb-10"></div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto font-light">
            Somente no último ano, o mercado de Inteligência Artificial ultrapassou <strong>120 bilhões de dólares</strong>. Enquanto a maioria discute se a IA vai "roubar empregos", um grupo seleto está usando essa tecnologia para vender serviços de alta demanda.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {FEATURES.map((feature, idx) => (
                <div key={idx} className="p-8 border border-gray-100 shadow-xl shadow-gray-200/50 rounded-sm hover:-translate-y-2 transition-transform duration-300 bg-white">
                    <div className="mb-6 flex justify-center">
                        {feature.iconName === 'chart' && <TrendingUp className="w-12 h-12 text-gold-600" />}
                        {feature.iconName === 'clock' && <Clock className="w-12 h-12 text-gold-600" />}
                        {feature.iconName === 'laptop' && <Laptop className="w-12 h-12 text-gold-600" />}
                    </div>
                    <h3 className="font-bold text-xl mb-3 font-serif">{feature.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5 Sales Letter (New Block) */}
      <section className="pb-24 pt-10 bg-white text-rich-black border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 font-light text-lg md:text-xl leading-relaxed text-gray-800">
            <div className="space-y-8">
               <p>Se você está lendo isso agora, provavelmente já percebeu uma coisa:</p>

               <p className="font-bold text-2xl font-serif text-black">O mercado de Inteligência Artificial explodiu.</p>

               <p>Não é tendência. Não é hype.<br/>
               É realidade — e quem entendeu isso cedo já está faturando como nunca.</p>

               <p>Empresas sendo vendidas por milhões. Agências tradicionais desaparecendo.<br/>
               Profissionais comuns ganhando em poucas semanas o que não ganhavam em meses.</p>

               <p>E, por mais estranho que pareça, <strong>eu fui uma dessas pessoas.</strong></p>

               <div className="pl-6 border-l-4 border-gold-400 italic text-gray-600 bg-gray-50 p-4 rounded-r-sm">
                  <p>Há pouco tempo, eu era só mais um curioso estudando IA no meu tempo livre.<br/>
                  Mas algo aconteceu.</p>
               </div>

               <p>Faturei meus <strong>primeiros R$10.000 em 20 dias.</strong><br/>
               Só usando IA.<br/>
               Sem equipe. Sem estrutura. Sem complicar.</p>

               <p>E quando isso aconteceu, eu percebi:</p>

               <p className="italic">“Se eu consegui isso do zero… qualquer pessoa com método consegue também.”</p>

               <p>Foi aí que eu entrei de cabeça no mercado.<br/>
               Comecei a vender soluções reais para empresas, fechei projetos grandes… e, em poucos meses, <strong>meu faturamento total passou de R$300.000.</strong></p>

               <p>E sim — tudo isso em 4 a 5 meses de projeto.</p>

               <p>Hoje eu atendo empresas gigantes de Belo Horizonte e região, construo agentes de IA complexos, automações de atendimento, sistemas de vendas…<br/>
               E, no meio desse crescimento todo, ficou claro uma coisa:</p>

               <h3 className="text-3xl font-serif font-bold text-black mt-12 mb-6">Quase ninguém sabe VENDER IA.</h3>

               <ul className="space-y-2 list-disc pl-5 marker:text-gold-600">
                  <li>Quase ninguém sabe precificar.</li>
                  <li>Quase ninguém sabe se posicionar.</li>
                  <li>Quase ninguém sabe conduzir uma reunião.</li>
                  <li>Quase ninguém entende FUNIL.</li>
                  <li>Quase ninguém tem um negócio — tem só um monte de prompts.</li>
               </ul>

               <p>E é exatamente por isso que a maioria não sai do zero.</p>

               <p>Templates não fazem você crescer.<br/>
               Promptzinho de “agente mágico” não paga boletos.<br/>
               Curso raso não te leva para lugar algum.</p>

               <p>O que muda a sua vida é isso:</p>

               <div className="bg-rich-black text-white p-8 rounded-sm shadow-xl my-8 border border-gold-400/30">
                  <p className="text-2xl font-serif font-bold text-center mb-6 text-gold-400">Aprender um NEGÓCIO.</p>
                  <ul className="space-y-3 text-gray-300">
                      <li className="flex gap-3"><Check className="text-gold-400 shrink-0" /> Aprender a vender.</li>
                      <li className="flex gap-3"><Check className="text-gold-400 shrink-0" /> Aprender a fechar contrato.</li>
                      <li className="flex gap-3"><Check className="text-gold-400 shrink-0" /> Aprender IA de verdade — com aplicação real.</li>
                  </ul>
               </div>

               <p>E é exatamente isso que eu ensino.</p>

               <p>Eu pego uma pessoa completamente iniciante — literalmente do zero — e mostro:</p>

               <ul className="space-y-4">
                  <li className="flex gap-3 items-start"><span className="text-gold-600 font-bold">01.</span> Como funciona o mercado de IA hoje (de verdade, não o marketing colorido que você vê por aí).</li>
                  <li className="flex gap-3 items-start"><span className="text-gold-600 font-bold">02.</span> Como criar serviços que as empresas realmente pagam.</li>
                  <li className="flex gap-3 items-start"><span className="text-gold-600 font-bold">03.</span> Como se posicionar para não ser visto como “mais um curioso de IA”.</li>
                  <li className="flex gap-3 items-start"><span className="text-gold-600 font-bold">04.</span> Como conduzir reuniões que fecham contrato.</li>
                  <li className="flex gap-3 items-start"><span className="text-gold-600 font-bold">05.</span> Como precificar soluções para ganhar dinheiro de verdade.</li>
                  <li className="flex gap-3 items-start"><span className="text-gold-600 font-bold">06.</span> Como montar seu funil, seu comercial e sua operação.</li>
                  <li className="flex gap-3 items-start"><span className="text-gold-600 font-bold">07.</span> Como entregar projetos para clientes reais.</li>
               </ul>

               <p className="mt-6">E, principalmente:</p>
               <p className="font-bold text-xl">Como faturar seus primeiros R$10.000 em IA — do zero — no menor tempo possível.</p>

               <p>Esse é o meu compromisso.</p>
               <p>Sem enrolação. Sem teoria vazia. Sem “hack secreto”. Sem depender de sorte.</p>
               
               <p>Eu vou te mostrar do começo ao fim como eu construí meu negócio — exatamente o mesmo caminho que me levou a fechar contratos grandes com empresas que você conhece.</p>

               <p>E, sinceramente?<br/>
               O mercado está tão quente, tão carente e tão cheio de demanda, que quem aprender isso agora se torna inevitável.</p>

               <p>Essa é a sua chance de entrar na frente.<br/>
               De construir um negócio de verdade.<br/>
               E de ser pago pelo que você sabe — não pelo que você decora.</p>

               <p>Se você está cansado de brincar com IA…<br/>
               E quer finalmente ganhar dinheiro com isso…</p>

               <p className="font-bold">Então agora é o momento.</p>

               <p>Eu vou te levar do zero aos R$10.000 com IA — mesmo que:</p>
               <ul className="list-disc pl-5 space-y-1 marker:text-gold-600">
                  <li>você não seja técnico,</li>
                  <li>nunca tenha vendido nada,</li>
                  <li>ou ache que “não sabe suficiente”.</li>
               </ul>

               <p>Eu já fiz isso.<br/>
               Eu faço isso todo dia.<br/>
               E agora eu vou te mostrar como fazer também.</p>

               <div className="pt-8 pb-4">
                  <Button fullWidth href="https://pay.herospark.com/comunidade-coliseu-372393" className="text-lg py-5 shadow-xl animate-pulse-slow">
                     Clique aqui e comece agora
                  </Button>
               </div>

               <p className="text-center text-gray-600 text-base">
                  Porque o mercado não vai esperar.<br/>
                  E a sua vida não muda com mais um template…<br/>
                  mas muda com a decisão certa.
               </p>
            </div>
        </div>
      </section>

      {/* 3. Target Audience (Updated) */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
          
          {/* IMAGEM DO COLISEU - MANTIDA A ORIGINAL DO UNSPLASH POIS É UMA FOTO DE FUNDO */}
          <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px] grayscale hover:grayscale-0 transition-all duration-1000">
            <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop" 
              alt="Coliseu" 
              className="w-full h-full object-cover relative z-10 shadow-2xl" 
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <span className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-6 block">Perfil do Membro</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-10 leading-tight">Esta Comunidade é para você?</h2>
            
            <div className="space-y-5">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-gold-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-gold-400" strokeWidth={3} />
                </div>
                <p className="text-gray-300 font-light text-lg">
                  Você que já comprou diversos cursos, <strong>tentou sozinho</strong> e não teve resultado.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-gold-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-gold-400" strokeWidth={3} />
                </div>
                <p className="text-gray-300 font-light text-lg">
                  Você que quer construir um negócio digital sólido de verdade com <strong>inteligência artificial</strong>.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-gold-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-gold-400" strokeWidth={3} />
                </div>
                <p className="text-gray-300 font-light text-lg">
                  Você que está cansado de promessas vazias e busca um método <strong>validado e seguro</strong>.
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-gold-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-gold-400" strokeWidth={3} />
                </div>
                <p className="text-gray-300 font-light text-lg">
                  Você que quer ter <strong>liberdade geográfica</strong> para trabalhar de onde quiser.
                </p>
              </div>

              {/* Item 5 */}
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full border border-gold-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-gold-400" strokeWidth={3} />
                </div>
                <p className="text-gray-300 font-light text-lg">
                  Você que entende que a IA é o futuro e não quer <strong>ficar para trás</strong> no mercado.
                </p>
              </div>
            </div>

            <a href="https://pay.herospark.com/comunidade-coliseu-372393" className="inline-block mt-12 text-white border-b border-gold-400 pb-1 hover:text-gold-400 transition-colors uppercase text-xs tracking-[0.2em]">
              Sim, eu quero garantir minha vaga
            </a>
          </div>
        </div>
      </section>

      {/* 4. NEW Benefits Section */}
      <section className="py-24 bg-rich-charcoal text-white border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif">Por que entrar no Coliseu?</h2>
                <div className="w-20 h-px bg-gold-400 mx-auto mt-8"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {BENEFITS.map((benefit) => (
                    <div key={benefit.id} className="group p-6 border border-white/5 bg-[#0a0a0a] hover:border-gold-400/40 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-12 h-12 bg-gold-400/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-400 group-hover:text-black transition-colors text-gold-400">
                            {benefit.iconName === 'users' && <Users className="w-6 h-6" />}
                            {benefit.iconName === 'video' && <Video className="w-6 h-6" />}
                            {benefit.iconName === 'zap' && <Zap className="w-6 h-6" />}
                            {benefit.iconName === 'file' && <FileText className="w-6 h-6" />}
                        </div>
                        <h3 className="text-xl font-bold font-serif mb-3 text-gray-100">{benefit.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300">
                            {benefit.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. Curriculum - Visual Grid */}
      <section className="py-24 bg-[#050505] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif">O que você vai aprender</h2>
            <p className="text-gray-400 mt-4 font-light text-lg">Um passo a passo completo, do zero ao avançado.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MODULES.map((module) => (
              <div key={module.id} className="group relative bg-rich-charcoal border border-white/10 p-8 rounded-sm hover:border-gold-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Decorative background number */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="text-9xl font-serif text-gold-400 leading-none -mr-4 -mt-4 block">{module.id}</span>
                </div>
                
                <div className="relative z-10">
                   <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-gold-400 font-serif text-4xl italic">0{module.id}.</span>
                      <h3 className="text-xl font-bold text-white uppercase tracking-wide">{module.title}</h3>
                   </div>
                   
                   <ul className="space-y-4">
                      {module.lessons.map((lesson, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                              <Play className="w-4 h-4 text-gold-600 mt-1 shrink-0" fill="currentColor" />
                              <span className="text-sm font-light leading-relaxed">{lesson}</span>
                          </li>
                      ))}
                   </ul>
                </div>
                
                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Offer (The Stack) */}
      <section id="oferta" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
        {/* Background rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gold-600/10 via-[#0a0a0a] to-[#0a0a0a] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Caprichei MUITO <br/> nessa oferta.
          </h2>
          <p className="text-gray-400 mb-12 font-light text-lg">Veja tudo o que você recebe ao se tornar Membro Fundador:</p>

          <div className="bg-[#050505] border border-gold-400/30 p-8 md:p-14 relative shadow-[0_0_80px_rgba(212,175,55,0.08)] max-w-xl mx-auto rounded-sm">
             {/* Ribbon */}
             <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 rotate-12 bg-gold-500 text-black text-xs font-bold uppercase py-1 px-10 shadow-lg hidden md:block">
                 Oferta Limitada
             </div>

            <div className="text-left space-y-5 mb-12">
                {[
                    { text: "Curso Completo de IA e Vendas", val: "(De R$ 2.997)" },
                    { text: "Acesso à Comunidade de Networking", val: "(De R$ 997)" },
                    { text: "Encontros Semanais Ao Vivo", val: "(Inestimável)" },
                    { text: "Templates de Contratos e Scripts", val: "(Bônus)" },
                ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-300 group hover:text-white transition-colors">
                        <CheckCircle className="text-green-500 w-5 h-5 shrink-0 mt-0.5" />
                        <span>{item.text} <span className="text-gray-500 text-xs ml-1">{item.val}</span></span>
                    </div>
                ))}
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10"></div>

            <div className="text-gold-400 text-xs mb-3 uppercase tracking-widest font-bold">Valor Promocional</div>
            <div className="flex justify-center items-end gap-2 mb-6">
              <span className="text-2xl text-gray-500 mb-3 font-light">12x</span>
              <span className="text-6xl md:text-7xl font-serif text-white font-bold text-gold-gradient">103,10</span>
            </div>
            <p className="text-gray-400 text-sm mb-10">ou R$ 997,00 à vista</p>

            <Button fullWidth href="https://pay.herospark.com/comunidade-coliseu-372393" className="py-5 text-base md:text-lg mb-8 shadow-2xl animate-pulse-slow">
              Quero Garantir Minha Vaga
            </Button>

            <div className="flex items-center justify-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
              <ShieldCheck className="w-10 h-10 text-gold-400" />
              <div className="text-left">
                <p className="text-white text-sm font-bold">Garantia de 7 Dias</p>
                <p className="text-gray-500 text-xs">Risco zero. Não gostou? Devolvemos tudo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Authority (Moved Here as penultimate) */}
      <section className="py-24 bg-[#e5e0d8] text-rich-black">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="w-full md:w-5/12">
            <div className="relative">
                 <div className="absolute -inset-4 border-2 border-black/10 z-0" />
                 {/* SUA FOTO AQUI */}
                 <img 
                    src="image_1.png" 
                    alt="Igor Miguel" 
                    // Adicionei 'grayscale' para que ela comece preto e branco e fique colorida ao passar o mouse, conforme o design original
                    className="w-full shadow-2xl rounded-sm relative z-10 grayscale hover:grayscale-0 transition-all duration-700" 
                />
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-2 block">Seu Mentor</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Quem é Igor Miguel?</h2>
            <div className="w-16 h-1 bg-black mb-8"></div>
            
            <div className="space-y-6 text-gray-800 font-light leading-relaxed text-lg">
              <p>
                Estrategista Digital e Especialista em Inteligência Artificial. Há anos no mercado digital, eu vim do zero, exatamente como você.
              </p>
              <p>
                Eu não queria mais ter que contar moeda. Eu queria uma vida digna. E hoje, todos esses sonhos se tornaram realidade graças ao mercado digital e à revolução da IA.
              </p>
              <p className="font-medium text-black">
                Minha missão agora é simples: te entregar o mapa. Não vendo sorte, vendo processos previsíveis de faturamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ (Moved to Last Position) */}
      <section className="py-24 bg-white text-rich-black">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Perguntas Frequentes</h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-white/10 text-center">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-center mb-6">
                {/* LOGO NO FINAL (FOOTER) */}
                <img src="https://i.imgur.com/t2yhlEd.png" alt="Comunidade Coliseu" className="h-24 w-auto object-contain opacity-90" />
            </div>
            <div className="flex justify-center gap-6 mb-8 text-gray-500">
                <a href="#" className="hover:text-gold-400 transition-colors">Instagram</a>
                <a href="#" className="hover:text-gold-400 transition-colors">Youtube</a>
                <a href="#" className="hover:text-gold-400 transition-colors">Linkedin</a>
            </div>
            <p className="text-gray-600 text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Comunidade Coliseu. Todos os direitos reservados.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;