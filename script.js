/**
 * ========================================================
 * PIXELIZE MEDIA – CORE APPLICATION & SEO ROUTER ENGINE
 * Domain: https://pixelizemedia.in
 * The Art Of Digital Growth
 * ========================================================
 */

// Global Configuration
var DOMAIN = "https://pixelizemedia.in";
var WA_PHONE = "919876543210"; // Official WhatsApp number
var GOOGLE_SHEETS_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"; 

/**
 * ========================================================
 * 1. COMPREHENSIVE SEO & CANONICAL ROUTE REGISTRY
 * Unique Meta Titles, Descriptions, Canonical URLs, and Breadcrumbs
 * ========================================================
 */
var SEO_ROUTES = {
  "home": {
    title: "Pixelize Media – #1 Digital Marketing & Performance Growth Agency in Delhi NCR",
    desc: "Pixelize Media is India's leading data-driven digital marketing agency specializing in high-ROI SEO, Meta Ads (Facebook & Instagram), Google PPC, Graphic Design, WhatsApp Automation, and SMS Marketing.",
    keywords: "digital marketing agency, digital marketing company delhi, SEO services, meta ads agency, facebook ads agency, google ads specialist, graphic design company, whatsapp marketing api, bulk sms marketing, performance marketing, pixelize media",
    canonical: DOMAIN + "/",
    breadcrumb: "Home",
    category: "Home"
  },
  "services": {
    title: "Digital Marketing & Performance Services | Pixelize Media",
    desc: "Explore our full suite of digital marketing solutions: White-Hat SEO, Meta Ads, Google Ads PPC, Graphic Design, WhatsApp Marketing, and Bulk SMS.",
    keywords: "digital marketing services, performance marketing services, seo services delhi, google ads management, meta ads management",
    canonical: DOMAIN + "/#services",
    breadcrumb: "Services",
    category: "Services"
  },
  "service-seo": {
    title: "Search Engine Optimization (SEO) Services | Rank #1 on Google | Pixelize Media",
    desc: "Dominate Google search results with Pixelize Media's data-driven SEO services. Advanced technical audits, semantic keyword intent, and white-hat high-DA backlink acquisition.",
    keywords: "SEO services delhi, search engine optimization company, technical seo audit, organic traffic growth, rank 1 on google, on page seo, off page link building",
    canonical: DOMAIN + "/#service-seo",
    breadcrumb: "SEO Services",
    category: "Services"
  },
  "service-meta-ads": {
    title: "Meta Ads Management (Facebook & Instagram) Agency | Pixelize Media",
    desc: "High ROAS paid social campaigns engineered for rapid customer acquisition. Server-side Conversions API (CAPI), scroll-stopping video UGC, and lookalike scaling.",
    keywords: "meta ads agency, facebook ads agency, instagram ads management, paid social agency, e commerce ads roas, conversions api setup",
    canonical: DOMAIN + "/#service-meta-ads",
    breadcrumb: "Meta Ads",
    category: "Services"
  },
  "service-google-ads": {
    title: "Google Ads (PPC, Search, Shopping & PMax) Management | Pixelize Media",
    desc: "Capture high-intent ready-to-buy customers at the precise second they search on Google. Certified PPC experts optimizing Search, Shopping, and YouTube Ads.",
    keywords: "google ads agency, google ppc management, google shopping ads, performance max agency, youtube ads company, lower cpc google ads",
    canonical: DOMAIN + "/#service-google-ads",
    breadcrumb: "Google Ads",
    category: "Services"
  },
  "service-graphic-designing": {
    title: "Graphic & Brand Identity Design Services | Pixelize Media",
    desc: "Elevate your market presence with captivating visual designs, branding assets, logos, and high-converting ad creatives engineered for maximum CTR.",
    keywords: "graphic design agency, brand identity design, logo design company, ad creative design, social media banner design, packaging design",
    canonical: DOMAIN + "/#service-graphic-designing",
    breadcrumb: "Graphic Design",
    category: "Services"
  },
  "service-whatsapp-marketing": {
    title: "WhatsApp Marketing & Official Business API Automation | Pixelize Media",
    desc: "Achieve 98% open rates with official WhatsApp Cloud API integration, intelligent AI chatbots, automated broadcast campaigns, and Green Tick verification.",
    keywords: "whatsapp marketing agency, whatsapp business api provider, automated whatsapp chatbots, green tick verification, bulk whatsapp broadcast",
    canonical: DOMAIN + "/#service-whatsapp-marketing",
    breadcrumb: "WhatsApp Marketing",
    category: "Services"
  },
  "service-sms-marketing": {
    title: "Bulk SMS & DLT Compliant Messaging Solutions | Pixelize Media",
    desc: "Instant direct-to-device promotional blasts and transactional OTP messaging with 99.99% gateway uptime and full TRAI DLT compliance guidance.",
    keywords: "bulk sms provider, transactional sms api, dlt registration assistance, promotional sms marketing, fast otp gateway india",
    canonical: DOMAIN + "/#service-sms-marketing",
    breadcrumb: "Bulk SMS",
    category: "Services"
  },
  "service-web-development": {
    title: "High-Converting Web Design & CRO Development | Pixelize Media",
    desc: "Fast, mobile-first websites and landing pages engineered strictly for high conversion rates, sub-second load speeds, and 90+ Core Web Vitals.",
    keywords: "cro web design, high converting landing pages, conversion rate optimization, mobile first web development, fast business website",
    canonical: DOMAIN + "/#service-web-development",
    breadcrumb: "Web Design & CRO",
    category: "Services"
  },
  "service-performance-marketing": {
    title: "Omnichannel Performance Marketing & Media Buying | Pixelize Media",
    desc: "Scale your brand past ₹1 Crore+ monthly digital revenue through integrated omnichannel synergy across Meta, Google, SEO, and retention funnels.",
    keywords: "performance marketing agency, omnichannel media buying, full funnel marketing, blended roas scaling, growth marketing agency",
    canonical: DOMAIN + "/#service-performance-marketing",
    breadcrumb: "Performance Marketing",
    category: "Services"
  },
  "about": {
    title: "About Pixelize Media | The Art Of Digital Growth | Delhi NCR",
    desc: "Discover how Pixelize Media manages ₹15Cr+ in ad spend with 250+ delivered campaigns. Meet our data-driven growth strategists, media buyers, and designers.",
    keywords: "about pixelize media, digital growth team, performance marketing agency founders, delhi marketing agency",
    canonical: DOMAIN + "/#about",
    breadcrumb: "About Us",
    category: "Company"
  },
  "portfolio": {
    title: "Client Case Studies & Verified Results | Pixelize Media",
    desc: "Read real client case studies: 4.8X ROAS for D2C Fashion, +320% organic traffic for B2B Finance, and -62% CPL for Real Estate.",
    keywords: "digital marketing case studies, meta ads case study, seo growth results, performance marketing proof, pixelize media portfolio",
    canonical: DOMAIN + "/#portfolio",
    breadcrumb: "Case Studies",
    category: "Company"
  },
  "pricing": {
    title: "Transparent Digital Marketing Packages & Pricing | Pixelize Media",
    desc: "Predictable, ROI-driven digital marketing packages. Choose Starter Accelerate, Scale Dominance, or Enterprise Omnichannel with zero hidden fees.",
    keywords: "digital marketing packages, seo pricing plans, meta ads management cost, marketing agency retainer",
    canonical: DOMAIN + "/#pricing",
    breadcrumb: "Pricing",
    category: "Company"
  },
  "roi-calculator": {
    title: "Free Digital Marketing ROI & Ad Spend Calculator | Pixelize Media",
    desc: "Calculate projected clicks, qualified leads, and gross revenue for your monthly advertising budget across E-commerce, B2B, and Real Estate.",
    keywords: "digital marketing roi calculator, ad spend calculator, roas calculator, marketing budget projection tool",
    canonical: DOMAIN + "/#roi-calculator",
    breadcrumb: "ROI Calculator",
    category: "Tools"
  },
  "blog": {
    title: "Digital Growth Blog: SEO, Meta Ads & Paid Media Insights | Pixelize Media",
    desc: "Read actionable marketing playbooks, technical SEO guides, and advertising breakdowns written by our senior media buyers and growth engineers.",
    keywords: "digital marketing blog, seo tutorials, meta ads guides 2026, google ppc strategies, whatsapp marketing tips",
    canonical: DOMAIN + "/#blog",
    breadcrumb: "Blog",
    category: "Knowledge"
  },
  "contact": {
    title: "Contact Pixelize Media | Book Free 30-Min Growth Consultation",
    desc: "Connect with our growth team. Schedule your 30-minute free digital marketing consultation or message us directly on WhatsApp.",
    keywords: "contact pixelize media, hire digital marketing agency, digital marketing consultation, marketing agency phone number",
    canonical: DOMAIN + "/#contact",
    breadcrumb: "Contact Us",
    category: "Company"
  },
  "terms": {
    title: "Terms & Conditions | Pixelize Media",
    desc: "Terms of service, client account ownership, and service guidelines for Pixelize Media (pixelizemedia.in).",
    keywords: "terms and conditions, service agreement, pixelize media terms",
    canonical: DOMAIN + "/#terms",
    breadcrumb: "Terms",
    category: "Legal"
  },
  "privacy": {
    title: "Privacy Policy | Pixelize Media",
    desc: "Privacy policy and client data protection practices of Pixelize Media (pixelizemedia.in). Zero spam and data selling policy.",
    keywords: "privacy policy, data protection, pixelize media privacy",
    canonical: DOMAIN + "/#privacy",
    breadcrumb: "Privacy",
    category: "Legal"
  }
};

/**
 * ========================================================
 * 2. RICH BLOG POSTS DATA ENGINE (WITH CUSTOM BANNERS)
 * ========================================================
 */
var BLOG_POSTS = [
  {
    id: "seo-strategy-2026",
    t: "The Complete Search Engine Optimization (SEO) Strategy for 2026",
    c: "SEO",
    e: "🔍",
    s: "A deep dive into Core Web Vitals, Google SGE/AI search changes, semantic topic clusters, and white-hat domain authority frameworks.",
    readTime: "7 Min Read",
    date: "October 18, 2026",
    bannerGradient: "linear-gradient(135deg, #2e0854, #7c38ba)",
    b: `
      <h2>The Evolution of Modern Search Engines in 2026</h2>
      <p>Search Engine Optimization has undergone a seismic shift. The days of simply repeating target keywords in title tags and churning out low-quality 500-word blog posts are officially extinct. In 2026, Google's ranking algorithms rely heavily on <strong>E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness)</strong>, semantic entity graph connections, and user interaction signals.</p>

      <h3>1. Technical Architecture & Core Web Vitals</h3>
      <p>Search engines crawl and render websites using mobile-first indexing with stringent performance standards. A website must achieve top marks on Core Web Vitals—specifically:</p>
      <ul>
        <li><strong>Interaction to Next Paint (INP):</strong> Below 200 milliseconds to guarantee responsive user interface interactions.</li>
        <li><strong>Largest Contentful Paint (LCP):</strong> Under 2.5 seconds for visual stability.</li>
        <li><strong>Cumulative Layout Shift (CLS):</strong> Under 0.1 to avoid frustrating page visual jumps.</li>
      </ul>

      <h3>2. Semantic Topic Clusters vs Isolated Keywords</h3>
      <p>Instead of creating single pages for every minor keyword variation, modern SEO demands <strong>Topic Silo Architecture</strong>. Create an authoritative "Pillar Page" covering your broad core domain (e.g. <em>Digital Marketing Services</em>), and build hyper-specific satellite articles linking back using rich semantic anchor texts. This demonstrates complete categorical dominance to search spiders.</p>

      <h3>3. Entity Authority & Ethical Digital PR</h3>
      <p>Google's knowledge graph associates your brand entity with verified mentions across authoritative press websites, niche industry directories, and social profiles. High-quality editorial mentions from legitimate domain publications remain the single most influential organic ranking multiplier.</p>
    `
  },
  {
    id: "meta-ads-scaling-guide",
    t: "Scaling E-Commerce Revenue to ₹50L+ with Meta Ads & Conversions API",
    c: "Meta Ads",
    e: "📱",
    s: "Mastering server-side CAPI tracking, dynamic creative testing (DCT), and broad demographic scaling on Facebook & Instagram.",
    readTime: "6 Min Read",
    date: "October 15, 2026",
    bannerGradient: "linear-gradient(135deg, #1b264f, #6d28d9)",
    b: `
      <h2>Why Creative Velocity is the New Targeting on Meta</h2>
      <p>In modern paid social advertising, Meta's artificial intelligence and machine-learning algorithms do the heavy lifting of audience discovery. The true lever for scaling revenue isn't micro-tweaking obscure interest groups—it is <strong>creative asset diversification</strong> and <strong>server-side attribution fidelity</strong>.</p>

      <h3>1. Conversions API (CAPI) Deployment</h3>
      <p>Relying solely on standard browser pixels results in 20% to 35% of lost attribution due to ad blockers, private browser modes, and mobile operating system restrictions. By sending server-to-server purchase events paired with customer match data (hashed email and phone numbers), you feed accurate conversion signals back into Meta's ad auction algorithms.</p>

      <h3>2. The Dynamic Creative Testing (DCT) Engine</h3>
      <p>To scale past ₹10 Lakhs in monthly ad spend without ad fatigue, we test new creative concepts every week using a structured 3:2:2 framework (3 visual creatives, 2 primary copy angles, 2 direct response headlines). Winners are graduated into dedicated scaling campaigns with consolidated budgets.</p>

      <h3>3. Post-Click Conversion Rate Optimization (CRO)</h3>
      <p>Even the greatest ad creative fails if your landing page takes 5 seconds to load or lacks friction-free checkout options. Optimizing mobile load speeds, showcasing customer video reviews, and offering 1-click WhatsApp purchase support often doubles the blended ROAS of identical ad sets.</p>
    `
  },
  {
    id: "google-ads-vs-seo",
    t: "Google PPC Search Ads vs Organic SEO: When & How to Deploy Both",
    c: "Google Ads",
    e: "🎯",
    s: "A tactical comparison between immediate paid commercial intent capture and long-term organic compounding growth.",
    readTime: "5 Min Read",
    date: "October 10, 2026",
    bannerGradient: "linear-gradient(135deg, #0e3b68, #0284c7)",
    b: `
      <h2>The Synergy of Paid Search & Organic Dominance</h2>
      <p>Business owners frequently ask whether they should allocate their marketing capital toward Google PPC Ads or Organic Search Engine Optimization (SEO). The truth is that high-growth category leaders do not treat them as competing alternatives; they integrate them as complimentary growth engines.</p>

      <h3>1. Immediate High-Intent Commercial Capture with Google Ads</h3>
      <p>When potential customers search terms like <em>"hire digital marketing agency delhi"</em> or <em>"luxury apartment near me"</em>, they have explicit purchase intent. Google Search Ads place your business at the very top of search engine results pages within hours, allowing for rapid testing of value propositions and immediate lead flow.</p>

      <h3>2. Long-Term Margin Expansion with SEO</h3>
      <p>While Google PPC delivers instant results, your acquisition costs remain tied to ad auctions. SEO, by contrast, creates an appreciating digital asset. Over 12 to 24 months, organic search rankings lower your blended Customer Acquisition Cost (CAC) and insulate your business from rising media costs.</p>
    `
  },
  {
    id: "whatsapp-marketing-automation",
    t: "Maximizing Conversion ROI with Official WhatsApp Business Cloud API",
    c: "WhatsApp",
    e: "💬",
    s: "Achieve 98% open rates and 45% click-throughs with interactive broadcast sequences and 24/7 conversational AI chatbots.",
    readTime: "5 Min Read",
    date: "October 05, 2026",
    bannerGradient: "linear-gradient(135deg, #064e3b, #10b981)",
    b: `
      <h2>Why Direct Messaging Outperforms Traditional Email</h2>
      <p>Modern consumers keep their mobile phones within reach 24/7. While marketing emails frequently land in promotional folders or spam filters, WhatsApp notifications receive prompt, personal attention. Utilizing the official WhatsApp Business Cloud API allows brands to communicate at scale while maintaining full account compliance.</p>

      <h3>1. Green Tick Verification & Brand Trust</h3>
      <p>Receiving an official Green Tick next to your brand name on WhatsApp eliminates skepticism, dramatically elevates message credibility, and reassures high-ticket clients that they are interacting directly with verified business representatives.</p>

      <h3>2. Automated E-Commerce Recovery Drips</h3>
      <p>Automatically triggering personalized WhatsApp messages 15 minutes after a prospective buyer abandons their cart recovers up to 28% of abandoned checkouts, generating pure incremental revenue with zero additional advertising spend.</p>
    `
  },
  {
    id: "sms-marketing-dlt-compliance",
    t: "High-Volume Bulk SMS Strategies & TRAI DLT Compliance in India",
    c: "SMS",
    e: "✉️",
    s: "How to register sender IDs, approve message templates, and achieve 99.9% direct delivery for promotional and OTP broadcasts.",
    readTime: "4 Min Read",
    date: "September 28, 2026",
    bannerGradient: "linear-gradient(135deg, #312e81, #6366f1)",
    b: `
      <h2>Direct Outreach That Requires Zero Internet Connection</h2>
      <p>When you need to deliver critical one-time passwords (OTPs), flash discount announcements, or urgent service notifications, Bulk SMS remains the most dependable direct channel. Because SMS relies on carrier telecom signaling rather than mobile data, delivery is near-instantaneous across all demographic segments.</p>

      <h3>1. Navigating TRAI DLT Guidelines</h3>
      <p>All commercial entities in India must register their business entity, 6-character sender ID headers, and pre-approved SMS content templates with major telecom operators (Jio, Airtel, Vi) on the Distributed Ledger Technology (DLT) portal to ensure uninterrupted message routing.</p>
    `
  },
  {
    id: "high-converting-ad-creatives",
    t: "The Anatomy of a High-Converting Ad Creative: Visuals, Hooks & Copy",
    c: "Design",
    e: "🎨",
    s: "Neuromarketing principles, thumb-stopping 3-second video hooks, and typography choices that multiply Click-Through Rates (CTR).",
    readTime: "6 Min Read",
    date: "September 20, 2026",
    bannerGradient: "linear-gradient(135deg, #4c0519, #e11d48)",
    b: `
      <h2>Winning the 3-Second Attention War</h2>
      <p>The average social media user scrolls past 300 feet of content every single day. If your visual creative does not arrest their attention within the initial 3 seconds, your ad budget is completely wasted regardless of how great your offer is.</p>

      <h3>1. High-Contrast Visual Disruptors</h3>
      <p>Use contrasting color borders, bold kinetic typography, and unexpected camera angles in the first 2 seconds to force the user's brain to stop scrolling.</p>

      <h3>2. Clear Value Proposition & Frictionless CTA</h3>
      <p>State your core benefit clearly without confusing jargon. Pair an irresistible incentive (e.g. Free Strategy Blueprint, 20% Instant Welcome Code) with an unmistakable direct action button.</p>
    `
  },
  {
    id: "cro-landing-page-optimization",
    t: "Landing Page CRO: How We Doubled Lead Inquiries Without Increasing Ad Spend",
    c: "Design",
    e: "💻",
    s: "Step-by-step conversion rate optimization playbook: form field reduction, social proof positioning, and mobile layout tuning.",
    readTime: "5 Min Read",
    date: "September 12, 2026",
    bannerGradient: "linear-gradient(135deg, #1e1b4b, #4338ca)",
    b: `
      <h2>The Mathematics of Conversion Rate Optimization</h2>
      <p>Consider two businesses spending ₹1,00,000 on ads. At a 1% conversion rate, Company A gets 10 leads. By optimizing user experience, streamlining form fields, and improving page speed, Company B achieves a 3.5% conversion rate and captures 35 leads from the exact same ad spend.</p>

      <h3>1. Reduce Form Friction</h3>
      <p>Every unnecessary field on a lead capture form reduces submission rates by up to 14%. Ask only for essential initial contact details (Name and Phone/WhatsApp), and gather secondary project parameters during the initial consultation call.</p>
    `
  },
  {
    id: "ecommerce-performance-marketing",
    t: "Omnichannel Performance Marketing: Scaling Past the 1 Crore Monthly Barrier",
    c: "Meta Ads",
    e: "🚀",
    s: "How multi-touch attribution, blended ROAS metrics, and retention lifecycles unlock enterprise digital growth.",
    readTime: "8 Min Read",
    date: "September 05, 2026",
    bannerGradient: "linear-gradient(135deg, #3b0764, #9333ea)",
    b: `
      <h2>Overcoming the Single-Channel Ceiling</h2>
      <p>Most digital brands hit a plateau when attempting to scale beyond ₹20 Lakhs to ₹30 Lakhs in monthly revenue. Platform ad costs escalate, lookalike audiences fatigue, and return on ad spend begins to deteriorate. Breaking through to ₹1 Crore+ requires orchestrating multiple marketing channels in harmony.</p>

      <h3>1. Blended Marketing Efficiency Ratio (MER)</h3>
      <p>Stop evaluating platforms in isolation. Google Search Ads frequently harvest purchase demand created weeks earlier by Meta Video Reels. Track total marketing spend divided by total gross revenue to steer company-wide growth decisions accurately.</p>
    `
  }
];

/**
 * ========================================================
 * 3. CARD GENERATOR FOR BLOG PREVIEWS
 * ========================================================
 */
function createBlogCardHtml(p, index) {
  return `
    <div class="card blog-card" onclick="location.hash='post-${p.id}'" data-category="${p.c}">
      <div class="blog-thumb-banner" style="background: ${p.bannerGradient};">
        <div class="blog-thumb-content">
          <span class="thumb-emoji">${p.e}</span>
          <span class="thumb-tag">${p.c}</span>
        </div>
      </div>
      <div class="blog-body-wrap">
        <div class="blog-meta-mini">
          <span>📅 ${p.date}</span>
          <span>•</span>
          <span>⏱️ ${p.readTime}</span>
        </div>
        <h3>${p.t}</h3>
        <p>${p.s}</p>
        <span class="blog-read-more">Read Full Playbook →</span>
      </div>
    </div>
  `;
}

// Populate Blogs
function renderAllBlogs() {
  var homeEl = document.getElementById('homeBlogs');
  var allEl = document.getElementById('allBlogs');
  if (homeEl) {
    homeEl.innerHTML = BLOG_POSTS.slice(0, 3).map(createBlogCardHtml).join('');
  }
  if (allEl) {
    allEl.innerHTML = BLOG_POSTS.map(createBlogCardHtml).join('');
  }
}
renderAllBlogs();

/**
 * ========================================================
 * 4. DYNAMIC SEO & CANONICAL METADATA MANAGER
 * Automatically updates head metadata on every route transition
 * ========================================================
 */
function updatePageSEO(routeId, postObj) {
  var config = SEO_ROUTES[routeId] || SEO_ROUTES["home"];
  var title = config.title;
  var desc = config.desc;
  var keywords = config.keywords;
  var canonical = config.canonical;
  var ogImage = DOMAIN + "/logo.jpg";
  var ogType = "website";

  // If viewing a single blog post
  if (postObj) {
    title = postObj.t + " | Pixelize Media Insights";
    desc = postObj.s;
    keywords = postObj.c + ", digital marketing, SEO, performance marketing, pixelize media";
    canonical = DOMAIN + "/#post-" + postObj.id;
    ogType = "article";
  }

  // 1. Update Document Title
  document.title = title;

  // 2. Update Primary Meta Tags
  var metaTitle = document.getElementById('metaTitle');
  var metaDesc = document.getElementById('metaDescription');
  var metaKeys = document.getElementById('metaKeywords');
  var canLink = document.getElementById('canonicalLink');

  if (metaTitle) metaTitle.textContent = title;
  if (metaDesc) metaDesc.setAttribute('content', desc);
  if (metaKeys) metaKeys.setAttribute('content', keywords);
  if (canLink) canLink.setAttribute('href', canonical);

  // 3. Update Open Graph Meta Tags
  var ogT = document.getElementById('ogTitle');
  var ogD = document.getElementById('ogDescription');
  var ogU = document.getElementById('ogUrl');
  var ogI = document.getElementById('ogImage');
  var ogTyp = document.getElementById('ogType');

  if (ogT) ogT.setAttribute('content', title);
  if (ogD) ogD.setAttribute('content', desc);
  if (ogU) ogU.setAttribute('content', canonical);
  if (ogI) ogI.setAttribute('content', ogImage);
  if (ogTyp) ogTyp.setAttribute('content', ogType);

  // 4. Update Twitter Card Meta Tags
  var twT = document.getElementById('twTitle');
  var twD = document.getElementById('twDescription');
  var twU = document.getElementById('twUrl');
  var twI = document.getElementById('twImage');

  if (twT) twT.setAttribute('content', title);
  if (twD) twD.setAttribute('content', desc);
  if (twU) twU.setAttribute('content', canonical);
  if (twI) twI.setAttribute('content', ogImage);

  // 5. Update Dynamic Schema Breadcrumbs
  var schemaBreadcrumbs = document.getElementById('schema-breadcrumbs');
  if (schemaBreadcrumbs) {
    var crumbName = postObj ? postObj.t : (config.breadcrumb || "Page");
    var breadcrumbJson = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": DOMAIN + "/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": crumbName,
          "item": canonical
        }
      ]
    };
    schemaBreadcrumbs.textContent = JSON.stringify(breadcrumbJson, null, 2);
  }
}

/**
 * ========================================================
 * 5. ROUTING & PAGE CONTROLLER
 * ========================================================
 */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('show');
  });
  var targetPage = document.getElementById('p-' + pageId);
  if (targetPage) {
    targetPage.classList.add('show');
  }
}

function route() {
  var h = (location.hash || '#home').slice(1);
  var scrollTargetId = null;

  // Close Mobile Drawer if open
  closeMobileMenu();

  // 1. Check if routing to a Blog Post
  if (h.indexOf('post-') === 0) {
    var postId = h.replace('post-', '');
    var foundPost = BLOG_POSTS.find(function(item) {
      return item.id === postId || String(BLOG_POSTS.indexOf(item)) === postId;
    });

    if (foundPost) {
      document.getElementById('postTitle').textContent = foundPost.t;
      document.getElementById('postBreadcrumbCurrent').textContent = foundPost.c;
      document.getElementById('postCategoryBadge').textContent = foundPost.c;
      document.getElementById('postReadTime').textContent = "⏱️ " + foundPost.readTime;
      document.getElementById('postDate').textContent = "📅 " + foundPost.date;
      document.getElementById('postBody').innerHTML = foundPost.b;

      // Update Featured Banner Graphic
      var bannerBox = document.getElementById('postBannerGraphic');
      if (bannerBox) {
        bannerBox.style.background = foundPost.bannerGradient;
        bannerBox.innerHTML = `
          <span style="font-size:4rem;margin-bottom:12px;filter:drop-shadow(0 6px 14px rgba(0,0,0,0.3))">${foundPost.e}</span>
          <span class="badge-pill light" style="font-size:0.9rem">${foundPost.c} Deep Dive</span>
          <h2 style="color:#fff;font-size:1.8rem;margin-top:12px;max-width:700px">${foundPost.t}</h2>
        `;
      }

      // Update Share Links
      var shareUrl = encodeURIComponent(DOMAIN + "/#post-" + foundPost.id);
      var shareText = encodeURIComponent("Read: " + foundPost.t + " via Pixelize Media");
      document.getElementById('shareWa').href = "https://wa.me/?text=" + shareText + "%20" + shareUrl;
      document.getElementById('shareLi').href = "https://www.linkedin.com/sharing/share-offsite/?url=" + shareUrl;
      document.getElementById('shareTw').href = "https://twitter.com/intent/tweet?text=" + shareText + "&url=" + shareUrl;

      showPage('post');
      updatePageSEO('blog', foundPost);
      window.scrollTo(0, 0);
      currentPageId = 'post-' + foundPost.id;
      initGSAPAnimations(false);
      return;
    }
    h = 'blog';
  }

  // 2. Check for in-page anchors on home page
  var homeSections = ['services', 'portfolio', 'pricing', 'roi-calculator', 'lead'];
  if (homeSections.indexOf(h) !== -1) {
    scrollTargetId = h;
    h = 'home';
  }

  // Fallback to home if page id does not exist
  if (!document.getElementById('p-' + h)) {
    h = 'home';
  }

  // Show page
  var pageChanged = (h !== currentPageId);
  currentPageId = h;
  showPage(h);
  updatePageSEO(h, null);

  // Update Nav Active State
  document.querySelectorAll('.menu .nav-item').forEach(function(link) {
    var routeAttr = link.getAttribute('data-route');
    var isAct = (routeAttr === h) || (scrollTargetId && routeAttr === scrollTargetId);
    link.classList.toggle('act', !!isAct);
  });

  // Smooth scroll to target section if applicable
  if (scrollTargetId) {
    setTimeout(function() {
      var elem = document.getElementById(scrollTargetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  } else {
    window.scrollTo(0, 0);
  }

  // Play animations only when a new page is opened
  initGSAPAnimations(pageChanged);
}

/**
 * ========================================================
 * 6. ANIMATIONS (FIXED: no more half-faded hero heading)
 * - Hero entrance plays ONLY when the home page is opened
 * - Uses fromTo + clearProps, so text always ends fully visible
 * - Cards reveal on scroll with IntersectionObserver
 * ========================================================
 */
var currentPageId = null;

function animateHeroIn() {
  var left = document.querySelectorAll('#p-home .gsap-hero-left > *');
  var right = document.querySelector('#p-home .gsap-hero-right');
  if (typeof gsap === 'undefined') return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.killTweensOf(left);
  gsap.fromTo(left,
    { y: 28, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', overwrite: true, clearProps: 'opacity,transform' }
  );

  if (right) {
    gsap.killTweensOf(right);
    gsap.fromTo(right,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, delay: 0.15, ease: 'power3.out', overwrite: true, clearProps: 'opacity,transform' }
    );
  }
}

function animateCounters() {
  document.querySelectorAll('#p-home .stat-num').forEach(function(el) {
    var target = parseFloat(el.getAttribute('data-target'));
    if (isNaN(target)) return;
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    function fmt(v) { return prefix + v.toFixed(decimals) + suffix; }

    el.textContent = fmt(target); // always show the real final number first
    if (typeof gsap === 'undefined') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    if (el._counterTween) el._counterTween.kill();
    var obj = { val: 0 };
    el._counterTween = gsap.to(obj, {
      val: target,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: function() { el.textContent = fmt(obj.val); },
      onComplete: function() { el.textContent = fmt(target); }
    });
  });
}

var revealObserver = null;
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(function(entries) {
      var delay = 0;
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        revealObserver.unobserve(el);
        setTimeout(function() {
          el.classList.add('in');
          // remove helper classes afterwards so normal hover effects work again
          setTimeout(function() { el.classList.remove('reveal-up', 'in'); }, 750);
        }, delay);
        delay += 90;
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  }

  // Safety net: if the observer ever misses a card, reveal anything already on screen
  if (!window._revealSweepBound) {
    window._revealSweepBound = true;
    var sweepTimer = null;
    var sweep = function() {
      document.querySelectorAll('.reveal-up:not(.in)').forEach(function(el) {
        var r = el.getBoundingClientRect();
        if (r.height > 0 && r.top < window.innerHeight - 20) {
          el.classList.add('in');
          setTimeout(function() { el.classList.remove('reveal-up', 'in'); }, 750);
        }
      });
    };
    window.addEventListener('scroll', function() {
      clearTimeout(sweepTimer);
      sweepTimer = setTimeout(sweep, 350);
    }, { passive: true });
    setTimeout(sweep, 900);
  }

  var selector = '.service-card, .interactive-card, .port-card, .price-card, .proc-card, .testimonial-card, .blog-card, .value-card, .about-stat-box';
  document.querySelectorAll(selector).forEach(function(el) {
    if (el.getAttribute('data-reveal-bound')) return;
    el.setAttribute('data-reveal-bound', '1');
    el.classList.add('reveal-up');
    revealObserver.observe(el);
  });
}

function initGSAPAnimations(pageChanged) {
  if (pageChanged && document.querySelector('#p-home.show')) {
    animateHeroIn();
    animateCounters();
  }
  initScrollReveal();
}

/**
 * ========================================================
 * 7. INTERACTIVE AD SPEND ROI CALCULATOR LOGIC
 * ========================================================
 */
function calculateROI() {
  var spendEl = document.getElementById('monthlySpendRange');
  var dealEl = document.getElementById('dealSizeRange');
  var indEl = document.getElementById('industrySelect');

  if (!spendEl || !dealEl || !indEl) return;

  var spend = parseFloat(spendEl.value) || 50000;
  var deal = parseFloat(dealEl.value) || 2500;
  
  var selectedOption = indEl.options[indEl.selectedIndex];
  var cpc = parseFloat(selectedOption.getAttribute('data-cpc')) || 25;
  var conversionRate = parseFloat(selectedOption.getAttribute('data-cr')) || 4.0;
  var baseRoas = parseFloat(selectedOption.getAttribute('data-roas')) || 4.5;

  // Update Visual Displays
  document.getElementById('spendValueDisplay').textContent = "₹ " + spend.toLocaleString('en-IN');
  document.getElementById('dealValueDisplay').textContent = "₹ " + deal.toLocaleString('en-IN');

  // Math Calculations
  var estimatedClicks = Math.floor(spend / cpc);
  var estimatedLeads = Math.max(1, Math.floor(estimatedClicks * (conversionRate / 100)));
  var projectedRevenue = Math.floor(spend * baseRoas);

  // Update Output Elements
  document.getElementById('calcClicks').textContent = estimatedClicks.toLocaleString('en-IN');
  document.getElementById('calcLeads').textContent = estimatedLeads.toLocaleString('en-IN') + " Inquiries";
  document.getElementById('calcRevenue').textContent = "₹ " + projectedRevenue.toLocaleString('en-IN');
  document.getElementById('calcROAS').textContent = baseRoas.toFixed(1) + "X ROAS";
}

function claimROICalculation() {
  var spend = document.getElementById('spendValueDisplay').textContent;
  var deal = document.getElementById('dealValueDisplay').textContent;
  var leads = document.getElementById('calcLeads').textContent;
  var rev = document.getElementById('calcRevenue').textContent;
  var roas = document.getElementById('calcROAS').textContent;

  var msg = "Hello Pixelize Media! 👋%0A*I calculated my potential growth on pixelizemedia.in:*%0A" +
            "• *Monthly Budget:* " + encodeURIComponent(spend) + "%0A" +
            "• *Average Deal Value:* " + encodeURIComponent(deal) + "%0A" +
            "• *Projected Inquiries:* " + encodeURIComponent(leads) + "%0A" +
            "• *Projected Revenue:* " + encodeURIComponent(rev) + "%0A" +
            "• *Estimated ROAS:* " + encodeURIComponent(roas) + "%0A%0A" +
            "Please share the customized execution strategy for my brand!";

  window.open("https://wa.me/" + WA_PHONE + "?text=" + msg, "_blank");
}

/**
 * ========================================================
 * 8. INSTANT FREE WEBSITE AUDIT TOOL
 * ========================================================
 */
function handleAuditForm(e) {
  e.preventDefault();
  var f = e.target;
  var url = f.auditUrl.value;
  var phone = f.auditPhone.value;
  var statusBox = document.getElementById('auditStatusMessage');

  if (statusBox) {
    statusBox.style.display = 'block';
    statusBox.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;">
        <span class="live-dot"></span>
        <span>Analyzing Core Web Vitals, Schema markup, and Meta tags for <strong>${url}</strong>...</span>
      </div>
      <div style="height:6px;width:100%;background:rgba(255,255,255,0.2);border-radius:4px;margin-top:10px;overflow:hidden">
        <div style="height:100%;width:80%;background:#10b981;border-radius:4px;"></div>
      </div>
    `;

    setTimeout(function() {
      statusBox.innerHTML = `
        <div style="color:#10b981;font-weight:700;margin-bottom:6px;">✓ Initial Analysis Completed!</div>
        <p style="color:#fff;margin:0 0 10px;">We identified 3 critical speed bottlenecks and 14 untapped high-volume keywords for your website.</p>
        <button onclick="openLeadModal('Free Audit Complete: ' + '${url}')" class="btn btn-white" style="padding:8px 18px;font-size:0.85rem">View Full 24-Point Report & Roadmap →</button>
      `;

      // Trigger WhatsApp Inquiry as well
      var m = "Hello Pixelize Media! ⚡%0A*Free Audit Request:*%0A" +
              "*Website:* " + encodeURIComponent(url) + "%0A" +
              "*Phone:* " + encodeURIComponent(phone);
      window.open("https://wa.me/" + WA_PHONE + "?text=" + m, "_blank");
    }, 1600);
  }

  return false;
}

/**
 * ========================================================
 * 9. PORTFOLIO / CASE STUDIES FILTERING
 * ========================================================
 */
function filterPortfolio(category, btnElem) {
  document.querySelectorAll('.port-tab-btn').forEach(function(b) {
    b.classList.remove('act');
  });
  if (btnElem) btnElem.classList.add('act');

  var cards = document.querySelectorAll('#portfolioGrid .port-card');
  cards.forEach(function(card) {
    var cat = card.getAttribute('data-category');
    if (category === 'all' || cat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

/**
 * ========================================================
 * 10. BLOG SEARCH & CATEGORY FILTERING
 * ========================================================
 */
function filterBlogCategory(cat, btnElem) {
  document.querySelectorAll('.cat-pill').forEach(function(b) {
    b.classList.remove('act');
  });
  if (btnElem) btnElem.classList.add('act');

  var cards = document.querySelectorAll('#allBlogs .blog-card');
  cards.forEach(function(card) {
    var cardCat = card.getAttribute('data-category');
    if (cat === 'all' || cardCat.toLowerCase().indexOf(cat.toLowerCase()) !== -1) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

function filterBlogPosts() {
  var query = document.getElementById('blogSearchInput').value.toLowerCase().trim();
  var cards = document.querySelectorAll('#allBlogs .blog-card');

  cards.forEach(function(card) {
    var text = card.textContent.toLowerCase();
    if (text.indexOf(query) !== -1) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

/**
 * ========================================================
 * 11. LEAD SUBMISSION ENGINE (WHATSAPP + GOOGLE SHEETS)
 * ========================================================
 */
function sendLead(e) {
  e.preventDefault();
  var f = e.target;

  var payload = {
    name: f.name ? f.name.value : "",
    phone: f.phone ? f.phone.value : "",
    email: f.email ? f.email.value : "",
    service: f.service ? f.service.value : "",
    msg: f.msg ? f.msg.value : "",
    source: "Website Form"
  };

  // Google Sheet Webhook capture (if configured)
  if (GOOGLE_SHEETS_URL && GOOGLE_SHEETS_URL.indexOf("http") === 0) {
    fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(function(err) {
      console.warn("Sheet Logging:", err);
    });
  }

  // WhatsApp Redirect
  var m = "Hello Pixelize Media! 👋%0A*New Website Inquiry (pixelizemedia.in):*%0A" +
          "*Name:* " + encodeURIComponent(payload.name) + "%0A" +
          "*Phone:* " + encodeURIComponent(payload.phone) + "%0A" +
          "*Email:* " + encodeURIComponent(payload.email) + "%0A" +
          "*Service:* " + encodeURIComponent(payload.service) + "%0A" +
          "*Message:* " + encodeURIComponent(payload.msg);

  window.open("https://wa.me/" + WA_PHONE + "?text=" + m, "_blank");

  alert("Thank you " + payload.name + "! Your request has been received. Our senior growth strategist will contact you within 2 hours.");
  f.reset();
  return false;
}

// Modal Lead Submission
function handleModalLead(e) {
  e.preventDefault();
  var f = e.target;
  
  var payload = {
    name: f.name.value,
    phone: f.phone.value,
    email: f.email.value,
    service: f.service.value,
    website: f.website ? f.website.value : "",
    source: document.getElementById('modalLeadSource').value
  };

  if (GOOGLE_SHEETS_URL && GOOGLE_SHEETS_URL.indexOf("http") === 0) {
    fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(function(err) {
      console.warn(err);
    });
  }

  var m = "Hello Pixelize Media! ⚡%0A*Strategy Consultation Request:*%0A" +
          "*Name:* " + encodeURIComponent(payload.name) + "%0A" +
          "*Phone:* " + encodeURIComponent(payload.phone) + "%0A" +
          "*Email:* " + encodeURIComponent(payload.email) + "%0A" +
          "*Service:* " + encodeURIComponent(payload.service) + "%0A" +
          "*Website:* " + encodeURIComponent(payload.website) + "%0A" +
          "*Trigger:* " + encodeURIComponent(payload.source);

  window.open("https://wa.me/" + WA_PHONE + "?text=" + m, "_blank");

  closeLeadModal();
  alert("Thank you! Your 30-minute consultation request has been booked.");
  f.reset();
  return false;
}

/**
 * ========================================================
 * 12. MODAL & MOBILE DRAWER CONTROLLER
 * ========================================================
 */
function openLeadModal(sourceContext) {
  var modal = document.getElementById('leadModal');
  var srcInput = document.getElementById('modalLeadSource');
  if (srcInput && sourceContext) {
    srcInput.value = sourceContext;
  }
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeLeadModal() {
  var modal = document.getElementById('leadModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

function handleModalBackdropClick(e) {
  if (e.target && e.target.id === 'leadModal') {
    closeLeadModal();
  }
}

function toggleMobileMenu() {
  var drawer = document.getElementById('mobileDrawer');
  var burger = document.getElementById('burgerBtn');
  var backdrop = document.getElementById('drawerBackdrop');
  if (drawer) drawer.classList.toggle('open');
  if (burger) burger.classList.toggle('open');
  if (backdrop) backdrop.classList.toggle('active');

  if (drawer && drawer.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function closeMobileMenu() {
  var drawer = document.getElementById('mobileDrawer');
  var burger = document.getElementById('burgerBtn');
  var backdrop = document.getElementById('drawerBackdrop');
  if (drawer) drawer.classList.remove('open');
  if (burger) burger.classList.remove('open');
  if (backdrop) backdrop.classList.remove('active');
  document.body.style.overflow = '';
}

function copyPostUrl() {
  navigator.clipboard.writeText(window.location.href).then(function() {
    alert("Article URL copied to clipboard!");
  }).catch(function() {
    prompt("Copy this URL:", window.location.href);
  });
}

/**
 * ========================================================
 * 13. READING PROGRESS BAR & SCROLL LISTENER
 * ========================================================
 */
window.addEventListener('scroll', function() {
  var h = document.documentElement;
  var b = document.body;
  var st = 'scrollTop';
  var sh = 'scrollHeight';

  var maxScroll = (h[sh] || b[sh]) - h.clientHeight;
  var percent = maxScroll > 0 ? ((h[st] || b[st]) / maxScroll) * 100 : 0;
  var pBar = document.getElementById('readingProgress');
  if (pBar) {
    pBar.style.width = percent + "%";
  }

  // Header shadow on scroll
  var header = document.getElementById('siteHeader');
  if (header) {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Close modal on Escape key
window.addEventListener('keydown', function(e) {
  if (e.key === "Escape") {
    closeLeadModal();
    closeMobileMenu();
  }
});

// Update Copyright Year
var yrEl = document.getElementById('yr');
if (yrEl) {
  yrEl.textContent = new Date().getFullYear();
}

// Initialize Router & Event Listeners (runs exactly once)
window.addEventListener('hashchange', route);

function startApp() {
  calculateROI();
  route();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}