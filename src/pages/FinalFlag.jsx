import React from 'react';
import { motion } from 'framer-motion';
import { Flag, ShieldCheck } from 'lucide-react';

const FinalFlag = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-black bg-[radial-gradient(circle_at_center,_rgba(52,168,83,0.05)_0%,_#000000_70%)] text-white">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="max-w-xl w-full p-12 text-center flex flex-col items-center gap-6 rounded-3xl bg-zinc-950 border border-white/10 shadow-[0_0_40px_rgba(52,168,83,0.1)]"
      >
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-green-500/10 p-4 rounded-full inline-flex"
        >
          <ShieldCheck size={48} className="text-green-500" />
        </motion.div>
        
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Congratulations!
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-400 text-lg"
        >
          You followed the breadcrumbs and found the hidden path. Take this flag back to Mission Control.
        </motion.p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="bg-black/50 border border-green-500/50 p-6 rounded-xl flex items-center gap-4 mt-4 shadow-[0_0_20px_rgba(52,168,83,0.15)]"
        >
          <Flag size={24} className="text-green-500 shrink-0" />
          <code className="text-green-400 font-mono text-xl md:text-2xl font-bold tracking-wide break-all">
            ctf{'{'}gdg_uvce_ctf_champion{'}'}
          </code>
        </motion.div>
        
        <motion.a 
          href="/"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-zinc-400 hover:text-white transition-colors text-sm underline underline-offset-4"
        >
          Return to Mission Control
        </motion.a>
      </motion.div>
    </div>
  );
};

export default FinalFlag;
