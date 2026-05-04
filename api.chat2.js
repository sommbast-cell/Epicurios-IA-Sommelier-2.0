export default function handler(req, res) {
  // On récupère le message du front
  const message = (req.body?.message || "").toLowerCase().trim();

  let reply = "";

  // 🍽️ LOGIQUE SOMMELIER (MVP INTELLIGENT)

  if (message.includes("poisson") || message.includes("fruit de mer")) {
    reply = "🐟 Je te conseille un Chablis, un Sancerre ou un Muscadet bien frais.";
  }

  else if (message.includes("viande rouge") || message.includes("bœuf") || message.includes("boeuf")) {
    reply = "🥩 Pars sur un Bordeaux structuré ou un Syrah de la vallée du Rhône.";
  }

  else if (message.includes("volaille") || message.includes("poulet")) {
    reply = "🍗 Un Pinot Noir léger ou un Chardonnay boisé fonctionnera très bien.";
  }

  else if (message.includes("fromage")) {
    reply = "🧀 Un vin blanc sec type Riesling ou un rouge souple type Gamay.";
  }

  else if (message.includes("dessert") || message.includes("sucré")) {
    reply = "🍰 Un Sauternes ou un Muscat sera parfait.";
  }

  else if (message.includes("apéritif") || message.includes("apero") || message.includes("apéro")) {
    reply = "🥂 Champagne brut, Crémant ou un bon vin blanc vif.";
  }

  else {
    reply = "🍷 Dis-moi un plat précis (poisson, viande, fromage…) et je te propose le vin parfait.";
  }

  // réponse API
  res.status(200).json({
    reply,
    input: message
  });
}
