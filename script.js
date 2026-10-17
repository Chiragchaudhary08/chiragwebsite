// ====== CONFIGURATION ======
var WA_NUMBER = "91XXXXXXXXXX"; // Replace with your WhatsApp number (country code without +)
var GOOGLE_SHEET_WEB_APP_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"; 
// ============================

var posts = [
  {
    t: "The Complete Search Engine Optimization Strategy for 2026",
    c: "SEO",
    e: "🔍",
    s: "A deep dive into Core Web Vitals, AI search engines, technical audits, and organic ranking frameworks.",
    b: "<p>Search Engine Optimization (SEO) has evolved rapidly. Modern search algorithms prioritize user intent, content depth, technical speed, and natural entity relationships.</p><h3>1. Technical Foundation</h3><p>Ensuring fast loading times, proper Schema structure, zero indexing errors, and clean site architecture is essential for search bots to index your site efficiently.</p><h3>2. Semantic Keyword Optimization</h3><p>Search engines now parse semantic meaning rather than basic keyword repetition. Focus on comprehensive content coverage that answers user questions thoroughly.</p><h3>3. Domain Authority & Strategic Outreach</h3><p>High-quality editorial backlinks remain vital for building domain authority on Google. Focus on niche-relevant PR outreach and authoritative guest contributions.</p>"
  },
  {
    t: "Scaling E-Commerce Sales with Meta Ads & Conversions API",
    c: "Meta Ads",
    e: "📱",
    s: "How to setup CAPI, optimize dynamic creative testing, and achieve high ROAS on Facebook & Instagram.",
    b: "<p>Scaling paid media on Facebook and Instagram requires structured creative testing and accurate server-side data attribution.</p><h3>1. Conversions API (CAPI) Integration</h3><p>Server-side tracking bypasses browser tracking limitations to pass accurate sales conversion data back to Meta's optimization algorithms.</p><h3>2. High-Converting Ad Creative Framework</h3><p>Test multiple ad formats—including UGC videos, carousel feature displays, and dynamic product catalog ads—to find winning creative variations.</p>"
  },
  {
    t: "Google PPC Search Ads vs Organic SEO: Maximizing Growth",
    c: "Google Ads",
    e: "🎯",
    s: "Understanding when to deploy pay-per-click search ads versus investing in long-term organic ranking.",
    b: "<p>Both Google PPC Ads and Search Engine Optimization play vital roles in an omnichannel digital strategy.</p><h3>1. Immediate Intent Capture with Google PPC</h3><p>Google Search Ads capture immediate transactional buyers, allowing startups to generate instant sales inquiries.</p><h3>2. Compounding Growth with SEO</h3><p>While SEO takes time to build momentum, it generates sustainable organic traffic at a fraction of paid PPC costs over the long term.</p>"
  },
  {
    t: "Maximizing Conversion ROI with WhatsApp Business API",
    c: "WhatsApp",
    e: "💬",
    s: "Achieve 90%+ open rates with automated broadcast sequences and AI chatbots.",
    b: "<p>Direct messaging channels provide unmatched customer engagement rates compared to traditional email broadcasts.</p><h3>1. Broadcast Sequences & Dynamic Buttons</h3><p>Send personalized promotional announcements with clickable call-to-action buttons directly into customer inboxes.</p><h3>2. 24/7 Conversational AI Support</h3><p>Automate lead qualification and FAQ handling with intelligent WhatsApp chatbots that operate continuously.</p>"
  },
  {
    t: "High-Volume Bulk SMS Marketing & DLT Compliance",
    c: "SMS Marketing",
    e: "✉️",
    s: "Deploying high-speed promotional and transactional SMS broadcasts across global networks.",
    b: "<p>Bulk SMS provides instant direct-to-device delivery for time-sensitive announcements, flash sales, and transactional OTP verifications.</p>"
  },
  {
    t: "The Role of High-Impact Visual Branding in Ad Performance",
    c: "Graphic Design",
    e: "🎨",
    s: "How professional graphic design increases click-through rates and lowers cost per acquisition.",
    b: "<p>Eye-catching ad creative designs capture immediate user attention in busy social feeds, significantly improving Click-Through Rates (CTR) and driving down customer acquisition costs.</p>"
  }
];

function card(p, i) {
  return '<div class="card blog" onclick="location.hash=\'post-' + i + '\'">' +
            '<div class="th">' + p.e + '</div>' +
            '<div class="bd">' +
               '<small>' + p.c + '</small>' +
               '<h3>' + p.t + '</h3>' +
               '<p>' + p.s + '</p>' +
               '<b style="color:var(--p);font-size:.9rem;display:inline-block;margin-top:10px">Read Full Article →</b>' +
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

  // Handle Hash Links
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

// LEAD SUBMISSION (GOOGLE SHEET CAPTURE + WHATSAPP REDIRECT)
function sendLead(e) {
  e.preventDefault();
  var f = e.target;
  
  var payload = {
    name: f.name.value,
    phone: f.phone.value,
    email: f.email.value,
    service: f.service.value,
    msg: f.msg.value
  };

  // 1. Submit Data to Google Sheets Web App
  if (GOOGLE_SHEET_WEB_APP_URL && GOOGLE_SHEET_WEB_APP_URL !== "https://script.google.com/macros/s/AKfycby7KsdKXgMSJkMzudIVz2CaWi0dGqbRTufUcvJ4znCO7UeP008JrZxzzM648bioFbqHfA/exec") {
    fetch(GOOGLE_SHEET_WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(function(err) {
      console.error("Google Sheet Logging Error: ", err);
    });
  }

  // 2. Format WhatsApp Message and Open Window
  var m = "Hello Pixelize Media! 👋%0A*New Website Inquiry:*%0A" +
          "*Name:* " + encodeURIComponent(payload.name) + "%0A" +
          "*Phone:* " + encodeURIComponent(payload.phone) + "%0A" +
          "*Email:* " + encodeURIComponent(payload.email) + "%0A" +
          "*Service:* " + encodeURIComponent(payload.service) + "%0A" +
          "*Message:* " + encodeURIComponent(payload.msg);

  window.open("https://wa./" + WA_NUMBER + "?text=" + m, "_blank");

  alert("Thank you! Your details have been submitted and logged successfully.");
  f.reset();
  return false;
}

document.getElementById('waBtn').href = "https://wa.me/" + WA_NUMBER;
window.addEventListener('hashchange', route);
route();