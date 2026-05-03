import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="w-full z-50 px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            Cardoso<span className="text-zinc-600">3D</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-8 text-[11px] uppercase tracking-[0.3em] text-zinc-400 font-bold mt-8"
        >
          <a href="#" className="text-white border-b border-white pb-1">Home</a>
          <a href="#cursos" className="hover:text-white transition-colors">Cursos</a>
          <a href="#" className="hover:text-white transition-colors">Sobre</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
        </motion.div>
      </div>
    </header>
  );
}
