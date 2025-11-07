'use client';

import { motion } from "framer-motion";
import {
  Coins, Users, Flame, ShieldCheck, Repeat2, Rocket
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Coins,
    title: "Automatic SOL Rewards",
    desc:
      "Hold $VAULTY and receive SOL reflections automatically via TaxSplit. No staking or claiming—rewards flow to your wallet.",
  },
  {
    icon: Users,
    title: "Fair for All Holders",
    desc:
      "Rewards are proportional to your share. The more you hold and the longer you hold, the bigger each reward cycle.",
  },
  {
    icon: Rocket,
    title: "Vault-Powered Growth",
    desc:
      "38% of the tax fuels the Dev Vault—covering listings, tools, buybacks, and marketing that feed the reward loop.",
  },
  {
    icon: Flame,
    title: "Deflationary Forever",
    desc:
      "2% of every transaction is burned, permanently reducing supply and increasing scarcity over time.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & On-Chain",
    desc:
      "Every distribution and vault action is traceable on-chain. Community can verify flows at any time.",
  },
  {
    icon: Repeat2,
    title: "Sustainable Reward Loop",
    desc:
      "Rewards come from real trading volume—not inflation. As usage grows, the loop strengthens for loyal holders.",
  },
];

export default function WhyVaulty() {
  return (
    <section id="why" className="relative mx-auto w-full max-w-7xl px-4 py-16">
      {/* Header (hero-style) */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          WHY <span className="text-cyan-300">VAULTY</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/75">
          Every transaction fills the Vault—rewarding holders, burning supply, and funding growth.
        </p>

        {/* Quick pills (optional) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href={TOKEN.links.taxsplit}
                target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15">
            Token Details
          </a>
          <a href={TOKEN.links.taxsplit}
                target="_blank" className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm ring-1 ring-cyan-400/20 hover:bg-cyan-500/25">
            Distribution History
          </a>
          <a href={TOKEN.links.taxsplit}
                target="_blank" className="rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/15 hover:bg-white/15">
            Rewards & Tokenomics
          </a>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="relative rounded-2xl bg-white/5 px-5 pb-6 pt-8 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            {/* Icon badge */}
            <div className="absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/15 ring-1 ring-cyan-400/30">
              <Icon className="h-6 w-6 text-cyan-300" />
            </div>

            <h3 className="mt-2 text-lg font-semibold">
              {title}
            </h3>
            <p className="mt-2 text-sm text-white/75">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
