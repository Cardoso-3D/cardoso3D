import { Instagram, Youtube, Mail, CheckCircle2, Play } from 'lucide-react';

export default function ThreeDNaPose() {
  const ctaLink = "https://3dnapose.com/"; // URL base for now

  return (
    <div className="min-h-screen bg-[linear-gradient(90deg,#000000_50%,#001c2c_100%)] text-white font-['Inter'] selection:bg-sky-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;700;800;900&family=Outfit:wght@300;400;500;600&display=swap');
        
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .text-sky-light { color: rgb(147, 187, 197); }
        .bg-sky-cta { background-color: rgb(14, 165, 233); }
        .border-sky-cta { border-color: rgb(14, 165, 233); }
        
        .btn-cta-sky {
          background: rgb(14, 165, 233);
          color: #000;
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
        
        .btn-cta-sky:hover {
          opacity: 0.85;
          transform: scale(1.02);
        }

        @media (min-width: 768px) {
          .btn-cta-sky {
            width: auto;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 py-[15px] px-6 bg-[linear-gradient(90deg,#000000_50%,#001c2c_100%)] shadow-lg shadow-black/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-black uppercase tracking-tighter">
            3d na <span className="text-sky-500">pose</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl md:text-[48px] font-extrabold leading-tight mb-6 uppercase tracking-tighter">
              Aprenda a modelar direto na pose e criar peças com impacto profissional
            </h1>
            <p className="text-xl md:text-[23px] font-normal text-sky-light mb-8 italic">
              Pare de perder horas refazendo suas esculturas no final. Domine a anatomia aplicada e a dinâmica visual.
            </p>
            <ul className="space-y-4 mb-10 w-full">
              {[
                "Anatomia aplicada na pose",
                "Composição e base narrativa",
                "Fim do retrabalho desnecessário",
                "Personagens com impacto visual real"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="text-sky-500 w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
            <a href={ctaLink} className="btn-cta-sky mb-4">
              <Play className="fill-current w-5 h-5" /> QUERO DOMINAR A POSE
            </a>
            <p className="text-sm text-zinc-500 w-full md:w-auto text-center md:text-left">
              • Nível Profissional • 7 Dias de Garantia
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="w-[400px] h-[500px] bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-zinc-700 font-black text-2xl uppercase text-center p-12">
              Demonstração de Pose e Anatomia
            </div>
          </div>
        </div>
      </section>

      {/* Footer is simplified for now */}
      <footer className="py-20 px-6 mt-auto border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
           <div className="flex gap-8">
            <a href="https://www.instagram.com/cardoso.3d/" target="_blank" className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-sky-cta hover:text-black transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@Cardoso.3d" target="_blank" className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-sky-cta hover:text-black transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="mailto:cardoso.3d@outlook.com" className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-sky-cta hover:text-black transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-zinc-600 text-sm font-bold uppercase tracking-widest">© 3D Na Pose — Vinícius Cardoso</p>
        </div>
      </footer>
    </div>
  );
}
