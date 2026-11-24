/* =====================================================================
   MashaShop — Amazon-style store
   EDITA TUS PRODUCTOS AQUI  ▼▼▼
   Cada producto: { id, title, price, old, rating, reviews, cat, emoji,
                    bg, img, badge, prime, stock, desc, bullets, specs }
   price = precio entero (sin decimales)
   img   = ruta de la imagen (ej: "img/alcohol.jpg")
   bg    = color de fondo si no hay imagen
   ===================================================================== */
const STORE_NAME = "MashaShop";

const PRODUCTS = [
  /* ============ TUS PRODUCTOS — SALUD Y HOGAR ============ */
  { id:101, title:"Alcohol - Solución Desinfectante (Galón 3.8 Litros)", price:36000, rating:0, reviews:0, cat:"Salud", emoji:"🧪", bg:"#e8f7ff", img:"img/alcohol.jpg", badge:"NUEVO", prime:true, stock:30,
    desc:"Alcohol desinfectante de uso profesional que elimina el 99.9% de bacterias y virus en segundos. Apto para desinfectar manos, objetos, instrumental y superficies. Se evapora rápido, sin dejar residuos y sin resecar la piel.",
    bullets:["Elimina el 99.9% de bacterias y virus","Secado rápido sin dejar residuos","Uso personal, hogar y profesional","No reseca la piel"],
    specs:[["Tipo","Solución desinfectante"],["Uso","Manos, objetos y superficies"],["Contenido","Galón 3.8 litros"],["Marca","MashaShop Care"]] },

  { id:102, title:"Solución Desinfectante de Amplio Espectro", price:20000, rating:0, reviews:0, cat:"Hogar", emoji:"🧼", bg:"#eaf4ff", img:"img/solucion-desinfectante.jpg", badge:"NUEVO", prime:true, stock:25,
    desc:"Desinfectante de amplio espectro para el hogar: cocina, baños, pisos, utensilios y superficies. Elimina gérmenes, virus y malos olores en un solo paso, con una fragancia limpia que perdura.",
    bullets:["Amplio espectro: virus y bacterias","Limpia y desinfecta en un solo paso","Elimina los malos olores","Ideal para pisos, baños y cocina"],
    specs:[["Tipo","Desinfectante multiusos"],["Uso","Hogar"],["Formato","Garrafa"],["Marca","MashaShop Clean"]] },

  { id:103, title:"Mentolay — Linimento Deportivo 125 ml", price:25000, rating:0, reviews:0, cat:"Salud", emoji:"💪", bg:"#e6f6ff", img:"img/mentolay.jpg", badge:"NUEVO", prime:true, stock:40,
    desc:"Linimento deportivo de acción rápida formulado para aliviar el dolor muscular. Gracias a uno de sus ingredientes actúa más rápido para eliminar dolores. Se utiliza antes de practicar deporte para preparar los músculos y después para recuperarlos. Sirve para calambres, torceduras, dolores de cabeza y de estómago, y es muy utilizado en el área de fisioterapia.",
    bullets:["Alivio rápido de dolores musculares","Se usa antes y después de entrenar","Sirve para calambres y torceduras","Muy utilizado en fisioterapia"],
    specs:[["Tipo","Linimento deportivo"],["Contenido","125 ml"],["Uso","Externo"],["Indicación","Dolor muscular y articular"],["Marca","MashaShop Care"]] },

  { id:104, title:"Jabón de Manzanilla Antibacterial Humectante (1 Litro)", price:14000, rating:0, reviews:0, cat:"Salud", emoji:"🌼", bg:"#fdf7e3", img:"img/jabon-manzanilla.jpg", badge:"NUEVO", prime:true, stock:35,
    desc:"Jabón para manos y cuerpo antibacterial humectante a base de extractos de manzanilla y aloe vera. La manzanilla ayuda a desinflamar, es relajante y alivia las irritaciones de la piel; el aloe vera la suaviza actuando como un excelente regenerador celular. Ideal para rostros grasosos.",
    bullets:["Antibacterial y humectante","Manzanilla: desinflama y calma la piel","Aloe vera: suaviza y regenera","Ideal para rostros grasosos"],
    specs:[["Tipo","Jabón líquido"],["Contenido","1 litro"],["Uso","Manos y cuerpo"],["Ingredientes","Manzanilla + Aloe vera"],["Marca","MashaShop Care"]] },

  { id:105, title:"Limpiavidios y Desmanchante — Fórmula Activa", price:10000, rating:0, reviews:0, cat:"Hogar", emoji:"🪟", bg:"#e3f6ff", img:"img/limpiavidios.jpg", badge:"NUEVO", prime:true, stock:28,
    desc:"Fórmula activa 2 en 1: limpia vidrios y espejos con un brillo cristalino sin dejar rastros ni estrias y, al mismo tiempo, desmancha quitando manchas difíciles y grasa. Ideal para ventanas, autos, muebles y todo tipo de acabados.",
    bullets:["2 en 1: limpiavidios y desmanchante","Brillo cristalino sin estrias ni residuos","Quita manchas y grasa con rapidez","Uso en hogar, auto y vidrios"],
    specs:[["Tipo","Spray limpiador"],["Uso","Vidrios y superficies"],["Formato","Atomizador"],["Marca","MashaShop Clean"]] },

  { id:106, title:"Ácido Neopisol — Descurtidor y Removedor (1 Litro)", price:11000, rating:0, reviews:0, cat:"Hogar", emoji:"🧽", bg:"#fdf3e0", img:"img/neopisol.jpg", badge:"NUEVO", prime:true, stock:22,
    desc:"Descurtidor y removedor de uso industrial y hogar. Seca y da el acabado a los baños, retira el exceso de lechada y de cemento de los pisos y disuelve el sarro y la suciedad más difícil. Deja las superficies como nuevas.",
    bullets:["Descurtidora y removedor a la vez","Retira exceso de lechada y cemento","Elimina sarro y suciedad resistente","Uso industrial y doméstico"],
    specs:[["Tipo","Ácido desincrustante"],["Uso","Baños, pisos y muros"],["Formato","1 litro"],["Marca","MashaShop Clean"]] },

  { id:107, title:"Amonio Cuaternario Quinta Generación", price:20000, rating:0, reviews:0, cat:"Hogar", emoji:"🛡️", bg:"#eef8ec", img:"img/amonio.jpg", badge:"NUEVO", prime:true, stock:26,
    desc:"Amonio cuaternario de quinta generación: el desinfectante más adecuado para eliminar el virus en la ropa, superficies, utensilios, vehículos y demás. Elimina el 99.9% de virus y bacterias con la máxima protección y desinfección.",
    bullets:["Quinta generación: mayor eficacia","Elimina el 99.9% de virus y bacterias","Para ropa, superficies y utensilios","También apto para vehículos"],
    specs:[["Tipo","Desinfectante multiusos"],["Uso","Ropa, superficies y utensilios"],["Generación","Quinta"],["Marca","MashaShop Clean"]] },

  { id:108, title:"Hipoclorito Desinfectante Multiusos", price:20000, rating:0, reviews:0, cat:"Hogar", emoji:"🧴", bg:"#eef2ff", img:"img/hipoclorito.jpg", badge:"NUEVO", prime:true, stock:24,
    desc:"Desinfectante potente que elimina el hongo de las áreas húmedas: baños, patios, muros y lavanderías. Combate hongo, moho, virus y bacterias en múltiples superficies y en la ropa, con máxima eficacia.",
    bullets:["Elimina el hongo de las áreas húmedas","Combate moho, virus y bacterias","Apto para múltiples superficies","Máxima eficacia"],
    specs:[["Tipo","Hipoclorito multiusos"],["Uso","Superficies y ropa"],["Formato","Garrafa"],["Marca","MashaShop Clean"]] },

  { id:109, title:"Deterneutro — Detergente Biodegradable pH Neutro (Galón 3.8 Litros)", price:45000, rating:0, reviews:0, cat:"Hogar", emoji:"🚗", bg:"#f4f4f6", img:"img/deterneutro.jpg", badge:"NUEVO", prime:true, stock:30,
    desc:"Producto biodegradable de pH neutro e ideal para dejar los autos y motos pulidos. Gracias a su pH neutro puedes lavar también tu ropa y todo lo interior relacionado con el área de los lácteos: si queda detergente no contamina, gracias a sus ingredientes biodegradables.",
    bullets:["Biodegradable y de pH neutro","Ideal para autos, motos y vehículos","Seguro para ropa delicada y lácteos","No contamina aunque queden residuos"],
    specs:[["Tipo","Detergente líquido"],["Contenido","Galón 3.8 litros"],["pH","Neutro"],["Uso","Vehículos, ropa y lácteos"],["Marca","MashaShop Clean"]] },

  { id:110, title:"Amonio Cuaternario Quinta Generación — 1 Litro", price:15000, old:20000, rating:0, reviews:0, cat:"Hogar", emoji:"🌊", bg:"#eafaf3", img:"img/amonio-1l.jpg", badge:"-25%", prime:true, stock:19,
    desc:"La misma fórmula de amonio cuaternario de quinta generación en presentación de 1 litro. El desinfectante más adecuado para eliminar el virus en la ropa, superficies, utensilios, vehículos y demás. Elimina el 99.9% de virus y bacterias.",
    bullets:["Presentación familiar de 1 litro","Quinta generación de amonio cuaternario","Elimina el 99.9% de virus y bacterias","Ropa, superficies, utensilios y vehículos"],
    specs:[["Contenido","1 litro"],["Tipo","Desinfectante multiusos"],["Generación","Quinta"],["Marca","MashaShop Clean"]] },

  { id:111, title:"Loción Despigmentante 40 ml", price:10000, rating:0, reviews:0, cat:"Salud", emoji:"✨", bg:"#fffbe8", img:"img/locion-despigmentante.jpg", badge:"NUEVO", prime:true, stock:33,
    desc:"Loción despigmentante que aclara la piel y remueve las células muertas, unificando el tono y devolviéndole luminosidad. Su formato de 40 ml es práctico para aplicar en zonas localizadas de forma precisa y sin desperdicio.",
    bullets:["Aclara y unifica el tono de la piel","Remueve las células muertas","Aplicación tópica en zonas localizadas","Formato práctico de 40 ml"],
    specs:[["Contenido","40 ml"],["Uso","Tópico localizado"],["Marca","MashaShop Care"]] },

  { id:112, title:"Loción Antihongos 40 ml", price:10000, rating:0, reviews:0, cat:"Salud", emoji:"🦶", bg:"#fdecec", img:"img/locion-antihongos.jpg", badge:"NUEVO", prime:true, stock:31,
    desc:"Sirve para toda clase de hongos en el pie o las uñas: pie de atleta, sabañón, uñas de color o partidas. Fórmula eficaz de rápida absorción para pies y uñas, en presentación de 40 ml.",
    bullets:["Elimina todo tipo de hongos","Para pie de atleta y sabañón","Cuida uñas de color o partidas","Fórmula eficaz de 40 ml"],
    specs:[["Contenido","40 ml"],["Uso","Pies y uñas"],["Marca","MashaShop Care"]] },

  { id:113, title:"Queratolítico 5 ml — Callos, Verrugas y Clavos", price:3000, rating:0, reviews:0, cat:"Salud", emoji:"💧", bg:"#eef7ff", img:"img/queratolitico.jpg", badge:"NUEVO", prime:true, stock:50,
    desc:"Solución queratolítica concentrada que elimina callos, verrugas y clavos disolviendo el exceso de queratina. Su gotero permite una aplicación precisa y localizada en la zona afectada.",
    bullets:["Elimina callos, verrugas y clavos","Acción queratolítica concentrada","Gotero para aplicación precisa","Formato compacto de 5 ml"],
    specs:[["Contenido","5 ml"],["Uso","Tópico localizado"],["Marca","MashaShop Care"]] },

  { id:114, title:"Champú para Alfombras — Limpiador en Seco", price:20000, rating:0, reviews:0, cat:"Hogar", emoji:"🛋️", bg:"#e8f1ff", img:"img/champu-alfombras.jpg", badge:"NUEVO", prime:true, stock:27,
    desc:"Limpiador en seco con fórmula activa que no requiere enjuague. Ideal para alfombras, cojinería, sillones, maletines y zapatillas: penetra, levanta la suciedad y deja todo fresco en minutos.",
    bullets:["No requiere enjuague: limpieza en seco","Ideal para alfombras y cojinería","También sillones, maletines y zapatillas","Fórmula activa de rápida acción"],
    specs:[["Tipo","Limpiador en seco"],["Uso","Alfombras y tapizados"],["Formato","1 litro"],["Marca","MashaShop Clean"]] },

  { id:115, title:"Aceite de Naranja 100% Natural — Prensado en Frío", price:20000, rating:0, reviews:0, cat:"Salud", emoji:"🍊", bg:"#fff1e0", img:"img/aceite-naranjas.jpg", badge:"NUEVO", prime:true, stock:21,
    desc:"Aceite 100% natural prensado en frío que reduce la grasa, nutre y humecta la piel. Ideal para masajes con efecto relajante y para tratamientos reafirmantes. Contenido neto: 1 litro.",
    bullets:["100% natural y prensado en frío","Reduce la grasa y nutre la piel","Ideal para masajes con efecto relajante","Contenido neto: 1 litro"],
    specs:[["Contenido","1 litro"],["Origen","Prensado en frío"],["Tipo","Aceite natural"],["Marca","MashaShop Care"]] },
];

/* =================== ESTADO =================== */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => "$" + Math.round(n).toLocaleString("es-CO");
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));

/* ============ ENVÍO: GRATIS desde $100.000 ============ */
const FREE_SHIPPING_FROM = 100000;
const SHIPPING_COST = 10000;

/* ============ WHATSAPP ============ */
const WHATSAPP_NUMBERS = ["573508434242", "573054136498", "573172792295"];

let cart = JSON.parse(localStorage.getItem("sz_cart") || "{}");     // {id: qty}
let wishlist = new Set(JSON.parse(localStorage.getItem("sz_wish") || "[]"));
let orders = JSON.parse(localStorage.getItem("sz_orders") || "[]");
let reviews = JSON.parse(localStorage.getItem("sz_reviews") || "{}"); // {id: [{name,text,date}]}
let activeCat = "";
let query = "";
let currentProduct = null;

const save = () => {
  localStorage.setItem("sz_cart", JSON.stringify(cart));
  localStorage.setItem("sz_wish", JSON.stringify([...wishlist]));
  localStorage.setItem("sz_orders", JSON.stringify(orders));
  localStorage.setItem("sz_reviews", JSON.stringify(reviews));
};

const stars = r => {
  const full = Math.floor(r);
  const half = r - full >= 0.5;
  return "★".repeat(full) + (half ? "⯨" : "") + "☆".repeat(5 - full - (half ? 1 : 0));
};

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove("show"), 2400);
}

const reviewCount = id => (reviews[id] || []).length;

/* =================== RENDER: TARJETA =================== */
function cardHTML(p) {
  const savePct = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
  const rc = reviewCount(p.id);
  return `
  <article class="product-card" data-id="${p.id}">
    <div class="pc-img" style="background:${p.bg}">
      ${p.badge ? `<span class="pc-deal">${p.badge}</span>` : ""}
      <button class="pc-fav ${wishlist.has(p.id) ? "on" : ""}" data-fav="${p.id}" title="Lista de deseos">${wishlist.has(p.id) ? "♥" : "♡"}</button>
      ${p.img ? `<img src="${p.img}" alt="${p.title}" loading="lazy">` : p.emoji}
    </div>
    <div class="pc-title">${p.title}</div>
    <div class="pc-rating"><span class="stars muted">${stars(0)}</span><span class="pc-reviews">${rc ? rc + " reseña" + (rc > 1 ? "s" : "") : "Sin reseñas"}</span></div>
    <div class="pc-price">
      <span class="cur">$</span><span class="whole">${p.price.toLocaleString("es-CO")}</span>
      ${p.old ? `<span class="pc-old">${money(p.old)}</span>` : ""}
    </div>
    ${p.old ? `<div class="pc-save">Ahorras ${money(p.old - p.price)} (-${savePct}%)</div>` : ""}
    ${p.prime ? `<div class="pc-prime">&#10003; Envío rápido</div>` : ""}
    <div class="pc-ship">${p.price >= FREE_SHIPPING_FROM ? "&#128666; Envío GRATIS" : "Llega en 2–4 días"}</div>
    <div class="pc-stock">En stock</div>
    <button class="pc-add" data-add="${p.id}">Agregar al carrito</button>
  </article>`;
}

const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

function renderGrid() {
  let list = PRODUCTS.slice();
  if (query) {
    const q = norm(query);
    list = list.filter(p =>
      norm(p.title).includes(q) ||
      norm(p.cat).includes(q) ||
      norm(p.desc || "").includes(q));
  }
  if (activeCat) list = list.filter(p => p.cat === activeCat);

  const sort = $("#sortSel").value;
  if (sort === "low") list.sort((a, b) => a.price - b.price);
  else if (sort === "high") list.sort((a, b) => b.price - a.price);
  else if (sort === "rating") list.sort((a, b) => reviewCount(b.id) - reviewCount(a.id));
  else if (sort === "reviews") list.sort((a, b) => reviewCount(b.id) - reviewCount(a.id));

  $("#productGrid").innerHTML = list.map(cardHTML).join("");
  $("#emptyState").hidden = list.length > 0;

  let title = query ? `Resultados para "${query}"` : (activeCat || "Todos los productos");
  if (!query && !activeCat) title = "Todos los productos";
  $("#resultsTitle").textContent = title;
  $("#resultsCount").textContent = list.length + " productos";
}

function renderChips() {
  const preferred = ["Salud", "Hogar"];
  const cats = [...new Set(PRODUCTS.map(p => p.cat))].sort((a, b) =>
    (preferred.indexOf(a) < 0 ? 99 : preferred.indexOf(a)) - (preferred.indexOf(b) < 0 ? 99 : preferred.indexOf(b)));
  $("#filterChips").innerHTML =
    `<button class="chip ${activeCat === "" ? "on" : ""}" data-cat="">Todo</button>` +
    cats.map(c => `<button class="chip ${activeCat === c ? "on" : ""}" data-cat="${c}">${c}</button>`).join("");
}

function renderSearchCats() {
  const cats = [...new Set(PRODUCTS.map(p => p.cat))];
  $("#searchCat").innerHTML = `<option value="">Todos</option>` + cats.map(c => `<option>${c}</option>`).join("");
}

/* =================== CARRITO =================== */
function cartCount() { return Object.values(cart).reduce((a, b) => a + b, 0); }
function cartSubtotal() {
  return Object.entries(cart).reduce((sum, [id, q]) => {
    const p = PRODUCTS.find(x => x.id === +id);
    return sum + (p ? p.price * q : 0);
  }, 0);
}

function updateCartBadge() {
  const n = cartCount();
  $("#cartCount").textContent = n;
  $("#cartCount").style.display = n ? "inline-block" : "none";
}

function renderCart() {
  const entries = Object.entries(cart).filter(([id]) => PRODUCTS.some(p => p.id === +id));
  const box = $("#cartItems");
  if (!entries.length) {
    box.innerHTML = `<div class="cart-empty"><div class="big">&#128722;</div><h3>Tu carrito está vacío</h3><p>Agrega productos para verlos aquí.</p></div>`;
  } else {
    box.innerHTML = entries.map(([id, q]) => {
      const p = PRODUCTS.find(x => x.id === +id);
      return `
      <div class="ci">
        <div class="ci-img" style="background:${p.bg}">${p.img ? `<img src="${p.img}" alt="${esc(p.title)}">` : p.emoji}</div>
        <div class="ci-info">
          <div class="ci-title">${p.title}</div>
          <div class="ci-stock">En stock</div>
          <div class="ci-price">${money(p.price * q)}</div>
          <div class="ci-controls">
            <div class="qty-box">
              <button data-dec="${p.id}">−</button><span>${q}</span><button data-inc="${p.id}">+</button>
            </div>
            <button class="ci-rm" data-rm="${p.id}">Eliminar</button>
          </div>
        </div>
      </div>`;
    }).join("");
  }
  $("#cartQty").textContent = cartCount();
  $("#cartSubtotal").textContent = money(cartSubtotal());
  $("#checkoutBtn").disabled = !entries.length;
  $("#checkoutBtn").style.opacity = entries.length ? 1 : .5;

  // avance hacia el envío gratis
  const sub = cartSubtotal();
  const sp = $("#shipProgress");
  if (!sub) { sp.textContent = ""; sp.className = "ship-progress"; }
  else if (sub >= FREE_SHIPPING_FROM) { sp.innerHTML = "&#128666; &#10003; ¡Tu pedido tiene ENVÍO GRATIS!"; sp.className = "ship-progress free"; }
  else { sp.innerHTML = `Agrega <strong>${money(FREE_SHIPPING_FROM - sub)}</strong> más y tu envío es <strong>GRATIS</strong>`; sp.className = "ship-progress"; }
  updateCartBadge();
}

function addToCart(id, qty = 1, silent = false) {
  const p = PRODUCTS.find(x => x.id === +id);
  if (!p) return;
  cart[id] = Math.min((cart[id] || 0) + qty, p.stock);
  save(); renderCart();
  if (!silent) toast(`✓ Agregado al carrito: ${p.title.slice(0, 45)}…`);
}

/* =================== MODALES =================== */
function openModal(id) { $("#" + id).classList.add("open"); document.body.style.overflow = "hidden"; }
function closeModal(id) { $("#" + id).classList.remove("open"); document.body.style.overflow = ""; }
function closeAll() {
  $$(".modal.open").forEach(m => m.classList.remove("open"));
  $("#cartDrawer").classList.remove("open");
  $("#overlay").classList.remove("show");
  document.body.style.overflow = "";
}

/* =================== RESEÑAS =================== */
function renderReviews() {
  if (!currentProduct) return;
  const list = reviews[currentProduct.id] || [];
  $("#rvSummary").innerHTML =
    `<span class="stars muted">${stars(0)}</span> ` +
    (list.length ? `<strong>${list.length}</strong> reseña${list.length > 1 ? "s" : ""}` : "Sin reseñas todavía — sé el primero en opinar");
  $("#rvList").innerHTML = list.map(r => `
    <div class="review">
      <div class="rv-head"><strong>${esc(r.name)}</strong><span>${esc(r.date)}</span></div>
      <p>${esc(r.text)}</p>
    </div>`).join("");
}

function publishReview() {
  const name = $("#rvName").value.trim();
  const text = $("#rvText").value.trim();
  if (!name || !text) return toast("Escribe tu nombre y tu reseña para publicar");
  const id = currentProduct.id;
  (reviews[id] = reviews[id] || []).unshift({ name, text, date: new Date().toLocaleDateString("es-CO") });
  save();
  $("#rvName").value = "";
  $("#rvText").value = "";
  renderReviews();
  renderGrid();
  toast("✓ Reseña publicada — gracias por tu opinión");
}

function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === +id);
  if (!p) return;
  currentProduct = p;
  $("#pmImg").style.background = p.bg;
  $("#pmImg").innerHTML = p.img ? `<img src="${p.img}" alt="${esc(p.title)}">` : p.emoji;
  const thumbItems = p.img
    ? [{ img: p.img }, { emoji: p.emoji }, { emoji: "📦" }, { emoji: "✨" }]
    : [{ emoji: p.emoji }, { emoji: "📦" }, { emoji: "✨" }, { emoji: "🔒" }];
  $("#pmThumbs").innerHTML = thumbItems.map((t, i) =>
    `<button class="${i === 0 ? "on" : ""}" data-thumb="${i}"${t.img ? ` data-src="${t.img}"` : ` data-emoji="${t.emoji}"`}>${t.img ? "🖼️" : t.emoji}</button>`).join("");
  $("#pmTitle").textContent = p.title;

  const rc = reviewCount(p.id);
  $("#pmRating").innerHTML = `<span class="stars muted">${stars(0)}</span> <span class="pc-reviews">${rc ? rc + " reseña" + (rc > 1 ? "s" : "") : "Sin reseñas"}</span> <span>|</span> <a style="color:var(--link);cursor:pointer" id="rvJump">Escribe una reseña</a>`;

  const pct = p.old ? Math.round((1 - p.price / p.old) * 100) : 0;
  $("#pmPriceBox").innerHTML = `
    <span class="big">${money(p.price)}</span>
    ${p.old ? `<span class="save"> -${pct}%</span><br><s>${money(p.old)}</s> Precio sugerido` : ""}
    <br>IVA incluido`;
  $("#pmBullets").innerHTML = p.bullets.map(b => `<li>${b}</li>`).join("");
  $("#pmTable").innerHTML = `<tr><td>Categoría</td><td>${p.cat}</td></tr>` +
    p.specs.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("");
  $("#pmBuyPrice").innerHTML = `${money(p.price)}<br><small>o 3x sin intereses de ${money(p.price / 3)}</small>`;
  $("#pmShip").innerHTML = p.price >= FREE_SHIPPING_FROM
    ? `<strong>&#128666; Envío GRATIS</strong> — llega en 2–4 días`
    : `Llega en 2–4 días — envío <strong>GRATIS desde ${money(FREE_SHIPPING_FROM)}</strong>`;
  $("#pmQty").innerHTML = Array.from({ length: Math.min(p.stock, 10) }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join("");
  $("#pmSeller").innerHTML = `<tr><td>Vendido por</td><td>${STORE_NAME} Official</td></tr>
    <tr><td>Existencias</td><td style="color:var(--green);font-weight:700">${p.stock} disponibles</td></tr>`;

  renderReviews();
  openModal("productModal");
}

/* =================== CHECKOUT / WHATSAPP =================== */
function shipCost(sub) { return sub >= FREE_SHIPPING_FROM ? 0 : SHIPPING_COST; }

function openCheckout() {
  if (!cartCount()) return;
  $("#cartDrawer").classList.remove("open");
  const sub = cartSubtotal();
  const ship = shipCost(sub);
  $("#coItems").textContent = money(sub);
  $("#coShip").textContent = ship ? money(ship) : "GRATIS";
  $("#coShip").style.color = ship ? "" : "var(--green)";
  $("#coShip").style.fontWeight = ship ? "" : "700";
  $("#coFreeHint").style.display = ship ? "none" : "block";
  $("#coTotal").textContent = money(sub + ship);
  openModal("checkoutModal");
}

function buildWhatsAppMessage(orderId, customer) {
  const lines = Object.entries(cart)
    .map(([id, q]) => {
      const p = PRODUCTS.find(x => x.id === +id);
      return p ? `• ${q} x ${p.title} — ${money(p.price * q)}` : null;
    })
    .filter(Boolean);
  const sub = cartSubtotal();
  const ship = shipCost(sub);
  return [
    `🛒 *PEDIDO ${orderId}* — ${STORE_NAME}`,
    ``,
    `*Productos:*`,
    ...lines,
    ``,
    `Subtotal: ${money(sub)}`,
    `Envío: ${ship ? money(ship) : "GRATIS ✓"}`,
    `*TOTAL: ${money(sub + ship)}*`,
    ``,
    `*Datos del cliente:*`,
    `Nombre: ${customer.name}`,
    `Dirección: ${customer.addr}`,
    `Ciudad: ${customer.city} (CP ${customer.zip})`,
    `Teléfono: ${customer.phone}`,
  ].join("\n");
}

function placeOrder(e) {
  e.preventDefault();
  const id = "SZ-" + Date.now().toString().slice(-8);
  const customer = {
    name: $("#coName").value.trim(),
    addr: $("#coAddr").value.trim(),
    city: $("#coCity").value.trim(),
    zip: $("#coZip").value.trim(),
    phone: $("#coPhone").value.trim(),
  };
  const total = cartSubtotal() + shipCost(cartSubtotal());
  const msg = buildWhatsAppMessage(id, customer);

  orders.unshift({ id, date: new Date().toISOString(), total, items: { ...cart }, customer });
  cart = {};
  save(); renderCart();

  // enlaces directos a WhatsApp con los productos, precio y datos del cliente
  $("#waLinks").innerHTML = WHATSAPP_NUMBERS.map(num => `
    <a href="https://wa.me/${num}?text=${encodeURIComponent(msg)}" target="_blank" rel="noopener">
      &#128172; Confirmar por WhatsApp <span class="wa-num">+${num}</span>
    </a>`).join("");

  $("#okId").textContent = id;
  $("#checkoutForm").reset();
  closeModal("checkoutModal");
  openModal("okModal");
}

/* =================== EVENTOS =================== */
document.addEventListener("click", e => {
  const t = e.target;

  // cerrar modales
  if (t.matches("[data-close]")) return closeModal(t.dataset.close);
  if (t.matches(".modal") && !t.matches(".modal-card")) return closeAll();

  // carrito
  const add = t.closest("[data-add]");
  if (add) { e.stopPropagation(); return addToCart(add.dataset.add); }

  const fav = t.closest("[data-fav]");
  if (fav) {
    e.stopPropagation();
    const id = +fav.dataset.fav;
    wishlist.has(id) ? wishlist.delete(id) : wishlist.add(id);
    save();
    toast(wishlist.has(id) ? "♥ Guardado en tu lista de deseos" : "Eliminado de la lista de deseos");
    renderGrid();
    return;
  }

  // enlace "Escribe una reseña" dentro del modal
  if (t.id === "rvJump") { $("#rvName").focus(); $("#rvName").scrollIntoView({ behavior: "smooth", block: "center" }); return; }

  // abrir producto
  const card = t.closest("[data-id]");
  if (card) return openProduct(card.dataset.id);

  // cantidades del carrito
  if (t.dataset.inc) { const id = t.dataset.inc; const p = PRODUCTS.find(x => x.id === +id);
    if (cart[id] < p.stock) cart[id]++; save(); return renderCart(); }
  if (t.dataset.dec) { const id = t.dataset.dec; cart[id]--; if (cart[id] <= 0) delete cart[id];
    save(); return renderCart(); }
  if (t.dataset.rm) { delete cart[t.dataset.rm]; save(); return renderCart(); }

  // filtros de categoría
  const chip = t.closest("[data-cat]");
  if (chip) { activeCat = chip.dataset.cat; query = ""; $("#searchInput").value = ""; renderChips(); renderGrid(); return; }

  // miniaturas del modal
  if (t.dataset.thumb !== undefined) {
    $$("#pmThumbs button").forEach(b => b.classList.remove("on"));
    t.classList.add("on");
    const box = $("#pmImg");
    if (t.dataset.src) box.innerHTML = `<img src="${t.dataset.src}" alt="${currentProduct.title}">`;
    else box.textContent = t.dataset.emoji || currentProduct.emoji;
    return;
  }
});

// header
$("#cartBtn").onclick = () => { renderCart(); $("#cartDrawer").classList.add("open"); $("#overlay").classList.add("show"); };
$("#cartClose").onclick = closeAll;
$("#keepShopping").onclick = closeAll;
$("#overlay").onclick = closeAll;
$("#checkoutBtn").onclick = openCheckout;
$("#checkoutForm").onsubmit = placeOrder;
$("#logoLink").onclick = e => { e.preventDefault(); activeCat = ""; query = ""; $("#searchInput").value = ""; renderChips(); renderGrid(); window.scrollTo({ top: 0, behavior: "smooth" }); };

$("#accountBtn").onclick = () => toast("Demo: aquí iría el inicio de sesión");
$("#ordersBtn").onclick = () => toast(orders.length ? `Tienes ${orders.length} pedido(s). Último: ${orders[0].id}` : "Aún no has hecho pedidos");
$("#deliverBtn").onclick = () => toast("Demo: aquí elegirías tu dirección de entrega");

// búsqueda
$("#searchForm").onsubmit = e => {
  e.preventDefault();
  query = $("#searchInput").value.trim();
  activeCat = $("#searchCat").value;
  renderChips(); renderGrid();
  $("#resultsPanel").scrollIntoView({ behavior: "smooth" });
};
$("#searchCat").onchange = () => {
  activeCat = $("#searchCat").value;
  query = $("#searchInput").value.trim();
  renderChips(); renderGrid();
};
$("#sortSel").onchange = renderGrid;

// modal de producto
$("#pmAdd").onclick = () => { addToCart(currentProduct.id, +$("#pmQty").value); };
$("#pmBuy").onclick = () => { addToCart(currentProduct.id, +$("#pmQty").value, true); closeModal("productModal"); openCheckout(); };

// reseñas
$("#rvSend").onclick = publishReview;
$("#rvText").addEventListener("keydown", e => {
  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) publishReview();
});

// teclado
document.addEventListener("keydown", e => { if (e.key === "Escape") closeAll(); });

// volver arriba
$("#backTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

/* =================== INIT =================== */
renderSearchCats();
renderChips();
renderGrid();
renderCart();
