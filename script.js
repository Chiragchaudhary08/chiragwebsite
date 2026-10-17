// ====== CONFIGURATION ======
var WA_NUMBER = "91XXXXXXXXXX"; // Replace with your country code + phone number (without +)
// ============================

var posts = [
  {
    t: "Mastering Search Engine Optimization (SEO) in 2026",
    c: "SEO",
    e: "🔍",
    s: "Essential technical and on-page strategies to rank on Google search.",
    b: "<p>Search Engine Optimization continues to be the highest-ROI channel for long-term organic growth.</p><h3>Key Pillars of Modern SEO</h3><p><b>1) On-Page Optimization:</b> Align content intent with targeted user queries. <b>2) Technical Precision:</b> Ensure optimal core web vitals, mobile speed, and structured data schemas. <b>3) Authority Building:</b> Acquire high-quality backlinks and digital PR mentions.</p>"
  },
  {
    t: "Scaling E-Commerce Sales with Targeted Meta Ads",
    c: "Meta Ads",
    e: "📱",
    s: "A complete framework for Facebook & Instagram ad creative testing.",
    b: "<p>Meta Ads allow hyper-targeted advertising based on real-time interest and demographic data.</p><h3>Execution Framework</h3><p>1) Clear campaign objectives 2) Dynamic ad creatives testing 3) Pixel tracking & Conversions API 4) Retargeting custom audiences.</p>"
  },
  {
    t: "Google Ads vs Organic SEO: Strategic Comparison",
    c: "Google Ads",
    e: "🎯",
    s: "When to run search campaigns versus organic SEO investment.",
    b: "<p>Both Search Engine Optimization and Google PPC Ads serve distinct marketing funnel stages.</p><h3>Google PPC</h3><p>Delivers instantaneous traffic and high-intent sales conversion.</p><h3>SEO</h3><p>Builds compounding long-term domain authority and cost-effective organic leads.</p>"
  },
  {
    t: "Maximizing ROI with WhatsApp Marketing Automation",
    c: "WhatsApp",
    e: "💬",
    s: "Achieving 90%+ open rates with direct broadcast channels.",
    b: "<p>Direct messaging provides unparalleled engagement rates compared to traditional email marketing.</p><h3>Best Execution</h3><p>Send personalized offers, set up quick chatbot replies, and automate transactional notifications using official WhatsApp APIs.</p>"
  },
  {
    t: "High-Converting SMS Campaigns for Retail & B2B",
    c: "SMS Marketing",
    e: "✉️",
    s: "Instant delivery and high open rates for time-sensitive offers.",
    b: "<p>SMS marketing ensures immediate communication reach regardless of mobile internet connectivity.</p>"
  },
  {
    t: "The Direct Impact of Brand Visuals on Ad Conversion",
    c: "Graphic Design",
    e: "🎨",
    s: "How professional design builds brand trust and increases CTR.",
    b: "<p>High-quality brand visuals and ad creatives immediately grab user attention and double campaign conversion performance.</p>"
  }
];

function card(p, i) {
  return '<div class="card blog" onclick="location.hash=\'post-' + i + '\'">' +
            '<div class="th">' + p.e + '</div>' +
            '<div class="bd">' +
               '<small>' + p.c + '</small>' +
               '<h3>' + p.t + '</h3>' +
               '<p>' + p.s + '</p>' +
               '<b style="color:var(--p);font-size:.9rem;display:inline-block;margin-top:10px">Read Full Insight →</b>' +
            '</div>' +
         '</div>';
}

document.getElementById('homeBlogs').innerHTML = posts.slice(0, 3).map(card).join('');
document.getElementById('allBlogs').innerHTML = posts.map(card).join('');
document.getElementById('yr').textContent = new Date().getFullYear();

function show(id) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('show');
  });
  var targetPage = document.getElementById('p-' + id);
  if (targetPage) {
    targetPage.classList.add('show');
  }
}

function route() {
  var h = (location.hash || '#home').slice(1);
  var sec = null;
  document.getElementById('menu').classList.remove('open');

  if (h.indexOf('post-') === 0) {
    var p = posts[+h.split('-')[1]];
    if (p) {
      document.getElementById('postTitle').textContent = p.t;
      document.getElementById('postBody').innerHTML = p.b;
      show('post');
      window.scrollTo(0, 0);
      return;
    }
    h = 'blog';
  }

  // Handle Hash Section Links
  if (h === 'services' || h === 'portfolio' || h === 'pricing' || h === 'lead') {
    sec = h;
    h = 'home';
  }

  if (!document.getElementById('p-' + h)) {
    h = 'home';
  }

  show(h);

  document.querySelectorAll('.menu a').forEach(function(a) {
    var href = a.getAttribute('href');
    a.classList.toggle('act', href === '#' + h || href === '#' + sec);
  });

  if (sec) {
    setTimeout(function() {
      var targetElement = document.getElementById(sec);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  } else {
    window.scrollTo(0, 0);
  }
}

function sendLead(e) {
  e.preventDefault();
  var f = e.target;
  var m = "Hello Pixelize Media! 👋%0A*Name:* " + encodeURIComponent(f.name.value) +
          "%0A*Phone:* " + encodeURIComponent(f.phone.value) +
          "%0A*Email:* " + encodeURIComponent(f.email.value) +
          "%0A*Service:* " + encodeURIComponent(f.service.value) +
          "%0A*Message:* " + encodeURIComponent(f.msg.value);
  window.open("https://wa.me/" + WA_NUMBER + "?text=" + m, "_blank");
  alert("Thank you! Your growth inquiry has been forwarded to WhatsApp.");
  f.reset();
  return false;
}

document.getElementById('waBtn').href = "https://wa.me/" + WA_NUMBER;
window.addEventListener('hashchange', route);
route();