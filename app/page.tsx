'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Twitter, Send, LineChart, Wallet, Flame, ArrowRight, ShieldCheck, Coins, Info, Users, Repeat2, Rocket } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import TokenomicsBars from "@/components/TokenomicsBars";
import { ChevronRight } from "lucide-react";
import WavyDivider from "@/components/WavyDivider";
import CoinParticles from "@/components/CoinParticles";
import { ENV } from "@/env";
/**
 * $VAULTY – Landing (Next.js App Router)
 * Libraries: TailwindCSS, framer-motion, recharts
 * Make sure these images exist in /public:
 * hero.png, solana_background.png, vault_background.png, Wordmark.png,
 * token.png, vaulty_main.png, vaulty_chart.png
 */

// ======== PROJECT CONSTANTS (EDIT ME) ========
const TOKEN = {
  name: "VAULTY",
  ticker: "$VAULTY",
  mint: "7Hpr1EZ3b6BYJndVL4Qa3yexZMstRHwtEvKkftt9qWot",
  chain: "Solana",
  taxTotal: 10, // %
  splits: {
    holders: 50, // of tax
    dev: 48,
    burn: 2,
  },
  links: {
    twitter: "https://x.com/vaulty_space",
    telegram: "https://t.me/vaulty_portal",
    taxsplit: "https://www.taxsplit.app/token/7Hpr1EZ3b6BYJndVL4Qa3yexZMstRHwtEvKkftt9qWot",
    dexscreener: "https://dexscreener.com/solana/7Hpr1EZ3b6BYJndVL4Qa3yexZMstRHwtEvKkftt9qWot",
    jupiter: "https://jup.ag/swap?sell=So11111111111111111111111111111111111111112&buy=7Hpr1EZ3b6BYJndVL4Qa3yexZMstRHwtEvKkftt9qWot",
  },
};

// Tokenomics (tax split)
const tokenomics = [
  { name: "Holder Rewards", value: 50 },
  { name: "Dev Vault", value: 48 },
  { name: "Burn", value: 2 },
];
const chartColors = ["#22C55E", "#6366F1", "#F59E0B"]; // green, indigo, amber

const Section: React.FC<React.PropsWithChildren<{ id?: string; className?: string }>> = ({
  id,
  className,
  children,
}) => (
  <section id={id} className={`relative mx-auto w-full max-w-7xl px-4 py-24 ${className || ""}`}>
    {children}
  </section>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex max-w-full items-center align-middle gap-1.5 rounded-full bg-white/10 px-3 py-[5px] text-sm leading-none text-white/80 ring-1 ring-white/15">
    {children}
  </span>
);

const SectionHeader = ({ title, highlight }: { title: string; highlight?: string }) => (
  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
    {title}{" "}
    {highlight && <span className="text-cyan-300">{highlight}</span>}
  </h2>
);

const SectionHeaderHighliteLeft = ({ highlight, title }: { highlight: string; title?: string }) => (
  <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
    {highlight && <span className="text-cyan-300">{highlight}</span>}{" "}
	{title}
  </h2>
);

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
      "45% of the tax fuels the Dev Vault—covering listings, tools, buybacks, and marketing that feed the reward loop.",
  },
  {
    icon: Flame,
    title: "Deflationary Forever",
    desc:
      "5% of every transaction is burned, permanently reducing supply and increasing scarcity over time.",
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

export default function VaultySite() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden scroll-smooth bg-[#0a0118] text-white">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-40 -right-24 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <img
			  src="/Wordmark.png"
			  alt="VAULTY"
			  className="h-10 w-auto md:h-12 transition-all duration-300"
			/>
            <Badge>
              <ShieldCheck className="h-4 w-4 inline align-middle" /> Built on {TOKEN.chain}
            </Badge>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#how" className="text-white/75 hover:text-white">How It Works</a>
            <a href="#about" className="text-white/75 hover:text-white">About</a>
            <a href="#rewards" className="text-white/75 hover:text-white">Reward Loop</a>
            <a href="#tokenomics" className="text-white/75 hover:text-white">Tokenomics</a>
            <a href="#why" className="text-white/75 hover:text-white">Why Vaulty</a>
            <a href="#roadmap" className="text-white/75 hover:text-white">Roadmap</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={TOKEN.links.twitter} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 ring-1 ring-white/15 hover:bg-white/15">
              <Twitter className="h-4 w-4" />
            </a>
            <a href={TOKEN.links.telegram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/20 px-3 py-2 ring-1 ring-cyan-400/20 hover:bg-cyan-500/25">
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      {/* HERO (right-aligned) */}
      <div className="relative isolate w-full overflow-x-hidden">
        <Image
          src="/hero.png"
          alt="VAULTY hero"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 object-cover object-[70%_center] max-w-none"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0118]/40 to-[#0a0118]" />
		
        <Section className="grid min-h-[72vh] items-center justify-items-center sm:justify-items-end px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="ml-auto w-full max-w-2xl text-start sm:text-right max-w-[min(42rem,100%)]"
          >
            <div className="mb-4 flex max-w-full flex-wrap items-center justify-start sm:justify-end  gap-2">
              <Badge>
                <Coins className="h-4 w-4 inline align-middle" /> {TOKEN.ticker} — Auto Rewards
              </Badge>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight justify-start sm:justify-end md:text-6xl">
              The Fox That <span className="text-cyan-300">Guards Your Bags</span>
            </h1>

            <p className="mt-4 ml-auto max-w-xl text-left sm:text-right text-white/80">
              {TOKEN.ticker} is a reflection-based token on {TOKEN.chain}. Every transaction triggers a {TOKEN.taxTotal}% tax — and <b>{TOKEN.splits.holders}% of that tax is redistributed to holders on each reward cycle</b>. No staking, no claiming; rewards flow automatically.
            </p>

            <div className="mt-6 flex flex-wrap justify-center sm:justify-end gap-3 w-full max-w-full">
              <a
                href={TOKEN.links.taxsplit}
                target="_blank" rel="noreferrer"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm sm:text-base font-semibold text-black shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 min-w-0"
              >
                View on TaxSplit <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={TOKEN.links.dexscreener}
                target="_blank" rel="noreferrer"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm sm:text-base ring-1 ring-white/15 hover:bg-white/15 min-w-0"
              >
                <LineChart className="h-4 w-4" /> Chart
              </a>
              <a
                href={TOKEN.links.jupiter}
                target="_blank" rel="noreferrer"
                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm sm:text-base ring-1 ring-white/10 hover:bg-white/10 min-w-0"
              >
                <Wallet className="h-4 w-4" /> Swap on Jupiter
              </a>
			</div>
			
			{/* Copyable Token Address CTA */}
			<div className="mt-6 mx-auto sm:ml-auto sm:w-fit w-auto max-w-full sm:float-right">
				<div className="inline-flex justify-items-center sm:justify-items-end items-center space-x-2 rounded-xl bg-white/5 px-3 py-2.5 ring-1 ring-white/10 backdrop-blur-sm w-fit max-w-full">
					<span className="truncate max-w-[clamp(12rem,70vw,32rem)] font-mono text-sm text-white/70 select-all">
					  {TOKEN.mint}
					</span>
					<button
					  onClick={() => {
						navigator.clipboard.writeText(TOKEN.mint);
						const toast = document.createElement('div');
						toast.textContent = 'Copied!';
						toast.className =
						  'fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-black shadow-lg animate-[fade_1.5s_ease-out_forwards]';
						document.body.appendChild(toast);
						setTimeout(() => toast.remove(), 1500);
					  }}
					  className="shrink rounded-lg bg-cyan-500/20 px-3 py-1.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/30 transition"
					>
					  Copy
					</button>
				</div>

			  <style jsx>{`
				@keyframes fade {
				  0% { opacity: 0; transform: translateY(6px) translateX(-50%); }
				  15% { opacity: 1; transform: translateY(0) translateX(-50%); }
				  85% { opacity: 1; transform: translateY(0) translateX(-50%); }
				  100% { opacity: 0; transform: translateY(-6px) translateX(-50%); }
				}
			  `}</style>
            </div>

          </motion.div>
		  
        </Section>
      </div>
	
	{/* HOW REWARDS WORK (Buy, Hold, Earn) */}
<Section id="how" className="pt-0">
  <div className="relative overflow-hidden rounded-3xl bg-white/5 p-6 md:p-8 ring-1 ring-white/10">
    {/* background glow */}
    <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
    <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-600/15 blur-3xl" />

    {/* Header */}
    <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
      How <span className="text-cyan-300">Rewards Work</span>
    </h2>

    <p className="mt-4 max-w-3xl text-lg text-white/80 leading-relaxed">
      Earning with <span className="text-cyan-300 font-semibold">$VAULTY</span> is simple — just buy and hold.  
      Every transaction on the network contributes a 10% tax that’s distributed automatically.  
      <strong> More volume = more rewards</strong> for holders during each distribution cycle.
    </p>

    {/* Cards */}
    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[
        {
          title: "Buy",
          icon: "💎",
          desc: "Purchase $VAULTY on Solana and become part of the Vault. Every trade contributes to the reward pool.",
        },
        {
          title: "Hold",
          icon: "🦊",
          desc: "Simply hold $VAULTY in your wallet. No staking or claiming required — your share of rewards is automatic.",
        },
        {
          title: "Earn",
          icon: "🎁",
          desc: "When distribution happens, you receive SOL reflections directly to your wallet, based on your holdings.",
        },
        {
          title: "Repeat",
          icon: "♻️",
          desc: "As trading volume increases, the reward pool grows. More activity means bigger payouts for holders.",
        },
      ].map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          className="group relative rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition-all duration-300"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-500/15 ring-1 ring-cyan-400/25 text-lg">
              <span aria-hidden>{s.icon}</span>
            </div>
            <div className="text-2xl font-bold">{s.title}</div>
          </div>
          <p className="text-base md:text-[17px] text-white/80 leading-relaxed">
            {s.desc}
          </p>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-7 flex flex-wrap gap-3">
      <a
        href="#tokenomics"
        className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3.5 text-base md:text-lg font-semibold text-black shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 transition"
      >
        See Tokenomics
      </a>
    </div>
  </div>
</Section>
	
	
      {/* ABOUT (rewritten) */}
	  <div className="relative isolate w-full">
        <img
          src="/solana_background.png"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          alt="bg"
        />
		
      <Section id="about">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/vaulty_main.png"
            alt="Vaulty"
            className="mx-auto w-full max-w-md rounded-2xl ring-1 ring-white/10"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >

			<SectionHeader title="A Token That" highlight="Rewards True Holders" />
            <p className="mt-4 text-white/80">
              {TOKEN.ticker} is a <strong>tax-based reflection token</strong> on {TOKEN.chain}. Each buy or sell incurs a <strong>{TOKEN.taxTotal}% tax</strong> that fuels the ecosystem:
            </p>
            <ul className="mt-6 space-y-2 text-white/85">
              <li className="flex items-start gap-3"><ChevronRight className="h-5 w-5 text-cyan-300 shrink-0" /> <span>Passive income — rewards flow automatically via TaxSplit 💸</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="h-5 w-5 text-cyan-300 shrink-0" /> <span> Deflationary — supply shrinks with every distribution 🔥</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="h-5 w-5 text-cyan-300 shrink-0" /> <span> Transparent Dev Vault — growth funded in the open 💼</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="h-5 w-5 text-cyan-300 shrink-0" /> <span> Fast & efficient — powered by Solana ⚡</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="h-5 w-5 text-cyan-300 shrink-0" /> <span> Community-first — become a Vault Keeper 🦊</span></li>
            </ul>
          </motion.div>
        </div>
      </Section>
	</div>

	{/* REWARD LOOP (updated text) */}
      <Section id="rewards">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <SectionHeader title="The Vault" highlight="Reward Cycle" />

            <ol className="mt-4 space-y-3 text-white/80">
              <li className="flex items-start gap-3"><ChevronRight className="h-5 w-5 text-cyan-300 shrink-0" /> <span>Each transaction incurs a <strong>{TOKEN.taxTotal}% tax</strong>.</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="h-5 w-5 text-cyan-300 shrink-0" /> <span><strong>{TOKEN.splits.holders}%</strong> of the tax is redistributed to holders automatically.</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="h-5 w-5 text-cyan-300 shrink-0" /> <span><strong>{TOKEN.splits.dev}%</strong> fuels the Dev Vault for growth and buybacks.</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="h-5 w-5 text-cyan-300 shrink-0" /> <span><strong>{TOKEN.splits.burn}%</strong> is burned, shrinking supply.</span></li>
              <li className="flex items-start gap-3"><ChevronRight className="h-5 w-5 text-cyan-300 shrink-0" />  <span>Vault refills → rewards repeat on the next cycle.</span></li>
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={TOKEN.links.taxsplit}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-black shadow-lg shadow-cyan-500/30"
              >
                See distributions on TaxSplit <Flame className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/vaulty_chart.png"
            alt="Vaulty chart"
            className="mx-auto w-full max-w-md rounded-2xl ring-1 ring-white/10"
          />
        </div>
      </Section>

	
      {/* TOKENOMICS (vertical bars, 50/48/2) */}
		<div className="relative isolate w-full">
		  <img
			src="/vault_background.png"
			alt="vault bg"
			className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
		  />

			<CoinParticles count={14} />
		  <Section id="tokenomics">
			{/* Hero-style header */}
			<h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
			  Vaulty <span className="text-cyan-300">Tokenomics</span>
			</h2>
			<p className="text-white/70">
			  Per-transaction tax: <strong>10%</strong> — split into <strong>50%</strong> Holder Rewards, <strong>48%</strong> Dev Vault, <strong>2%</strong> Burn.
			</p>

			{/* Bars */}
			<div className="mt-8">
			  <TokenomicsBars
				data={[
				  { name: "Holder Rewards", value: 50, color: "#22C55E", sub: "Rewards distributed to holders" },
				  { name: "Dev Vault",      value: 48, color: "#7B00FF", sub: "Marketing, listings, buybacks, tools development" },
				  { name: "Burn",           value: 2,  color: "#F59E0B", sub: "Every trade shrinks supply" },
				]}
			  />
			</div>

			<p className="mt-6 text-white/70">
			  Rewards are proportional to your holdings and distributed automatically via TaxSplit.
			  Dev Vault activity (listings, marketing, buybacks, tools) will be reported to the community.
			</p>
		  </Section>
		</div>
		
		{/* Why Vaulty */}
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

      {/* ROADMAP */}
      <div className="relative isolate w-full">
        <img
          src="/solana_background.png"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          alt="bg"
        />
        <Section id="roadmap">
		
		  <SectionHeaderHighliteLeft highlight="Vaulty" title="Roadmap" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "🚀 Phase 1 – Launch", items: ["Launch on TaxSplit", "Grow our community to 500 holders", "Dexscreener application", "Achieve $100,000 market cap", ] },
              { t: "📈 Phase 2 – Growth", items: ["CG/CMC applications", "Grow our community to 1000 holders", "Get our first CEX listing", "Achieve $500,000 market cap"] },
              { t: "🛠️ Phase 3 – Utility", items: ["Utility projects release", "Launch Re-Vault", "Vaulty fox release", "Achieve $1M market cap"] },
            ].map((col) => (
              <motion.div
                key={col.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <h3 className="mb-3 text-xl font-semibold">{col.t}</h3>
                <ul className="list-inside list-disc space-y-2 text-white/80">
                  {col.items.map((i) => <li key={i} className="flex items-start gap-3"> <ChevronRight className="h-5 w-5 text-cyan-300 shrink-0" /> <span>{i}</span></li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>
      </div>

      {/* COMMUNITY */}
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img src="/token.png" alt="token icon" className="mx-auto w-40 rounded-full ring-2 ring-cyan-400/40" />
          <div className="min-w-0">
            <SectionHeader title="Join the" highlight="Vault Keepers" />

            <p className="mt-3 text-white/80">
              Follow updates, giveaways and dev reports. New art, stickers and utility rollouts will be announced in Telegram and X.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={TOKEN.links.twitter}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/15 hover:bg-white/15 hover:-translate-y-0.5 transition"
              >
                <Twitter className="h-4 w-4" /> Follow X
              </a>
              <a
                href={TOKEN.links.telegram}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-black shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 transition"
              >
                <Send className="h-4 w-4" /> Join Telegram
              </a>
			  <a
        href={TOKEN.links.taxsplit}
        className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3.5 text-base md:text-lg font-semibold text-black shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5 transition"
      >
        View on TaxSplit
      </a>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="mx-auto w-full max-w-7xl px-4 pb-14 pt-8 text-white/70">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex min-w-0 items-center gap-3">
            <img src="/Wordmark.png" alt="VAULTY" className="h-6" />
            <span className="truncate">© {new Date().getFullYear()} VAULTY. Built on Solana. Powered by TaxSplit.</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={TOKEN.links.dexscreener} className="hover:text-white">Dexscreener</a>
            <span className="text-white/30">•</span>
            <a href={TOKEN.links.taxsplit} className="hover:text-white">TaxSplit</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
