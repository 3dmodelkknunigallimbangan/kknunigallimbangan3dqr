const fs = require("fs");

const trees = [
  {
    id: "aren",
    name: "Pohon Aren",
    latin: "Arenga pinnata",
    family: "Arecaceae",
    accent: "#00ffc8",
    ar: 0,
    ag: 1,
    ab: 0.78,
    bg: "#050a0f",
    trunk: "#5c4a3a",
    leaf: "#2d8a4e",
    type: "palm",
    tagline: "Si Penghasil Gula Nusantara",
    stats: [
      { l: "Tinggi", v: "12-20m" },
      { l: "Umur", v: "25-30thn" },
      { l: "Altitude", v: "0-1400mdpl" },
      { l: "Hujan", v: "1200-3500mm" },
    ],
    hotspots: [
      {
        id: "daun",
        label: "DAUN MENYIRIP",
        pos: [0, 3.8, 0],
        end: [3, 4.5, 0],
        brief: "Daun pinnate 5-8 meter",
        detail:
          "Daun aren berbentuk menyirip (pinnate) dengan panjang 5-8 meter. Lidi dari tulang daun digunakan untuk membuat sapu. Helai daunnya untuk anyaman dan pembungkus makanan tradisional. Satu pohon memiliki 20-30 helai daun aktif.",
      },
      {
        id: "nira",
        label: "NIRA & GULA",
        pos: [0, 2.5, 0],
        end: [-3.2, 3.0, 0],
        brief: "Penghasil nira 10-20 liter/hari",
        detail:
          "Tangkai bunga aren menghasilkan nira yang diolah menjadi gula aren (gula merah), gula semut, atau difermentasi menjadi tuak dan cuka. Satu pohon menghasilkan 10-20 liter nira per hari selama 3-5 bulan masa sadap. Gula aren memiliki indeks glikemik rendah.",
      },
      {
        id: "ijuk",
        label: "IJUK (FIBER)",
        pos: [0, 1.5, 0],
        end: [3.2, 1.2, 0],
        brief: "Serat hitam tahan 50 tahun",
        detail:
          "Ijuk adalah serat hitam menyelimuti batang aren. Sangat tahan air, cuaca, dan asam. Digunakan untuk atap rumah tradisional, tali tambang, filter air, dan kuas. Ijuk aren bisa bertahan hingga 50 tahun tanpa perawatan khusus.",
      },
      {
        id: "tepung",
        label: "TEPUNG & PATI",
        pos: [0, 0.3, 0],
        end: [-3, 0, 0],
        brief: "50-100 kg tepung per batang",
        detail:
          "Batang aren mengandung pati dalam jumlah besar yang diolah menjadi tepung aren. Digunakan untuk cendol, dawet, kolak, dan berbagai jajanan tradisional. Satu batang dewasa menghasilkan 50-100 kg tepung berkualitas tinggi.",
      },
      {
        id: "akar",
        label: "SISTEM AKAR",
        pos: [0, -0.8, 0],
        end: [3, -1.5, 0],
        brief: "Penahan erosi & longsor",
        detail:
          "Akar serabut aren sangat kuat dan mampu menahan erosi tanah di lereng bukit. Sering ditanam di daerah rawan longsor sebagai bioengineering alami. Akar juga menjaga ketersediaan air tanah di musim kemarau.",
      },
    ],
  },
  {
    id: "mahoni",
    name: "Pohon Mahoni",
    latin: "Swietenia mahagoni",
    family: "Meliaceae",
    accent: "#ff6b35",
    ar: 1,
    ag: 0.42,
    ab: 0.21,
    bg: "#0a0604",
    trunk: "#6b3a1f",
    leaf: "#3a7a2e",
    type: "broad",
    tagline: "Raja Kayu Premium Dunia",
    stats: [
      { l: "Tinggi", v: "15-40m" },
      { l: "Umur", v: "50-100+thn" },
      { l: "Altitude", v: "0-1000mdpl" },
      { l: "Hujan", v: "1000-3000mm" },
    ],
    hotspots: [
      {
        id: "tajuk",
        label: "TAJUK RINDANG",
        pos: [0, 4.2, 0],
        end: [3, 5, 0],
        brief: "Diameter tajuk hingga 15 meter",
        detail:
          "Tajuk mahoni berbentuk kubah dengan diameter hingga 15 meter. Daun majemuk menyirip genap dengan 4-6 pasang anak daun. Memberikan keteduhan luas, menyerap CO2, dan memfilter polusi udara perkotaan secara efektif.",
      },
      {
        id: "buah",
        label: "BUAH KAPSUL",
        pos: [0, 3.0, 0],
        end: [-3.2, 3.5, 0],
        brief: "Biji bersayap terbang tertiup angin",
        detail:
          "Buah mahoni berbentuk kapsul oval berkayu, ukuran 8-12 cm. Saat matang pecah melepaskan 40-60 biji bersayap yang disebarkan angin. Biji mengandung swietenin untuk pengobatan tradisional: diabetes, malaria, dan hipertensi.",
      },
      {
        id: "kayu",
        label: "KAYU PREMIUM",
        pos: [0, 1.5, 0],
        end: [3.2, 1.0, 0],
        brief: "Kayu kelas I dunia",
        detail:
          "Kayu mahoni termasuk kelas I dunia. Warna cokelat kemerahan khas, serat halus dan seragam, tahan rayap dan jamur. Digunakan untuk furniture mewah, alat musik (gitar, piano), panel kapal, dan interior premium. Harga kayu Rp 8-15 juta/m³.",
      },
      {
        id: "kulit",
        label: "KULIT OBAT",
        pos: [0, 0.3, 0],
        end: [-3, -0.3, 0],
        brief: "Anti-malaria & anti-inflamasi",
        detail:
          "Kulit kayu mahoni mengandung swietenin, flavonoid, dan saponin. Memiliki sifat anti-malaria, anti-inflamasi, dan antioksidan kuat. Rebusan kulit kayu secara tradisional digunakan untuk menurunkan demam dan mengobati diare.",
      },
      {
        id: "akar",
        label: "AKAR TUNGGANG",
        pos: [0, -0.8, 0],
        end: [3, -1.5, 0],
        brief: "Menembus tanah sangat dalam",
        detail:
          "Sistem akar tunggang mahoni menembus tanah sangat dalam (5-10 meter), menjadikannya tahan angin kencang dan kekeringan ekstrem. Akarnya membantu menyimpan cadangan air tanah dan stabilisasi lereng dari erosi.",
      },
    ],
  },
  {
    id: "pace",
    name: "Pohon Pace",
    latin: "Morinda citrifolia",
    family: "Rubiaceae",
    accent: "#39ff14",
    ar: 0.22,
    ag: 1,
    ab: 0.08,
    bg: "#040a04",
    trunk: "#5a5040",
    leaf: "#4a9a3e",
    type: "small",
    tagline: "Farmasi Hidup dari Alam",
    stats: [
      { l: "Tinggi", v: "3-10m" },
      { l: "Umur", v: "20-50thn" },
      { l: "Altitude", v: "0-1500mdpl" },
      { l: "Hujan", v: "500-3000mm" },
    ],
    hotspots: [
      {
        id: "daun",
        label: "DAUN LEBAR",
        pos: [0, 3.2, 0],
        end: [2.8, 4, 0],
        brief: "Daun tunggal mengkilap 20-40cm",
        detail:
          "Daun pace berbentuk elips lebar (20-40 cm), tebal dan mengkilap hijau tua. Mengandung flavonoid, antioksidan, dan protein. Daun muda digunakan sebagai lalapan, pembungkus makanan, dan bahan jamu tradisional Jawa.",
      },
      {
        id: "buah",
        label: "BUAH SUPERFOOD",
        pos: [0, 2.2, 0],
        end: [-3, 2.8, 0],
        brief: "150+ senyawa bioaktif",
        detail:
          "Buah pace mengandung xeronine, scopoletin, damnacanthal, dan 150+ senyawa bioaktif. Terbukti secara ilmiah memiliki sifat anti-kanker, anti-diabetes, anti-bakteri, anti-inflamasi, dan meningkatkan sistem imun. Dikonsumsi sebagai jus atau suplemen.",
      },
      {
        id: "bunga",
        label: "BUNGA TABUNG",
        pos: [0, 2.8, 0],
        end: [3, 3.2, 0],
        brief: "Berbunga & berbuah sepanjang tahun",
        detail:
          "Pace berbunga dan berbuah sepanjang tahun (eververing). Bunga berbentuk tabung putih muncul dari kepala bunga bulat. Satu pohon menghasilkan buah setiap minggu secara bergantian, menjadikannya sumber obat yang berkelanjutan.",
      },
      {
        id: "akar",
        label: "AKAR PEWARNA",
        pos: [0, -0.5, 0],
        end: [-2.8, -1.2, 0],
        brief: "Pewarna alami batik tradisional",
        detail:
          "Akar pace menghasilkan pigmen morindone dan alizarin berwarna merah/kuning. Sejak berabad-abad digunakan sebagai pewarna alami batik tradisional, tenun ikat, dan tekstil nusantara. Pewarna pace tahan luntur dan ramah lingkungan.",
      },
      {
        id: "batang",
        label: "BATANG PESISIR",
        pos: [0, 0.8, 0],
        end: [2.8, 0.3, 0],
        brief: "Kayu tahan air laut",
        detail:
          "Batang pace berdiameter 15-30 cm, kayunya keras dan sangat tahan terhadap air laut. Digunakan untuk tiang perahu, gagang alat pertanian, dan konstruksi di daerah pesisir. Pace juga tahan terhadap angin kencang pantai.",
      },
    ],
  },
  {
    id: "akasia",
    name: "Pohon Akasia",
    latin: "Acacia auriculiformis",
    family: "Fabaceae",
    accent: "#ffcc00",
    ar: 1,
    ag: 0.8,
    ab: 0,
    bg: "#0a0800",
    trunk: "#6b5a3a",
    leaf: "#5a8a2e",
    type: "broad",
    tagline: "Pejuang Rehabilitasi Lahan Kritis",
    stats: [
      { l: "Tinggi", v: "15-30m" },
      { l: "Umur", v: "30-50thn" },
      { l: "Altitude", v: "0-800mdpl" },
      { l: "Hujan", v: "600-2500mm" },
    ],
    hotspots: [
      {
        id: "phyl",
        label: "PHYLLODE",
        pos: [0, 4, 0],
        end: [3, 4.8, 0],
        brief: "Tangkai daun melebar = daun semu",
        detail:
          "Akasia auriculiformis memiliki phyllode — tangkai daun yang melebar dan berfungsi sebagai daun. Bentuknya melengkung seperti telinga (auriculiformis = bentuk telinga). Adaptasi brilian ini mengurangi penguapan air di musim kering hingga 60%.",
      },
      {
        id: "bunga",
        label: "BUNGA SPIKE",
        pos: [0, 3.2, 0],
        end: [-3.2, 3.5, 0],
        brief: "Bunga kuning penghasil madu premium",
        detail:
          "Bunga akasia berbentuk spike berwarna kuning cerah sepanjang 7-10 cm, sangat menarik bagi lebah dan serangga penyerbuk. Madu dari bunga akasia adalah salah satu jenis madu paling premium — jernih, lembut, dan lambat mengkristal.",
      },
      {
        id: "biji",
        label: "POLONG SPIRAL",
        pos: [0, 2.2, 0],
        end: [3.2, 1.8, 0],
        brief: "Biji bertahan bertahun-tahun",
        detail:
          "Buah akasia berupa polong yang melilit spiral unik saat kering. Biji hitam dikelilingi funikulus oranye yang menarik burung sebagai penyebar biji. Biji memiliki kulit keras dan bisa dormant bertahun-tahun di tanah menunggu kondisi ideal.",
      },
      {
        id: "nitro",
        label: "FIKSASI NITROGEN",
        pos: [0, -0.5, 0],
        end: [-2.8, -1.3, 0],
        brief: "+50-100 kg N/hektar/tahun",
        detail:
          "Akar akasia bersimbiosis dengan bakteri Rhizobium di bintil akar. Bakteri ini mengubah nitrogen udara (N₂) menjadi amonium (NH₄⁺) yang menyuburkan tanah. Menambahkan 50-100 kg nitrogen/hektar/tahun — setara pupuk urea Rp 2 juta!",
      },
      {
        id: "kayu",
        label: "KAYU CEPAT",
        pos: [0, 1, 0],
        end: [3, 0.5, 0],
        brief: "Tumbuh 3-5 meter per tahun",
        detail:
          "Akasia termasuk pohon dengan pertumbuhan tercepat di dunia: 3-5 meter per tahun. Kayunya digunakan untuk industri pulp (kertas), papan partikel, dan biomassa energi. Bisa dipanen dalam rotasi singkat 6-8 tahun.",
      },
    ],
  },
  {
    id: "alpukat",
    name: "Pohon Alpukat",
    latin: "Persea americana",
    family: "Lauraceae",
    accent: "#00e5ff",
    ar: 0,
    ag: 0.9,
    ab: 1,
    bg: "#040810",
    trunk: "#5a4a3a",
    leaf: "#3a8a4a",
    type: "broad",
    tagline: "Superfood dari Pohon Tropis",
    stats: [
      { l: "Tinggi", v: "10-20m" },
      { l: "Umur", v: "50-100+thn" },
      { l: "Altitude", v: "200-1500mdpl" },
      { l: "Hujan", v: "1200-2000mm" },
    ],
    hotspots: [
      {
        id: "tajuk",
        label: "TAJUK EVERGREEN",
        pos: [0, 4.2, 0],
        end: [3, 5, 0],
        brief: "Hijau dan rindang sepanjang tahun",
        detail:
          "Alpukat adalah pohon evergreen dengan tajuk rapat dan lebat. Daun berbentuk elips panjang 12-25 cm, mengeluarkan aroma khas saat diremas. Tajuknya yang padat menjadikannya pohon peneduh excellent dan penyerap karbon efektif.",
      },
      {
        id: "buah",
        label: "BUAH SUPERFOOD",
        pos: [0, 3, 0],
        end: [-3.2, 3.5, 0],
        brief: "77% lemak sehat + 20 vitamin",
        detail:
          "Buah alpukat mengandung 77% lemak tak jenuh tunggal (asam oleat) yang excellent untuk jantung. Kaya vitamin K (26% AKG), folat (20%), vitamin C (17%), potasium (14%), dan serat (27% AKG). Satu pohon dewasa menghasilkan 200-500 buah per musim.",
      },
      {
        id: "bunga",
        label: "BUNGA DIKOGAMI",
        pos: [0, 3.6, 0],
        end: [3.2, 4, 0],
        brief: "Sistem penyerbukan unik Tipe A & B",
        detail:
          "Alpukat memiliki sistem dichogamy — bunga membuka dua kali: sekali sebagai betina, sekali sebagai jantan, di hari berbeda. Varietas dibagi Tipe A (Hass) dan Tipe B (Fuerte). Menanam keduanya berdekatan meningkatkan hasil panen 40-60%.",
      },
      {
        id: "batang",
        label: "BATANG KOKOH",
        pos: [0, 1, 0],
        end: [-3, 0.5, 0],
        brief: "Diameter hingga 60 cm",
        detail:
          "Batang alpukat tumbuh tegak dengan diameter hingga 60 cm pada pohon dewasa. Kulit kayu abu-abu kecokelatan, sedikit pecah-pecah pada pohon tua. Kayunya lunak dan ringan, cocok untuk kerajinan tangan dan peti kemas.",
      },
      {
        id: "akar",
        label: "AKAR SENSITIF",
        pos: [0, -0.8, 0],
        end: [3, -1.5, 0],
        brief: "Anti-genangan air",
        detail:
          "Sistem perakaran alpukat relatif dangkal dan menyebar lebar. Sangat sensitif terhadap genangan air — membutuhkan drainase tanah yang baik. Tanah tergenang >48 jam menyebabkan busuk akar Phytophthora yang bisa membunuh pohon dewasa.",
      },
    ],
  },
];

function gen(t) {
  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
<title>${t.name} — 3D Explorer | KKN 2025</title>
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;700;900&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:100%;height:100%;overflow:hidden;background:${t.bg};font-family:'Rajdhani',sans-serif;color:#e0e0e0;user-select:none;touch-action:none}
canvas{display:block;position:fixed;top:0;left:0;z-index:1}
.scan{position:fixed;inset:0;pointer-events:none;z-index:2;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.07) 2px,rgba(0,0,0,0.07) 4px)}

/* HUD corners */
.hc{position:fixed;width:35px;height:35px;z-index:10;pointer-events:none}
.hc::before,.hc::after{content:'';position:absolute;background:${t.accent}}
.h1{top:12px;left:12px}.h1::before{width:18px;height:2px}.h1::after{width:2px;height:18px}
.h2{top:12px;right:12px}.h2::before{right:0;width:18px;height:2px}.h2::after{right:0;width:2px;height:18px}
.h3{bottom:12px;left:12px}.h3::before{bottom:0;width:18px;height:2px}.h3::after{bottom:0;width:2px;height:18px}
.h4{bottom:12px;right:12px}.h4::before{bottom:0;right:0;width:18px;height:2px}.h4::after{bottom:0;right:0;width:2px;height:18px}

/* Title */
.title{position:fixed;top:15px;left:50%;transform:translateX(-50%);z-index:10;text-align:center;pointer-events:none}
.title h1{font-family:'Orbitron',monospace;font-size:clamp(.85rem,3vw,1.4rem);font-weight:900;color:${t.accent};text-shadow:0 0 20px ${t.accent}66,0 0 40px ${t.accent}33;letter-spacing:3px;text-transform:uppercase}
.title .sub{font-size:clamp(.55rem,1.5vw,.7rem);color:#666;letter-spacing:2px;margin-top:2px}

/* Stats bar */
.sbar{position:fixed;bottom:15px;left:50%;transform:translateX(-50%);z-index:10;display:flex;gap:2px;pointer-events:none}
.si{background:rgba(0,0,0,0.75);border:1px solid ${t.accent}33;padding:7px 12px;text-align:center;backdrop-filter:blur(8px)}
.si:first-child{border-radius:6px 0 0 6px}.si:last-child{border-radius:0 6px 6px 0}
.si .l{font-size:.5rem;color:${t.accent};text-transform:uppercase;letter-spacing:1.5px;font-family:'Orbitron',monospace}
.si .v{font-size:.75rem;font-weight:700;margin-top:1px;color:#fff}

/* Hotspot labels */
.hl{position:fixed;z-index:10;cursor:pointer;pointer-events:auto;transition:all .3s;opacity:0;animation:fadeIn .6s forwards}
@keyframes fadeIn{to{opacity:1}}
.hd{width:10px;height:10px;border-radius:50%;background:${t.accent};box-shadow:0 0 10px ${t.accent}88,0 0 25px ${t.accent}44;position:absolute;top:50%;left:0;transform:translateY(-50%);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{box-shadow:0 0 10px ${t.accent}88}50%{box-shadow:0 0 20px ${t.accent}cc,0 0 40px ${t.accent}66}}
.ht{margin-left:18px;background:rgba(0,0,0,0.8);border:1px solid ${t.accent}44;border-left:2px solid ${t.accent};padding:5px 12px;font-family:'Orbitron',monospace;font-size:clamp(.5rem,1.2vw,.6rem);letter-spacing:1px;color:${t.accent};text-transform:uppercase;white-space:nowrap;backdrop-filter:blur(10px);transition:all .3s}
.hl:hover .ht{background:rgba(0,0,0,0.95);border-color:${t.accent};color:#fff;box-shadow:0 0 15px ${t.accent}33}

/* Detail panel */
.dp{position:fixed;top:50%;right:-420px;transform:translateY(-50%);width:min(380px,85vw);max-height:80vh;z-index:20;background:rgba(5,5,15,0.94);border:1px solid ${t.accent}44;border-right:none;border-radius:16px 0 0 16px;backdrop-filter:blur(20px);transition:right .5s cubic-bezier(.16,1,.3,1);overflow:hidden;display:flex;flex-direction:column}
.dp.open{right:0}
.dp-h{padding:22px 22px 14px;border-bottom:1px solid ${t.accent}22;flex-shrink:0}
.dp-h h2{font-family:'Orbitron',monospace;font-size:.85rem;color:${t.accent};letter-spacing:2px;text-transform:uppercase;text-shadow:0 0 10px ${t.accent}44}
.dp-h .br{font-size:.82rem;color:#999;margin-top:6px;line-height:1.4}
.dp-b{padding:18px 22px 22px;font-size:.88rem;line-height:1.8;color:#bbb;overflow-y:auto;flex:1}
.dp-b .div{width:35px;height:2px;background:${t.accent}44;margin-bottom:12px}
.dp-x{position:absolute;top:10px;right:10px;width:30px;height:30px;background:rgba(255,255,255,0.05);border:1px solid ${t.accent}33;border-radius:6px;color:${t.accent};font-size:1.1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;z-index:5}
.dp-x:hover{background:${t.accent}22;border-color:${t.accent}}

/* Controls hint */
.ch{position:fixed;bottom:55px;left:50%;transform:translateX(-50%);z-index:10;font-size:.55rem;color:#444;letter-spacing:1px;font-family:'Orbitron',monospace;text-align:center;pointer-events:none}

/* Back */
.back{position:fixed;top:15px;left:15px;z-index:15;background:rgba(0,0,0,0.6);border:1px solid ${t.accent}33;color:${t.accent};padding:7px 14px;border-radius:6px;font-family:'Orbitron',monospace;font-size:.6rem;letter-spacing:1px;cursor:pointer;text-decoration:none;transition:all .3s;backdrop-filter:blur(10px)}
.back:hover{background:${t.accent}22;border-color:${t.accent}}

/* Tagline */
.tagline{position:fixed;top:50px;left:50%;transform:translateX(-50%);z-index:10;font-size:.7rem;color:#555;pointer-events:none;font-style:italic;text-align:center;width:90%;letter-spacing:1px}

/* Loading */
.ld{position:fixed;inset:0;background:${t.bg};z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .8s}
.ld.done{opacity:0;pointer-events:none}
.ld-r{width:50px;height:50px;border:2px solid ${t.accent}22;border-top-color:${t.accent};border-radius:50%;animation:spin 1s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.ld-t{margin-top:15px;font-family:'Orbitron',monospace;font-size:.65rem;color:${t.accent};letter-spacing:3px}

@media(max-width:500px){.si{padding:5px 8px}.si .l{font-size:.45rem}.si .v{font-size:.65rem}.dp{border-radius:12px 0 0 12px}}
</style>
</head>
<body>
<div class="ld" id="ld"><div class="ld-r"></div><div class="ld-t">INITIALIZING</div></div>
<div class="scan"></div>
<div class="hc h1"></div><div class="hc h2"></div><div class="hc h3"></div><div class="hc h4"></div>
<a href="index.html" class="back">‹ BACK</a>
<div class="title"><h1>${t.name}</h1><div class="sub">${t.latin} · ${t.family}</div></div>
<div class="tagline">"${t.tagline}"</div>
<div class="sbar">${t.stats.map((s) => `<div class="si"><div class="l">${s.l}</div><div class="v">${s.v}</div></div>`).join("")}</div>
<div class="ch">DRAG ROTATE · SCROLL ZOOM · CLICK NODE → INFO</div>
<div id="hc"></div>
<div class="dp" id="dp">
  <button class="dp-x" onclick="closeP()">✕</button>
  <div class="dp-h"><h2 id="dt"></h2><div class="br" id="db"></div></div>
  <div class="dp-b"><div class="div"></div><p id="dd"></p></div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
<script>
const AC=new THREE.Color(${t.ar},${t.ag},${t.ab}),AH='${t.accent}',BG='${t.bg}',TT='${t.type}';
const HD=${JSON.stringify(t.hotspots)};

// Scene
const sc=new THREE.Scene();sc.background=new THREE.Color(BG);sc.fog=new THREE.FogExp2(BG,0.035);
const cam=new THREE.PerspectiveCamera(50,innerWidth/innerHeight,0.1,100);
cam.position.set(5,3,7);cam.lookAt(0,1.5,0);
const ren=new THREE.WebGLRenderer({antialias:true});
ren.setSize(innerWidth,innerHeight);ren.setPixelRatio(Math.min(devicePixelRatio,2));
ren.shadowMap.enabled=true;ren.shadowMap.type=THREE.PCFSoftShadowMap;
ren.toneMapping=THREE.ACESFilmicToneMapping;ren.toneMappingExposure=1.2;
document.body.prepend(ren.domElement);

// Lights
sc.add(new THREE.AmbientLight(0x334455,0.6));
const dl=new THREE.DirectionalLight(0xffeedd,1);dl.position.set(5,8,5);dl.castShadow=true;
dl.shadow.mapSize.set(1024,1024);dl.shadow.camera.near=0.5;dl.shadow.camera.far=30;
dl.shadow.camera.left=-8;dl.shadow.camera.right=8;dl.shadow.camera.top=8;dl.shadow.camera.bottom=-8;
sc.add(dl);
const rl=new THREE.PointLight(AC,0.8,15);rl.position.set(-3,5,-3);sc.add(rl);
const bg=new THREE.PointLight(AC,0.3,8);bg.position.set(0,-1,0);sc.add(bg);

// Grid
const gm=new THREE.LineBasicMaterial({color:AC,transparent:true,opacity:0.12});
for(let i=-10;i<=10;i++){
  sc.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(i,-1,-10),new THREE.Vector3(i,-1,10)]),gm));
  sc.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-10,-1,i),new THREE.Vector3(10,-1,i)]),gm));
}
// Ground glow
const gg=new THREE.Mesh(new THREE.CircleGeometry(4,64),new THREE.MeshBasicMaterial({color:AC,transparent:true,opacity:0.05,side:THREE.DoubleSide}));
gg.rotation.x=-Math.PI/2;gg.position.y=-0.99;sc.add(gg);

// Hexagonal platform
const hexShape = new THREE.Shape();
for(let i=0;i<6;i++){const a=i*Math.PI/3-Math.PI/6;hexShape.lineTo(Math.cos(a)*2.5,Math.sin(a)*2.5);}
const hexGeo=new THREE.ShapeGeometry(hexShape);
const hexMat=new THREE.MeshBasicMaterial({color:AC,transparent:true,opacity:0.04,side:THREE.DoubleSide});
const hex=new THREE.Mesh(hexGeo,hexMat);hex.rotation.x=-Math.PI/2;hex.position.y=-0.98;sc.add(hex);
// Hex outline
const hexPts=[];for(let i=0;i<=6;i++){const a=i*Math.PI/3-Math.PI/6;hexPts.push(new THREE.Vector3(Math.cos(a)*2.5,-0.97,Math.sin(a)*2.5));}
sc.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(hexPts),new THREE.LineBasicMaterial({color:AC,transparent:true,opacity:0.25})));

// Rotating ring
const ringGeo=new THREE.TorusGeometry(3,0.01,8,64);
const ringMat=new THREE.MeshBasicMaterial({color:AC,transparent:true,opacity:0.2});
const ring=new THREE.Mesh(ringGeo,ringMat);ring.rotation.x=Math.PI/2;ring.position.y=-0.95;sc.add(ring);

// Tree
const tg=new THREE.Group();
function mkTrunk(h,rb,rt,s){
  const m=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,s||8),new THREE.MeshStandardMaterial({color:'${t.trunk}',roughness:0.85,metalness:0.1}));
  m.castShadow=true;m.receiveShadow=true;return m;
}
function mkLeaf(r,d,y,x,z){
  const g=new THREE.IcosahedronGeometry(r,d||1);const p=g.attributes.position;
  for(let i=0;i<p.count;i++){p.setX(i,p.getX(i)+(Math.random()-.5)*.3);p.setY(i,p.getY(i)+(Math.random()-.5)*.3);p.setZ(i,p.getZ(i)+(Math.random()-.5)*.3);}
  const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:'${t.leaf}',roughness:0.65,metalness:0.05,flatShading:true}));
  m.position.set(x||0,y,z||0);m.castShadow=true;return m;
}

if(TT==='palm'){
  for(let i=0;i<12;i++){const t=i/12;const s=mkTrunk(0.5,0.18-t*0.06,0.16-t*0.06,6);
    s.position.set(Math.sin(t*Math.PI*.8)*.3,i*.45,Math.sin(t*2)*.1);s.rotation.z=Math.sin(t*Math.PI)*.08;tg.add(s);}
  for(let i=0;i<8;i++){const a=(i/8)*Math.PI*2;const fl=2+Math.random()*.8;
    const f=mkTrunk(fl,0.04,0.01,4);f.position.set(Math.cos(a)*.5+.3,5.2+Math.random()*.3,Math.sin(a)*.5);
    f.rotation.z=Math.cos(a)*1;f.rotation.x=Math.sin(a)*1;tg.add(f);
    for(let j=0;j<3;j++){const lt=(j+1)/3;tg.add(mkLeaf(.35-j*.08,0,5.2+Math.sin(lt)*.5+Math.random()*.3,Math.cos(a)*(.5+lt*fl*.4)+.3,Math.sin(a)*(.5+lt*fl*.4)));}}
  tg.add(mkLeaf(.6,1,5.5,.3,0));
}else if(TT==='small'){
  const tr=mkTrunk(3,.2,.12);tr.position.y=.5;tg.add(tr);
  for(let i=0;i<5;i++){const a=(i/5)*Math.PI*2+Math.random()*.5;const b=mkTrunk(1.5,.06,.02,4);
    b.position.set(Math.cos(a)*.2,1.5+i*.3,Math.sin(a)*.2);b.rotation.z=Math.cos(a)*.6;b.rotation.x=Math.sin(a)*.6;tg.add(b);}
  [[0,3.2,0,1.2],[-.8,2.8,.5,.9],[.7,3,-.4,.85],[0,2.5,-.7,.8],[-.5,3.5,-.3,.7],[.5,2.6,.6,.75]].forEach(([x,y,z,r])=>tg.add(mkLeaf(r,1,y,x,z)));
}else{
  const tr=mkTrunk(4,.28,.15);tr.position.y=1;tg.add(tr);
  [{a:.3,h:2.5,l:2.5,t:.7},{a:1.8,h:2.8,l:2.2,t:.6},{a:3.5,h:2.3,l:2.8,t:.8},{a:5,h:3,l:2,t:.5},{a:4.2,h:2.6,l:2.3,t:.65}]
    .forEach(b=>{const br=mkTrunk(b.l,.08,.03,5);br.position.set(Math.cos(b.a)*.3,b.h,Math.sin(b.a)*.3);br.rotation.z=Math.cos(b.a)*b.t;br.rotation.x=Math.sin(b.a)*b.t;tg.add(br);});
  [[0,4.5,0,1.5],[-1.2,4,.8,1.1],[1,3.8,-.6,1.2],[.5,4.8,.5,1],[-.6,3.5,-1,1],[0,3.6,1.2,.9],[1.3,4.2,.3,.85],[-1,4.6,-.5,.95]]
    .forEach(([x,y,z,r])=>tg.add(mkLeaf(r,1,y,x,z)));
}
tg.position.y=-1;sc.add(tg);

// Annotation lines
const lm=new THREE.LineBasicMaterial({color:AC,transparent:true,opacity:0.5});
const h3d=[];
HD.forEach(h=>{
  const s=new THREE.Vector3(h.pos[0],h.pos[1]-1,h.pos[2]);
  const e=new THREE.Vector3(h.end[0],h.end[1]-1,h.end[2]);
  const m=new THREE.Vector3((s.x+e.x)/2+(Math.random()-.5)*.2,(s.y+e.y)/2,(s.z+e.z)/2);
  sc.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([s,m,e]),lm));
  const d1=new THREE.Mesh(new THREE.SphereGeometry(.06,8,8),new THREE.MeshBasicMaterial({color:AC}));d1.position.copy(s);sc.add(d1);
  const d2=new THREE.Mesh(new THREE.SphereGeometry(.05,8,8),new THREE.MeshBasicMaterial({color:AC}));d2.position.copy(e);sc.add(d2);
  h3d.push({pt:e,d:h});
});

// Particles
const pc=100,pg=new THREE.BufferGeometry(),pp=new Float32Array(pc*3),ps=[];
for(let i=0;i<pc;i++){pp[i*3]=(Math.random()-.5)*18;pp[i*3+1]=Math.random()*10-2;pp[i*3+2]=(Math.random()-.5)*18;ps.push(.002+Math.random()*.008);}
pg.setAttribute('position',new THREE.BufferAttribute(pp,3));
sc.add(new THREE.Points(pg,new THREE.PointsMaterial({color:AC,size:.04,transparent:true,opacity:0.4})));

// Orbit
let drag=false,pm={x:0,y:0},sp={th:0.8,ph:1.2,r:9},tgt=new THREE.Vector3(0,1.5,0);
function upCam(){
  cam.position.x=tgt.x+sp.r*Math.sin(sp.ph)*Math.cos(sp.th);
  cam.position.y=tgt.y+sp.r*Math.cos(sp.ph);
  cam.position.z=tgt.z+sp.r*Math.sin(sp.ph)*Math.sin(sp.th);
  cam.lookAt(tgt);
}
ren.domElement.addEventListener('pointerdown',e=>{drag=true;pm={x:e.clientX,y:e.clientY}});
window.addEventListener('pointerup',()=>drag=false);
ren.domElement.addEventListener('pointermove',e=>{if(!drag)return;sp.th-=(e.clientX-pm.x)*.008;sp.ph=Math.max(.3,Math.min(2.8,sp.ph+(e.clientY-pm.y)*.008));pm={x:e.clientX,y:e.clientY}});
ren.domElement.addEventListener('wheel',e=>{sp.r=Math.max(4,Math.min(18,sp.r+e.deltaY*.01))},{passive:true});
let td=0;
ren.domElement.addEventListener('touchstart',e=>{if(e.touches.length===2){const dx=e.touches[0].clientX-e.touches[1].clientX,dy=e.touches[0].clientY-e.touches[1].clientY;td=Math.sqrt(dx*dx+dy*dy)}},{passive:true});
ren.domElement.addEventListener('touchmove',e=>{if(e.touches.length===2){const dx=e.touches[0].clientX-e.touches[1].clientX,dy=e.touches[0].clientY-e.touches[1].clientY,d=Math.sqrt(dx*dx+dy*dy);sp.r=Math.max(4,Math.min(18,sp.r+(td-d)*.03));td=d}},{passive:true});
upCam();

// 2D labels
const hc=document.getElementById('hc'),labels=[];
h3d.forEach((h,i)=>{
  const el=document.createElement('div');el.className='hl';el.style.animationDelay=i*.15+'s';
  el.innerHTML='<div class="hd"></div><div class="ht">'+h.d.label+'</div>';
  el.onclick=()=>openP(h.d);hc.appendChild(el);labels.push({el,pt:h.pt});
});
function proj(p){const v=p.clone().project(cam);return{x:(v.x*.5+.5)*innerWidth,y:(-v.y*.5+.5)*innerHeight,z:v.z}}
function upLabels(){labels.forEach(l=>{const s=proj(l.pt);if(s.z>1||s.z<-1){l.el.style.display='none'}else{l.el.style.display='block';l.el.style.left=s.x+'px';l.el.style.top=s.y+'px'}})}

// Detail panel
const dp=document.getElementById('dp');
function openP(d){document.getElementById('dt').textContent=d.label;document.getElementById('db').textContent=d.brief;document.getElementById('dd').textContent=d.detail;dp.classList.add('open')}
function closeP(){dp.classList.remove('open')}
window.closeP=closeP;
ren.domElement.addEventListener('click',e=>{if(!e.target.closest('.hl')&&!e.target.closest('.dp'))closeP()});

// Animate
let t=0;
function anim(){
  requestAnimationFrame(anim);t+=.01;
  if(!drag)sp.th+=.0015;
  upCam();
  const p=pg.attributes.position;for(let i=0;i<pc;i++){p.array[i*3+1]+=ps[i];if(p.array[i*3+1]>8)p.array[i*3+1]=-2}p.needsUpdate=true;
  lm.opacity=.35+Math.sin(t*2)*.15;
  tg.rotation.z=Math.sin(t*.5)*.015;tg.rotation.x=Math.cos(t*.3)*.008;
  ring.rotation.z=t*.3;
  gg.material.opacity=.04+Math.sin(t*1.5)*.02;
  upLabels();ren.render(sc,cam);
}
window.addEventListener('resize',()=>{cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();ren.setSize(innerWidth,innerHeight)});
setTimeout(()=>{document.getElementById('ld').classList.add('done');anim()},800);
<\/script>
</body>
</html>`;
}

trees.forEach((t) => {
  fs.writeFileSync("/home/claude/project/" + t.id + ".html", gen(t));
  console.log("✅ " + t.id + ".html (" + t.name + ")");
});
console.log("\\n🔥 All 5 cyberpunk 3D pages generated!");
