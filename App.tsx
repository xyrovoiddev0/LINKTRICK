import { useMemo, useState } from 'react';
import { ArrowUpRight, Bot, ChevronDown, Instagram, MoveUpRight, Send, Sparkles, Zap } from 'lucide-react';

type Feature = {
  number: string;
  title: string;
  description: string;
  icon: typeof Sparkles;
};

const features: Feature[] = [
  {
    number: '01',
    title: 'Inovação contínua',
    description: 'Aberto a novas adaptações e tecnologias que ampliam o que é possível criar.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Conexão total',
    description: 'Conectando pessoas, ideias e o mundo com a inteligência artificial.',
    icon: Bot,
  },
  {
    number: '03',
    title: 'Performance extrema',
    description: 'Velocidade, segurança e tecnologia de ponta em cada interação.',
    icon: Zap,
  },
];

function App() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const particles = useMemo(() => Array.from({ length: 34 }, (_, index) => index), []);

  const handleCardMove = (event: React.MouseEvent<HTMLElement>, index: number) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const rotateX = ((event.clientY - rect.top) / rect.height - 0.5) * -10;
    const rotateY = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    event.currentTarget.style.setProperty('--rotate-x', `${rotateX}deg`);
    event.currentTarget.style.setProperty('--rotate-y', `${rotateY}deg`);
    setActiveCard(index);
  };

  const resetCard = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--rotate-x', '0deg');
    event.currentTarget.style.setProperty('--rotate-y', '0deg');
    setActiveCard(null);
  };

  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />
      <div className="grid-layer" aria-hidden="true" />
      <div className="aurora aurora-one" aria-hidden="true" />
      <div className="aurora aurora-two" aria-hidden="true" />
      <div className="scanner" aria-hidden="true"><span /></div>
      <div className="particle-field" aria-hidden="true">
        {particles.map((particle) => <i key={particle} className={`particle particle-${particle + 1}`} />)}
      </div>

      <header className="topbar">
        <a className="brand" href="#top" aria-label="MYKA início">
          <div className="logo-symbol brand-symbol"><span className="wing wing-left" /><span className="wing wing-right" /></div>
          <span className="brand-word">MYKA<span className="brand-dot">.</span></span>
          <span className="brand-status"><span /> ONLINE</span>
        </a>
        <div className="topbar-right">
          <span className="system-label">SYSTEM / 2026</span>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-orbit orbit-large" aria-hidden="true"><span /><span /><span /></div>
        <div className="hero-orbit orbit-small" aria-hidden="true"><span /><span /></div>
        <div className="hero-content">
          <div className="eyebrow reveal"><span className="eyebrow-line" /> INTELIGÊNCIA ARTIFICIAL <span className="eyebrow-line" /></div>
          <div className="logo-lockup reveal reveal-delay-1">
            <div className="logo-symbol"><span className="wing wing-left" /><span className="wing wing-right" /></div>
            <span>MYKA</span>
          </div>
          <h1 className="hero-title reveal reveal-delay-2">Tecnologia que <em>transforma.</em><span className="cursor" /></h1>
          <p className="hero-subtitle reveal reveal-delay-3">Uma plataforma de IA criada para gerar código, construir interfaces e transformar ideias em realidade.</p>
          <a className="primary-button reveal reveal-delay-4" href="https://myka.com.br/" target="_blank" rel="noreferrer">
            <span>Acessar Myka</span><MoveUpRight size={18} />
          </a>
          <div className="scroll-cue reveal reveal-delay-4"><span>DESLIZE PARA EXPLORAR</span><ChevronDown size={16} /></div>
        </div>
        <div className="hero-coordinate coordinate-left">LAT 23° 32&apos; 51&quot; S<br />LONG 46° 38&apos; 10&quot; W</div>
        <div className="hero-coordinate coordinate-right">MK / 001<br />READY TO CREATE</div>
      </section>

      <section className="manifesto-section content-width">
        <div className="section-heading">
          <span className="section-index">// 01 — NOSSA ESSÊNCIA</span>
          <h2>Ideias não têm<br /><span>limites.</span></h2>
        </div>
        <div className="manifesto-copy"><p>O próximo grande salto começa com uma pergunta. A MYKA existe para transformar essa pergunta em algo real — com velocidade, precisão e uma visão de futuro.</p><div className="copy-rule" /><span>CRIAR É O NOSSO ESTADO NATURAL.</span></div>
      </section>

      <section className="features-section content-width">
        <div className="section-topline"><span className="section-index">// 02 — O QUE NOS MOVE</span><span className="section-count">03 / 03</span></div>
        <div className="features-grid">
          {features.map(({ number, title, description, icon: Icon }, index) => (
            <article key={number} className={`feature-card ${activeCard === index ? 'is-active' : ''}`} onMouseMove={(event) => handleCardMove(event, index)} onMouseLeave={resetCard}>
              <div className="card-glow" />
              <div className="card-top"><span className="card-number">{number}</span><Icon size={22} strokeWidth={1.5} /></div>
              <div className="card-content"><h3>{title}</h3><p>{description}</p></div>
              <div className="card-footer"><span>EXPLORE / 0{index + 1}</span><ArrowUpRight size={18} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="launch-section content-width">
        <div className="launch-panel">
          <div className="launch-beam" />
          <div className="section-index">// 03 — O PRÓXIMO CAPÍTULO</div>
          <div className="launch-heading"><span className="launch-symbol">↗</span><h2>A nova era da<br /><em>criação começa agora.</em></h2></div>
          <p>Prepare-se para transformar suas ideias em código.</p>
          <a className="text-link" href="https://myka.com.br/" target="_blank" rel="noreferrer">ENTRAR NA NOVA ERA <ArrowUpRight size={16} /></a>
          <span className="launch-code">MYKA_IA // CREATE_BETTER</span>
        </div>
      </section>

      <footer className="footer content-width">
        <div className="footer-main"><a className="footer-brand" href="#top"><span className="brand-mark">M</span><span>MYKA<span className="brand-dot">.</span></span></a><span className="footer-note">INOVAÇÃO SEM LIMITES.</span></div>
        <div className="footer-bottom"><span>MYKA © 2026 — Todos os sistemas ativos.</span><nav aria-label="Redes sociais"><a href="https://instagram.com/myk.aia" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a><a href="https://tiktok.com/@myka.v2" target="_blank" rel="noreferrer"><span className="tiktok-icon">♪</span> TikTok</a><a href="https://t.me/+rf5h8A_GJuVmMDVh" target="_blank" rel="noreferrer"><Send size={15} /> Telegram</a></nav></div>
      </footer>
    </main>
  );
}

export default App;
