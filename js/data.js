// ============================================================
// ARQUIVO DE DADOS DO SITE
// É AQUI QUE VOCÊ ATUALIZA SUAS METAS E ADICIONA SEUS PRINTS.
// Não precisa mexer em mais nenhum outro arquivo do site.
// ============================================================

const CONFIG = {
  // Nome do batalhão (aparece no topo do site)
  batalhao: "BATALHÃO BOPE 2BTL",

  // Subtítulo (aparece embaixo do nome do batalhão)
  subtitulo: "Painel de Metas — Fase de Teste",

  // Seu nome / patente (aparece no site)
  efetivo: "[GT]Wesley",

  // Sua patente (aparece destacada no crachá acima do nome)
  patente: "SOLDADO",

  // -----------------------------------------------------------
  // SEMANA DA META
  // A meta roda de segunda a sábado (posta o resultado até domingo).
  // Toda semana nova, troque essas duas datas.
  // -----------------------------------------------------------
  semanaInicio: "10/08/2026",
  semanaFim: "15/08/2026",

  // -----------------------------------------------------------
  // SUAS METAS
  // Para atualizar seu progresso, troque apenas o número "atual".
  // Para mudar o objetivo, troque o número "meta".
  // -----------------------------------------------------------
  metas: [
    { id: "guerras", nome: "Guerras", atual: 0, meta: 3, icone: "⚔️" },
    { id: "abates", nome: "Abates (TRF)", atual: 91, meta: 50, icone: "🎯" },
    { id: "treinos", nome: "Treinos", atual: 14, meta: 10, icone: "🏋️" },
    { id: "prisoes", nome: "Prisões", atual: 21, meta: 15, icone: "🚔" }
  ],

  // -----------------------------------------------------------
  // CATEGORIAS DOS PRINTS
  // Não precisa mexer aqui. São os filtros que aparecem na
  // galeria de prints do site.
  // -----------------------------------------------------------
  categoriasPrint: [
    { id: "treinos", nome: "Treinos", icone: "🏋️" },
    { id: "info", nome: "Info", icone: "📊" },
    { id: "destaques", nome: "Destaques", icone: "⭐" }
  ],

  // -----------------------------------------------------------
  // SEUS PRINTS
  // Existem 2 formatos de linha diferentes, dependendo da categoria:
  //
  // ── Para "treinos", "operacoes" ou "destaques" (1 print só) ──
  //   1. Coloque o arquivo de imagem dentro da pasta "fotos"
  //   2. Cole uma linha assim antes do "]":
  //      { categoria: "treinos", arquivo: "fotos/treino1.png", data: "18/07/2026", descricao: "Treino de abordagem" },
  //   3. Se você foi o destaque daquele treino, use a categoria
  //      "destaques" em vez de "treinos". Isso adiciona o selo
  //      "⭐ Destaque do Treino" e o print aparece na aba Destaques.
  //      Exemplo:
  //      { categoria: "destaques", arquivo: "fotos/treino2.png", data: "18/07/2026", descricao: "Reconhecido como destaque do treino" },
  //
  // ── Para "info" (comprovar números — 2 prints: antes e depois) ──
  //   1. Coloque os 2 arquivos de imagem dentro da pasta "fotos"
  //      (o print de ANTES e o print de DEPOIS das suas informações)
  //   2. Cole uma linha assim antes do "]":
  //      { categoria: "info", arquivoAntes: "fotos/antes1.png", arquivoDepois: "fotos/depois1.png", data: "18/07/2026", descricao: "Comprovação de abates e prisões" },
  // -----------------------------------------------------------
  prints: [
    { categoria: "info", arquivoAntes: "fotos/info-antes-11-08.png", arquivoDepois: "fotos/info-depois-13-08.png", data: "13/08/2026", descricao: "Progresso da semana (10/08–15/08) — Abates: 438 → 529 (+91), Prisões: 476 → 497 (+21)" },
    { categoria: "treinos", arquivo: "fotos/treino-11-08-1.png", data: "11/08/2026", descricao: "Treino #01 realizado" },
    { categoria: "treinos", arquivo: "fotos/treino-11-08-2.png", data: "11/08/2026", descricao: "Treino #02 realizado" },
    { categoria: "treinos", arquivo: "fotos/treino-11-08-3.png", data: "11/08/2026", descricao: "Treino #03 realizado" },
    { categoria: "treinos", arquivo: "fotos/treino-bonus-11-08.png", data: "11/08/2026", descricao: "Bônus pós-treino: +5 treinos / +5 procurados presos" },
    { categoria: "destaques", arquivo: "fotos/destaque-treino-11-08.png", data: "11/08/2026", descricao: "Destaque do treino (Wesley e Sasha)" },
    { categoria: "treinos", arquivo: "fotos/treino-13-08-2.png", data: "13/08/2026", descricao: "Treino #02 realizado" },
    { categoria: "treinos", arquivo: "fotos/treino-13-08-3.png", data: "13/08/2026", descricao: "Treino #03 realizado" },
    { categoria: "destaques", arquivo: "fotos/destaque-treino-13-08.png", data: "13/08/2026", descricao: "Destaque do treino" },
    { categoria: "treinos", arquivo: "fotos/treino-13-08-4.png", data: "13/08/2026", descricao: "Treino #04 realizado" },
    { categoria: "treinos", arquivo: "fotos/treino-13-08-5.png", data: "13/08/2026", descricao: "Treino #05 realizado" },
    { categoria: "treinos", arquivo: "fotos/treino-13-08-6.png", data: "13/08/2026", descricao: "Treino #06 realizado" },
    { categoria: "destaques", arquivo: "fotos/destaque-confronto-13-08.png", data: "13/08/2026", descricao: "Destaque em confronto (Wesley Wins)" }
  ]
};
