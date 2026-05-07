import { Instagram, Youtube, Mail, CheckCircle2, XCircle, Play } from 'lucide-react';

export default function ZBrushDoZero() {
  const ctaLink = "https://pay.hotmart.com/H103748861J?checkoutMode=10";

  return (
    <div className="min-h-screen bg-[linear-gradient(90deg,#000000_50%,#22002c_100%)] text-white font-['Inter'] selection:bg-purple-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700;800;900&family=Jost:wght@300;400;500;600&display=swap');
        
        .font-jost { font-family: 'Jost', sans-serif; }
        .text-indigo-light { color: rgb(147, 148, 197); }
        .bg-purple-cta { background-color: rgb(119, 3, 239); }
        .border-purple-cta { border-color: rgb(119, 3, 239); }
        .text-indigo-highlight { color: rgb(82, 83, 156); }
        
        .btn-cta {
          background: rgb(119, 3, 239);
          color: #fff;
          border-radius: 9px;
          padding: 20px 32px;
          font-weight: 900;
          font-size: 21px;
          transition: opacity 0.2s, transform 0.2s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
        }
        
        .btn-cta:hover {
          opacity: 0.85;
          transform: scale(1.02);
        }

        .btn-cta-large {
          font-size: 26px;
        }

        @media (min-width: 768px) {
          .btn-cta {
            width: auto;
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* 1. HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 py-[15px] px-6 bg-[linear-gradient(90deg,#000000_50%,#22002c_100%)] shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img 
            src="https://zbrushdozero.com/var/assets/img/media/original/fc65c1199699d6c899cfe0a1daeeb9f1/Sem-T-tulo-1.png" 
            alt="zbrush do zero" 
            className="h-10 md:h-12 w-auto"
          />
        </div>
      </header>

      {/* 2. HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-[48px] font-extrabold leading-tight mb-6 uppercase tracking-tighter">
              Aprenda ZBrush do Zero e Crie Seu Primeiro Modelo Pronto pra Impressão 3D
            </h1>
            <p className="text-xl md:text-[23px] font-normal text-indigo-light mb-8 font-jost">
              Mesmo que você nunca tenha aberto o programa — com um passo a passo simples e organizado.
            </p>
            <ul className="space-y-4 mb-10 w-full">
              {[
                "Aulas curtas (10–25 min).",
                "Método em etapas (sem bagunça)",
                "Projeto final: personagem completo pronto pra imprimir",
                "Foco em impressão 3D"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg font-jost">
                  <img src="https://zbrushdozero.com/var/assets/svg/customicon/37fa063091a545c806e7aef119c6fb1109aad2fdc69dcb3d267ef32e172b0d57/Sem-T-tulo-5.svg" className="w-5 h-5" alt="check" />
                  {item}
                </li>
              ))}
            </ul>
            <a href={ctaLink} className="btn-cta mb-4">
              <img src="https://zbrushdozero.com/var/assets/svg/customicon/37fa063091a545c806e7aef119c6fb1109aad2fdc69dcb3d267ef32e172b0d57/Sem-T-tulo-5.svg" className="w-6 h-6 contrast-200 brightness-200" alt="icon" /> 
              QUERO COMEÇAR DO ZERO
            </a>
            <p className="text-sm text-zinc-500 w-full md:w-auto text-center md:text-left">
              • Acesso vitalício • 7 Dias de Garantia
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <img 
              src="https://zbrushdozero.com/var/assets/img/media/original/46e16046e3eb9f4f9c6cca002e9779e8/processo.png" 
              alt="Personagem ZBrush" 
              className="w-full max-w-[500px] h-auto drop-shadow-[0_0_50px_rgba(119,3,239,0.3)] animate-pulse-slow"
            />
          </div>
        </div>
      </section>

      {/* 3. ESSE CURSO É PRA VOCÊ QUE... */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-[52px] font-black mb-16 uppercase">Esse curso é pra você que...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "https://zbrushdozero.com/var/assets/svg/icon/23507875/glyph/blind.svg", text: "Abriu o Zbrush e ficou perdido com mil botões" },
              { icon: "https://zbrushdozero.com/var/assets/svg/icon/23507875/glyph/road.svg", text: "Tentou mas não sabe por onde começar." },
              { icon: "https://zbrushdozero.com/var/assets/svg/icon/23507875/glyph/logo-youtube.svg", text: "Assistiu tutoriais mas parece avançado demais e te deixam travado." },
              { icon: "https://zbrushdozero.com/var/assets/svg/icon/23507875/glyph/3d-model.svg", text: "Quer imprimir seus próprios modelos, mas trava no software." }
            ].map((card, i) => (
              <div key={i} className="bg-zinc-900/50 p-10 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:border-purple-cta/30 transition-all">
                <img src={card.icon} alt="icon" className="w-12 h-12 mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                <p className="text-zinc-300 font-medium leading-relaxed font-jost">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ZBRUSH NÃO É DIFÍCIL */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-[52px] font-black mb-6 leading-tight uppercase">
              Zbrush não é difícil. Você só nunca aprendeu o processo certo
            </h2>
            <p className="text-xl text-indigo-light mb-10 font-jost">
              Você não precisa dominar tudo! Só seguir a ordem certa.
            </p>
            <div className="space-y-8">
              {[
                { icon: "https://zbrushdozero.com/var/assets/svg/icon/23507875/glyph/3d-29.svg", title: "Comece com formas simples" },
                { icon: "https://zbrushdozero.com/var/assets/svg/icon/23507875/glyph/chart-bar-33.svg", title: "Evolua passo a passo, sem travar" },
                { icon: "https://zbrushdozero.com/var/assets/svg/icon/23507875/outline/controller-3.svg", title: "Termine com um modelo pronto pra impressão 3D" }
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center p-4 group-hover:bg-purple-cta transition-colors">
                    <img src={step.icon} alt={step.title} className="w-full h-full invert opacity-80" />
                  </div>
                  <span className="text-xl font-bold text-indigo-highlight uppercase tracking-tight">{step.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://zbrushdozero.com/var/assets/img/media/original/205fc439deee3f83e9e1d4712a7f902b/processo-2-mobile.png" 
              alt="Personagem Lateral" 
              className="w-full max-w-[400px] h-auto drop-shadow-2xl" 
            />
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO VIDEO */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-[57px] font-black mb-4 uppercase tracking-tighter">Veja o processo na pratica</h2>
          <p className="text-xl md:text-[27px] text-zinc-500 mb-12 font-jost">Da blocagem simples ao modelo pronto pra impressão 3D! Passo a passo.</p>
          <div className="aspect-video w-full rounded-3xl overflow-hidden border-4 border-zinc-900 mb-12 shadow-[0_0_100px_rgba(119,3,239,0.15)]">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/IwvuCM9_zbU?autoplay=0&controls=1&mute=0&rel=0"
              title="ZBrush Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
          <a href={ctaLink} className="btn-cta btn-cta-large mb-6 px-12">
            <img src="https://zbrushdozero.com/var/assets/svg/customicon/37fa063091a545c806e7aef119c6fb1109aad2fdc69dcb3d267ef32e172b0d57/Sem-T-tulo-5.svg" className="w-8 h-8 contrast-200 brightness-200" alt="icon" />
            QUERO APRENDER O PASSO A PASSO
          </a>
          <p className="text-zinc-500 font-bold tracking-[0.4em] text-[10px] uppercase">
            AULAS CURTAS • MÉTODO EM ETAPAS • ACESSO IMEDIATO
          </p>
        </div>
      </section>

      {/* 6. ESTE CURSO É PRA VOCÊ? */}
      <section className="py-24 px-6 bg-zinc-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-[44px] font-black mb-16 text-center uppercase tracking-tighter">Este curso é pra você?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-green-500/5 p-10 rounded-3xl border border-green-500/10 hover:border-green-500/30 transition-all">
              <h3 className="text-2xl font-black text-green-500 mb-8 uppercase tracking-widest">✅ É pra você se...</h3>
              <ul className="space-y-6 text-zinc-300 font-jost">
                {[
                  "Você nunca usou o Zbrush (ou sabe muito pouco)",
                  "Você abriu o programa e travou na interface",
                  "Você quer um passo a passo simples e organizado",
                  "Você quer aprender a modelar suas próprias miniaturas, bustos e colecionáveis"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <img src="https://zbrushdozero.com/var/assets/svg/icon/23507875/glyph/check-simple.svg" alt="check" className="w-5 h-5 mt-1 opacity-80" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-500/5 p-10 rounded-3xl border border-red-500/10 hover:border-red-500/30 transition-all">
              <h3 className="text-2xl font-black text-red-500 mb-8 uppercase tracking-widest">❌ Não é pra você se...</h3>
              <ul className="space-y-6 text-zinc-300 font-jost">
                {[
                  "Seu foco é games, animação ou VFX",
                  "Você procura anatomia avançada",
                  "Você já é avançado no Zbrush",
                  "Você quer técnicas artísticas complexas e teoria pesada"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-red-500 mt-1 font-bold">✕</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEÇÃO MÓDULOS */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-5xl md:text-[68px] font-black mb-4 uppercase tracking-tighter">Módulos do curso</h2>
        <p className="text-xl md:text-[23px] font-light text-zinc-500 mb-16 font-jost">Um caminho simples, em etapas, até seu primeiro modelo pronto pra imprimir</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {[
            "https://zbrushdozero.com/var/assets/img/media/original/bef4d60582c0ead95aaeef926fc0fca5/modulo-1.png",
            "https://zbrushdozero.com/var/assets/img/media/original/4b5807001050c68f3583bc5d4a120841/modulo-2.png",
            "https://zbrushdozero.com/var/assets/img/media/original/037e8aefa8ac30f820bcb6dc29a605e4/modulo-3.png",
            "https://zbrushdozero.com/var/assets/img/media/original/65f0bc46d2b38aad13639354599e9b72/unnamed.jpg"
          ].map((url, i) => (
            <div key={i} className="aspect-video rounded-2xl overflow-hidden border-2 border-purple-cta/30 hover:border-purple-cta transition-all group">
              <img src={url} alt={`Módulo ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
        <a href={ctaLink} className="btn-cta btn-cta-large px-12">
          <img src="https://zbrushdozero.com/var/assets/svg/customicon/37fa063091a545c806e7aef119c6fb1109aad2fdc69dcb3d267ef32e172b0d57/Sem-T-tulo-5.svg" className="w-8 h-8 contrast-200 brightness-200" alt="icon" /> 
          QUERO COMEÇAR DO ZERO
        </a>
      </section>

      {/* 8. SEÇÃO GARANTIA */}
      <section className="py-24 px-6 bg-purple-cta/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-[68px] font-black mb-12 uppercase tracking-tighter">Garantia ✅</h2>
          <div className="space-y-6 text-2xl font-bold text-zinc-200 font-jost">
            <p className="flex items-center justify-center gap-4">
              <img src="https://zbrushdozero.com/var/assets/svg/icon/23507875/glyph/check-simple.svg" alt="check" className="w-8 h-8" /> 
              Garantia de 7 dias
            </p>
            <p className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
              <img src="https://zbrushdozero.com/var/assets/svg/icon/23507875/glyph/check-simple.svg" alt="check" className="w-8 h-8 flex-shrink-0" /> 
              Se não fizer sentido pra você, é só solicitar reembolso pela Hotmart.
            </p>
          </div>
        </div>
      </section>

      {/* 9. SEÇÃO OFERTA / PREÇO */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="text-xl text-purple-cta font-black mb-2 uppercase tracking-[0.3em] text-xs">Oferta</div>
            <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">Zbrush do zero</h2>
            <p className="text-zinc-500 italic text-lg font-jost">Entre hoje e comece a modelar pra impressão 3D</p>
          </div>
          
          <div className="bg-zinc-900 border-2 border-purple-cta p-12 rounded-[2rem] text-center shadow-2xl shadow-purple-cta/20 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-2 bg-purple-cta"></div>
            <p className="text-zinc-400 font-bold mb-4 font-jost text-sm">Comece agora mesmo por apenas:</p>
            <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">12x de:</div>
            <div className="text-7xl font-black mb-2 text-white">R$21,42</div>
            <p className="text-sm text-zinc-500 font-bold mb-4 uppercase tracking-widest">sem juros</p>
            <p className="text-zinc-300 font-medium mb-8 font-jost">ou à vista R$257</p>
            <div className="w-full h-[1px] bg-white/10 mb-8"></div>
            <a href={ctaLink} className="btn-cta w-full">
              <img src="https://zbrushdozero.com/var/assets/svg/customicon/37fa063091a545c806e7aef119c6fb1109aad2fdc69dcb3d267ef32e172b0d57/Sem-T-tulo-5.svg" className="w-6 h-6 contrast-200 brightness-200" alt="icon" /> 
              Quero começar agora!
            </a>
          </div>

          <div className="space-y-4">
            {[
              "Curso gravado (aulas de 10-25min)",
              "Método em etapas (sem travar)",
              "Projeto final: personagem completo imprimível",
              "Foco em impressão 3D",
              "Garantia de 7 dias",
              "Acesso vitalício",
              "Acesso imediato pela Hotmart"
            ].map((benefit, i) => (
              <div key={i} className="flex gap-3 items-center text-zinc-400 font-medium font-jost">
                <img src="https://zbrushdozero.com/var/assets/svg/customicon/37fa063091a545c806e7aef119c6fb1109aad2fdc69dcb3d267ef32e172b0d57/Sem-T-tulo-5.svg" alt="check" className="w-4 h-4 flex-shrink-0 contrast-125 brightness-125" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
          <div className="flex gap-8">
            <a href="https://www.instagram.com/cardoso.3d/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:bg-purple-cta hover:border-purple-cta transition-all">
              <img src="https://zbrushdozero.com/var/assets/svg/icon/23507875/glyph/logo-instagram.svg" alt="Instagram" className="w-6 h-6 invert" />
            </a>
            <a href="https://www.youtube.com/@Cardoso.3d" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:bg-purple-cta hover:border-purple-cta transition-all">
              <img src="https://zbrushdozero.com/var/assets/svg/icon/23507875/glyph/logo-youtube.svg" alt="Youtube" className="w-6 h-6 invert" />
            </a>
            <a href="mailto:cardoso.3d@outlook.com" className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:bg-purple-cta hover:border-purple-cta transition-all">
              <img src="https://zbrushdozero.com/var/assets/svg/icon/23507875/glyph/email-83.svg" alt="Email" className="w-6 h-6 invert" />
            </a>
          </div>
          <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} ZBrush do Zero — cardoso.3d@outlook.com
          </div>
        </div>
      </footer>
    </div>
  );
}
