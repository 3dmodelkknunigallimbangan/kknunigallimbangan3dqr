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
    trunkH: "0x6B4E37",
    trunkL: "0x4A3425",
    leafH: "0x2E8B4E",
    leafL: "0x1B5E32",
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
        pos: [0, 4.8, 0],
        end: [3.5, 5.5, 0],
        brief: "Daun pinnate 5-8 meter",
        detail:
          "Daun aren berbentuk menyirip (pinnate) dengan panjang 5-8 meter. Lidi dari tulang daun digunakan untuk membuat sapu. Helai daunnya untuk anyaman dan pembungkus makanan tradisional. Satu pohon memiliki 20-30 helai daun aktif.",
      },
      {
        id: "nira",
        label: "NIRA & GULA",
        pos: [0, 3.5, 0],
        end: [-3.5, 4.0, 0],
        brief: "Penghasil nira 10-20 liter/hari",
        detail:
          "Tangkai bunga aren menghasilkan nira yang diolah menjadi gula aren (gula merah), gula semut, atau difermentasi menjadi tuak dan cuka. Satu pohon menghasilkan 10-20 liter nira per hari selama 3-5 bulan masa sadap.",
      },
      {
        id: "ijuk",
        label: "IJUK (FIBER)",
        pos: [0, 2.0, 0],
        end: [3.5, 1.5, 0],
        brief: "Serat hitam tahan 50 tahun",
        detail:
          "Ijuk adalah serat hitam menyelimuti batang aren. Sangat tahan air, cuaca, dan asam. Digunakan untuk atap rumah tradisional, tali tambang, filter air, dan kuas. Ijuk aren bisa bertahan hingga 50 tahun.",
      },
      {
        id: "tepung",
        label: "TEPUNG & PATI",
        pos: [0, 0.8, 0],
        end: [-3.5, 0.3, 0],
        brief: "50-100 kg tepung per batang",
        detail:
          "Batang aren mengandung pati dalam jumlah besar yang diolah menjadi tepung aren. Digunakan untuk cendol, dawet, kolak, dan berbagai jajanan tradisional. Satu batang dewasa menghasilkan 50-100 kg tepung.",
      },
      {
        id: "akar",
        label: "SISTEM AKAR",
        pos: [0, -0.8, 0],
        end: [3.5, -1.5, 0],
        brief: "Penahan erosi & longsor",
        detail:
          "Akar serabut aren sangat kuat dan mampu menahan erosi tanah di lereng bukit. Sering ditanam di daerah rawan longsor sebagai bioengineering alami dan penjaga ketersediaan air tanah.",
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
    trunkH: "0x7A4A2A",
    trunkL: "0x5C3218",
    leafH: "0x3D8C3A",
    leafL: "0x2A6628",
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
        pos: [0, 5.0, 0],
        end: [3.5, 5.8, 0],
        brief: "Diameter tajuk hingga 15 meter",
        detail:
          "Tajuk mahoni berbentuk kubah dengan diameter hingga 15 meter. Daun majemuk menyirip genap dengan 4-6 pasang anak daun. Memberikan keteduhan luas, menyerap CO2, dan memfilter polusi udara perkotaan.",
      },
      {
        id: "buah",
        label: "BUAH KAPSUL",
        pos: [0, 3.8, 0],
        end: [-3.5, 4.3, 0],
        brief: "Biji bersayap terbang tertiup angin",
        detail:
          "Buah mahoni berbentuk kapsul oval berkayu, ukuran 8-12 cm. Saat matang pecah melepaskan 40-60 biji bersayap yang disebarkan angin. Biji mengandung swietenin untuk pengobatan tradisional.",
      },
      {
        id: "kayu",
        label: "KAYU PREMIUM",
        pos: [0, 2.0, 0],
        end: [3.5, 1.5, 0],
        brief: "Kayu kelas I dunia",
        detail:
          "Kayu mahoni termasuk kelas I dunia. Warna cokelat kemerahan khas, serat halus dan seragam, tahan rayap dan jamur. Digunakan untuk furniture mewah, alat musik, panel kapal. Harga Rp 8-15 juta/m³.",
      },
      {
        id: "kulit",
        label: "KULIT OBAT",
        pos: [0, 0.5, 0],
        end: [-3.5, 0, 0],
        brief: "Anti-malaria & anti-inflamasi",
        detail:
          "Kulit kayu mahoni mengandung swietenin, flavonoid, dan saponin. Memiliki sifat anti-malaria, anti-inflamasi, dan antioksidan kuat. Rebusan kulit kayu digunakan untuk menurunkan demam.",
      },
      {
        id: "akar",
        label: "AKAR TUNGGANG",
        pos: [0, -0.8, 0],
        end: [3.5, -1.5, 0],
        brief: "Menembus tanah sangat dalam",
        detail:
          "Sistem akar tunggang mahoni menembus tanah 5-10 meter, menjadikannya tahan angin kencang dan kekeringan. Akarnya membantu menyimpan cadangan air tanah dan stabilisasi lereng.",
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
    trunkH: "0x6B5D45",
    trunkL: "0x4A4030",
    leafH: "0x4AA03E",
    leafL: "0x367A2A",
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
        pos: [0, 3.5, 0],
        end: [3, 4.2, 0],
        brief: "Daun tunggal mengkilap 20-40cm",
        detail:
          "Daun pace berbentuk elips lebar (20-40 cm), tebal dan mengkilap hijau tua. Mengandung flavonoid, antioksidan, dan protein. Daun muda digunakan sebagai lalapan dan bahan jamu tradisional Jawa.",
      },
      {
        id: "buah",
        label: "BUAH SUPERFOOD",
        pos: [0, 2.5, 0],
        end: [-3.2, 3, 0],
        brief: "150+ senyawa bioaktif",
        detail:
          "Buah pace mengandung xeronine, scopoletin, damnacanthal, dan 150+ senyawa bioaktif. Terbukti memiliki sifat anti-kanker, anti-diabetes, anti-bakteri, dan meningkatkan sistem imun tubuh.",
      },
      {
        id: "bunga",
        label: "BUNGA TABUNG",
        pos: [0, 3, 0],
        end: [3.2, 3.5, 0],
        brief: "Berbunga sepanjang tahun",
        detail:
          "Pace berbunga dan berbuah sepanjang tahun (eververing). Bunga berbentuk tabung putih muncul dari kepala bunga bulat. Satu pohon menghasilkan buah setiap minggu secara bergantian.",
      },
      {
        id: "akar",
        label: "AKAR PEWARNA",
        pos: [0, -0.3, 0],
        end: [-3, -1, 0],
        brief: "Pewarna alami batik tradisional",
        detail:
          "Akar pace menghasilkan pigmen morindone dan alizarin berwarna merah/kuning. Sejak berabad-abad digunakan sebagai pewarna alami batik tradisional, tenun ikat, dan tekstil nusantara.",
      },
      {
        id: "batang",
        label: "BATANG PESISIR",
        pos: [0, 1, 0],
        end: [3, 0.5, 0],
        brief: "Kayu tahan air laut",
        detail:
          "Batang pace berdiameter 15-30 cm, kayunya keras dan sangat tahan terhadap air laut. Digunakan untuk tiang perahu, gagang alat pertanian, dan konstruksi di daerah pesisir.",
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
    trunkH: "0x7A6A3A",
    trunkL: "0x5A4A20",
    leafH: "0x6A9A2E",
    leafL: "0x4A7A1E",
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
        pos: [0, 5, 0],
        end: [3.5, 5.8, 0],
        brief: "Tangkai daun melebar = daun semu",
        detail:
          "Akasia auriculiformis memiliki phyllode — tangkai daun yang melebar dan berfungsi sebagai daun. Bentuknya melengkung seperti telinga (auriculiformis = bentuk telinga). Mengurangi penguapan air hingga 60%.",
      },
      {
        id: "bunga",
        label: "BUNGA SPIKE",
        pos: [0, 3.8, 0],
        end: [-3.5, 4.3, 0],
        brief: "Bunga kuning penghasil madu premium",
        detail:
          "Bunga akasia berbentuk spike berwarna kuning cerah sepanjang 7-10 cm, sangat menarik bagi lebah dan serangga penyerbuk. Madu dari bunga akasia adalah salah satu jenis madu paling premium.",
      },
      {
        id: "biji",
        label: "POLONG SPIRAL",
        pos: [0, 2.5, 0],
        end: [3.5, 2, 0],
        brief: "Biji bertahan bertahun-tahun",
        detail:
          "Buah akasia berupa polong yang melilit spiral unik saat kering. Biji hitam dikelilingi funikulus oranye yang menarik burung. Biji bisa dormant bertahun-tahun di tanah menunggu kondisi ideal.",
      },
      {
        id: "nitro",
        label: "FIKSASI NITROGEN",
        pos: [0, -0.5, 0],
        end: [-3.2, -1.3, 0],
        brief: "+50-100 kg N/hektar/tahun",
        detail:
          "Akar akasia bersimbiosis dengan bakteri Rhizobium di bintil akar. Mengubah nitrogen udara (N₂) menjadi amonium (NH₄⁺) yang menyuburkan tanah. Menambahkan 50-100 kg nitrogen/hektar/tahun.",
      },
      {
        id: "kayu",
        label: "KAYU CEPAT",
        pos: [0, 1.2, 0],
        end: [3.5, 0.7, 0],
        brief: "Tumbuh 3-5 meter per tahun",
        detail:
          "Akasia termasuk pohon pertumbuhan tercepat: 3-5 meter per tahun. Kayunya untuk industri pulp (kertas), papan partikel, dan biomassa energi. Dipanen dalam rotasi 6-8 tahun.",
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
    trunkH: "0x6A5A3A",
    trunkL: "0x4A3A22",
    leafH: "0x3A8A4A",
    leafL: "0x286A35",
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
        pos: [0, 5, 0],
        end: [3.5, 5.8, 0],
        brief: "Hijau rindang sepanjang tahun",
        detail:
          "Alpukat adalah pohon evergreen dengan tajuk rapat dan lebat. Daun berbentuk elips panjang 12-25 cm, mengeluarkan aroma khas saat diremas. Tajuknya menjadikannya pohon peneduh excellent.",
      },
      {
        id: "buah",
        label: "BUAH SUPERFOOD",
        pos: [0, 3.5, 0],
        end: [-3.5, 4, 0],
        brief: "77% lemak sehat + 20 vitamin",
        detail:
          "Buah alpukat mengandung 77% lemak tak jenuh tunggal (asam oleat) yang baik untuk jantung. Kaya vitamin K (26% AKG), folat (20%), vitamin C (17%), potasium (14%). 200-500 buah per musim.",
      },
      {
        id: "bunga",
        label: "BUNGA DIKOGAMI",
        pos: [0, 4.2, 0],
        end: [3.5, 4.8, 0],
        brief: "Sistem penyerbukan unik Tipe A & B",
        detail:
          "Alpukat memiliki dichogamy — bunga membuka dua kali: sekali betina, sekali jantan, di hari berbeda. Menanam Tipe A dan B berdekatan meningkatkan hasil panen 40-60%.",
      },
      {
        id: "batang",
        label: "BATANG KOKOH",
        pos: [0, 1.2, 0],
        end: [-3.5, 0.7, 0],
        brief: "Diameter hingga 60 cm",
        detail:
          "Batang alpukat tumbuh tegak dengan diameter hingga 60 cm pada pohon dewasa. Kulit kayu abu-abu kecokelatan. Kayunya lunak dan ringan, cocok untuk kerajinan tangan.",
      },
      {
        id: "akar",
        label: "AKAR SENSITIF",
        pos: [0, -0.8, 0],
        end: [3.5, -1.5, 0],
        brief: "Anti-genangan air",
        detail:
          "Perakaran alpukat relatif dangkal dan menyebar lebar. Sangat sensitif terhadap genangan air. Tanah tergenang >48 jam menyebabkan busuk akar Phytophthora yang bisa membunuh pohon dewasa.",
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
.scan{position:fixed;inset:0;pointer-events:none;z-index:2;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.04) 3px,rgba(0,0,0,0.04) 4px)}
.hc{position:fixed;width:30px;height:30px;z-index:10;pointer-events:none}
.hc::before,.hc::after{content:'';position:absolute;background:${t.accent}}
.h1{top:10px;left:10px}.h1::before{width:16px;height:2px}.h1::after{width:2px;height:16px}
.h2{top:10px;right:10px}.h2::before{right:0;width:16px;height:2px}.h2::after{right:0;width:2px;height:16px}
.h3{bottom:10px;left:10px}.h3::before{bottom:0;width:16px;height:2px}.h3::after{bottom:0;width:2px;height:16px}
.h4{bottom:10px;right:10px}.h4::before{bottom:0;right:0;width:16px;height:2px}.h4::after{bottom:0;right:0;width:2px;height:16px}
.title{position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:10;text-align:center;pointer-events:none}
.title h1{font-family:'Orbitron',monospace;font-size:clamp(.8rem,3vw,1.3rem);font-weight:900;color:${t.accent};text-shadow:0 0 20px ${t.accent}55;letter-spacing:3px;text-transform:uppercase}
.title .sub{font-size:clamp(.5rem,1.5vw,.65rem);color:#555;letter-spacing:2px;margin-top:2px}
.sbar{position:fixed;bottom:12px;left:50%;transform:translateX(-50%);z-index:10;display:flex;gap:2px;pointer-events:none}
.si{background:rgba(0,0,0,0.75);border:1px solid ${t.accent}33;padding:6px 11px;text-align:center;backdrop-filter:blur(8px)}
.si:first-child{border-radius:6px 0 0 6px}.si:last-child{border-radius:0 6px 6px 0}
.si .l{font-size:.45rem;color:${t.accent};text-transform:uppercase;letter-spacing:1.5px;font-family:'Orbitron',monospace}
.si .v{font-size:.7rem;font-weight:700;margin-top:1px;color:#fff}
.hl{position:fixed;z-index:10;cursor:pointer;pointer-events:auto;transition:all .3s;opacity:0;animation:fi .5s forwards}
@keyframes fi{to{opacity:1}}
.hd{width:10px;height:10px;border-radius:50%;background:${t.accent};box-shadow:0 0 8px ${t.accent}88,0 0 20px ${t.accent}44;position:absolute;top:50%;left:0;transform:translateY(-50%);animation:pu 2s infinite}
@keyframes pu{0%,100%{box-shadow:0 0 8px ${t.accent}88}50%{box-shadow:0 0 16px ${t.accent}cc,0 0 35px ${t.accent}66}}
.ht{margin-left:16px;background:rgba(0,0,0,0.82);border:1px solid ${t.accent}44;border-left:2px solid ${t.accent};padding:4px 10px;font-family:'Orbitron',monospace;font-size:clamp(.45rem,1.1vw,.55rem);letter-spacing:1px;color:${t.accent};text-transform:uppercase;white-space:nowrap;backdrop-filter:blur(10px);transition:all .3s}
.hl:hover .ht{background:rgba(0,0,0,0.95);border-color:${t.accent};color:#fff;box-shadow:0 0 12px ${t.accent}33;transform:translateX(3px)}
.dp{position:fixed;top:50%;right:-420px;transform:translateY(-50%);width:min(360px,85vw);max-height:80vh;z-index:20;background:rgba(5,5,15,0.94);border:1px solid ${t.accent}44;border-right:none;border-radius:14px 0 0 14px;backdrop-filter:blur(20px);transition:right .5s cubic-bezier(.16,1,.3,1);overflow:hidden;display:flex;flex-direction:column}
.dp.open{right:0}
.dp-h{padding:20px 20px 12px;border-bottom:1px solid ${t.accent}22;flex-shrink:0}
.dp-h h2{font-family:'Orbitron',monospace;font-size:.8rem;color:${t.accent};letter-spacing:2px;text-transform:uppercase}
.dp-h .br{font-size:.8rem;color:#999;margin-top:5px;line-height:1.4}
.dp-b{padding:16px 20px 20px;font-size:.85rem;line-height:1.8;color:#bbb;overflow-y:auto;flex:1}
.dp-b .dv{width:30px;height:2px;background:${t.accent}44;margin-bottom:10px}
.dp-x{position:absolute;top:8px;right:8px;width:28px;height:28px;background:rgba(255,255,255,0.05);border:1px solid ${t.accent}33;border-radius:6px;color:${t.accent};font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;z-index:5}
.dp-x:hover{background:${t.accent}22}
.ch{position:fixed;bottom:50px;left:50%;transform:translateX(-50%);z-index:10;font-size:.5rem;color:#3a3a3a;letter-spacing:1px;font-family:'Orbitron',monospace;text-align:center;pointer-events:none}
.back{position:fixed;top:12px;left:12px;z-index:15;background:rgba(0,0,0,0.6);border:1px solid ${t.accent}33;color:${t.accent};padding:6px 12px;border-radius:5px;font-family:'Orbitron',monospace;font-size:.55rem;letter-spacing:1px;cursor:pointer;text-decoration:none;transition:all .3s;backdrop-filter:blur(10px)}
.back:hover{background:${t.accent}22}
.tl{position:fixed;top:42px;left:50%;transform:translateX(-50%);z-index:10;font-size:.65rem;color:#444;pointer-events:none;font-style:italic;text-align:center;width:90%;letter-spacing:1px}
.ld{position:fixed;inset:0;background:${t.bg};z-index:100;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .8s}
.ld.done{opacity:0;pointer-events:none}
.ld-r{width:45px;height:45px;border:2px solid ${t.accent}22;border-top-color:${t.accent};border-radius:50%;animation:sp 1s linear infinite}
@keyframes sp{to{transform:rotate(360deg)}}
.ld-t{margin-top:12px;font-family:'Orbitron',monospace;font-size:.6rem;color:${t.accent};letter-spacing:3px}
@media(max-width:500px){.si{padding:4px 7px}.si .l{font-size:.4rem}.si .v{font-size:.6rem}}
</style>
</head>
<body>
<div class="ld" id="ld"><div class="ld-r"></div><div class="ld-t">LOADING 3D MODEL</div></div>
<div class="scan"></div>
<div class="hc h1"></div><div class="hc h2"></div><div class="hc h3"></div><div class="hc h4"></div>
<a href="index.html" class="back">‹ BACK</a>
<div class="title"><h1>${t.name}</h1><div class="sub">${t.latin} · ${t.family}</div></div>
<div class="tl">"${t.tagline}"</div>
<div class="sbar">${t.stats.map((s) => `<div class="si"><div class="l">${s.l}</div><div class="v">${s.v}</div></div>`).join("")}</div>
<div class="ch">DRAG ROTATE · SCROLL ZOOM · TAP NODE → INFO</div>
<div id="hc"></div>
<div class="dp" id="dp">
  <button class="dp-x" onclick="closeP()">✕</button>
  <div class="dp-h"><h2 id="dt"></h2><div class="br" id="db"></div></div>
  <div class="dp-b"><div class="dv"></div><p id="dd"></p></div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
<script>
const AC=new THREE.Color(${t.ar},${t.ag},${t.ab}),AH='${t.accent}',BG='${t.bg}',TT='${t.type}';
const HD=${JSON.stringify(t.hotspots)};

const sc=new THREE.Scene();sc.background=new THREE.Color(BG);sc.fog=new THREE.FogExp2(BG,0.03);
const cam=new THREE.PerspectiveCamera(45,innerWidth/innerHeight,0.1,100);
cam.position.set(6,3.5,8);cam.lookAt(0,2,0);
const ren=new THREE.WebGLRenderer({antialias:true});
ren.setSize(innerWidth,innerHeight);ren.setPixelRatio(Math.min(devicePixelRatio,2));
ren.shadowMap.enabled=true;ren.shadowMap.type=THREE.PCFSoftShadowMap;
ren.toneMapping=THREE.ACESFilmicToneMapping;ren.toneMappingExposure=1.1;
document.body.prepend(ren.domElement);

// Lighting
sc.add(new THREE.AmbientLight(0x445566,0.7));
const dl=new THREE.DirectionalLight(0xfff0dd,1.2);dl.position.set(5,10,5);dl.castShadow=true;
dl.shadow.mapSize.set(2048,2048);dl.shadow.camera.near=0.5;dl.shadow.camera.far=40;
dl.shadow.camera.left=-10;dl.shadow.camera.right=10;dl.shadow.camera.top=10;dl.shadow.camera.bottom=-10;
sc.add(dl);
sc.add(new THREE.PointLight(AC,0.6,20).translateX(-4).translateY(6).translateZ(-4));
sc.add(new THREE.PointLight(AC,0.25,10).translateY(-1));
const hemiLight=new THREE.HemisphereLight(0x88aacc,0x443322,0.4);sc.add(hemiLight);

// Grid
const gm=new THREE.LineBasicMaterial({color:AC,transparent:true,opacity:0.1});
for(let i=-12;i<=12;i++){
  sc.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(i,-1,-12),new THREE.Vector3(i,-1,12)]),gm));
  sc.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-12,-1,i),new THREE.Vector3(12,-1,i)]),gm));
}

// Ground
const gg=new THREE.Mesh(new THREE.CircleGeometry(5,64),new THREE.MeshBasicMaterial({color:AC,transparent:true,opacity:0.04,side:THREE.DoubleSide}));
gg.rotation.x=-Math.PI/2;gg.position.y=-0.99;sc.add(gg);

// Hex platform
const hs=new THREE.Shape();for(let i=0;i<6;i++){const a=i*Math.PI/3-Math.PI/6;hs.lineTo(Math.cos(a)*3,Math.sin(a)*3);}
const hm=new THREE.Mesh(new THREE.ShapeGeometry(hs),new THREE.MeshBasicMaterial({color:AC,transparent:true,opacity:0.03,side:THREE.DoubleSide}));
hm.rotation.x=-Math.PI/2;hm.position.y=-0.98;sc.add(hm);
const hp=[];for(let i=0;i<=6;i++){const a=i*Math.PI/3-Math.PI/6;hp.push(new THREE.Vector3(Math.cos(a)*3,-0.97,Math.sin(a)*3));}
sc.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(hp),new THREE.LineBasicMaterial({color:AC,transparent:true,opacity:0.2})));

// Rings
const rg1=new THREE.Mesh(new THREE.TorusGeometry(3.2,0.008,8,80),new THREE.MeshBasicMaterial({color:AC,transparent:true,opacity:0.15}));
rg1.rotation.x=Math.PI/2;rg1.position.y=-0.96;sc.add(rg1);
const rg2=new THREE.Mesh(new THREE.TorusGeometry(2.5,0.005,8,60),new THREE.MeshBasicMaterial({color:AC,transparent:true,opacity:0.1}));
rg2.rotation.x=Math.PI/2;rg2.position.y=-0.95;sc.add(rg2);

// ============ IMPROVED TREE BUILDER ============
const tg=new THREE.Group();

// Better trunk material with slight bumpiness
function trunkMat(color){
  return new THREE.MeshStandardMaterial({color:color,roughness:0.9,metalness:0.05});
}

// Create tapered trunk segment with slight curve
function mkTrunkSeg(rBot,rTop,height,segs,mat){
  const g=new THREE.CylinderGeometry(rTop,rBot,height,segs||12,4);
  // Add slight irregularity
  const p=g.attributes.position;
  for(let i=0;i<p.count;i++){
    const y=p.getY(i);const n=0.02*(Math.random()-0.5);
    p.setX(i,p.getX(i)*(1+n));p.setZ(i,p.getZ(i)*(1+n));
  }
  g.computeVertexNormals();
  const m=new THREE.Mesh(g,mat);m.castShadow=true;m.receiveShadow=true;return m;
}

// Create realistic leaf cluster using multiple overlapping ellipsoids
function mkCanopyBlob(rx,ry,rz,color,darkColor){
  const g=new THREE.SphereGeometry(1,12,10);
  const p=g.attributes.position;
  for(let i=0;i<p.count;i++){
    let x=p.getX(i)*rx,y=p.getY(i)*ry,z=p.getZ(i)*rz;
    // Add organic noise
    const noise=0.15*(Math.sin(x*3)*Math.cos(z*4)+Math.sin(y*5)*0.5);
    x+=noise*rx;y+=noise*ry*0.5;z+=noise*rz;
    p.setXYZ(i,x,y,z);
  }
  g.computeVertexNormals();
  const mat=new THREE.MeshStandardMaterial({
    color:color,roughness:0.75,metalness:0.02,flatShading:true
  });
  const m=new THREE.Mesh(g,mat);m.castShadow=true;m.receiveShadow=true;return m;
}

// Create a single palm frond with leaflets
function mkPalmFrond(length,angle,yRot){
  const frondG=new THREE.Group();
  // Main rachis (spine)
  const curve=new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(0,0,0),
    new THREE.Vector3(length*0.5,length*0.15,0),
    new THREE.Vector3(length,-length*0.3,0)
  );
  const tubeGeo=new THREE.TubeGeometry(curve,16,0.03,6,false);
  const rachis=new THREE.Mesh(tubeGeo,new THREE.MeshStandardMaterial({color:0x4a7a3a,roughness:0.7}));
  rachis.castShadow=true;
  frondG.add(rachis);
  
  // Leaflets along the rachis
  const leafCount=14;
  for(let i=2;i<leafCount;i++){
    const t=i/leafCount;
    const pt=curve.getPoint(t);
    const leafLen=0.6*(1-t*0.5)*(0.8+Math.random()*0.4);
    const leafW=0.12*(1-t*0.3);
    
    // Create leaf shape
    const shape=new THREE.Shape();
    shape.moveTo(0,0);
    shape.quadraticCurveTo(leafLen*0.3,leafW,leafLen,0.02);
    shape.quadraticCurveTo(leafLen*0.3,-leafW,0,0);
    const leafGeo=new THREE.ShapeGeometry(shape);
    const lColor=Math.random()>0.5?${t.leafH}:${t.leafL};
    const leaf=new THREE.Mesh(leafGeo,new THREE.MeshStandardMaterial({
      color:lColor,roughness:0.65,metalness:0.02,side:THREE.DoubleSide
    }));
    leaf.position.copy(pt);
    // Alternate sides
    const side=(i%2===0)?1:-1;
    leaf.rotation.z=side*0.4+Math.random()*0.2;
    leaf.rotation.y=side*1.2;
    leaf.rotation.x=Math.random()*0.3-0.15;
    leaf.castShadow=true;
    frondG.add(leaf);
  }
  
  frondG.rotation.z=angle;
  frondG.rotation.y=yRot;
  return frondG;
}

if(TT==='palm'){
  // === PALM TREE ===
  // Trunk - slightly curved, tapered with texture rings
  const tMat=trunkMat(${t.trunkH});
  const segments=16;
  for(let i=0;i<segments;i++){
    const t0=i/segments;
    const rad=0.22-t0*0.08;
    const seg=mkTrunkSeg(rad+0.01,rad,0.4,10,tMat);
    const sway=Math.sin(t0*Math.PI*0.6)*0.4;
    seg.position.set(sway,i*0.38,-Math.sin(t0*1.5)*0.15);
    seg.rotation.z=Math.sin(t0*Math.PI)*0.05;
    tg.add(seg);
    
    // Trunk ring marks
    if(i%2===0){
      const ringGeo=new THREE.TorusGeometry(rad+0.015,0.008,4,12);
      const ring=new THREE.Mesh(ringGeo,new THREE.MeshStandardMaterial({color:${t.trunkL},roughness:1}));
      ring.position.copy(seg.position);ring.position.y+=0.15;
      ring.rotation.x=Math.PI/2;
      tg.add(ring);
    }
  }
  
  // Crown of fronds
  const crownY=segments*0.38;
  const frondCount=10;
  for(let i=0;i<frondCount;i++){
    const yRot=(i/frondCount)*Math.PI*2;
    const droopAngle=-0.2-Math.random()*0.6; // Droop outward
    const frond=mkPalmFrond(2.5+Math.random()*0.8,droopAngle,yRot);
    frond.position.set(Math.sin(Math.PI*0.6*0.6)*0.4+0.05,crownY+0.1+Math.random()*0.2,0);
    tg.add(frond);
  }
  
  // Crown center cluster
  const cc=mkCanopyBlob(0.4,0.5,0.4,${t.leafH},${t.leafL});
  cc.position.set(0.4,crownY+0.3,0);tg.add(cc);

} else if(TT==='small'){
  // === SMALL BUSHY TREE (Pace) ===
  const tMat=trunkMat(${t.trunkH});
  
  // Main trunk
  const mainTrunk=mkTrunkSeg(0.18,0.10,2.5,10,tMat);
  mainTrunk.position.y=0.25;tg.add(mainTrunk);
  
  // Forking branches
  const branches=[
    {angle:0.5,tilt:0.6,len:1.8,y:1.2,r:0.06},
    {angle:2.0,tilt:0.5,len:1.5,y:1.5,r:0.05},
    {angle:3.8,tilt:0.7,len:2.0,y:1.0,r:0.06},
    {angle:5.2,tilt:0.4,len:1.3,y:1.6,r:0.04},
    {angle:1.2,tilt:0.55,len:1.6,y:1.3,r:0.05},
    {angle:4.5,tilt:0.65,len:1.7,y:1.1,r:0.05},
  ];
  branches.forEach(b=>{
    const br=mkTrunkSeg(b.r,b.r*0.3,b.len,6,trunkMat(${t.trunkL}));
    br.position.set(Math.cos(b.angle)*0.12,b.y,Math.sin(b.angle)*0.12);
    br.rotation.z=Math.cos(b.angle)*b.tilt;
    br.rotation.x=Math.sin(b.angle)*b.tilt;
    br.castShadow=true;
    tg.add(br);
  });
  
  // Dense, rounded canopy
  const canopy=[
    [0,3.0,0,1.0,0.8,1.0],[-.6,2.7,.5,.8,.7,.8],[.6,2.8,-.4,.85,.75,.85],
    [0,2.4,-.5,.7,.6,.7],[-.4,3.3,-.2,.6,.5,.6],[.4,2.5,.5,.65,.55,.65],
    [0,3.5,0,.5,.45,.5],[-.3,2.6,-.6,.55,.5,.55],[.5,3.1,.3,.6,.5,.6]
  ];
  canopy.forEach(([x,y,z,rx,ry,rz],i)=>{
    const col=i%2===0?${t.leafH}:${t.leafL};
    const blob=mkCanopyBlob(rx,ry,rz,col);
    blob.position.set(x,y,z);
    tg.add(blob);
  });

} else {
  // === BROADLEAF TREE (Mahoni, Akasia, Alpukat) ===
  const tMat=trunkMat(${t.trunkH});
  
  // Main trunk with taper
  const mainTrunk=mkTrunkSeg(0.3,0.18,4,12,tMat);
  mainTrunk.position.y=1;tg.add(mainTrunk);
  
  // Root flares at base
  for(let i=0;i<5;i++){
    const a=(i/5)*Math.PI*2;
    const root=mkTrunkSeg(0.12,0.03,1.5,5,trunkMat(${t.trunkL}));
    root.position.set(Math.cos(a)*0.25,-0.5,Math.sin(a)*0.25);
    root.rotation.z=Math.cos(a)*0.5;root.rotation.x=Math.sin(a)*0.5;
    tg.add(root);
  }
  
  // Major branches
  const majBranches=[
    {a:0.4,h:2.8,l:2.8,tilt:0.65,r:0.1},
    {a:1.5,h:3.2,l:2.3,tilt:0.55,r:0.08},
    {a:2.8,h:2.5,l:3.0,tilt:0.7,r:0.1},
    {a:4.0,h:3.5,l:2.0,tilt:0.45,r:0.07},
    {a:5.2,h:2.9,l:2.5,tilt:0.6,r:0.09},
    {a:0.8,h:3.8,l:1.8,tilt:0.4,r:0.06},
  ];
  majBranches.forEach(b=>{
    const br=mkTrunkSeg(b.r,b.r*0.25,b.l,6,trunkMat(${t.trunkL}));
    br.position.set(Math.cos(b.a)*0.2,b.h,Math.sin(b.a)*0.2);
    br.rotation.z=Math.cos(b.a)*b.tilt;br.rotation.x=Math.sin(b.a)*b.tilt;
    tg.add(br);
  });
  
  // Layered canopy - multiple overlapping blobs at varying heights
  const canopy=[
    // Top dome
    [0,5.2,0,1.3,0.8,1.3],
    [0.5,5.5,0.3,0.9,0.6,0.9],
    [-0.4,5.4,-0.3,1.0,0.7,1.0],
    // Middle ring
    [-1.4,4.5,0.8,1.1,0.85,1.1],
    [1.2,4.3,-0.7,1.2,0.9,1.2],
    [0.3,4.6,1.2,1.0,0.75,1.0],
    [-0.8,4.2,-1.0,1.0,0.8,1.0],
    [1.4,4.7,0.5,0.85,0.65,0.85],
    // Lower ring
    [-1.0,3.8,1.3,0.9,0.7,0.9],
    [1.5,3.6,0,0.95,0.75,0.95],
    [0,3.9,-1.4,0.85,0.65,0.85],
    [-1.3,3.5,-0.8,0.8,0.6,0.8],
    [0.8,4.0,1.0,0.9,0.7,0.9],
  ];
  canopy.forEach(([x,y,z,rx,ry,rz],i)=>{
    const col=i%3===0?${t.leafH}:(i%3===1?${t.leafL}:${t.leafH});
    const blob=mkCanopyBlob(rx,ry,rz,col);
    blob.position.set(x,y,z);
    tg.add(blob);
  });
}

tg.position.y=-1;
sc.add(tg);

// Annotation lines
const lm=new THREE.LineBasicMaterial({color:AC,transparent:true,opacity:0.45});
const h3d=[];
HD.forEach(h=>{
  const s=new THREE.Vector3(h.pos[0],h.pos[1]-1,h.pos[2]);
  const e=new THREE.Vector3(h.end[0],h.end[1]-1,h.end[2]);
  // Smooth elbow point
  const mid=new THREE.Vector3(e.x,s.y+(e.y-s.y)*0.7,e.z*0.3);
  sc.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([s,mid,e]),lm));
  // Dots
  const d1=new THREE.Mesh(new THREE.SphereGeometry(.055,10,10),new THREE.MeshBasicMaterial({color:AC}));d1.position.copy(s);sc.add(d1);
  // Outer ring at endpoint
  const d2=new THREE.Mesh(new THREE.TorusGeometry(.08,0.015,6,16),new THREE.MeshBasicMaterial({color:AC}));
  d2.position.copy(e);d2.lookAt(cam.position);sc.add(d2);
  const d3=new THREE.Mesh(new THREE.SphereGeometry(.04,8,8),new THREE.MeshBasicMaterial({color:AC}));d3.position.copy(e);sc.add(d3);
  h3d.push({pt:e,ring:d2,d:h});
});

// Particles
const pc=120,pg=new THREE.BufferGeometry(),pp=new Float32Array(pc*3),psp=[];
for(let i=0;i<pc;i++){pp[i*3]=(Math.random()-.5)*20;pp[i*3+1]=Math.random()*12-3;pp[i*3+2]=(Math.random()-.5)*20;psp.push(.001+Math.random()*.006);}
pg.setAttribute('position',new THREE.BufferAttribute(pp,3));
sc.add(new THREE.Points(pg,new THREE.PointsMaterial({color:AC,size:.035,transparent:true,opacity:0.35})));

// Orbit controls
let drag=false,pm={x:0,y:0},sphr={th:0.7,ph:1.15,r:10},tgt=new THREE.Vector3(0,2,0);
function upCam(){
  cam.position.x=tgt.x+sphr.r*Math.sin(sphr.ph)*Math.cos(sphr.th);
  cam.position.y=tgt.y+sphr.r*Math.cos(sphr.ph);
  cam.position.z=tgt.z+sphr.r*Math.sin(sphr.ph)*Math.sin(sphr.th);
  cam.lookAt(tgt);
}
ren.domElement.addEventListener('pointerdown',e=>{drag=true;pm={x:e.clientX,y:e.clientY}});
window.addEventListener('pointerup',()=>drag=false);
ren.domElement.addEventListener('pointermove',e=>{if(!drag)return;sphr.th-=(e.clientX-pm.x)*.007;sphr.ph=Math.max(.25,Math.min(2.8,sphr.ph+(e.clientY-pm.y)*.007));pm={x:e.clientX,y:e.clientY}});
ren.domElement.addEventListener('wheel',e=>{sphr.r=Math.max(4,Math.min(20,sphr.r+e.deltaY*.01))},{passive:true});
let td=0;
ren.domElement.addEventListener('touchstart',e=>{if(e.touches.length===2){const dx=e.touches[0].clientX-e.touches[1].clientX,dy=e.touches[0].clientY-e.touches[1].clientY;td=Math.sqrt(dx*dx+dy*dy)}},{passive:true});
ren.domElement.addEventListener('touchmove',e=>{if(e.touches.length===2){const dx=e.touches[0].clientX-e.touches[1].clientX,dy=e.touches[0].clientY-e.touches[1].clientY,d=Math.sqrt(dx*dx+dy*dy);sphr.r=Math.max(4,Math.min(20,sphr.r+(td-d)*.03));td=d}},{passive:true});
upCam();

// 2D Labels
const hcEl=document.getElementById('hc'),labels=[];
h3d.forEach((h,i)=>{
  const el=document.createElement('div');el.className='hl';el.style.animationDelay=i*.12+'s';
  el.innerHTML='<div class="hd"></div><div class="ht">'+h.d.label+'</div>';
  el.onclick=()=>openP(h.d);hcEl.appendChild(el);labels.push({el,pt:h.pt});
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
let time=0;
function anim(){
  requestAnimationFrame(anim);time+=.01;
  if(!drag)sphr.th+=.0012;
  upCam();
  // Particles
  const pArr=pg.attributes.position;for(let i=0;i<pc;i++){pArr.array[i*3+1]+=psp[i];if(pArr.array[i*3+1]>9)pArr.array[i*3+1]=-3}pArr.needsUpdate=true;
  // Pulse lines
  lm.opacity=.3+Math.sin(time*2)*.15;
  // Gentle tree sway
  tg.rotation.z=Math.sin(time*.4)*.012;tg.rotation.x=Math.cos(time*.25)*.006;
  // Rotate rings
  rg1.rotation.z=time*.2;rg2.rotation.z=-time*.3;
  // Ground pulse
  gg.material.opacity=.03+Math.sin(time*1.2)*.015;
  // Endpoint rings face camera
  h3d.forEach(h=>h.ring.lookAt(cam.position));
  upLabels();ren.render(sc,cam);
}
window.addEventListener('resize',()=>{cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();ren.setSize(innerWidth,innerHeight)});
setTimeout(()=>{document.getElementById('ld').classList.add('done');anim()},600);
<\/script>
</body>
</html>`;
}

trees.forEach((t) => {
  fs.writeFileSync("/home/claude/project/" + t.id + ".html", gen(t));
  console.log("✅ " + t.id + ".html");
});
console.log("\\nAll 5 3D pages generated!");
