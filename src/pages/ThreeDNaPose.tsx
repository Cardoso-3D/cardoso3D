import React, { useEffect } from 'react'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&display=swap');

  #tdp {
    --bg: #0a0807;
    --bg2: #14100c;
    --ink: #f4ede2;
    --muted: #c4b5a3;
    --muted2: #7c6e5d;
    --copper: #e8662a;
    --copperHi: #f4965e;
    --clay: #b8412a;
    --bone: #d4a87c;
    --green: #4ade80;
    --red: #f87171;
    --border: rgba(244,237,226,0.09);
    --d: 'Anton', sans-serif;
    --s: 'Anton', sans-serif;
    --n: 'Inter', system-ui, sans-serif;
    
    font-family: var(--n);
    -webkit-font-smoothing: antialiased;
    background: var(--bg);
    color: var(--ink);
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
  #tdp * { box-sizing: border-box; }
  #tdp a { color: inherit; text-decoration: none; }
  #tdp::before {
    content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 0;
    background: radial-gradient(900px 600px at 80% -10%, rgba(232,102,42,0.12), transparent 60%),
                radial-gradient(700px 500px at -10% 30%, rgba(184,65,42,0.15), transparent 65%),
                radial-gradient(600px 400px at 50% 110%, rgba(244,150,94,0.08), transparent 70%);
  }
  #tdp main { position: relative; z-index: 1; }
  #tdp .w { max-width: 1080px; margin: 0 auto; padding: 0 56px; position: relative; }

  #tdp .hd, #tdp .hs { font-family: var(--n); font-weight: 800; font-size: 64px; line-height: 1; letter-spacing: -0.02em; text-transform: uppercase; margin: 0 0 16px; color: #fff; }
  #tdp .hd .it, #tdp .hs .it { background: linear-gradient(90deg, var(--copper) 0%, var(--clay) 50%, var(--copperHi) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block; font-style: normal; font-family: inherit; font-weight: inherit; font-size: inherit; }
  #tdp .ey { font-family: var(--n); font-size: 11px; letter-spacing: 0.28em; color: var(--copperHi); text-transform: uppercase; margin: 0 0 18px; font-weight: 600; }
  #tdp .lede { font-family: var(--n); font-size: 18px; color: var(--muted); line-height: 1.45; margin: 0; font-style: normal; }
  #tdp .text-center { text-align: center; }
  
  #tdp .btn { display: inline-flex; align-items: center; gap: 10px; padding: 18px 30px; border-radius: 99px; font-family: var(--n); font-weight: 700; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; border: none; background: linear-gradient(135deg, var(--copper), var(--clay)); color: #fff; box-shadow: 0 18px 40px -10px rgba(232,102,42,0.45), inset 0 0 0 1px rgba(255,255,255,0.1); transition: transform .15s ease, box-shadow .15s ease; }
  #tdp .btn:hover { transform: translateY(-2px); box-shadow: 0 22px 50px -10px rgba(232,102,42,0.6); }
  #tdp .btn .arrow { transition: transform .15s ease; display: inline-block; }
  #tdp .btn:hover .arrow { transform: translateX(4px); }

  /* Nav */
  #tdp .nav { display: flex; justify-content: space-between; align-items: center; padding: 24px 56px; position: absolute; top:0; left:0; width: 100%; z-index: 10; }
  #tdp .nav-links { display: none; }
  @media(min-width:901px){
    #tdp .nav-links { display: flex; align-items: center; gap: 4px; padding: 6px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 99px; }
    #tdp .nav-links a { padding: 10px 20px; font-family: var(--n); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); text-transform: uppercase; text-decoration: none; transition: color .2s; border-radius: 99px; }
    #tdp .nav-links a:not(.highlight):hover { color: #fff; }
    #tdp .nav-links a.highlight { background: linear-gradient(135deg, var(--copper), var(--clay)); color: #fff; }
  }
  #tdp .logo-img { height: 42px; width: auto; display: block; }
  #tdp .foot-logo { height: 40px; margin: 0 auto; display: block; opacity: 0.8; transition: opacity 0.2s; }
  #tdp .foot-logo:hover { opacity: 1; }
  #tdp .nav-login { display: inline-flex; align-items: center; padding: 12px 28px; border-radius: 99px; font-family: var(--n); font-size: 12px; font-weight: 700; letter-spacing: 0.1em; color: #fff; text-transform: uppercase; text-decoration: none; border: 1px solid rgba(255,255,255,0.1); transition: background .15s ease; }
  #tdp .nav-login:hover { background: rgba(255,255,255,0.05); }

  /* Hero */
  #tdp .hero { padding: 140px 0 96px; text-align: center; position: relative; overflow: hidden; background: linear-gradient(to bottom, rgba(10,8,7,0) 20%, var(--bg) 90%, var(--bg) 100%), url('https://3dnapose.com/wp-content/uploads/2026/05/bg_3dnapose.webp') no-repeat center top; background-size: cover; background-color: var(--bg); }
  #tdp .hero p.sub { font-family: var(--n); font-size: 17px; color: var(--muted); max-width: 600px; margin: 24px auto 32px; line-height: 1.5; }
  #tdp .hero .micro { font-family: var(--n); font-size: 11px; color: var(--muted2); letter-spacing: 0.22em; text-transform: uppercase; margin-top: 18px; }
  #tdp .hero .avatars { display: flex; align-items: center; justify-content: center; gap: 16px; margin: 32px auto 0; font-family: var(--n); font-size: 13px; color: var(--muted); text-align: left; }
  #tdp .hero .pills { display: flex; justify-content: center; gap: 16px; margin: 24px auto 0; flex-wrap: wrap; }
  #tdp .hero .pill { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--muted); background: rgba(255,255,255,0.03); border: 1px solid var(--border); padding: 8px 16px; border-radius: 99px; }
  #tdp .hero .pill svg { width: 14px; height: 14px; color: var(--green); }
  
  #tdp .hero-fig { margin: 64px auto 0; width: 100%; max-width: 960px; aspect-ratio: 16/9; border: 1px solid var(--border); border-radius: 16px; background: radial-gradient(circle at 50% 50%, #2a1005, #080302); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; box-shadow: 0 40px 100px -20px rgba(232,102,42,0.15); }
  #tdp .hero-fig iframe { width: 100%; height: 100%; border: none; position: absolute; inset: 0; }
  #tdp .hero-fig svg.fig { height: 120%; opacity: 0.8; color: var(--copperHi); }
  #tdp .hero-fig .tag { position: absolute; left: 24px; top: 24px; font-family: var(--n); font-size: 11px; color: var(--bone); letter-spacing: 0.22em; opacity: 0.8; z-index: 2; font-weight: 600; }
  #tdp .hero-fig .tag.r { left: auto; right: 24px; color: var(--muted2); }

  /* Marquee */
  #tdp .marquee { padding: 32px 0; border-top: 1px solid var(--border); border-bottom: 1px solid transparent; overflow: hidden; background: #000; }
  #tdp .marquee .track { display: flex; width: max-content; animation: tdpMq 25s linear infinite; }
  #tdp .marquee:hover .track { animation-play-state: paused; }
  #tdp .marquee .row { display: flex; align-items: center; gap: 48px; font-family: var(--n); font-weight: 500; font-size: 20px; letter-spacing: 0; text-transform: none; white-space: nowrap; color: #fff; padding-right: 48px; }
  #tdp .marquee .row .star { width: 18px; height: 18px; color: var(--copperHi); }
  @keyframes tdpMq { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

  /* Problem */
  #tdp .problem { padding: 96px 0; }
  #tdp .problem-box { max-width: 800px; margin: 0 auto; }
  #tdp .problem-list { display: flex; flex-direction: column; gap: 24px; margin-top: 48px; }
  #tdp .problem-item { display: flex; align-items: flex-start; gap: 24px; padding: 24px; border: 1px solid var(--border); border-radius: 12px; background: rgba(255,255,255,0.015); transition: background 0.3s; }
  #tdp .problem-item:hover { background: rgba(255,255,255,0.03); }
  #tdp .problem-num { font-family: var(--d); font-size: 32px; color: var(--clay); opacity: 0.7; line-height: 1; margin-top: 2px; }
  #tdp .problem-txt { font-size: 16px; color: var(--muted); line-height: 1.5; font-weight: 500; }
  #tdp .problem-txt b { color: var(--ink); font-weight: 700; }

  /* Method */
  #tdp .method { padding: 96px 0; background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  #tdp .pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 56px; }
  #tdp .pillar { display: flex; flex-direction: column; gap: 16px; }
  #tdp .pillar-icon { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, var(--bg2), var(--bg)); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--copperHi); box-shadow: inset 0 0 20px rgba(232,102,42,0.1); }
  #tdp .pillar-icon svg { width: 28px; height: 28px; }
  #tdp .pillar-name { font-family: var(--d); font-size: 24px; letter-spacing: 0.02em; color: #fff; text-transform: uppercase; line-height: 1.2; }
  #tdp .pillar-desc { font-size: 15px; color: var(--muted); line-height: 1.5; }

  /* Modules */
  #tdp .modules { padding: 96px 0; }
  #tdp .mod-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 48px; gap: 32px; }
  #tdp .mod-head .lede { text-align: right; max-width: 400px; }
  #tdp .mod-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  #tdp .mod-card { position: relative; aspect-ratio: 16/9; border-radius: 16px; border: 1px solid var(--border); overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; padding: 24px; text-decoration: none; transition: transform 0.3s; cursor: default; }
  #tdp .mod-card:hover { transform: scale(1.02); }
  #tdp .mod-card::before { content: ""; position: absolute; inset: 0; background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 2px, transparent 2px, transparent 8px); z-index: 1; }
  #tdp .mod-card::after { content: ""; position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); z-index: 2; }
  #tdp .mod-card:hover::after { background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); }
  #tdp .mod-content { position: relative; z-index: 3; display: flex; flex-direction: column; justify-content: space-between; height: 100%; }
  #tdp .mod-top { display: flex; justify-content: space-between; align-items: flex-start; }
  #tdp .mod-rect { width: 32px; height: auto; opacity: 0.8; }
  #tdp .mod-label { font-family: var(--n); font-size: 11px; font-weight: 700; background: rgba(0,0,0,0.4); padding: 4px 8px; border-radius: 4px; letter-spacing: 0.1em; color: rgba(255,255,255,0.9); }
  #tdp .mod-logo { opacity: 0.5; }
  #tdp .mod-logo svg { width: 24px; height: 24px; color: #fff; }
  #tdp .mod-title { font-family: var(--d); font-size: 36px; color: #fff; line-height: 1.1; letter-spacing: 0.02em; text-transform: uppercase; }

  /* About */
  #tdp .about { padding: 96px 0; background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  #tdp .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
  #tdp .about-fig { position: relative; aspect-ratio: 4/5; border-radius: 12px; border: 1px solid var(--border); overflow: hidden; background: #14100c; }
  #tdp .about-fig img { width: 100%; height: 100%; object-fit: cover; opacity: 1; }
  #tdp .about-badge { position: absolute; bottom: 24px; left: 24px; font-family: var(--n); font-size: 10px; font-weight: 700; letter-spacing: 0.22em; color: var(--bone); background: rgba(0,0,0,0.5); padding: 6px 12px; border-radius: 4px; border: 1px solid rgba(255,255,255,0.1); }
  #tdp .about-stats { margin-top: 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  #tdp .stat-num { font-family: var(--d); font-size: 42px; color: var(--copperHi); line-height: 1; }
  #tdp .stat-txt { font-size: 13px; color: var(--muted); font-weight: 500; margin-top: 4px; }
  #tdp .about-bio { display: flex; flex-direction: column; gap: 24px; }
  #tdp .about-bio p { font-family: var(--n); font-size: 16px; color: var(--muted); line-height: 1.6; margin: 0; }
  #tdp .about-bio p.lead { font-family: var(--n); font-size: 20px; font-style: normal; color: var(--ink); font-weight: 600; }
  #tdp .about-collab { font-family: var(--n); font-size: 12px; font-weight: 600; color: var(--bone); letter-spacing: 0.1em; text-transform: uppercase; padding-top: 24px; border-top: 1px solid var(--border); line-height: 1.5; }
  #tdp .port-wrap { margin-top: 96px; overflow: hidden; position: relative; width: 100%; display: flex; }
  #tdp .port-track { display: flex; gap: 16px; width: max-content; animation: tdpPortScroll 45s linear infinite; }
  #tdp .port-wrap:hover .port-track { animation-play-state: paused; }
  #tdp .port-item { width: 340px; aspect-ratio: 4/5; border-radius: 12px; overflow: hidden; cursor: zoom-in; position: relative; border: 1px solid var(--border); }
  #tdp .port-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; display: block; }
  #tdp .port-item:hover img { transform: scale(1.05); }
  @keyframes tdpPortScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
  
  /* Lightbox */
  #tdp .lightbox { position: fixed; inset: 0; background: rgba(0,0,0,0.95); z-index: 2000; display: flex; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
  #tdp .lightbox.active { opacity: 1; pointer-events: auto; }
  #tdp .lightbox img { max-width: 90vw; max-height: 90vh; border-radius: 8px; object-fit: contain; box-shadow: 0 40px 100px rgba(0,0,0,0.5); transform: scale(0.95); transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
  #tdp .lightbox.active img { transform: scale(1); }
  #tdp .lb-close { position: absolute; top: 32px; right: 32px; background: rgba(255,255,255,0.1); width: 48px; height: 48px; border-radius: 50%; color: #fff; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
  #tdp .lb-close:hover { background: rgba(255,255,255,0.2); }
  #tdp .lb-close svg { width: 24px; height: 24px; }
  
  /* Compare */
  #tdp .compare { padding: 96px 0; }
  #tdp .comp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid var(--border); border-radius: 16px; overflow: hidden; }
  #tdp .comp-col { padding: 48px; display: flex; flex-direction: column; gap: 24px; }
  #tdp .comp-col.left { background: rgba(255,255,255,0.02); border-right: 1px solid var(--border); }
  #tdp .comp-col.right { background: radial-gradient(circle at 100% 100%, rgba(232,102,42,0.1), transparent 60%); }
  #tdp .comp-label { display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; border-radius: 4px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; width: fit-content; }
  #tdp .comp-label.l-red { background: rgba(248,113,113,0.1); color: var(--red); }
  #tdp .comp-label.l-green { background: rgba(74,222,128,0.1); color: var(--green); }
  #tdp .comp-txt { font-family: var(--n); font-size: 16px; color: var(--muted); line-height: 1.5; font-weight: 500; }
  #tdp .comp-quote { font-family: var(--n); font-size: 18px; font-style: normal; font-weight: 600; padding-left: 16px; border-left: 2px solid var(--border); color: var(--muted2); }
  #tdp .comp-col.right .comp-quote { color: var(--copperHi); border-color: var(--copperHi); }

  /* Offer */
  #tdp .offer { padding: 96px 0; background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  #tdp .offer-card { position: relative; max-width: 960px; margin: 0 auto; border: 1px solid var(--border); border-radius: 16px; background: linear-gradient(180deg, var(--bg), var(--bg2)); box-shadow: 0 40px 100px -20px rgba(0,0,0,0.5); overflow: hidden; }
  #tdp .offer-ribbon { position: absolute; top: 0; right: 0; background: linear-gradient(135deg, var(--copper), var(--clay)); color: #fff; padding: 12px 32px; font-size: 11px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; border-bottom-left-radius: 16px; box-shadow: -4px 4px 20px rgba(0,0,0,0.2); }
  #tdp .offer-head { padding: 48px; text-align: center; border-bottom: 1px solid var(--border); }
  #tdp .offer-head .logo-text { font-family: var(--d); font-size: 32px; letter-spacing: 0.05em; color: var(--copperHi); margin-bottom: 16px; }
  #tdp .offer-head h3 { font-family: var(--d); font-size: 48px; letter-spacing: 0.02em; text-transform: uppercase; margin: 0 0 12px; font-weight: 400; color: #fff; }
  #tdp .offer-head p { font-size: 16px; color: var(--bone); font-weight: 600; margin: 0; letter-spacing: 0.05em; }
  #tdp .offer-body { display: grid; grid-template-columns: 1fr 1fr; }
  #tdp .offer-price { padding: 48px; border-right: 1px solid var(--border); text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; background: radial-gradient(circle at 0% 100%, rgba(232,102,42,0.05), transparent 70%); }
  #tdp .price-inv { font-size: 11px; font-weight: 700; color: var(--copper); letter-spacing: 0.28em; text-transform: uppercase; margin-bottom: 16px; }
  #tdp .price-12x { font-family: var(--n); font-size: 16px; font-weight: 600; font-style: normal; color: var(--muted); margin-bottom: 8px; }
  #tdp .price-val { font-family: var(--d); font-size: 104px; line-height: 1; letter-spacing: 0.005em; color: var(--ink); margin-bottom: 8px; }
  #tdp .price-sj { font-family: var(--n); font-size: 14px; font-weight: 500; font-style: normal; color: var(--muted2); margin-bottom: 24px; }
  #tdp .price-div { width: 100%; height: 1px; background: var(--border); margin-bottom: 24px; }
  #tdp .price-full { font-size: 15px; color: var(--muted); margin-bottom: 32px; font-weight: 500; }
  #tdp .offer-feats { padding: 48px; }
  #tdp .feats-title { font-size: 12px; font-weight: 700; color: var(--copper); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 24px; }
  #tdp .feats-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
  #tdp .feats-list li { display: flex; gap: 16px; align-items: flex-start; font-size: 15px; color: var(--ink); line-height: 1.4; border-bottom: 1px solid rgba(255,255,255,0.03); padding-bottom: 16px; }
  #tdp .feats-list li:last-child { border-bottom: none; padding-bottom: 0; }
  #tdp .feats-list li .num { font-family: var(--d); font-size: 14px; color: var(--copperHi); }
  #tdp .offer-foot { padding: 24px; text-align: center; border-top: 1px solid var(--border); background: rgba(0,0,0,0.2); font-size: 12px; font-weight: 500; color: var(--muted2); }

  /* FAQ */
  #tdp .faq { padding: 96px 0; }
  #tdp .faq-container { max-width: 780px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px; marginTop: 48px; }
  #tdp .faq-item { border: 1px solid var(--border); border-radius: 12px; background: rgba(255,255,255,0.015); overflow: hidden; transition: background 0.3s; }
  #tdp .faq-item.open { background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1); }
  #tdp .faq-q { padding: 24px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none; }
  #tdp .faq-title { font-size: 16px; font-weight: 600; color: var(--ink); }
  #tdp .faq-icon { width: 24px; height: 24px; border-radius: 50%; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--copperHi); transition: transform 0.3s, background 0.3s; flex-shrink: 0; font-size: 20px; line-height: 1; }
  #tdp .faq-icon svg { width: 14px; height: 14px; }
  #tdp .faq-item.open .faq-icon { transform: rotate(45deg); background: rgba(232,102,42,0.1); border-color: var(--copperHi); }
  #tdp .faq-a { padding: 0 24px; max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.4s ease; font-size: 15px; color: var(--muted); line-height: 1.6; }
  #tdp .faq-item.open .faq-a { max-height: 300px; padding: 0 24px 24px; }

  /* Final CTA */
  #tdp .final { padding: 120px 0; text-align: center; background: var(--bg2); border-top: 1px solid var(--border); }
  #tdp .final .lede { margin: 24px auto 48px; max-width: 500px; }

  /* Footer */
  #tdp footer { padding: 64px 56px 48px; text-align: center; border-top: 1px solid var(--border); }
  #tdp .foot-nav { display: flex; justify-content: center; gap: 32px; margin: 32px 0; }
  #tdp .foot-nav a { font-size: 13px; font-weight: 500; color: var(--muted); text-transform: uppercase; letter-spacing: 0.1em; transition: color 0.2s; }
  #tdp .foot-nav a:hover { color: #fff; }
  #tdp .foot-social { display: flex; justify-content: center; gap: 24px; margin-bottom: 48px; }
  #tdp .foot-social a { width: 44px; height: 44px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; color: var(--muted); transition: all 0.2s; background: rgba(255,255,255,0.02); }
  #tdp .foot-social a:hover { color: var(--ink); border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); }
  #tdp .foot-social svg { width: 18px; height: 18px; }
  #tdp .foot-copy { font-size: 13px; color: var(--muted2); font-weight: 500; }
  #tdp .foot-cred { font-family: var(--s); font-size: 14px; font-style: italic; color: var(--muted2); margin-top: 12px; }
  #tdp .back-top { display: inline-block; margin-top: 32px; font-size: 11px; font-weight: 700; letter-spacing: 0.2em; color: var(--copperHi); text-transform: uppercase; cursor: pointer; }
  
  /* Scroll Reveal Logic */
  #tdp .rv { opacity: 0; transform: translateY(22px); transition: opacity 0.55s ease, transform 0.55s ease; }
  #tdp .rv.on { opacity: 1; transform: translateY(0); }
  #tdp .d1 { transition-delay: 0.08s; }
  #tdp .d2 { transition-delay: 0.16s; }
  #tdp .d3 { transition-delay: 0.24s; }

  /* Floating CTA */
  .tdp-cta { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(100px); z-index: 100; background: linear-gradient(135deg, var(--copper), var(--clay)); color: #fff; padding: 16px 28px; border-radius: 99px; font-family: 'Inter', system-ui, sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; box-shadow: 0 12px 40px -8px rgba(232,102,42,0.6); display: flex; align-items: center; gap: 10px; transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s; opacity: 0; pointer-events: none; white-space: nowrap; text-decoration: none; }
  .tdp-cta.on { transform: translateX(-50%) translateY(0); opacity: 1; pointer-events: auto; }
  .tdp-cta .arrow { transition: transform 0.15s; display: inline-block; }
  .tdp-cta:hover .arrow { transform: translateX(4px); }

  /* Mobile */
  @media(max-width: 900px) {
    #tdp .w { padding: 0 24px; }
    #tdp .nav { padding: 20px 24px; }
    #tdp .hero { padding: 120px 0 64px; }
    #tdp .hd, #tdp .hs { font-size: 42px; }
    #tdp .hero p.sub { font-size: 16px; margin: 16px auto 24px; }
    #tdp .btn { width: 100%; justify-content: center; }
    #tdp .hero-fig { aspect-ratio: 4/5; }
    #tdp .marquee .row { font-size: 28px; gap: 24px; }
    #tdp .problem, #tdp .method, #tdp .modules, #tdp .about, #tdp .compare, #tdp .offer, #tdp .faq, #tdp .final { padding: 64px 0; }
    #tdp .pillars, #tdp .mod-grid, #tdp .about-grid, #tdp .comp-grid, #tdp .offer-body { grid-template-columns: 1fr; }
    #tdp .about-grid { gap: 32px; }
    #tdp .mod-head, #tdp .problem-item { flex-direction: column; }
    #tdp .mod-head .lede { text-align: left; }
    #tdp .comp-col.left { border-right: none; border-bottom: 1px solid var(--border); }
    #tdp .comp-col { padding: 32px 24px; }
    #tdp .offer-card { border-radius: 12px; }
    #tdp .offer-ribbon { font-size: 9px; padding: 8px 16px; }
    #tdp .offer-head { padding: 32px 24px; }
    #tdp .offer-head h3 { font-size: 32px; }
    #tdp .offer-price { padding: 32px 24px; border-right: none; border-bottom: 1px solid var(--border); }
    #tdp .price-val { font-size: 72px; }
    #tdp .offer-feats { padding: 32px 24px; }
    #tdp .faq-q { padding: 20px; }
    #tdp .faq-item.open .faq-a { max-height: 500px; padding: 0 20px 20px; }
    #tdp footer { padding: 48px 24px; }
    #tdp .foot-nav { flex-direction: column; gap: 16px; }
    .tdp-cta { font-size: 11px; padding: 14px 22px; width: calc(100% - 48px); justify-content: center; left: 24px; transform: translateX(0) translateY(100px); }
    .tdp-cta.on { transform: translateX(0) translateY(0); }
    .tdp-cta:hover { transform: translateX(0) translateY(-2px); }
  }
  @media(min-width: 901px) {
    .tdp-cta { display: none !important; }
  }
`;

const mods = [
  { n: '01', t: 'Apresentação e\nWorkflow', img: 'https://3dnapose.com/wp-content/uploads/2025/05/01-1024x819.png' },
  { n: '02', t: 'Poses e\nComposição', img: 'https://3dnapose.com/wp-content/uploads/2025/05/02-1024x819.png' },
  { n: '03', t: 'Blocagem\nAtômica', img: 'https://3dnapose.com/wp-content/uploads/2025/05/03-1024x819.png' },
  { n: '04', t: 'Detalhamento\nAnatômico', img: 'https://3dnapose.com/wp-content/uploads/2025/05/04-1024x819.png' },
  { n: '05', t: 'Tecidos e\nAcessórios', img: 'https://3dnapose.com/wp-content/uploads/2025/05/05-1024x819.png' },
  { n: '06', t: 'Personagem\nCompleto', img: 'https://3dnapose.com/wp-content/uploads/2025/05/06-1024x819.png' }
];

const portImgs = [
  'https://3dnapose.com/wp-content/uploads/2025/11/1.jpg',
  'https://3dnapose.com/wp-content/uploads/2025/11/2.jpg',
  'https://3dnapose.com/wp-content/uploads/2025/11/3.jpg',
  'https://3dnapose.com/wp-content/uploads/2025/11/4.jpg',
  'https://3dnapose.com/wp-content/uploads/2025/11/5.jpg',
  'https://3dnapose.com/wp-content/uploads/2025/11/6.jpg',
  'https://3dnapose.com/wp-content/uploads/2025/11/7.jpg',
  'https://3dnapose.com/wp-content/uploads/2025/11/8.jpg'
];

export default function ThreeDnaPose() {
  const [lbImg, setLbImg] = React.useState<string | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll('#tdp .rv')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('on');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    
    els.forEach(el => obs.observe(el));

    const faqQs = document.querySelectorAll('.faq-q');
    const handleFaqClick = (e: Event) => {
      const parent = (e.currentTarget as HTMLElement).parentElement;
      if (!parent) return;
      const isOpen = parent.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) parent.classList.add('open');
    };
    faqQs.forEach(q => q.addEventListener('click', handleFaqClick));

    const cta = document.getElementById('tdp-cta');
    let shown = false;
    
    const onScroll = () => {
      const docHeight = document.body.scrollHeight;
      const pct = window.scrollY / (docHeight - window.innerHeight);
      
      if (!shown && pct > 0.4) {
        cta?.classList.add('on');
        shown = true;
      }
      
      const oferta = document.getElementById('tdp-oferta');
      if (oferta) {
        const r = oferta.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          cta?.classList.remove('on');
        } else if (shown) {
          cta?.classList.add('on');
        }
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      obs.disconnect();
      faqQs.forEach(q => q.removeEventListener('click', handleFaqClick));
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <style>{STYLES}</style>
      <a href="#tdp-oferta" className="tdp-cta" id="tdp-cta">Quero modelar na pose <span className="arrow">→</span></a>
      <div id="tdp">
        <main>
          
          <header className="nav rv">
            <a href="#tdp-home" aria-label="3D na Pose" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
              <img src="https://3dnapose.com/wp-content/uploads/2025/04/logo-3DNaPose.png" alt="3D NA POSE" className="logo-img" />
            </a>
            
            <nav className="nav-links">
              <a href="#tdp-method">Método</a>
              <a href="#tdp-modules">Módulos</a>
              <a href="#tdp-about">Sobre</a>
              <a href="#tdp-oferta" className="highlight">Oferta</a>
            </nav>

            <a href="https://pay.hotmart.com/P96903534R?checkoutMode=10" target="_blank" rel="noreferrer" className="nav-login">Entrar</a>
          </header>

          <section className="hero" id="tdp-home">
            <div className="w">
              <h1 className="hd rv">Aprenda a criar colecionáveis<br /><span className="it">com nível de estúdio</span></h1>
              <p className="sub rv d1">Pare de perder horas refazendo suas esculturas no final. Modele direto na pose e entregue peças com impacto profissional desde o início.</p>
              
              <div className="hero-fig rv d2">
                <iframe 
                  src="https://www.youtube.com/embed/18t1zAp_JXc?autoplay=0&rel=0" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              <div className="rv d3" style={{marginTop: '64px'}}>
                <a href="#tdp-oferta" className="btn">Quero modelar como profissional <span className="arrow">→</span></a>
                
                <div className="avatars">
                  <img src="https://3dnapose.com/wp-content/uploads/2025/11/Group-1000009941.png" alt="Alunos" style={{height:'36px'}} />
                  <span>Junte-se a dezenas de alunos transformando seu 3D</span>
                </div>

                <div className="pills">
                  {['Acesso Imediato', 'Plano Vitalício', 'Compra Segura', '7 Dias de Garantia'].map((p,i) => (
                    <div key={i} className="pill">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="marquee">
            <div className="track">
              {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
                <div key={i} className="row">
                  <span>DA POSE AO PROFISSIONAL.</span>
                  <svg className="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 6l-10 12M22 12H2M6 6l12 12"/></svg>
                </div>
              ))}
            </div>
          </div>

          <section className="problem">
            <div className="w">
              <div className="problem-box">
                <div className="ey rv">I. O Problema</div>
                <h2 className="hs rv d1">Você começa animado<br /><span className="it">e termina refazendo tudo</span></h2>
                
                <div className="problem-list">
                  {[
                    <>Modela com cuidado em pose neutra, mas a hora de posar <b>destrói a anatomia</b>.</>,
                    <>A silhueta perde força. Volumes ficam estranhos. Você <b>refaz tudo do zero</b>.</>,
                    <>Horas viram retrabalho. A peça fica "boa", <b>nunca atinge nível profissional</b>.</>,
                    <>Você sabe modelar — mas ainda <b>não sabe construir impacto</b>.</>
                  ].map((txt, i) => (
                    <div key={i} className={`problem-item rv d${(i%3)+1}`}>
                      <div className="problem-num">0{i+1}</div>
                      <div className="problem-txt">{txt}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="method" id="tdp-method">
            <div className="w">
              <div className="ey rv">II. O Método</div>
              <h2 className="hs rv d1">Modele direto na pose,<br /><span className="it">com intenção desde o gesto</span></h2>
              
              <div className="pillars">
                {[
                  { n: 'Gesto e Pose', c: 'Linha de ação, S-curve e contraposto desde o primeiro volume.', i: <path d="M12 4s-4 4-2 8 4 4 2 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/> },
                  { n: 'Anatomia Aplicada', c: 'Landmarks ósseos guiam fibras, compressão e estiramento na pose final.', i: <><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M12 2v5M12 17v5M5 12H2M22 12h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
                  { n: 'Composição e Base', c: 'Direção, camadas e ponto focal — sair do disco flat e contar história.', i: <><rect x="3" y="14" width="18" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M7 14V6l10 4v4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></> }
                ].map((p, i) => (
                  <div key={i} className={`pillar rv d${i+1}`}>
                    <div className="pillar-icon"><svg viewBox="0 0 24 24">{p.i}</svg></div>
                    <div className="pillar-name"><span style={{fontSize:'18px', color:'var(--copperHi)'}}>Pilar 0{i+1}</span><br/>{p.n}</div>
                    <div className="pillar-desc">{p.c}</div>
                  </div>
                ))}
              </div>
              
              <div style={{marginTop: '64px'}} className="rv">
                <a href="#tdp-oferta" className="btn">Quero criar personagens com impacto <span className="arrow">→</span></a>
              </div>
            </div>
          </section>

          <section className="modules">
            <div className="w">
              <div className="mod-head rv">
                <div>
                  <div className="ey">III. Programa</div>
                  <h2 className="hs" style={{margin:0}}>Conteúdo<br/><span className="it">do curso</span></h2>
                </div>
                <div className="lede d1">6 módulos. Do gesto inicial à peça pronta para portfólio.</div>
              </div>

              <div className="mod-grid">
                {mods.map((m, i) => (
                  <div key={i} className={`mod-card rv d${(i%2)+1}`} style={{backgroundImage: `url(${m.img})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="mod-content">
                      <div className="mod-top">
                        <div className="mod-label">MÓDULO {m.n}</div>
                        <img src="https://3dnapose.com/wp-content/uploads/2025/04/Rectangle-20.png" alt="" className="mod-rect" />
                      </div>
                      <div className="mod-title">{m.t.split('\n').map((l,j)=><React.Fragment key={j}>{l}<br/></React.Fragment>)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="about" id="tdp-about">
            <div className="w">
              <div className="about-grid">
                <div className="rv">
                  <div className="about-fig">
                    <img src="https://3dnapose.com/wp-content/uploads/2025/11/fotinha-do-vini-2.png" alt="Vinícius Cardoso" />
                    <div className="about-badge">VINÍCIUS CARDOSO · POLYMIND</div>
                  </div>
                  <div className="about-stats">
                    <div>
                      <div className="stat-num">+8</div>
                      <div className="stat-txt">anos de mercado</div>
                    </div>
                    <div>
                      <div className="stat-num">+100</div>
                      <div className="stat-txt">peças entregues</div>
                    </div>
                  </div>
                </div>
                
                <div className="about-bio rv d1">
                  <div>
                    <div className="ey">IV. O Criador</div>
                    <h2 className="hs" style={{margin:0}}>Vinícius<br/><span className="it">Cardoso</span></h2>
                  </div>
                  <p className="lead">"Tenho mais de 8 anos no mercado e, há 3+, desenvolvo colecionáveis pela Polymind Studio."</p>
                  <p>"Criei o método 3D na Pose porque eu não aguentava mais começar em pose neutra, refazer o projeto várias vezes e sentir que a peça nunca atingia o potencial. Hoje ensino o processo que uso no dia a dia: começar pelo gesto, aplicar anatomia direto na pose e compor bases com leitura — sem retrabalho."</p>
                  <div className="about-collab">Colaborações: Rafa Grassetti · Red Sparrow Collectibles · Flesh of Gods · One Page Rules</div>
                </div>
              </div>
            </div>
            
            <div className="port-wrap rv d2">
              <div className="port-track">
                {portImgs.concat(portImgs).map((img, i) => (
                  <div key={i} className="port-item" onClick={() => setLbImg(img)}>
                    <img src={img} alt={`Portfolio ${i}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="compare">
            <div className="w">
              <div className="ey rv text-center">V. Comparativo</div>
              <h2 className="hs rv d1 text-center" style={{marginBottom: '48px'}}>Outros caminhos<br/><span className="it">vs. o método 3D na Pose</span></h2>
              
              <div className="comp-grid rv d2">
                <div className="comp-col left">
                  <div className="comp-label l-red">OUTROS CAMINHOS</div>
                  <div className="comp-txt">Plataformas mensais soltas, tutoriais isolados. Você junta tudo sozinho, aprende partes mas continua refazendo do zero.</div>
                  <div className="comp-quote">"Eu até aprendo, mas continuo travando na hora de transformar isso em peça profissional."</div>
                </div>
                <div className="comp-col right">
                  <div className="comp-label l-green">3D NA POSE</div>
                  <div className="comp-txt">Processo completo do gesto à peça final. Módulos encadeados, sem tentativa e erro, focado em entregar modelos para portfólio.</div>
                  <div className="comp-quote">"Você não aprende conteúdos soltos. Você sai com peça pronta para impactar."</div>
                </div>
              </div>
            </div>
          </section>

          <section className="offer" id="tdp-oferta">
            <div className="w">
              <div className="ey rv text-center">VI. A Oferta</div>
              <h2 className="hs rv d1 text-center" style={{marginBottom: '64px'}}>Entre hoje e modele<br/><span className="it">direto na pose</span></h2>
              
              <div className="offer-card rv d2">
                <div className="offer-ribbon">Oferta Especial</div>
                
                <div className="offer-head">
                  <div className="logo-text">3D NA POSE</div>
                  <h3>Curso 3D na Pose</h3>
                  <p>Método completo · ZBrush + Unreal Engine 5 + Photoshop</p>
                </div>
                
                <div className="offer-body">
                  <div className="offer-price">
                    <div className="price-inv">Investimento</div>
                    <div className="price-12x">12x de</div>
                    <div className="price-val">R$83,09</div>
                    <div className="price-sj">sem juros</div>
                    <div className="price-div" />
                    <div className="price-full">ou à vista R$ 997</div>
                    <a href="https://pay.hotmart.com/P96903534R?checkoutMode=10" target="_blank" rel="noreferrer" className="btn" style={{width: '100%', justifyContent: 'center'}}>Quero modelar como profissional <span className="arrow">→</span></a>
                  </div>
                  
                  <div className="offer-feats">
                    <div className="feats-title">O que você recebe</div>
                    <ul className="feats-list">
                      {[
                        'Curso completo (do gesto ao STL/render para portfólio)',
                        'Aulas extras: anatomia aplicada e composição de base',
                        'Um personagem do zero a cada 4 meses',
                        'Acesso vitalício + atualizações',
                        'Comunidade no Discord, e-mail e lives',
                        'Brushes e alphas exclusivos do Cardoso',
                        'Processos em tempo real de projetos antigos'
                      ].map((t, i) => (
                        <li key={i}><span className="num">0{i+1}</span> {t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="offer-foot">
                  Pagamento seguro via Hotmart · Acesso imediato após compra
                </div>
              </div>
            </div>
          </section>

          <section className="faq">
            <div className="w">
              <img src="https://3dnapose.com/wp-content/uploads/2025/11/faq.png" alt="FAQ" className="rv text-center" style={{display:'block', margin:'0 auto 24px', maxWidth:'140px', opacity: 0.8}} />
              <div className="ey rv text-center">VII. Dúvidas</div>
              <h2 className="hs rv d1 text-center">Perguntas<br/><span className="it">frequentes</span></h2>
              
              <div className="faq-container rv d2">
                {[
                  {q: 'Sou iniciante no ZBrush. Serve pra mim?', a: 'Sim, desde que você saiba o básico do software: navegar na viewport, mover/rotacionar/escala, selecionar brushes e salvar arquivos. O foco do curso é gesto + composição + anatomia na pose aplicados a colecionáveis.'},
                  {q: 'Não tenho muito tempo.', a: 'As aulas são curtas e objetivas. Dá pra estudar em blocos de 30–45 min. Acesso vitalício: você volta quando quiser. O método corta retrabalho, então você ganha tempo nas próximas peças.'},
                  {q: 'Vou aprender anatomia?', a: 'Você aprende anatomia aplicada na pose: landmarks ósseos guiando direção de fibras, compressão/estiramento e transições limpas. Sem teoria infinita — é o que funciona no colecionável, com 2 personagens completos do zero ao final.'},
                  {q: 'Preciso saber preparar para impressão?', a: 'Não precisa saber antes. Eu mostro a pipeline de preparação e checklists pra organizar o arquivo pra impressão. E você ainda conta com a comunidade no Discord pra tirar dúvidas.'},
                  {q: 'E se eu não gostar?', a: 'Tem garantia de 7 dias. Entrou, testou e não fez sentido? Devolvo 100%. Sem burocracia.'},
                  {q: 'R$ 997 é caro pra mim.', a: 'Pode parcelar em 12x sem juros e o acesso é vitalício. Você recebe 7 módulos, 2 personagens completos, módulo de tecido, brushes e alphas no Discord. O método reduz horas de retrabalho.'}
                ].map((f, i) => (
                  <div key={i} className={`faq-item ${i===0 ? 'open' : ''}`}>
                    <div className="faq-q">
                      <div className="faq-title">{f.q}</div>
                      <div className="faq-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></div>
                    </div>
                    <div className="faq-a">{f.a}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="final">
            <div className="w">
              <div className="ey rv">VIII. Última chance</div>
              <h2 className="hs rv d1">Pronto pra evoluir<br/><span className="it">no 3D de verdade?</span></h2>
              <div className="lede rv d2">Volte e garanta sua vaga agora — antes da próxima atualização de preço.</div>
              <div className="rv d3" style={{marginTop: '48px'}}>
                <a href="#tdp-oferta" className="btn">Quero modelar na pose <span className="arrow">→</span></a>
              </div>
            </div>
          </section>

          <footer className="rv">
            <img src="https://3dnapose.com/wp-content/uploads/2025/05/Vector-5.png" alt="" style={{display:'block', margin:'0 auto 32px', height: '40px', opacity: 0.3}} />
            <a href="#tdp-home"><img src="https://3dnapose.com/wp-content/uploads/2025/04/logo-3DNaPose.png" alt="3D NA POSE" className="foot-logo" /></a>
            <div className="foot-nav">
              <a href="#tdp-home">Home</a>
              <a href="#tdp-about">Sobre o Vini</a>
              <a href="#tdp-oferta">Garanta o Curso</a>
              <a href="#tdp-method">O Método</a>
            </div>
            <div className="foot-social">
              <a href="https://www.instagram.com/cardoso.3d/" target="_blank" rel="noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="https://www.artstation.com/viniciusnunes" target="_blank" rel="noreferrer" aria-label="ArtStation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="13.5" r="8.5"/><path d="M7 10L5 6L2 11"/><path d="M8 21L10 17"/><path d="M19 10L21 6L23 11"/></svg></a>
            </div>
            <div className="foot-copy">© 3D na Pose · Método Vinícius Cardoso · Todos os direitos reservados</div>
            <div className="foot-cred">Projetado e Desenvolvido pela JotaStudio</div>
            
            <div className="back-top" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Voltar ao topo</div>
          </footer>

        </main>
        
        {/* Lightbox */}
        <div className={`lightbox ${lbImg ? 'active' : ''}`} onClick={() => setLbImg(null)}>
          <button className="lb-close" onClick={() => setLbImg(null)} aria-label="Fechar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
          {lbImg && <img src={lbImg} alt="Portfolio Ampliado" onClick={e => e.stopPropagation()} />}
        </div>
      </div>
    </>
  )
}
