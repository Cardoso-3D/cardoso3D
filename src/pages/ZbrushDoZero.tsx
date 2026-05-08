import React, { useEffect } from 'react'

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&display=swap');

  #zdz{--bg:#0a0612;--bg2:#140820;--ink:#f5efff;--muted:#bcaecc;--muted2:#7d6f8e;--purple:#8b5cf6;--purpleHi:#b794f6;--magenta:#e633a8;--green:#22c55e;--red:#ef4444;--border:rgba(245,239,255,0.09);--d:'Anton',sans-serif;--s:'Anton',sans-serif;--n:'Inter',system-ui,sans-serif;font-family:var(--n);-webkit-font-smoothing:antialiased;background:var(--bg);color:var(--ink);margin:0;padding:0;min-height:100vh;}
  #zdz *{box-sizing:border-box;}
  #zdz a{color:inherit;text-decoration:none;}
  #zdz::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:0;background:radial-gradient(900px 600px at 80% -10%,rgba(139,92,246,0.18),transparent 60%),radial-gradient(700px 500px at -10% 30%,rgba(58,15,87,0.45),transparent 65%),radial-gradient(600px 400px at 50% 110%,rgba(230,51,168,0.12),transparent 70%),linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px);background-size: 100% 100%, 100% 100%, 100% 100%, 48px 48px, 48px 48px;}
  #zdz main{position:relative;z-index:1;}
  #zdz .w{max-width:1080px;margin:0 auto;padding:0 56px;position:relative;}
  #zdz .nav{display:flex;justify-content:space-between;align-items:center;padding:24px 56px;position:relative;z-index:10;}
  #zdz .nav-links{display:none;}
  @media(min-width:901px){
    #zdz .nav-links{display:flex;align-items:center;gap:4px;padding:6px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:99px;}
    #zdz .nav-links a{padding:10px 20px;font-family:var(--n);font-size:12px;font-weight:700;letter-spacing:0.1em;color:var(--muted);text-transform:uppercase;text-decoration:none;transition:color .2s;border-radius:99px;}
    #zdz .nav-links a:not(.highlight):hover{color:#fff;}
    #zdz .nav-links a.highlight{background:linear-gradient(135deg,var(--purple),var(--magenta));color:#fff;}
  }
  #zdz .nav-login{display:inline-flex;align-items:center;padding:12px 28px;border-radius:99px;font-family:var(--n);font-size:12px;font-weight:700;letter-spacing:0.1em;color:#fff;text-transform:uppercase;text-decoration:none;background:linear-gradient(135deg,var(--purple),var(--magenta));transition:transform .15s ease,box-shadow .15s ease;}
  #zdz .nav-login:hover{transform:translateY(-2px);box-shadow:0 12px 30px -10px rgba(230,51,168,0.6);}
  #zdz .logo{display:inline-block;text-align:center;line-height:1;}
  #zdz .logo svg{display:block;}
  #zdz .btn{display:inline-flex;align-items:center;gap:10px;padding:18px 30px;border-radius:99px;font-family:var(--n);font-weight:700;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;cursor:pointer;border:none;background:linear-gradient(135deg,var(--purple),var(--magenta));color:#fff;box-shadow:0 18px 40px -10px rgba(230,51,168,0.45),inset 0 0 0 1px rgba(255,255,255,0.1);transition:transform .15s ease,box-shadow .15s ease;}
  #zdz .btn:hover{transform:translateY(-2px);box-shadow:0 22px 50px -10px rgba(230,51,168,0.6);}
  #zdz .btn .arrow{transition:transform .15s ease;display:inline-block;}
  #zdz .btn:hover .arrow{transform:translateX(4px);}
  #zdz section{padding:80px 0;}
  #zdz .ey{font-family:var(--n);font-size:11px;letter-spacing:0.28em;color:var(--purpleHi);text-transform:uppercase;margin:0 0 18px;font-weight:600;}
  #zdz .hd, #zdz .hs, #zdz .cyber-hs{font-family:var(--n);font-weight:800;font-size:64px;line-height:1;letter-spacing:-0.02em;text-transform:uppercase;margin:0 0 16px;color:#fff;}
  #zdz .hd .it, #zdz .hs .it, #zdz .cyber-hs .grad{background:linear-gradient(90deg,#e633a8 0%,#a855f7 50%,#00e5ff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline-block;font-style:normal;}
  #zdz .lede{font-family:var(--n);font-size:18px;color:var(--muted);line-height:1.45;margin:0;}

  #zdz .cyber-heading{text-align:center;margin-bottom:56px;}
  #zdz .cyber-ey{display:flex;align-items:center;justify-content:center;gap:16px;font-family:var(--n);font-size:13px;font-weight:700;color:#00e5ff;letter-spacing:0.15em;text-transform:uppercase;margin-bottom:16px;}
  #zdz .cyber-ey::before, #zdz .cyber-ey::after{content:"";height:1px;background:#00e5ff;flex:1;opacity:0.5;}

  #zdz .hero{padding:48px 0 96px;text-align:center;position:relative;overflow:hidden;}
  #zdz .hero .hd{font-size:64px;}
  #zdz .hero p.sub{font-family:var(--n);font-size:17px;color:var(--muted);max-width:560px;margin:24px auto 32px;line-height:1.5;}
  #zdz .hero .micro{font-family:var(--n);font-size:11px;color:var(--muted2);letter-spacing:0.22em;text-transform:uppercase;margin-top:18px;}
  #zdz .aurora{position:absolute;inset:0;pointer-events:none;overflow:hidden;}
  #zdz .aurora .orb{position:absolute;border-radius:50%;filter:blur(80px);}
  #zdz .aurora .o1{width:600px;height:400px;background:radial-gradient(circle,rgba(139,92,246,0.22) 0%,transparent 70%);top:-100px;left:50%;animation:zdzO1 6s ease-in-out infinite;}
  #zdz .aurora .o2{width:400px;height:300px;background:radial-gradient(circle,rgba(230,51,168,0.15) 0%,transparent 70%);top:40%;right:-80px;animation:zdzO2 7s ease-in-out infinite;}
  #zdz .aurora .o3{width:350px;height:250px;background:radial-gradient(circle,rgba(100,20,180,0.2) 0%,transparent 70%);bottom:-60px;left:-40px;animation:zdzO3 8s ease-in-out infinite;}
  @keyframes zdzO1{0%,100%{opacity:.7;transform:translateX(-50%) scale(1);}50%{opacity:1;transform:translateX(-50%) scale(1.1);}}
  @keyframes zdzO2{0%,100%{opacity:.5;transform:scale(1);}50%{opacity:.9;transform:scale(1.15);}}
  @keyframes zdzO3{0%,100%{opacity:.6;transform:scale(1);}50%{opacity:1;transform:scale(1.08);}}
  #zdz .hero-img{margin:64px auto 0;max-width:720px;border:1px solid var(--border);border-radius:16px;background:linear-gradient(135deg,#1a0626,#0e0014 60%,#2a0d3d);position:relative;overflow:hidden;box-shadow:0 30px 80px -20px rgba(139,92,246,0.25);}
  #zdz .hero-img::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 50% at 30% 35%,rgba(255,255,255,0.18),transparent 60%),radial-gradient(50% 50% at 75% 65%,rgba(230,51,168,0.22),transparent 70%);z-index:1;pointer-events:none;}
  #zdz .hero-img .bust{display:block;width:100%;height:auto;opacity:.95;position:relative;z-index:0;}
  #zdz .hero-img .tag{position:absolute;left:18px;top:18px;font-family:var(--n);font-size:10px;color:#fff;letter-spacing:0.22em;opacity:.75;z-index:2;}
  #zdz .hero-img .tag.r{left:auto;right:18px;}

  #zdz .avatars{display:flex;align-items:center;justify-content:center;gap:16px;margin:24px auto 0;font-family:var(--n);font-size:13px;color:var(--muted);text-align:left;}
  #zdz .avs{display:flex;}
  #zdz .av{width:40px;height:40px;border-radius:50%;border:2px solid var(--bg);background:#2a0d3d;margin-left:-12px;background-size:cover;}
  #zdz .av:first-child{margin-left:0;background-image:url(https://i.pravatar.cc/100?img=68);}
  #zdz .av-txt{display:flex;flex-direction:column;justify-content:center;}

  #zdz .marquee{padding:24px 0;border-top:1px solid rgba(255,255,255,0.05);border-bottom:1px solid rgba(255,255,255,0.05);overflow:hidden;background:rgba(255,255,255,0.02);}
  #zdz .marquee .track{display:flex;width:max-content;animation:zdzMq 28s linear infinite;}
  #zdz .marquee:hover .track{animation-play-state:paused;}
  #zdz .marquee .row{display:flex;align-items:center;gap:48px;font-family:var(--n);font-weight:800;font-size:22px;letter-spacing:0.1em;text-transform:uppercase;white-space:nowrap;color:#fff;padding-right:48px;}
  #zdz .marquee .row .cyan{color:#00e5ff;}
  #zdz .marquee .row .dot{color:#e633a8;font-size:16px;}
  @keyframes zdzMq{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}

  #zdz .pain-cards{display:grid;grid-template-columns:1fr 1fr;gap:24px;max-width:960px;margin:0 auto;}
  #zdz .pain-card{background:linear-gradient(145deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.05);border-radius:16px;padding:32px;display:flex;align-items:center;gap:24px;position:relative;overflow:hidden;}
  #zdz .pain-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 80% 50%,rgba(230,51,168,0.15),transparent 60%);opacity:0.3;transition:opacity .4s;}
  #zdz .pain-card:nth-child(even)::before{background:radial-gradient(circle at 80% 50%,rgba(0,229,255,0.12),transparent 60%);opacity:0.3;}
  #zdz .pain-card:hover::before{opacity:0.8;}
  #zdz .pain-icon-wrapper{width:64px;height:64px;border-radius:16px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#fff;}
  #zdz .pain-card:nth-child(even) .pain-icon-wrapper{border-color:rgba(0,229,255,0.3);box-shadow:inset 0 0 20px rgba(0,229,255,0.15);}
  #zdz .pain-card:nth-child(odd) .pain-icon-wrapper{border-color:rgba(230,51,168,0.3);box-shadow:inset 0 0 20px rgba(230,51,168,0.15);}
  #zdz .pain-content{display:flex;flex-direction:column;gap:8px;}
  #zdz .pain-num-styled{font-family:var(--n);font-size:12px;font-weight:700;letter-spacing:0.1em;color:#e633a8;}
  #zdz .pain-card:nth-child(even) .pain-num-styled{color:#00e5ff;}
  #zdz .pain-txt-styled{font-family:var(--n);font-size:16px;color:#d1d5db;line-height:1.5;font-weight:500;}

  #zdz .process-flow{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;border:none;max-width:1080px;margin:48px auto 0;}
  #zdz .process-step{padding:28px 24px;text-align:left;border:1px solid rgba(255,255,255,0.08);border-radius:24px;background:linear-gradient(145deg, rgba(20,8,32,0.8), rgba(0,0,0,0.4));position:relative;display:flex;flex-direction:column;min-height:300px;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);box-shadow:inset 0 1px 0 rgba(255,255,255,0.05),0 12px 32px -12px rgba(0,0,0,0.8);}
  #zdz .process-step:hover{border-color:var(--accent);transform:translateY(-4px);box-shadow:inset 0 1px 0 rgba(255,255,255,0.1),0 16px 40px -12px var(--accent),0 8px 16px -8px rgba(0,0,0,0.5);}
  #zdz .step-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;}
  #zdz .step-ey{font-family:monospace;font-size:12px;letter-spacing:0.2em;margin:0;color:var(--accent);font-weight:700;}
  #zdz .step-dot{width:10px;height:10px;border-radius:50%;background:var(--accent);box-shadow:0 0 16px var(--accent), 0 0 8px var(--accent);}
  #zdz .step-icon{width:80px;height:80px;border-radius:24px;background:var(--grad);border:none;margin:auto auto 40px auto;display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 12px 40px -12px var(--accent);}
  #zdz .step-icon svg{width:36px;height:36px;}
  #zdz .step-title{font-family:var(--n);font-size:20px;letter-spacing:-0.01em;line-height:1.2;font-weight:800;margin-top:auto;}
  #zdz .step-arrow{position:absolute;right:-18px;top:50%;transform:translateY(-50%);width: 24px; height: 24px; border-radius: 50%; background: #0a0612; display:flex; align-items:center; justify-content:center; color:var(--accent); font-size:14px; z-index:2; border: 1px solid rgba(255,255,255,0.1); font-weight:800; font-family:monospace;}
  #zdz .process-feats{display:flex;justify-content:center;gap:24px;max-width:1080px;margin:28px auto 0;border:none;}
  #zdz .process-feat{padding:20px 24px;border:1px solid rgba(255,255,255,0.08);border-radius:20px;background:linear-gradient(145deg, rgba(20,8,32,0.8), rgba(0,0,0,0.4));display:flex;align-items:center;gap:16px;box-shadow:inset 0 1px 0 rgba(255,255,255,0.05),0 8px 24px -12px rgba(0,0,0,0.8);flex:1;max-width:340px;}
  #zdz .feat-icon{width:48px;height:48px;border-radius:14px;background:var(--grad);display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;box-shadow:0 8px 24px -8px var(--grad);}
  #zdz .feat-icon svg{width:22px;height:22px;color:#fff!important;}
  #zdz .process-feat span{font-family:var(--n);font-size:15px;color:#d1d5db;font-weight:600;line-height:1.4;}

  #zdz .video-head{display:grid;grid-template-columns:0.4fr 1.6fr;gap:48px;align-items:end;margin-bottom:48px;}
  #zdz .video-frame{position:relative;aspect-ratio:16/9;border:1px solid var(--border);overflow:hidden;background:var(--bg2);}
  #zdz .video-frame::before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,#1a0626,#0e0014 60%,#2a0d3d);}
  #zdz .video-frame::after{content:"";position:absolute;inset:0;background:radial-gradient(closest-side,transparent,rgba(10,6,18,0.7));}
  #zdz .video-frame .play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:2;}
  #zdz .play-circle{width:96px;height:96px;border-radius:99px;background:linear-gradient(135deg,var(--purple),var(--magenta));display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 14px rgba(230,51,168,0.12),0 0 60px var(--magenta);cursor:pointer;transition:transform .2s,box-shadow .2s;}
  #zdz .play-circle:hover{transform:scale(1.08);box-shadow:0 0 0 20px rgba(230,51,168,0.15),0 0 80px var(--magenta);}
  #zdz .play-circle::after{content:"";width:0;height:0;border-left:24px solid #fff;border-top:14px solid transparent;border-bottom:14px solid transparent;margin-left:6px;}
  #zdz .video-frame .vtag{position:absolute;left:24px;top:24px;font-size:10px;letter-spacing:0.22em;color:#fff;z-index:2;text-transform:uppercase;}
  #zdz .video-frame .vbar{position:absolute;left:24px;right:24px;bottom:20px;display:flex;justify-content:space-between;align-items:center;z-index:2;}
  #zdz .video-frame .vbar .time{font-size:11px;color:#fff;letter-spacing:0.16em;}
  #zdz .video-frame .vbar .prog{flex:1;height:1px;margin:0 24px;background:rgba(255,255,255,0.25);position:relative;}
  #zdz .video-frame .vbar .prog::after{content:"";position:absolute;inset:0;background:#fff;}
  #zdz .video-foot{margin-top:48px;display:flex;flex-direction:column;align-items:center;gap:20px;padding-top:32px;}
  #zdz .video-foot .meta{font-family:var(--n);font-size:11px;color:var(--muted);letter-spacing:0.22em;text-transform:uppercase;}

  #zdz .fit-grid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--border);border-bottom:1px solid var(--border);}
  #zdz .fit-col{padding:36px;border-right:1px solid var(--border);position:relative;}
  #zdz .fit-col:last-child{border-right:none;}
  #zdz .fit-head{display:flex;align-items:center;gap:14px;margin-bottom:24px;}
  #zdz .fit-head .label{font-family:var(--d);font-size:32px;}
  #zdz .fit-head .label.yes{color:var(--green);}
  #zdz .fit-head .label.no{color:var(--red);}
  #zdz .fit-head .rule{flex:1;height:1px;background:var(--border);}
  #zdz .fit-sub{font-family:var(--s);font-style:italic;font-size:18px;color:var(--ink);margin-bottom:18px;}
  #zdz .fit-list{list-style:none;padding:0;margin:0;}
  #zdz .fit-list li{padding:14px 0;border-top:1px solid var(--border);display:flex;gap:14px;font-size:14px;color:var(--muted);line-height:1.5;}
  #zdz .fit-list li:first-child{border-top:none;}
  #zdz .fit-list .num{font-family:var(--d);font-size:14px;min-width:24px;}
  #zdz .fit-list .num.g{color:var(--green);}
  #zdz .fit-list .num.r{color:var(--red);}
  #zdz .fit-col .ctrl{position:absolute;right:36px;top:36px;color:var(--red);opacity:.7;}

  #zdz .modules-head{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px;gap:32px;}
  #zdz .modules-head p{font-family:var(--s);font-style:italic;font-size:18px;color:var(--muted);max-width:380px;text-align:right;margin:0;}
  #zdz .modules-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;}
  #zdz .module-card{position:relative;}
  #zdz .module-art{position:relative;aspect-ratio:16/9;overflow:hidden;border:1px solid var(--border);border-radius:16px;transition:border-color .3s, transform .3s;cursor:pointer;}
  #zdz .module-card:hover .module-art{border-color:rgba(183,148,246,0.35);transform:scale(1.02);}
  #zdz .module-foot{padding:14px 0;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border);}
  #zdz .module-foot .ch{font-family:var(--s);font-style:italic;font-size:14px;color:var(--muted);}
  #zdz .module-foot .vm{font-family:var(--n);font-size:11px;letter-spacing:0.22em;color:var(--purpleHi);transition:letter-spacing .2s;}
  #zdz .module-card:hover .module-foot .vm{letter-spacing:0.3em;}

  #zdz .gua{padding: 80px 0;}
  #zdz .gua-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;max-width:1040px;margin:0 auto;}
  #zdz .gua-grid .right{text-align:left; display: flex; flex-direction: column; gap: 24px;}
  #zdz .gua-grid .left{display:flex; justify-content:center;}
  #zdz .gua-medal{width:360px;height:360px;position:relative;}
  #zdz .gua-medal svg{width:100%;height:100%;animation:zdzRotate 20s linear infinite;}
  #zdz .gua-medal .inner{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;animation:none;}
  #zdz .gua-medal .num{font-family:var(--d);font-size:120px;line-height:0.8;background:linear-gradient(180deg, #e633a8, #8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
  #zdz .gua-medal .ey-top{font-family:var(--n);font-size:14px;letter-spacing:0.2em;color:#00e5ff;font-weight:700;text-transform:uppercase;margin-bottom:8px;}
  #zdz .gua-medal .ey-bot{font-family:var(--n);font-size:14px;letter-spacing:0.3em;color:#fff;font-weight:700;text-transform:uppercase;margin-top:12px;}
  
  #zdz .gua-right-ey{font-family:var(--n);font-size:12px;letter-spacing:0.2em;color:#b794f6;font-weight:700;text-transform:uppercase;}
  #zdz .gua-right-hd{font-family:var(--d);font-size:56px;line-height:1.1;letter-spacing:-0.02em;color:#fff;}
  #zdz .gua-right-hd .grad{background:linear-gradient(90deg, #e633a8, #00e5ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;}
  
  #zdz .gua-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:16px;}
  #zdz .gua-list li{display:flex;gap:16px;font-size:16px;color:var(--muted);line-height:1.5;font-family:var(--n);}
  #zdz .gua-list .dot{width:6px;height:6px;border-radius:50%;background:#b794f6;flex-shrink:0;margin-top:9px;box-shadow:0 0 10px #b794f6;}
  
  #zdz .gua-btn{display:inline-flex;align-items:center;padding:16px 32px;background:linear-gradient(135deg, #e633a8, #8b5cf6);color:#fff;font-family:var(--n);font-weight:700;font-size:14px;letter-spacing:0.1em;text-transform:uppercase;border-radius:99px;text-decoration:none;transition:transform 0.3s, box-shadow 0.3s;box-shadow:0 0 30px rgba(230,51,168,0.3);width:fit-content;}
  #zdz .gua-btn:hover{transform:translateY(-2px);box-shadow:0 0 40px rgba(230,51,168,0.5);}
  @keyframes zdzRotate{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}

  #zdz .price-card{position:relative;max-width:960px;margin:0 auto;border:1px solid var(--border);border-radius:16px;background:linear-gradient(180deg,var(--bg2),var(--bg));}
  #zdz .price-ribbon{position:absolute;top:24px;right:-8px;background:linear-gradient(135deg,var(--purple),var(--magenta));color:#fff;padding:8px 16px;font-family:var(--n);font-size:10px;font-weight:800;letter-spacing:0.22em;text-transform:uppercase;}
  #zdz .price-head{padding:40px 32px 24px;border-bottom:1px solid var(--border);text-align:center;}
  #zdz .price-name{margin-top:18px;font-family:var(--d);font-size:38px;font-weight:400;letter-spacing:0.02em;text-transform:uppercase;}
  #zdz .price-name .it{font-family:var(--s);font-style:italic;font-weight:500;text-transform:none;color:var(--purpleHi);letter-spacing:-0.01em;}
  #zdz .price-tag{font-family:var(--s);font-style:italic;font-size:16px;color:var(--muted);margin-top:6px;}
  #zdz .price-body{display:grid;grid-template-columns:1fr 1fr;}
  #zdz .price-amt{padding:40px 36px;border-right:1px solid var(--border);text-align:center;}
  #zdz .price-pre{font-family:var(--n);font-size:11px;color:var(--purpleHi);letter-spacing:0.28em;text-transform:uppercase;}
  #zdz .price-inst{margin-top:18px;font-family:var(--s);font-style:italic;font-size:16px;color:var(--muted);}
  #zdz .price-big{font-family:var(--d);font-weight:400;font-size:104px;line-height:1;letter-spacing:0.005em;margin-top:4px;color:var(--ink);}
  #zdz .price-juros{font-family:var(--s);font-style:italic;font-size:14px;color:var(--muted2);margin-top:6px;}
  #zdz .price-divider{height:1px;background:var(--border);margin:22px 0;}
  #zdz .price-cash{font-size:14px;color:var(--muted);margin-bottom:22px;}
  #zdz .price-feats{padding:40px 36px;}
  #zdz .price-feats .heading{font-family:var(--n);font-size:11px;color:var(--purpleHi);letter-spacing:0.28em;text-transform:uppercase;margin-bottom:18px;}
  #zdz .price-feats ul{list-style:none;padding:0;margin:0;}
  #zdz .price-feats li{padding:12px 0;border-top:1px solid var(--border);display:flex;gap:12px;font-size:14px;color:var(--ink);line-height:1.4;}
  #zdz .price-feats li:first-child{border-top:none;}
  #zdz .price-feats .num{font-family:var(--d);font-size:13px;color:var(--purpleHi);min-width:24px;}

  #zdz footer{padding:48px 56px 56px;text-align:center;border-top:1px solid var(--border);}
  #zdz .social{display:inline-flex;gap:24px;margin-top:18px;color:var(--muted);}
  #zdz .social a{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;border:1px solid rgba(255,255,255,0.1);background:rgba(255,255,255,0.02);transition:all .2s;}
  #zdz .social a:hover{color:#fff;background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.2);}
  #zdz .social svg{width:20px;height:20px;}
  #zdz footer .copy{margin-top:14px;font-family:var(--s);font-style:italic;font-size:12px;color:var(--muted2);}
  #zdz .back-top{display:inline-block;margin-top:18px;font-family:var(--n);font-size:10px;letter-spacing:0.22em;color:var(--muted2);text-transform:uppercase;transition:color .2s;}
  #zdz .back-top:hover{color:var(--purpleHi);}

  .zdz-cta{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(100px);z-index:100;background:linear-gradient(135deg,#8b5cf6,#e633a8);color:#fff;padding:16px 28px;border-radius:99px;font-family:'Inter',system-ui,sans-serif;font-weight:700;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;box-shadow:0 12px 40px -8px rgba(230,51,168,0.6);display:flex;align-items:center;gap:10px;transition:transform .4s cubic-bezier(.34,1.56,.64,1),opacity .3s;opacity:0;pointer-events:none;white-space:nowrap;}
  .zdz-cta.on{transform:translateX(-50%) translateY(0);opacity:1;pointer-events:auto;}
  .zdz-cta:hover{transform:translateX(-50%) translateY(-2px);}
  .zdz-cta .arrow{transition:transform .15s;display:inline-block;}
  .zdz-cta:hover .arrow{transform:translateX(4px);}

  #zdz .rv{opacity:0;transform:translateY(22px);transition:opacity .55s ease,transform .55s ease;}
  #zdz .rv.on{opacity:1;transform:translateY(0);}
  #zdz .d1{transition-delay:.08s;}
  #zdz .d2{transition-delay:.16s;}
  #zdz .d3{transition-delay:.24s;}

  @media(max-width:900px){
    #zdz .w{padding:0 28px;}
    #zdz .nav{padding:24px 28px;}
    #zdz .hd, #zdz .hs, #zdz .cyber-hs{font-size:42px;}
    #zdz .hero .hd{font-size:42px;}
    #zdz section{padding:56px 0;}
    #zdz .pain-cards{grid-template-columns:1fr;}
    #zdz .process-flow{grid-template-columns:1fr;gap:24px;}
    #zdz .process-step{min-height:auto;padding:24px;}
    #zdz .step-arrow{display:none;}
    #zdz .process-feats{flex-direction:column;gap:16px;}
    #zdz .process-feat{border-bottom:none;}
    #zdz .video-head{grid-template-columns:1fr;}
    #zdz .modules-head{flex-direction:column;align-items:flex-start;}
    #zdz .modules-head p{text-align:left;}
    #zdz .modules-grid,#zdz .fit-grid,#zdz .price-body{grid-template-columns:1fr;}
    #zdz .fit-col{border-right:none;border-bottom:1px solid var(--border);}
    #zdz .gua-grid{grid-template-columns:1fr;text-align:center;gap:48px;}
    #zdz .gua-grid .right{text-align:center; align-items:center;}
    #zdz .gua-medal{margin:0 auto; width: 280px; height: 280px;}
    #zdz .gua-medal .num{font-size: 80px;}
    #zdz .gua-right-hd{font-size:42px;}
    #zdz .gua-list li{align-items:center;text-align:left;}
    #zdz .price-big{font-size:72px;}
    #zdz .marquee .row{font-size:28px;}
    .zdz-cta{font-size:11px;padding:14px 22px;}
  }
  @media(min-width:901px){.zdz-cta{display:none;}}
`

const Logo = ({ w = 170, h = 62 }: { w?: number; h?: number }) => (
  <img 
    src="https://zbrushdozero.com/var/assets/img/media/original/fc65c1199699d6c899cfe0a1daeeb9f1/Sem-T-tulo-1.png" 
    alt="ZBrush do Zero"
    style={{ width: w, height: h, objectFit: 'contain' }}
  />
)

const MODULES = [
  { img: 'https://zbrushdozero.com/var/assets/img/media/original/bef4d60582c0ead95aaeef926fc0fca5/modulo-1.png', d: '' },
  { img: 'https://zbrushdozero.com/var/assets/img/media/original/4b5807001050c68f3583bc5d4a120841/modulo-2.png', d: 'd1' },
  { img: 'https://zbrushdozero.com/var/assets/img/media/original/037e8aefa8ac30f820bcb6dc29a605e4/modulo-3.png', d: 'd2' },
  { img: 'https://zbrushdozero.com/var/assets/img/media/original/65f0bc46d2b38aad13639354599e9b72/unnamed.jpg', d: 'd3' },
]

export default function ZbrushDoZero() {
  useEffect(() => {
    const els = document.querySelectorAll('#zdz .rv')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach(el => obs.observe(el))

    const cta = document.getElementById('zdz-cta')
    let shown = false
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      if (!shown && pct > 0.4) { cta?.classList.add('on'); shown = true }
      const oferta = document.getElementById('zdz-oferta')
      if (oferta) {
        const r = oferta.getBoundingClientRect()
        if (r.top < window.innerHeight && r.bottom > 0) cta?.classList.remove('on')
        else if (shown) cta?.classList.add('on')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <>
      <style>{STYLES}</style>
      <a href="#zdz-oferta" className="zdz-cta" id="zdz-cta">Quero começar do zero <span className="arrow">→</span></a>
      <div id="zdz">
        <main>

          <header className="nav rv">
            <a className="logo" href="#" aria-label="ZBrush do Zero" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}><Logo /></a>
            
            <nav className="nav-links">
              <a href="#curso">Curso</a>
              <a href="#modulos">Módulos</a>
              <a href="#garantia">Garantia</a>
              <a href="#zdz-oferta" className="highlight">Oferta</a>
            </nav>

            <a href="#" className="nav-login">Entrar</a>
          </header>

          <section className="hero">
            <div className="aurora">
              <div className="orb o1" /><div className="orb o2" /><div className="orb o3" />
            </div>
            <div className="w">
              <h1 className="hd rv">Do Zero ao seu primeiro<br /><span className="it">modelo pronto pra imprimir</span></h1>
              <p className="sub rv d1">Aprenda ZBrush mesmo sem nunca ter aberto o programa. Com um passo a passo simples e organizado.</p>
              <div className="hero-img rv d2" aria-label="ZBrush — modelos 3D">
                <img className="bust" src="https://zbrushdozero.com/var/assets/img/media/original/46e16046e3eb9f4f9c6cca002e9779e8/processo.png" alt="ZBrush Processo" />
              </div>
              <div className="rv d3" style={{ marginTop: '48px' }}>
                <a href="#zdz-oferta" className="btn">Quero começar do zero <span className="arrow">→</span></a>
                <div className="micro">Acesso vitalício · 7 dias de garantia</div>
              </div>
            </div>
          </section>

          <div className="marquee">
            <div className="track">
              {[0,1,2,3].map(i=>(
                <div key={i} className="row">
                  <span>Miniaturas</span><span className="dot">◆</span><span className="cyan">Bustos</span><span className="dot">◆</span>
                  <span>Colecionáveis</span><span className="dot">◆</span><span className="cyan">Impressão 3D</span><span className="dot">◆</span>
                  <span>Personagens</span><span className="dot">◆</span>
                </div>
              ))}
            </div>
          </div>

          <section id="curso">
            <div className="w">
              <div className="cyber-heading rv">
                <h2 className="cyber-hs">Você já<br /><span className="grad">passou por...</span></h2>
              </div>
              <div className="pain-cards">
                {[
                  { t: 'Abriu o Zbrush e ficou perdido com mil botões', icon: <><circle cx="12" cy="12" r="10"/><path d="M8 9.05v-.1"/><path d="M16 9.05v-.1"/><path d="M16 16c-1.5-2-6.5-2-8 0"/></> },
                  { t: 'Tentou mas não sabe por onde começar.', icon: <><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></> },
                  { t: 'Assistiu tutoriais mas parece avançado demais e te deixam travado.', icon: <polygon points="5 3 19 12 5 21 5 3"/> },
                  { t: 'Quer imprimir seus próprios modelos, mas trava no software.', icon: <><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></> }
                ].map((item,i)=>(
                  <div key={i} className={`pain-card rv ${i?`d${i}`:''}`}>
                    <div className="pain-icon-wrapper">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{item.icon}</svg>
                    </div>
                    <div className="pain-content">
                      <span className="pain-num-styled">0{i+1}</span>
                      <span className="pain-txt-styled">{item.t}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <div className="w" style={{textAlign:'center'}}>
              <h2 className="hs rv">Zbrush não é difícil!<br />Você só nunca <span className="it">aprendeu</span> o processo certo</h2>
              <p className="lede rv d1">Você não precisa dominar tudo! Só seguir a ordem certa.</p>
            </div>
            <div className="process-flow">
              {[
                {ey:'01',icon:<><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></>,title:'Interface\n(só o essencial)', accent:'#8b5cf6', grad:'linear-gradient(135deg, #b794f6, #8b5cf6)'},
                {ey:'02',icon:<path d="M4.5 10.5 L12 6.5 L19.5 10.5 L12 14.5z M4.5 10.5v5 L12 19.5 v-5 M19.5 10.5v5 L12 19.5"/>,title:'Formas\nbásicas', accent:'#e633a8', grad:'linear-gradient(135deg, #f9a8d4, #e633a8)'},
                {ey:'03',icon:<><line x1="6" y1="20" x2="6" y2="14"/><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/></>,title:'Refinamento', accent:'#00e5ff', grad:'linear-gradient(135deg, #67e8f9, #06b6d4)'},
                {ey:'04',icon:<><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="10" y1="18" x2="14" y2="18"/></>,title:'Pronto pra\nimprimir', accent:'#e633a8', grad:'linear-gradient(135deg, #f9a8d4, #e633a8)'},
              ].map((s,i)=>(
                <div key={i} className="process-step rv" style={{ '--accent': s.accent, '--grad': s.grad } as React.CSSProperties}>
                  <div className="step-top">
                    <div className="step-ey">{s.ey}</div>
                    <div className="step-dot"></div>
                  </div>
                  <div className="step-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg></div>
                  <div className="step-title">{s.title.split('\n').map((l,j)=><span key={j}>{l}{j<s.title.split('\n').length-1&&<br/>}</span>)}</div>
                  {i<3&&<span className="step-arrow">&gt;</span>}
                </div>
              ))}
            </div>
            <div className="process-feats">
              {[
                {icon:<path d="M4.5 10.5 L12 6.5 L19.5 10.5 L12 14.5z M4.5 10.5v5 L12 19.5 v-5 M19.5 10.5v5 L12 19.5"/>,txt:'Comece com formas simples', grad:'linear-gradient(135deg, #f9a8d4, #e633a8)'},
                {icon:<><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,txt:'Evolua passo a passo, sem travar', grad:'linear-gradient(135deg, #e879f9, #d946ef)'},
                {icon:<><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="10" y1="18" x2="14" y2="18"/></>,txt:'Termine com um modelo pronto pra impressão 3d', grad:'linear-gradient(135deg, #d8b4fe, #a855f7)'},
              ].map((f,i)=>(
                <div key={i} className="process-feat rv" style={{ '--grad': f.grad } as React.CSSProperties}>
                  <div className="feat-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg></div>
                  <span>{f.txt}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="w">
              <div className="cyber-heading rv">
                <h2 className="cyber-hs">Veja o processo <span className="grad">na prática</span></h2>
                <p className="lede">Da blocagem simples ao modelo pronto pra impressão 3D! Passo a passo.</p>
              </div>
              <div className="video-frame rv">
                <iframe 
                  src="https://www.youtube.com/embed/IwvuCM9_zbU?autoplay=1&controls=1&loop=1&rel=0&mute=1&playlist=IwvuCM9_zbU"
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 3 }}
                ></iframe>
              </div>
              <div className="video-foot rv">
                <a href="#zdz-oferta" className="btn">Quero aprender o passo a passo <span className="arrow">→</span></a>
                <div className="meta">Aulas curtas • Método em etapas • Acesso imediato</div>
              </div>
            </div>
          </section>

          <section>
            <div className="w" style={{textAlign:'center',marginBottom:'48px'}}>
              <div className="cyber-heading rv">
                <h2 className="cyber-hs">Este curso é<br /><span className="grad">pra você?</span></h2>
              </div>
            </div>
            <div className="w">
              <div className="fit-grid">
                <div className="fit-col rv">
                  <div className="fit-head"><span className="label yes">SIM</span><span className="rule"/><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <div className="fit-sub">É pra você se…</div>
                  <ul className="fit-list">
                    {['Você nunca usou o Zbrush (ou sabe muito pouco)','Você abriu o programa e travou na interface','Você quer um passo a passo simples e organizado','Você quer aprender a modelar suas próprias miniaturas, bustos e colecionáveis'].map((t,i)=>(
                      <li key={i}><span className="num g">0{i+1}</span>{t}</li>
                    ))}
                  </ul>
                </div>
                <div className="fit-col rv d1">
                  <span className="ctrl"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 12h4"/><path d="M8 10v4"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="11" r="1"/><path d="M17.32 5H6.68a4 4 0 0 0-3.99 3.7l-.61 7.93A2 2 0 0 0 4.07 19h.86a2 2 0 0 0 1.84-1.21L8 15h8l1.23 2.79A2 2 0 0 0 19.07 19h.86a2 2 0 0 0 1.99-2.37l-.61-7.93A4 4 0 0 0 17.32 5z"/></svg></span>
                  <div className="fit-head"><span className="label no">NÃO</span><span className="rule"/><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></div>
                  <div className="fit-sub">Não é pra você se…</div>
                  <ul className="fit-list">
                    {['Seu foco é games, animação ou VFX','Você procura anatomia avançada','Você já é avançado no Zbrush','Você quer técnicas artísticas complexas e teoria pesada'].map((t,i)=>(
                      <li key={i}><span className="num r">0{i+1}</span>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="modulos">
            <div className="w">
              <div className="cyber-heading rv">
                <h2 className="cyber-hs" style={{ marginBottom: 0 }}>MÓDULOS DO CURSO</h2>
                <p className="lede" style={{ marginTop: '16px' }}>Um caminho simples, em etapas, até seu primeiro modelo pronto pra imprimir</p>
              </div>
              <div className="modules-grid">
                {MODULES.map((m,i)=>(
                  <div key={i} className={`module-card rv ${m.d}`}>
                    <div className="module-art" style={{ padding: 0, overflow: 'hidden', borderRadius: '16px', aspectRatio: '16/9', border: '1px solid var(--border)' }}>
                      <img src={m.img} alt={`Módulo ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{textAlign:'center',marginTop:'56px'}} className="rv">
                <a href="#zdz-oferta" className="btn">Quero começar do zero <span className="arrow">→</span></a>
              </div>
            </div>
          </section>

          <section className="gua" id="garantia">
            <div className="w">
              <div className="gua-grid">
                <div className="left rv">
                  <div className="gua-medal">
                    <svg viewBox="0 0 400 400">
                      <defs><path id="zdz-c" d="M 200,200 m -160,0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0"/></defs>
                      <circle cx="200" cy="200" r="190" fill="none" stroke="#fff" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 4"/>
                      <circle cx="200" cy="200" r="160" fill="none" stroke="transparent" strokeWidth="0"/>
                      <text fill="#fff" opacity="0.8" fontSize="20" letterSpacing="6" fontFamily="Inter,sans-serif" fontWeight="700">
                        <textPath href="#zdz-c" startOffset="0">GARANTIA · 7 DIAS · GARANTIA · 7 DIAS · GARANTIA · 7 DIAS · GARANTIA · 7 DIAS · GARANTIA · 7 DIAS · GARANTIA · 7 DIAS · </textPath>
                      </text>
                    </svg>
                    <div className="inner">
                      <div className="ey-top">GARANTIA</div>
                      <div className="num">7</div>
                      <div className="ey-bot">DIAS</div>
                    </div>
                  </div>
                </div>
                <div className="right rv d1">
                  <div className="gua-right-ey">SEM RISCO.</div>
                  <h2 className="gua-right-hd"><span className="grad">7 dias</span><br/>pra você decidir</h2>
                  <ul className="gua-list">
                    <li><div className="dot"/>Reembolso integral em qualquer momento dentro dos 7 primeiros dias.</li>
                    <li><div className="dot"/>Sem perguntas, sem formulário extenso, sem dor de cabeça.</li>
                  </ul>
                  <a href="#zdz-oferta" className="gua-btn">Quero entrar sem risco →</a>
                </div>
              </div>
            </div>
          </section>

          <section id="zdz-oferta">
            <div className="w">
              <div className="price-card rv">
                <div className="price-ribbon">Oferta Especial</div>
                <div className="price-head">
                  <a className="logo"><Logo w={200} h={74}/></a>
                  <div className="price-name">Oferta <span className="it">Zbrush do Zero</span></div>
                  <div className="price-tag">Entre hoje e comece a modelar pra impressão 3D</div>
                </div>
                <div className="price-body">
                  <div className="price-amt">
                    <div className="price-pre">Investimento</div>
                    <div className="price-inst">12x de</div>
                    <div className="price-big">R$21,42</div>
                    <div className="price-juros">sem juros</div>
                    <div className="price-divider"/>
                    <div className="price-cash">ou à vista <strong style={{color:'var(--ink)'}}>R$257</strong></div>
                    <a href="https://pay.hotmart.com/H103748861J?checkoutMode=10" className="btn">Quero começar agora <span className="arrow">→</span></a>
                  </div>
                  <div className="price-feats">
                    <div className="heading">O que você recebe</div>
                    <ul>
                      {['Curso gravado (aulas de 10–25min)','Método em etapas (sem travar)','Projeto final: personagem completo imprimível','Foco em impressão 3D','Garantia de 7 dias','Acesso vitalício','Acesso imediato pela Hotmart'].map((t,i)=>(
                        <li key={i}><span className="num">0{i+1}</span>{t}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="rv" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <a className="logo" href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}><Logo w={120} h={44}/></a>
            <div className="social" style={{ marginTop: 0 }}>
              <a href="https://www.instagram.com/cardoso.3d/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
              <a href="https://www.youtube.com/@Cardoso.3d" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
              <a href="https://www.twitch.tv/cardoso_3d" target="_blank" rel="noopener noreferrer" aria-label="Twitch"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/></svg></a>
              <a href="https://www.linkedin.com/in/viniciusnunes/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              <a href="https://www.artstation.com/viniciusnunes" target="_blank" rel="noopener noreferrer" aria-label="ArtStation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="13.5" r="8.5"/><path d="M7 10L5 6L2 11"/><path d="M8 21L10 17"/><path d="M19 10L21 6L23 11"/></svg></a>
            </div>
            <div className="copy" style={{ marginTop: 0 }}>ZBrush do zero para impressão 3D</div>
          </footer>

        </main>
      </div>
    </>
  )
}
