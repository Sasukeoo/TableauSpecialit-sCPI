// Base de données complète des molécules pour l'apprentissage CPI (Partie PVA)
// Contient 100% des informations des fichiers tableau.pdf et sythese.pdf

const MOLECULES_DATA = [
  {
    id: "lithium",
    element: "Lithium",
    categorie: "Cation",
    sous_categorie: "Groupe I - Alcalins",
    dose: "400 mg",
    formes: "Carbonate de lithium",
    mecanismes: [
      "Mécanisme d'action inconnu mais il remplacerait le sodium dans certaines activités cellulaires.",
      "Thymorégulateur (stabilisateur de l'humeur)."
    ],
    indications: [
      "Troubles bipolaires."
    ],
    effets_indesirables: [
      "La marge thérapeutique est étroite.",
      "Nausées, vomissements, diarrhée, sédation après la prise.",
      "Néphrotoxicité à long terme (Insuffisance rénale chronique).",
      "Modifications électrocardiographiques et troubles du rythme surtout quand les concentrations dépassent 1 mmol/l.",
      "Tératogène (attention !!).",
      "Prise de poids.",
      "Interactions médicamenteuses majeures : la prise de diurétiques, le régime sans sel, les AINS, les IECA et les sartans diminuent le Na+ (sodium) et augmentent donc la lithémie (risque de surdosage).",
      "Interaction avec les antidépresseurs pouvant provoquer un syndrome sérotoninergique."
    ],
    details_synthese: [
      "Alcalin - Carbonate.",
      "L'effet se manifeste lentement (2-3 semaines).",
      "Pathologie fréquente (facteurs génétiques + environnement).",
      "Lithémie normale à cibler entre 0,5 mmol/L et 1 mmol/L.",
      "En cas d'insuffisance rénale, il est impératif de diminuer la posologie."
    ]
  },
  {
    id: "sodium",
    element: "Sodium",
    categorie: "Cation",
    sous_categorie: "Groupe I - Alcalins",
    dose: "0,9% (9g/L)",
    formes: "Chlorure de sodium (NaCl)",
    mecanismes: [
      "À 0,9 %, la solution est isotonique (mime le liquide interstitiel ou le plasma).",
      "Rôle majeur dans la polarisation/dépolarisation des membranes et la régulation de la pression osmotique."
    ],
    indications: [
      "Solution de remplissage par voie intraveineuse (IV).",
      "Apport d'électrolytes par voie orale en cas de diarrhée sévère pour compenser la perte.",
      "Première intention pour la rhinite chez l'enfant et l'adulte (solution nasale).",
      "Excipient pour collyres, préparations injectables, etc., pour garantir l'isotonicité.",
      "Laxatif pour lavage intestinal avant examen (à forte dose, en sel ou solution orale pour traiter la constipation)."
    ],
    effets_indesirables: [
      "Hypernatrémie : provoquée par un apport excessif en NaCl. Entraîne une rétention d'eau (œdème, hypovolémie) et de l'hypertension.",
      "Hyponatrémie : généralement due à des diarrhées, vomissements ou une transpiration excessive. Elle est concomitante à une déshydratation, des céphalées, de l'asthénie, une hypotension et une tachycardie."
    ],
    details_synthese: [
      "Cation monovalent très soluble dans l'eau.",
      "Concentration physiologique : 140 mmol/L en extracellulaire et 10 mmol/L en intracellulaire.",
      "Apport journalier conseillé : 5g/jour."
    ]
  },
  {
    id: "potassium",
    element: "Potassium",
    categorie: "Cation",
    sous_categorie: "Groupe I - Alcalins",
    dose: "20 mEq",
    formes: "Chlorure de potassium (KCl) ou gluconate de potassium",
    mecanismes: [
      "Rôle essentiel dans la polarisation/dépolarisation des membranes et la régulation de la pression osmotique."
    ],
    indications: [
      "Par voie IV : traitement de l'hypokaliémie.",
      "Par voie orale (PO) : traitement de l'hypokaliémie induite par un diurétique de l'anse."
    ],
    effets_indesirables: [
      "Hyperkaliémie : troubles cardiaques graves (fibrillation ventriculaire du cœur puis arrêt cardiaque !!!). Souvent d'origine iatrogène avec la prise d'antidiurétiques à épargne potassique (comme la spironolactone).",
      "Hypokaliémie : provient de diarrhées, vomissements, transpiration excessive ou de l'usage de diurétiques de l'anse (furosémide, bumétamide). Troubles électrolytiques dangereux : allongement de l'intervalle QT sur l'ECG, fatigue, crampes musculaires..."
    ],
    details_synthese: [
      "Cation monovalent soluble dans l'eau.",
      "Concentration physiologique : 4,5 mmol/L dans le sérum, et 160 mmol/L en intracellulaire (associé aux anions HPO4^2- et aux anions protéiques).",
      "Apport recommandé : 3-4g/jour.",
      "L'aldostérone favorise l'élimination du K+ et la rétention du Na+."
    ]
  },
  {
    id: "magnesium",
    element: "Magnésium",
    categorie: "Cation",
    sous_categorie: "Groupe II (Alcalino-terreux)",
    dose: "162 mg",
    formes: "IV : Chlorure ou sulfate de magnésium | PO : Gluconate et oxyde de magnésium",
    mecanismes: [
      "Cofacteur essentiel dans la glycolyse.",
      "Rôle important dans le fonctionnement de la pompe Na+/K+/ATPase."
    ],
    indications: [
      "Par voie IV : Hypomagnésémie accompagnée de crampes, traitement de la prééclampsie et de l'éclampsie.",
      "Par voie orale (PO) : Hypomagnésémie simple, fatigue musculaire.",
      "Sous forme de carbonate : utilisé par voie orale comme antiacide gastrique.",
      "Galénique : incorporé dans des poudres, dentifrices et cosmétiques."
    ],
    effets_indesirables: [
      "Par voie orale : peut provoquer des diarrhées (effet laxatif prononcé !!!).",
      "Hypermagnésémie : survient en cas d'insuffisance rénale ou d'apport trop important. Cause une faiblesse musculaire et de l'hypotension.",
      "Hypomagnésémie : causée par un manque d'apport. Entraîne fatigue, irritabilité, tétanie et convulsions. Risque accru avec la prise de diurétiques, d'IPP (inhibiteurs de la pompe à protons) et d'immunosuppresseurs."
    ],
    details_synthese: [
      "Cation divalent soluble dans l'eau.",
      "Concentration physiologique : 0,8 mmol/L dans le sang.",
      "Répartition dans l'organisme : 54% dans les os, 45% en intracellulaire, 1% dans le sang."
    ]
  },
  {
    id: "calcium",
    element: "Calcium",
    categorie: "Cation",
    sous_categorie: "Groupe II (Alcalino-terreux)",
    dose: "0,5 à 1,2 g élémentaire",
    formes: "Carbonate de calcium ou citrate de calcium",
    mecanismes: [
      "Stimule les ostéoblastes pour la formation osseuse.",
      "Joue un rôle dans la contraction musculaire et agit comme cofacteur de la coagulation."
    ],
    indications: [
      "Prévention des fractures ostéoporotiques (uniquement s'il est associé à la vitamine D).",
      "Utilisé dans les préparations antiacides (carbonate de calcium)."
    ],
    effets_indesirables: [
      "Troubles gastro-intestinaux (TGI) comme la constipation (surtout avec le carbonate de calcium)."
    ],
    details_synthese: [
      "Cation divalent soluble dans l'eau, mais peu soluble sous forme de carbonate.",
      "Concentration physiologique : 2,4 mmol/L dans le sang.",
      "Répartition : 98% se trouve dans le squelette (c'est le cation le plus important quantitativement dans l'organisme).",
      "Constitue les cristaux d'hydroxyapatite de l'os.",
      "Apport quotidien recommandé : 1 à 2,5 g/jour.",
      "Absorption intestinale régulée par le rythme circadien (augmente la nuit).",
      "Régulation hormonale : La PTH (hormone parathyroïdienne) est hypercalcémiante (augmente le Ca2+ sanguin, diminue l'excrétion rénale, stimule l'ostéoclastose). La Calcitonine est hypocalcémiante (diminue le Ca2+, stimule les ostéoblastes). La Vitamine D favorise la synthèse osseuse globale en augmentant l'absorption intestinale et rénale (et régule négativement la PTH)."
    ]
  },
  {
    id: "strontium",
    element: "Strontium",
    categorie: "Cation",
    sous_categorie: "Groupe II (Alcalino-terreux)",
    dose: "-",
    formes: "Ranélate de strontium",
    mecanismes: [
      "Stimule la formation osseuse en favorisant la réplication des pré-ostéoblastes et la synthèse de l'os par les ostéoblastes.",
      "Diminue la résorption osseuse en freinant la différenciation et l'activité des ostéoclastes."
    ],
    indications: [
      "Traitement de l'ostéoporose."
    ],
    effets_indesirables: [
      "Retiré du marché en 2017 en raison de ses effets indésirables graves."
    ],
    details_synthese: [
      "Utilisé exclusivement sous forme de ranélate.",
      "Médicament qui agissait sur le double mécanisme de formation et résorption."
    ]
  },
  {
    id: "baryum",
    element: "Baryum",
    categorie: "Cation",
    sous_categorie: "Groupe II (Alcalino-terreux)",
    dose: "-",
    formes: "Sulfate de baryum",
    mecanismes: [
      "Opacifiant radiologique en raison de sa forte densité aux rayons X.",
      "S'il devenait soluble, il remplacerait le potassium dans les transporteurs cellulaires, bloquant l'activité électrique."
    ],
    indications: [
      "Agent de contraste pour l'imagerie aux rayons X de l'intestin (administré par voie orale ou rectale)."
    ],
    effets_indesirables: [
      "Cardiotoxicité extrême ☠ (si absorbé sous forme soluble, mais la forme sulfate utilisée est totalement insoluble dans l'eau et dans l'acide fort de l'estomac, ce qui sécurise son usage)."
    ],
    details_synthese: [
      "Sulfate de baryum insoluble dans l'eau et les acides forts.",
      "Permet de visualiser les anomalies de structure de l'intestin."
    ]
  },
  {
    id: "fer",
    element: "Fer",
    categorie: "Cation",
    sous_categorie: "Métaux de transition",
    dose: "80-100 mg",
    formes: "PO : Gluconate, polysaccharate, sulfate | IV : Saccharose, carboxymaltose, oxyde de fer en ampoules | IM : Fer dextran ou oxyde de fer",
    mecanismes: [
      "Incorporé sous forme de Fe2+ au sein de la porphyrine IX (couronne d'imidazole) pour former l'hémoglobine et la myoglobine.",
      "Intervient comme cofacteur redox au sein des porphyrines dans le transport et l'utilisation de l'oxygène."
    ],
    indications: [
      "Traitement de l'anémie ferriprive.",
      "Conseillé pendant la grossesse en association avec des folates (vitamine B9).",
      "Agent de contraste en imagerie pour la détection des lésions focales au niveau hépatique."
    ],
    effets_indesirables: [
      "Par voie orale : Troubles gastro-intestinaux (TGI) fréquents (diarrhée ou constipation), coloration noire des selles (caca noir), coloration temporaire des dents.",
      "Par voie IV ou IM : Risque d'hypotension pouvant mener à un état de choc, coloration brune de la peau au site d'injection, douleur vive à l'injection.",
      "Interactions de complexation (très important !) : Se complexe avec les tétracyclines, diphosphonates, lévodopa, lévothyroxine et quinolones, ce qui diminue fortement leur résorption.",
      "Les antacides, les phosphates et les sels de calcium diminuent également la résorption du fer."
    ],
    details_synthese: [
      "Cation di ou tri-chargé (Fe2+ ou Fe3+), peut être hexavalent. Très soluble dans l'eau sous forme libre.",
      "Les oxydes ferriques sont insolubles.",
      "Réactions d'oxydoréduction : Le fer libre est extrêmement toxique car il génère des radicaux libres destructeurs via la réaction de Fenton. C'est pourquoi il doit toujours être complexé pour son stockage et son transport.",
      "Répartition corporelle : 50-60 mg/kg de fer dans le corps (75% fonctionnel, 25% stocké dans les hépatocytes sous forme de Fe3+, 1% biodisponible fixé sur la transferrine).",
      "Le fer est recyclé par la rate et les macrophages (ainsi que les cellules de Kupffer du foie). Sa demi-vie moyenne est de 120 jours (durée de vie des globules rouges).",
      "Utilisé par les globules rouges, la moelle épinière (noté ainsi dans le résumé de synthèse pour faire référence à la moelle osseuse) et les autres tissus.",
      "L'excrétion est très faible, le fer recyclé est fixé par la transferrine (qui fixe 2 atomes de Fe3+).",
      "Apport quotidien recommandé dans la synthèse : 1-2 g/jour (représente la quantité dans le bol alimentaire, sachant que seule une petite fraction est absorbée). Posologie thérapeutique : 100 mg/jour.",
      "Absorption : Le fer végétal (Fe3+) doit être réduit en Fe2+ par une ferriréductase intestinale avant d'être absorbé par le transporteur DMT1. Le fer héminique (animal) est absorbé directement."
    ]
  },
  {
    id: "argent",
    element: "Argent",
    categorie: "Cation",
    sous_categorie: "Métaux de transition",
    dose: "-",
    formes: "Sel d'argent sulfamidé ou nitrate d'argent",
    mecanismes: [
      "Propriétés antiseptiques et antibactériennes puissantes."
    ],
    indications: [
      "Sous forme de pommade : traitement des brûlures et des plaies infectées.",
      "Sous forme de collyre (nitrate d'argent) : historiquement utilisé pour la prévention des infections ophtalmiques à gonocoques chez le nouveau-né.",
      "Traitement local contre le bourgeon charnu."
    ],
    effets_indesirables: [
      "Argyrisme : risque d'intoxication chronique caractérisé par une coloration gris-bleu indélébile de la peau et des muqueuses."
    ],
    details_synthese: [
      "Cation monovalent soluble, mais forme des sels insolubles au contact des halogénures et de médicaments organiques (comme les barbituriques).",
      "Usage très restreint aujourd'hui en raison du risque d'argyrisme."
    ]
  },
  {
    id: "titane",
    element: "Titane",
    categorie: "Cation",
    sous_categorie: "Métaux de transition",
    dose: "-",
    formes: "Dioxyde de titane (TiO2) ou trioxyde de titane (TiO3)",
    mecanismes: [
      "Possède un pouvoir écran physique opaque aux rayons ultraviolets (UV)."
    ],
    indications: [
      "Excipient protecteur dans les crèmes solaires (écran total).",
      "Opacifiant et agent dispersif blanc (remplace le talc dans diverses préparations)."
    ],
    effets_indesirables: [
      "Classé comme cancérigène suspecté (classe 2B) lors d'une exposition industrielle (inhalation de poussières)."
    ],
    details_synthese: [
      "Présente plusieurs étages d'oxydation (+2, +3, +4, +6). Seuls TiO2 (IV) et TiO3 (VI) sont officinaux.",
      "Très peu allergisant en usage cutané."
    ]
  },
  {
    id: "platine",
    element: "Platine",
    categorie: "Cation",
    sous_categorie: "Métaux de transition",
    dose: "-",
    formes: "Cisplatine, carboplatine, oxaliplatine",
    mecanismes: [
      "Provoque la formation de liaisons croisées (ponts) entre les brins d'ADN, empêchant la réplication cellulaire et induisant l'apoptose."
    ],
    indications: [
      "Chimiothérapie anticancéreuse : traitement des tumeurs solides (testicules, ovaires, utérus, ORL) souvent associés à d'autres antinéoplasiques."
    ],
    effets_indesirables: [
      "Insuffisance rénale aiguë (surtout avec le cisplatine, ce qui impose d'imposer une diurèse forcée par hyperhydratation).",
      "Ototoxicité (surtout avec l'oxaliplatine, entraînant des pertes auditives).",
      "Myélosuppression sévère : thrombopénie (baisse des plaquettes), leucopénie (baisse des globules blancs) et anémie (baisse des globules rouges), particulièrement marquée avec le carboplatine (paraplatine).",
      "Troubles gastro-intestinaux sévères (TGI) : vomissements et nausées intenses.",
      "Risque d'apparition de résistance des tumeurs au traitement."
    ],
    details_synthese: [
      "Utilisé au degré d'oxydation +4.",
      "Très faible biodisponibilité par voie orale, ce qui nécessite une administration exclusivement par injection/perfusion IV."
    ]
  },
  {
    id: "cuivre",
    element: "Cuivre",
    categorie: "Cation",
    sous_categorie: "Métaux de transition",
    dose: "1,2-1,7 mg",
    formes: "Sulfate de cuivre | Dispositifs intra-utérins (DIU au cuivre)",
    mecanismes: [
      "Élément essentiel qui participe aux réactions d'oxydoréduction (redox).",
      "Agit comme agent spermicide dans l'utérus sous forme de dispositif intra-utérin.",
      "Joue un rôle dans la détoxification des espèces réactives de l'oxygène."
    ],
    indications: [
      "Dispositif intra-utérin : contraception locale (spermicide).",
      "Sulfate de cuivre : utilisé comme antiseptique local (notamment dans l'Eau de Dalibour, associé au sulfate de zinc, pour traiter la pyodermite, l'impétigo, l'eczéma).",
      "Utilisé dans des solutions laxatives osmotiques."
    ],
    effets_indesirables: [
      "Maladie de Wilson : maladie génétique rare due à une déficience héréditaire en céruloplasmine (ATPase de transport défectueuse). Entraîne une accumulation toxique de cuivre dans le foie, les yeux (anneau de Kayser-Fleischer) et le cerveau (lésions neurologiques). Le traitement repose sur des chélateurs comme la pénicillamine ou l'acétate de zinc."
    ],
    details_synthese: [
      "Possède deux étages d'oxydation courants. Son oxyde précipite en rouge dans la liqueur de Fehling.",
      "Se lie fortement aux protéines pour éviter des réactions redox non contrôlées.",
      "Apport recommandé : 1 mg/jour chez la femme, 1,5 mg/jour chez l'homme.",
      "Dans le plasma, il est couplé à la céruloplasmine, et aux protéines héminiques dans les cellules."
    ]
  },
  {
    id: "zinc",
    element: "Zinc",
    categorie: "Cation",
    sous_categorie: "Zinc",
    dose: "8-11 mg",
    formes: "IV : Gluconate de zinc | Topique : Oxyde, sulfate, acétate de zinc",
    mecanismes: [
      "Le sulfate de zinc (ZnSO4) empêche l'adsorption cellulaire des virus, provoque leur inactivation et bloque leur réplication.",
      "Constituant structural de nombreuses enzymes (comme la superoxyde dismutase avec le cuivre, ou la phosphodiestérase avec le manganèse) et de protéines ('doigts de zinc')."
    ],
    indications: [
      "Par voie IV (gluconate) : traitement des déficiences sévères en zinc.",
      "Par voie topique (oxyde de zinc, ZnO) : utilisé comme agent desséchant, protecteur cutané et cicatrisant (pâtes à l'eau).",
      "Traitement des lésions herpétiques (sulfate de zinc ZnSO4 associé à l'héparine).",
      "Traitement de l'acné bactérienne (acétate de zinc Zn(CH3COO)2 associé à l'érythromycine).",
      "Utilisé comme filtre UV physique dans les écrans totaux (oxyde de zinc)."
    ],
    effets_indesirables: [
      "Classé comme cancérigène lors d'une exposition industrielle (classe 2B) à ses poussières."
    ],
    details_synthese: [
      "Cation soluble dans l'eau sous forme Zn2+.",
      "Apport recommandé : 8 mg/jour chez la femme, 11 mg/jour chez l'homme."
    ]
  },
  {
    id: "bore",
    element: "Bore",
    categorie: "Cation",
    sous_categorie: "Groupe IIIb",
    dose: "-",
    formes: "Acide borique (H3BO3) ou borax (Na2B4O7)",
    mecanismes: [
      "N'a aucun rôle biochimique connu dans l'organisme.",
      "Rapidement absorbé au niveau intestinal (biodisponibilité de 90%) et éliminé très vite par voie rénale."
    ],
    indications: [
      "Antiseptique local doux utilisé dans les bains de bouche, les larmes artificielles (collyres apaisants), etc."
    ],
    effets_indesirables: [
      "Pas d'effet indésirable majeur rapporté aux doses usuelles."
    ],
    details_synthese: [
      "Existe sous l'état B3+.",
      "Utilisé principalement sous forme d'acide borique et de borax."
    ]
  },
  {
    id: "aluminium",
    element: "Aluminium",
    categorie: "Cation",
    sous_categorie: "Groupe IIIb",
    dose: "-",
    formes: "Sulfate, hydroxyde (algédrate), chlorure, sel d'hydroxyphosphate, aminoacétate, trisilicate d'aluminium",
    mecanismes: [
      "Provoque la constriction des pores de la peau (via le sulfate d'aluminium SO4), agissant comme astringent et anti-transpirant.",
      "Neutralise l'acide gastrique (antiacide sous forme d'hydroxyde d'aluminium - algédrate).",
      "Le sulfate d'aluminium possède des propriétés déshydratantes et astringentes en usage externe.",
      "Le chlorure d'aluminium possède également une action bactériostatique cutanée (Al3+)."
    ],
    indications: [
      "Astringent et hémostatique en usage externe (alun : resserre les pores, limite l'invasion bactérienne).",
      "Traitement de la transpiration excessive (chlorure d'aluminium : bouche temporairement les pores).",
      "Antiacide gastrique (algédrate Al(OH)3).",
      "Utilisé dans des dispositifs médicaux comme les patchs protecteurs (attention : ils contiennent des métaux et doivent être impérativement retirés avant un examen d'imagerie/IRM pour éviter des brûlures).",
      "Adjuvant immunologique dans les vaccins (sel d'hydroxyphosphate d'aluminium) pour stimuler la réponse immunitaire."
    ],
    effets_indesirables: [
      "Toxicité potentielle cumulable (incitant à restreindre l'usage des déodorants contenant de l'aluminium).",
      "Effet constipant marqué (spécifique aux sels d'hydroxyde).",
      "Risque d'intoxication grave en cas d'accumulation d'aluminium : peut provoquer des encéphalopathies, une ostéodystrophie et une anémie.",
      "L'algédrate peut induire la formation de phosphate d'aluminium insoluble dans l'intestin, empêchant l'absorption du phosphate et menant à une hypophosphatémie et à une ostéomalacie."
    ],
    details_synthese: [
      "Cation trivalent (Al3+) soluble dans l'eau ; précipite sous forme d'hydroxyde.",
      "Élément non essentiel pour la vie, toxique à forte dose.",
      "Les antiacides à base d'aluminium modifient le pH gastrique, altérant la résorption d'autres médicaments (respecter un intervalle de 1-2h)."
    ]
  },
  {
    id: "gadolinium",
    element: "Gadolinium",
    categorie: "Cation",
    sous_categorie: "Lanthanides",
    dose: "-",
    formes: "Complexes ioniques avec des acides carboxyliques (ex: Gadobutrol, acide gadotérique, acide gadobénique, acide gadopenténique, gadodiamide, gadoversétamide, gadotéridol, gadofosvéset, acide gadoxétique)",
    mecanismes: [
      "Agent de contraste paramagnétique. Les chélates de gadolinium à distribution extracellulaire réduisent le temps de relaxation des protons de l'eau, générant un contraste positif (brillant) en IRM."
    ],
    indications: [
      "Agent de contraste de référence pour les examens d'imagerie par résonance magnétique (IRM)."
    ],
    effets_indesirables: [
      "Nausées, vomissements et céphalées après injection.",
      "Réactions cutanées superficielles.",
      "Fibrose néphrogénique systémique (FNS) : complication rare mais très grave survenant chez les insuffisants rénaux. Elle se caractérise par une fibrose cutanée avec atteinte d'organes internes et des lésions cutanées indurées."
    ],
    details_synthese: [
      "Toujours administré sous forme de complexe/chélate car le gadolinium libre est extrêmement toxique.",
      "Éliminé principalement par les reins. Le gadobénate de diméglumine possède également une élimination partielle par le foie (voie biliaire)."
    ]
  },
  {
    id: "charbon_carbonates",
    element: "Charbon et Carbonates",
    categorie: "Anion",
    sous_categorie: "Groupe IV B",
    dose: "Charbon actif : 3g/jour (intoxication : 50g-100g)",
    formes: "Charbon actif | Carbonates (de calcium, de sodium, etc.) | Bicarbonates (HCO3-)",
    mecanismes: [
      "Charbon actif : possède des propriétés physiques d'adsorption extrêmement puissantes. Il fixe à sa surface les gaz, ions, bactéries, molécules et toxines, empêchant leur absorption digestive.",
      "Carbonates et bicarbonates : agissent comme des tampons chimiques directs en neutralisant l'acide chlorhydrique de l'estomac."
    ],
    indications: [
      "Charbon actif : traitement d'urgence des intoxications aiguës médicamenteuses ou chimiques (ingestion de poison). Traitement symptomatique de la diarrhée et des gaz intestinaux (météorisme).",
      "Carbonates : traitement symptomatique du reflux gastro-œsophagien (RGO) et des brûlures d'estomac (antiacides)."
    ],
    effets_indesirables: [
      "La neutralisation acide par les carbonates libère du CO2 dans l'estomac, ce qui provoque des flatulences et une distension gastrique (pouvant aggraver des lésions de la paroi).",
      "L'abus de bicarbonate de sodium ou de carbonate de calcium peut provoquer une alcalose systémique et alcaliniser les urines (favorisant la formation de calculs rénaux).",
      "Le carbonate de calcium (CaCO3) provoque fréquemment une constipation.",
      "Altération de l'absorption : Les antiacides modifient le pH gastrique, perturbant la biodisponibilité de nombreux médicaments. Il faut respecter un intervalle de 1 à 2 heures entre leur prise et celle d'autres traitements.",
      "Attention à l'apport en Sodium (Na+) généré par le bicarbonate de sodium chez les patients souffrant d'hypertension, d'insuffisance cardiaque ou d'insuffisance rénale."
    ],
    details_synthese: [
      "L'anion HCO3- (bicarbonate) est essentiel dans l'organisme car il constitue le couple tampon majeur du sang.",
      "Le charbon actif est également utilisé comme colorant.",
      "Physiologie gastrique et ulcères (très important !) :",
      "  - Causes d'ulcères : Helicobacter pylori (traité par quadrithérapie : Bismuth + métronidazole + tétracycline + IPP, ou trithérapie en cas d'échec : Oméprazole + amoxicilline + clarithromycine), tabac, AINS (utiliser un IPP ou du misoprostol en prévention).",
      "  - Syndrome de Zollinger-Ellison : hyperproduction tumorale de gastrine provoquant un état hypersécrétoire acide sévère.",
      "  - Mécanismes de production d'acidité (3 voies) : 1) Libération d'histamine (active les récepteurs H2 -> augmentation d'AMPc -> active la pompe à protons). 2) Acétylcholine (se fixe sur récepteurs muscariniques M3 -> activation dépendante du calcium). 3) Gastrine (se fixe sur récepteurs CCK2 -> activation dépendante du calcium).",
      "  - Protection de l'estomac : La production de mucus protecteur est stimulée par la prostaglandine E2 (qui inhibe également la gastrine et stimule la sécrétion de bicarbonate)."
    ]
  },
  {
    id: "antiacides_detail",
    element: "Antiacides (comparatif)",
    categorie: "Anion",
    sous_categorie: "Groupe IV B (Focus)",
    dose: "-",
    formes: "Sels d'Aluminium (hydroxyde/algédrate, aminoacétate, trisilicate) | Sels de Magnésium (hydroxyde, carbonate, trisilicate, oxyde) | Magaldrate (Al + Mg) | Bicarbonate de Na | Carbonate de Ca",
    mecanismes: [
      "Neutralisation chimique directe de l'acidité gastrique (sans inhiber la sécrétion à la source, contrairement aux IPP)."
    ],
    indications: [
      "Soulagement rapide de la douleur gastrique (brûlures, RGO). N'influencent pas la vitesse de cicatrisation des ulcères. Les formes liquides (suspensions) sont plus efficaces que les comprimés."
    ],
    effets_indesirables: [
      "Bicarbonate de Sodium : risque d'alcalose, alcalinisation des urines (calculs rénaux), ballonnements et gaz.",
      "Carbonate de Calcium (CaCO3) : risque d'alcalose et de constipation marquée.",
      "Sels de Magnésium : effet laxatif (diarrhée). Risque d'accumulation chez l'insuffisant rénal pouvant entraîner une hypermagnésémie avec troubles neuromusculaires et cardiovasculaires.",
      "Sels d'Aluminium (Algédrate) : effet constipant. Risque de formation de complexes insolubles avec les phosphates dans l'intestin (risque d'hypophosphatémie et d'ostéomalacie). Son accumulation peut causer une encéphalopathie, une ostéodystrophie et une anémie.",
      "Interactions : Modifient le pH de l'estomac. Espacer de 1 à 2h avec les autres médicaments."
    ],
    details_synthese: [
      "Cette fiche regroupe les spécificités comparatives des différents antiacides listés dans le cours."
    ]
  },
  {
    id: "silice_silicates",
    element: "Silice et Silicates",
    categorie: "Anion",
    sous_categorie: "Groupe IV B",
    dose: "-",
    formes: "Talc | Trisilicate de magnésium | Silicate d'aluminium (Kaolin) | Bentonite | Attapulgite (Actapulgite) | Silicone (diméthicone, siméticone)",
    mecanismes: [
      "Propriétés physiques de protection, de pouvoir desséchant, de déshydratation et d'adsorption.",
      "Trisilicate de magnésium : soluble dans les acides dilués, agit comme antiacide gastrique et antimottant.",
      "Kaolin (silicate d'aluminium) : adsorbe les toxines et l'eau dans le tube digestif (anti-diarrhéique, antiacide, déshydratant externe de transpiration, et protecteur local).",
      "Attapulgite : viscosifiant puissant de structure en feuillets qui gonfle dans l'eau pour former des gels hautement adsorbants.",
      "Silicone : réduit la tension superficielle des bulles de gaz (antimousse) et agit comme lubrifiant physique."
    ],
    indications: [
      "Talc : talcage des fesses de bébé (pouvoir desséchant), lubrifiant galénique, talcage pleural (induction d'une symphyse pleurale en cas d'épanchement récidivant).",
      "Trisilicate de magnésium : antiacide.",
      "Kaolin (silicate d'aluminium) : traitement symptomatique des diarrhées (adsorbant puissant interne ou local), antiacide, déshydratant externe (transpiration), protecteur cutané et cicatrisant sous forme de pommade.",
      "Bentonite (argile naturelle) : adsorbant interne, agent émulsifiant et dispersant dans les cosmétiques.",
      "Attapulgite (Actapulgite) : pansement digestif protecteur, viscosifiant et anti-diarrhéique.",
      "Silicone (diméthicone, siméticone) : traitement du météorisme (ballonnements, sous forme d'antimousse), lubrifiant, et traitement anti-poux physique."
    ],
    effets_indesirables: [
      "Pas d'effets indésirables notables reportés en usage local ou digestif à court terme (composés inertes non absorbés)."
    ],
    details_synthese: [
      "La silice est présente à hauteur de 10 mg/L de sang. Elle se trouve dans les os, les tendons et les tissus conjonctifs où elle contribue à stabiliser les structures tridimensionnelles."
    ]
  },
  {
    id: "azote",
    element: "Azote (dérivés gazeux et minéraux)",
    categorie: "Anion",
    sous_categorie: "Groupe VB",
    dose: "-",
    formes: "Protoxyde d'azote (N2O) | Nitrite de sodium (NaNO2) | Monoxyde d'azote (NO)",
    mecanismes: [
      "Protoxyde d'azote (N2O) : gaz à effet anesthésiant léger et analgésique rapide par inhalation.",
      "Nitrite de sodium (NaNO2) : antioxydant chimique. Dans l'organisme, il induit la vasodilatation des muscles lisses des artères en libérant du monoxyde d'azote (NO). Le NO active la guanylate cyclase, ce qui augmente le GMP cyclique (GMPc), puissant médiateur de la relaxation vasculaire.",
      "Monoxyde d'azote (NO) : gaz inhalé qui provoque une vasodilatation pulmonaire sélective (n'agit que sur les vaisseaux des zones ventilées, sans effet systémique car il est immédiatement inactivé par l'hémoglobine)."
    ],
    indications: [
      "Protoxyde d'azote (N2O) : analgésie et sédation consciente pour les soins de courte durée (mélange équimolaire 50% N2O / 50% O2 ou MEOPA) en dentisterie, pédiatrie et urgences.",
      "Nitrite de sodium (NaNO2) : conservateur alimentaire industriel (viandes, saumures) pour bloquer la germination de Clostridium botulinum. Ses dérivés (nitroglycérine) sont utilisés dans l'angor.",
      "Monoxyde d'azote (NO) : traitement de l'insuffisance respiratoire hypoxémique avec hypertension pulmonaire chez le nouveau-né prématuré. Traitement des poussées d'hypertension artérielle pulmonaire péri/post-opératoire en chirurgie cardiaque chez l'adulte et l'enfant (améliore la fonction du ventricule droit)."
    ],
    effets_indesirables: [
      "Protoxyde d'azote (N2O) : toxicité neurologique (myéloneuropathie par inactivation de la vitamine B12) en cas d'exposition chronique ou d'abus récréatif (!!! danger de l'usage récréatif).",
      "Nitrite de sodium (NaNO2) : toxique à forte dose. Réagit avec les amines secondaires (notamment lors de la cuisson de la viande) pour former des nitrosamines hautement cancérigènes.",
      "Monoxyde d'azote (NO) : risque de toxicité neurologique si surdosage. Induit de manière physiologique l'érection chez l'homme (voie du GMPc)."
    ],
    details_synthese: [
      "Le N2O est communément appelé 'gaz hilarant'. Son effet analgésique est très rapide et de courte durée.",
      "Le NaNO2 est un additif alimentaire très surveillé."
    ]
  },
  {
    id: "derives_nitres",
    element: "Dérivés nitrés",
    categorie: "Anion",
    sous_categorie: "Groupe VB",
    dose: "-",
    formes: "Esters nitreux et nitriques (comme la nitroglycérine) | Molsidomine",
    mecanismes: [
      "Ce sont des donneurs de monoxyde d'azote (NO) :",
      "  - Les esters nitreux/nitriques nécessitent la présence de groupements thiol (SH) intracellulaires pour être convertis en NO.",
      "  - La molsidomine est un promédicament métabolisé en NO de manière directe, sans nécessiter de groupements thiol (évite le phénomène d'échappement thérapeutique)."
    ],
    indications: [
      "Traitement et prévention de la crise d'angine de poitrine (angor).",
      "Traitement de l'insuffisance cardiaque aiguë.",
      "Traitement des crises hypertensives."
    ],
    effets_indesirables: [
      "Maux de tête (céphalées de vasodilatation) très fréquents en début de traitement.",
      "Hypotension artérielle (pouvant provoquer des vertiges, voire une syncope orthostatique)."
    ],
    details_synthese: [
      "La dépendance aux groupements thiol pour les dérivés nitrés classiques explique la tolérance (ou échappement) qui impose de respecter un intervalle libre sans dérivés nitrés chaque jour."
    ]
  },
  {
    id: "phosphate",
    element: "Phosphate",
    categorie: "Anion",
    sous_categorie: "Groupe VB",
    dose: "-",
    formes: "Anion phosphate (PO3- / PO4^3-)",
    mecanismes: [
      "Principal tampon chimique intracellulaire (maintien du pH à 7,2).",
      "Constituant structural majeur des dents et des os (sous forme de cristaux d'hydroxyapatite)."
    ],
    indications: [
      "Acidifiant urinaire (utilisé pour prévenir certains types de calculs ou infections rénales).",
      "Laxatif osmotique (sels de phosphate).",
      "Antidote d'urgence dans les hypercalcémies sévères (précipite le calcium libre)."
    ],
    effets_indesirables: [
      "Risque d'insuffisance rénale aiguë ou chronique sévère en cas d'utilisation aiguë ou de surdosage (précipitations de phosphate de calcium dans les tubules rénaux)."
    ],
    details_synthese: [
      "Composant essentiel de molécules biologiques fondamentales : ATP, AMPc, GMPc, ADN, ARN, phospholipides membranaires.",
      "Le corps d'un adulte contient environ 1 kg de phosphore, dont 80 à 85% est localisé dans les os et les dents.",
      "Régulation : Sous le contrôle étroit de la PTH (qui favorise son excrétion rénale) et de la calcitonine. La vitamine D favorise son absorption intestinale."
    ]
  },
  {
    id: "arsenic",
    element: "Arsenic",
    categorie: "Anion",
    sous_categorie: "Groupe VB",
    dose: "-",
    formes: "Trioxyde d'arsenic (As2O3)",
    mecanismes: [
      "Provoque la fragmentation de l'ADN et induit l'apoptose (mort cellulaire programmée) des cellules NB4 humaines de la Leucémie Promyélocytaire Aiguë (LPA).",
      "Provoque spécifiquement la lésion et la dégradation de la protéine de fusion oncogénique PML/RAR-alpha."
    ],
    indications: [
      "Agent anticancéreux de deuxième intention : utilisé pour induire et consolider la rémission dans la Leucémie Promyélocytaire Aiguë (LPA) en cas de résistance ou rechute."
    ],
    effets_indesirables: [
      "Extrêmement toxique à dose systémique.",
      "Intoxication chronique : se manifeste par une hyperkératose palmo-plantaire (épaississement de la peau des mains et pieds), une hyperpigmentation de la peau, des neuropathies périphériques, et un risque accru de cancers."
    ],
    details_synthese: [
      "Élément métallique toxique existant aux degrés d'oxydation -3, 0, +3, +5.",
      "Le méthylarsénate était historiquement utilisé comme antibiotique, mais son rapport bénéfice/risque est aujourd'hui jugé nul."
    ]
  },
  {
    id: "bismuth",
    element: "Bismuth",
    categorie: "Anion",
    sous_categorie: "Groupe VB",
    dose: "-",
    formes: "Sous-citrate de bismuth tripotassique | Complexe phénol-bismuth",
    mecanismes: [
      "Toxicité membranaire ciblée sur les bactéries : inhibe la synthèse des protéines de la membrane bactérienne.",
      "Inhibe l'activité de l'enzyme uréase d'Helicobacter pylori (ce qui empêche la bactérie de neutraliser l'acide gastrique autour d'elle pour survivre).",
      "Inhibe la synthèse de la paroi bactérienne.",
      "Empêche l'adhérence bactérienne (cytoadhérence) aux cellules gastriques et entre en compétition avec le transport du fer bactérien.",
      "Agit également comme un pansement protecteur de la muqueuse de l'estomac."
    ],
    indications: [
      "Traitement des infections à Helicobacter pylori associées aux ulcères gastriques ou duodénaux, administré en association fixe (quadrithérapie : sous-citrate de bismuth tripotassique + métronidazole + tétracycline + IPP).",
      "Traitement de la blépharite (inflammation des paupières) : effet astringent local (resserre les tissus de la paupière, limitant les sécrétions et empêchant la colonisation bactérienne pour éviter la formation de croûtes)."
    ],
    effets_indesirables: [
      "Coloration noire de la langue et des selles (sans gravité, à ne pas confondre avec un saignement digestif)."
    ],
    details_synthese: [
      "Degrés d'oxydation : 0, +3, +5."
    ]
  },
  {
    id: "oxygene",
    element: "Oxygène (gaz)",
    categorie: "Anion",
    sous_categorie: "Groupe VI B",
    dose: "> 99,5 %, gaz médical",
    formes: "O2 (dioxygène)",
    mecanismes: [
      "Indispensable pour l'oxydation et la métabolisation des substances endogènes et exogènes.",
      "Agit comme l'accepteur final d'électrons à l'issue de la chaîne respiratoire mitochondriale pour la synthèse d'ATP."
    ],
    indications: [
      "Oxygénothérapie normobare : traitement de l'hypoxie (manque d'oxygène) induite par une anémie sévère, une insuffisance respiratoire ou circulatoire, ou une BPCO.",
      "Traitement d'urgence des intoxications au monoxyde de carbone (CO) (le CO déplace l'oxygène de l'hémoglobine).",
      "Oxygénothérapie hyperbare (chambre pressurisée) : traitement des embolies gazeuses, des gangrènes gazeuses et des intoxications graves au CO."
    ],
    effets_indesirables: [
      "Toxicité pulmonaire et neurologique en cas d'exposition prolongée à de très fortes pressions partielles d'oxygène (effet Lorrain-Smith et effet Paul-Bert)."
    ],
    details_synthese: [
      "Degrés d'oxydation : 0, -1, -2.",
      "PaO2 normale dans le sang artériel : entre 10 et 15 kPa (soit 74 à 108 mmHg).",
      "Spécifications strictes du gaz médical : CO < 5 ppm, CO2 < 300 ppm, humidité < 67 ppm."
    ]
  },
  {
    id: "eau",
    element: "Eau (qualité pharmaceutique)",
    categorie: "Anion",
    sous_categorie: "Groupe VI B (Focus)",
    dose: "-",
    formes: "Eau pour préparations injectables (PPI | aqua ad injectabilia) | Eau purifiée (aqua purificata)",
    mecanismes: [
      "Sert de solvant ou véhicule pour la dissolution de principes actifs.",
      "L'eau pour préparations injectables doit être rigoureusement apyrogène (sans endotoxines bactériennes pouvant causer de la fièvre)."
    ],
    indications: [
      "Eau pour préparations injectables : préparation de médicaments administrés par voie parentérale (IV, IM, SC).",
      "Eau purifiée : préparation de solutions orales, suspensions, ou usage galénique non stérile."
    ],
    effets_indesirables: [
      "L'injection d'eau pure non isotonique provoque une hémolyse (destruction des globules rouges) immédiate et mortelle. Elle doit toujours être rendue isotonique avant injection."
    ],
    details_synthese: [
      "Méthodes de préparation : résines échangeuses d'ions, distillation, électrodialyse, osmose inverse.",
      "Règle de conservation : Pour les PPI, l'eau doit être stérilisée dans les 5 heures suivant sa préparation pour éviter toute prolifération bactérienne productrice de pyrogènes."
    ]
  },
  {
    id: "peroxyde_hydrogene",
    element: "Peroxyde d'hydrogène",
    categorie: "Anion",
    sous_categorie: "Groupe VI B (Focus)",
    dose: "-",
    formes: "Eau oxygénée à 3% (10 volumes) ou à 30% (100 volumes)",
    mecanismes: [
      "Agent oxydant léger qui oxyde directement les protéines et les lipides constitutifs des membranes des bactéries, entraînant leur lyse."
    ],
    indications: [
      "Antiseptique local doux pour le nettoyage des plaies.",
      "Désinfectant de dispositifs médicaux.",
      "Agent hémostatique local (aide à stopper les petits saignements capillaires).",
      "Décoloration des cheveux."
    ],
    effets_indesirables: [
      "Irritation cutanée à forte concentration (le produit à 30% est corrosif et très irritant)."
    ],
    details_synthese: [
      "La concentration à 3% (10 volumes) signifie qu'un litre de solution peut libérer 10 litres d'oxygène gazeux."
    ]
  },
  {
    id: "soufre",
    element: "Soufre",
    categorie: "Anion",
    sous_categorie: "Groupe VI B",
    dose: "-",
    formes: "Sulfate (SO4^2-) | Métabisulfite (S2O5^2-) | Hexafluorure de soufre (SF6)",
    mecanismes: [
      "Métabisulfite : agit comme un antioxydant chimique puissant.",
      "Hexafluorure de soufre (SF6) : gaz physiologiquement inerte et totalement insoluble. Administré en IV, ses microbulles augmentent l'échogénicité du sang aux ultrasons.",
      "Thiosulfate : agit comme donneur de soufre pour convertir le cyanure toxique en thiocyanate inoffensif."
    ],
    indications: [
      "Sulfate (de sodium ou magnésium) : utilisé comme sel de réhydratation ou comme laxatif osmotique hypertonique.",
      "Métabisulfite : antioxydant utilisé comme conservateur dans les solutions d'adrénaline injectables et les préparations magistrales.",
      "Hexafluorure de soufre (SF6) : agent de contraste échographique (voie IV ou intravésical) pour améliorer la visualisation des vaisseaux sanguins.",
      "Thiosulfate de sodium : historiquement utilisé comme antidote des intoxications au cyanure (aujourd'hui, on lui préfère l'hydroxocobalamine IV)."
    ],
    effets_indesirables: [
      "Hexafluorure de soufre (SF6) : risque de réactions allergiques graves et d'effets cardiaques sévères.",
      "Sulfate de sodium : apporte une grande quantité de sodium, augmentant le risque d'hypertension et de surcharge hydrosodée."
    ],
    details_synthese: [
      "Degrés d'oxydation : -2, 0, 4, 6.",
      "Le soufre élémentaire se présente sous la forme d'une poudre jaune inflammable qui peut être sous état cristallin, amorphe, précipité ou sublimé."
    ]
  },
  {
    id: "selenium",
    element: "Sélénium",
    categorie: "Anion",
    sous_categorie: "Groupe VI B",
    dose: "70 µg/jour",
    formes: "Sélénide de sodium (Na2Se) | Sulfure de sélénium (SeS2) | Sélénite de sodium (Na2SeO3)",
    mecanismes: [
      "Oligoélément indispensable qui se substitue au soufre dans la cystéine pour former la sélénocystéine.",
      "Constituant majeur d'enzymes antioxydantes : la glutathion peroxydase et la thioredoxine réductase.",
      "Cofacteur essentiel des désiodases (enzymes responsables de la conversion de l'hormone thyroïdienne inactive T4 en hormone active T3)."
    ],
    indications: [
      "Sélénide de sodium (Na2Se) : apport par perfusion IV en cas de déficience avérée en sélénium.",
      "Sulfure de sélénium (SeS2) : shampoing dermatologique à action cytostatique (diminue le renouvellement des cellules épidermiques du cuir chevelu), utilisé contre la séborrhée, les pellicules, le pityriasis versicolor et comme adjuvant dans le traitement de la séborrhée du cuir chevelu associée à la levure Pityrosporum (souvent combiné avec du kétoconazole)."
    ],
    effets_indesirables: [
      "À forte dose, le sélénite de sodium (Na2SeO3) est hautement toxique pour les cellules.",
      "Le sulfure de sélénium (SeS2) est très irritant : attention à éviter tout contact avec les yeux et les muqueuses."
    ],
    details_synthese: [
      "Degrés d'oxydation : -2, 0, 4, 6.",
      "Se trouve naturellement dans les plantes, les viandes et les œufs.",
      "La forme majoritairement présente dans les suppléments IV est le Na2SeO3 (degré d'oxydation IV) qui est ensuite réduit dans l'organisme en sélénide (-2) pour être incorporé dans les sélénoprotéines."
    ]
  },
  {
    id: "fluor",
    element: "Fluor",
    categorie: "Anion",
    sous_categorie: "Groupe VI B - Halogénures",
    dose: "1450 ppm (6 ans: 1450 ppm max | 2 ans: 1000 ppm max)",
    formes: "Fluorure de sodium (NaF)",
    mecanismes: [
      "Se substitue aux groupements hydroxyle de l'émail dentaire pour former de la fluoroapatite, structure beaucoup plus dure et résistante aux attaques acides des bactéries.",
      "Inhibe l'activité enzymatique des bactéries de la plaque dentaire (effet bactériostatique).",
      "Favorise la reminéralisation des lésions débutantes de l'émail par précipitation de fluorure de calcium (CaF2).",
      "Agit comme un agent complexant extrêmement puissant avec les métaux (FeF6^3-, AlF2+, BF4-, SiF6^2-)."
    ],
    indications: [
      "Prévention de la carie dentaire (via dentifrices, gels ou comprimés de NaF à 0,5 mg)."
    ],
    effets_indesirables: [
      "Fluorose : surdosage chronique en fluor durant la formation des dents, caractérisé par l'apparition de taches blanches ou brunes inesthétiques sur l'émail, accompagnées de troubles gastro-intestinaux (TGI), nausées, vomissements et céphalées.",
      "Hautement volatil et toxique sous forme de gaz fluorhydrique (H2F2) en milieu acide.",
      "Une AMM (Autorisation de Mise sur le Market) est requise pour les dentifrices dont la concentration dépasse 1500 ppm."
    ],
    details_synthese: [
      "N'existe dans l'organisme que sous forme d'anion (F-).",
      "Bloque la position d'oxydation en chimie organique : l'introduction de fluor sur un cycle aromatique empêche l'hydroxylation métabolique de désactivation.",
      "Présent principalement sous forme de sel minéral NaF. Non indispensable à la vie.",
      "Dosages spécifiques : 1g de gel contient 12,5 mg de Fluor (soit 1,25%). Les comprimés sont dosés à 0,5 mg de NaF (soit 0,25 mg de Fluorure F-)."
    ]
  },
  {
    id: "chlore",
    element: "Chlore",
    categorie: "Anion",
    sous_categorie: "Groupe VI B - Halogénures",
    dose: "-",
    formes: "Anion Chlorure (Cl-) | Acide hypochloreux (HClO)",
    mecanismes: [
      "Rôle inhibiteur majeur de l'activité neuronale : Le chlorure pénètre dans le neurone suite à la fixation du GABA sur son récepteur-canal GABA-A. L'entrée de charges négatives (Cl-) provoque une hyperpolarisation de la membrane, ce qui diminue l'excitabilité du neurone.",
      "Excrété au niveau cellulaire par des pompes dépendantes de l'AMPc, notamment le canal CFTR (dont le dysfonctionnement génétique cause la mucoviscidose).",
      "Acide hypochloreux (HClO) : oxydant puissant, actif uniquement en milieu acide, détruit les parois bactériennes."
    ],
    indications: [
      "Chlorure (Cl-) : assure l'osmolarité dans de très nombreuses préparations pharmaceutiques (sérum physiologique, laxatifs, etc.).",
      "Acide hypochloreux (HClO) et hypochlorite de sodium : antiseptique et désinfectant de référence (Eau de Javel).",
      "L'association de chlore avec des cations spécifiques (comme le magnésium) is utilisée comme laxatif."
    ],
    effets_indesirables: [
      "La mutation du canal CFTR bloque le transport du chlore, entraînant une déshydratation des sécrétions exocrines (poumons, pancréas, intestin), caractéristique de la mucoviscidose."
    ],
    details_synthese: [
      "Degrés d'oxydation : -1, 0, 3, 5, 7.",
      "Concentrations physiologiques : 105 mmol/L en extracellulaire et 10 mmol/L en intracellulaire.",
      "Présent dans l'estomac sous forme d'acide chlorhydrique (HCl 0,1M - pH 2) indispensable à la digestion."
    ]
  },
  {
    id: "brome",
    element: "Brome (et Bromure)",
    categorie: "Anion",
    sous_categorie: "Groupe VI B - Halogénures",
    dose: "-",
    formes: "Anion Bromure (Br-) | Acide hypobromeux (HBrO)",
    mecanismes: [
      "L'acide hypobromeux (HBrO), généré par réaction de Br- avec H2O2 et catalysé par la peroxydasine (Pxdn1), est un cofacteur qui catalyse la liaison croisée des filaments de collagène IV. Ce mécanisme is indispensable à la formation de la matrice extracellulaire et au développement des tissus (embryogenèse).",
      "Historiquement utilisé pour ses propriétés sédatives et dépressives sur le système nerveux central."
    ],
    indications: [
      "Pas d'usage thérapeutique moderne.",
      "Historiquement utilisé comme anaphrodisiaque, sédatif et hypnotique pour les soldats en campagne.",
      "Le bromure (indiqué comme 'pas utilisé' dans le tableau) joue un rôle uniquement structural dans la matrice des tissus."
    ],
    effets_indesirables: [
      "Bromisme : intoxication chronique associant somnolence, troubles psychiatriques et éruptions cutanées (aujourd'hui disparu)."
    ],
    details_synthese: [
      "Degrés d'oxydation : -1, 0, 3, 5, 7.",
      "Présent en très faible quantité dans l'organisme (environ 50 µM).",
      "Réaction chimique biologique : Br- + H2O2 + H3O+ -> HBrO + 2 H2O."
    ]
  },
  {
    id: "iode",
    element: "Iode (et Iodure)",
    categorie: "Anion",
    sous_categorie: "Groupe VI B - Halogénures",
    dose: "Iodure : 65 mg | Iode : Voie IV",
    formes: "Iodure de potassium | Iode métallique (diode) | Polyvidone iodée (Bétadine) | Iode radioactif (131-I)",
    mecanismes: [
      "Iodure : s'accumule activement et de manière sélective dans la glande thyroïde pour la synthèse des hormones thyroïdiennes.",
      "Polyvidone iodée : libère lentement de l'iode libre qui oxyde les protéines structurales des bactéries (effet bactéricide universel).",
      "Iode radioactif (131-I) : émet des rayonnements bêta qui détruisent localement les cellules thyroïdiennes hyperactives ou cancéreuses."
    ],
    indications: [
      "Iodure de potassium (65 mg) : indiqué en cas d'accident nucléaire pour saturer la thyroïde en iode stable et empêcher la fixation de l'iode radioactif accidentel.",
      "Polyvidone iodée : antiseptique de choix pour la peau saine, les plaies et la chirurgie.",
      "Iode radioactif : traitement de l'hyperthyroïdie et du cancer de la thyroïde.",
      "Iodure de sodium : utilisé dans des collyres pour traiter la cataracte."
    ],
    effets_indesirables: [
      "Néphrotoxicité aiguë (surtout lors de l'injection de produits de contraste iodés).",
      "Risque de dérégulation thyroïdienne : hyperthyroïdie iatrogène ou hypothyroïdie.",
      "Réactions allergiques parfois sévères (choc anaphylactique)."
    ],
    details_synthese: [
      "L'iode est un oligoélément essentiel indispensable au fonctionnement de la thyroïde."
    ]
  },
  {
    id: "produits_iode_diagnostic",
    element: "Produits iodés de diagnostic",
    categorie: "Anion",
    sous_categorie: "Groupe VI B - Halogénures (Focus)",
    dose: "Représentent 50 à 60% du poids de la molécule",
    formes: "Monomères ou dimères (ioniques ou non-ioniques) | Huiles iodées (Lipiodol)",
    mecanismes: [
      "Forte absorption des rayons X par les atomes d'iode lourds, permettant d'opacifier les vaisseaux sanguins, les organes creux et les tissus lors des examens d'imagerie médicale."
    ],
    indications: [
      "Agents de contraste radiologiques pour le scanner (TDM), l'angiographie, l'urographie, etc."
    ],
    effets_indesirables: [
      "Néphrotoxicité (toxicité pour les reins, imposant une bonne hydratation avant l'examen).",
      "Risque majeur de réaction allergique immédiate (choc anaphylactique).",
      "Toxicité générale liée à l'osmolarité élevée des formes ioniques."
    ],
    details_synthese: [
      "La liaison carbone-iode au sein de ces molécules doit être extrêmement solide pour éviter tout relâchement d'iode libre toxique dans l'organisme."
    ]
  },
  {
    id: "chelateur_fer",
    element: "Chélateurs du Fer",
    categorie: "Chélateur",
    sous_categorie: "Chélateurs du Fer",
    dose: "-",
    formes: "Deferroxamine (mésylate) en injectable (IM) | Deferiprone en comprimés | Deferasirox en comprimés",
    mecanismes: [
      "Se lient spécifiquement au fer libre en excès dans l'organisme pour former un complexe inerte soluble, qui est ensuite éliminé par voie urinaire ou fécale.",
      "Deferiprone : forme un complexe de type 3L:1Fe (ligand bidentate)."
    ],
    indications: [
      "Hémochromatose primitive (maladie génétique de surcharge en fer) non curable par saignées.",
      "Hémosidérose secondaire (surcharges chroniques en fer consécutives à des transfusions répétées, par exemple dans la thalassémie majeure).",
      "Intoxications martiales (en fer) aiguës.",
      "Aide au diagnostic des surcharges en fer."
    ],
    effets_indesirables: [
      "Troubles gastro-intestinaux (TGI) fréquents.",
      "Déficience induite en Zinc (le chélateur peut aussi chélater partiellement le zinc).",
      "Spécifiques au Deferiprone : agranulocytose et neutropénie (nécessitant une surveillance hebdomadaire de la formule sanguine), arthropathies, atteinte hépatique.",
      "Spécifiques au Deferasirox : augmentation de la créatinémie (toxicité rénale), syndrome gastro-intestinal."
    ],
    details_synthese: [
      "Réaction d'identification de la Deferroxamine (mésylate) : 5 mg de mésylate dans 5 ml d'eau + 2 ml de phosphate trisodique dodécahydraté à 5g/l et 0,5 ml de naphtoquinonesulfonate de sodium à 25g/l donne une coloration noire-brune caractéristique (mise en évidence des fonctions amines aliphatiques)."
    ]
  },
  {
    id: "chelateur_potassium",
    element: "Chélateurs du Potassium",
    categorie: "Chélateur",
    sous_categorie: "Chélateurs du Potassium",
    dose: "-",
    formes: "Polystyrène sulfonate de Calcium ou de Sodium (Kayexalate - poudre orale ou rectale) | Patiromère (sachet)",
    mecanismes: [
      "Résines échangeuses d'ions non absorbées qui captent le potassium présent dans la lumière intestinale et libèrent un autre cation (sodium ou calcium). Le potassium ainsi fixé est éliminé dans les selles, réduisant la kaliémie systémique."
    ],
    indications: [
      "Traitement de l'hyperkaliémie aiguë ou chronique en cas d'insuffisance rénale (polystyrène sulfonate).",
      "Traitement de l'hyperkaliémie chronique chez les patients n'ayant pas de pronostic vital immédiat engagé (Patiromère)."
    ],
    effets_indesirables: [
      "Constipation marquée (pouvant mener à une impaction fécale ou à des lésions intestinales).",
      "Risque d'hypercalcémie ou d'hypernatrémie selon le contre-ion de la résine utilisée.",
      "Risque d'hypokaliémie en cas de surdosage."
    ],
    details_synthese: [
      "Les microbilles de polystyrène traversent le tube digestif sans jamais être absorbées.",
      "Note d'examen : Dans le tableau d'examen, ces résines (polystyrène sulfonate) sont appelées 'résines de sulfate' par simplification ou erreur de dénomination."
    ]
  },
  {
    id: "chelateur_phosphate",
    element: "Chélateurs des Phosphates",
    categorie: "Chélateur",
    sous_categorie: "Chélateurs des Phosphates",
    dose: "-",
    formes: "Carbonate de lanthane | Sevelamer (résine) | Acétate de calcium",
    mecanismes: [
      "Se lient aux phosphates apportés par l'alimentation directement dans le tube digestif pour former des complexes insolubles non absorbables éliminés dans les selles.",
      "Le carbonate de lanthane se transforme en phosphate de lanthane insoluble dans l'intestin.",
      "Le Sevelamer est une résine échangeuse d'anions qui capte les phosphates en échange d'ions chlorure."
    ],
    indications: [
      "Traitement de l'hyperphosphatémie chez l'adulte atteint d'insuffisance rénale chronique terminale traité par hémodialyse ou dialyse péritonéale."
    ],
    effets_indesirables: [
      "Troubles digestifs légers à modérés."
    ],
    details_synthese: [
      "Permettent de limiter la calcification des vaisseaux sanguins chez les dialysés."
    ]
  },
  {
    id: "chelateur_cuivre",
    element: "Chélateurs du Cuivre",
    categorie: "Chélateur",
    sous_categorie: "Chélateurs du Cuivre",
    dose: "Acétate de zinc : 3x 50 mg à jeun",
    formes: "D-pénicillamine | Acétate de zinc",
    mecanismes: [
      "D-pénicillamine : chélateur chimique direct qui forme un complexe avec le cuivre, favorisant son excrétion par voie urinaire.",
      "Acétate de zinc : induit la synthèse d'une protéine de stockage intracellulaire (la métallothionéine) dans les cellules de la paroi de l'intestin. Cette protéine capte le cuivre alimentaire et l'empêche de passer dans le sang ; le cuivre est éliminé lors de la desquamation naturelle des cellules intestinales."
    ],
    indications: [
      "Traitement de la maladie de Wilson (maladie génétique causant une surcharge toxique en cuivre due à une anomalie d'une ATPase de transport)."
    ],
    effets_indesirables: [
      "D-pénicillamine : toxicité rénale, hématologique et cutanée fréquente.",
      "Acétate de zinc : douleurs gastriques à jeun."
    ],
    details_synthese: [
      "La maladie de Wilson est caractérisée par une accumulation de cuivre dans le foie (cirrhose) et le cerveau (atteinte neurologique dégénérative)."
    ]
  },
  {
    id: "notes_oligo_macro",
    element: "Macro & Oligo-éléments (Concepts généraux)",
    categorie: "Concepts",
    sous_categorie: "Physiologie générale",
    dose: "-",
    formes: "Concepts généraux du cours",
    mecanismes: [
      "Macroéléments : Na, K, Mg, Ca, Cl-, phosphates, sulfates constituent 99% des atomes du corps humain.",
      "Oligoéléments : représentent 0,01% du poids corporel (ex : Fer ~4g chez l'adulte, Molybdène ~10mg).",
      "Ultratraces : éléments présents en quantité infinitésimale (Cr, As, Pb, Br), pas nécessairement essentiels à la vie."
    ],
    indications: [
      "Règles cliniques importantes : En dehors de ceux étudiés spécifiquement dans le cours, les oligo-éléments ne constituent pas une approche thérapeutique validée. Ils ne nécessitent aucun apport supplémentaire systématique et n'apportent aucun gain prouvé en termes de qualité de vie chez le sujet sain."
    ],
    effets_indesirables: [],
    details_synthese: [
      "Cette fiche regroupe les concepts introductifs de votre synthèse sur la classification des éléments."
    ]
  }
];
