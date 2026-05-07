import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { motion } from 'motion/react';
import { Instagram, Youtube, Twitch, Linkedin } from 'lucide-react';
import ZBrushDoZero from './pages/ZBrushDoZero';
import ThreeDNaPose from './pages/ThreeDNaPose';

const products = [
  {
    title: "ZBrush do Zero",
    description: "Aprenda ZBrush do Zero e crie seu primeiro modelo pronto para impressão 3D, mesmo que nunca tenha aberto o programa.",
    features: [
      "Acesso vitalício e imediato",
      "Foco em Impressão 3D",
      "Personagem completo do zero",
      "Método simples em etapas",
      "Garantia de 7 dias"
    ],
    image: "https://images.unsplash.com/photo-1633513295844-39648a3035c1?auto=format&fit=crop&q=80&w=1000",
    link: "/zbrushdozero",
    accent: "cardoso-amber",
    delay: 0.1
  },
  {
    title: "3D na Pose",
    description: "Pare de perder horas refazendo suas esculturas. Aprenda a modelar direto na pose e criar peças com impacto profissional.",
    features: [
      "Anatomia aplicada na pose",
      "Composição e narrativa",
      "Fim do retrabalho desnecessário",
      "Histórias reais de sucesso",
      "Nível Profissional"
    ],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
    link: "/3dnapose",
    accent: "cardoso-sky",
    delay: 0.2
  }
];

function Home() {
  return (
    <div className="immersive-bg min-h-screen flex flex-col p-6 md:p-12 overflow-x-hidden relative">
      <Header />
      
      <main className="flex-1 flex flex-col md:flex-row gap-8 z-10 items-stretch min-h-[600px] max-w-7xl mx-auto w-full">
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            title={product.title}
            description={product.description}
            features={product.features}
            image={product.image}
            link={product.link}
            accent={product.accent}
            delay={product.delay}
            initials={product.title === 'ZBrush do Zero' ? 'ZB' : '3P'}
          />
        ))}
      </main>

      <footer className="mt-24 flex flex-col items-center gap-10 text-[10px] text-zinc-600 uppercase tracking-widest font-bold pb-8">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-black tracking-tighter uppercase leading-none text-zinc-300">
            Cardoso<span className="text-zinc-600">3D</span>
          </h2>
          <p className="text-zinc-500 tracking-[0.2em] text-[9px]">Escultura Digital & Impressão 3D</p>
        </div>

        <div className="flex gap-6 items-center">
            <a href="https://www.instagram.com/cardoso.3d/" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-white hover:bg-white/5 transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@Cardoso.3d" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-white hover:bg-white/5 transition-all">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-white hover:bg-white/5 transition-all">
              <Twitch className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-white hover:bg-white/5 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
        </div>

        <div className="flex flex-col items-center gap-2 border-t border-white/5 w-full max-w-sm pt-8">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            </div>
            <span className="opacity-50 mt-2">&copy; {new Date().getFullYear()} Cardoso3D Studio</span>
        </div>
      </footer>

      {/* Background decoration from theme */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 vertical-text text-[15vw] font-black text-white/[0.02] pointer-events-none select-none uppercase tracking-tighter">
        ACADEMY
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zbrushdozero" element={<ZBrushDoZero />} />
        <Route path="/3dnapose" element={<ThreeDNaPose />} />
      </Routes>
    </Router>
  );
}

