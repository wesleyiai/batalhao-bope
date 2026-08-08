// ============================================================
// ARQUIVO DE DADOS DO SITE
// É AQUI QUE VOCÊ ATUALIZA SUAS METAS E ADICIONA SEUS PRINTS.
// Não precisa mexer em mais nenhum outro arquivo do site.
// ============================================================

const CONFIG = {
  // Nome do batalhão (aparece no topo do site)
  batalhao: "BATALHÃO CHOQUE 1BTL",

  // Subtítulo (aparece embaixo do nome do batalhão)
  subtitulo: "Painel de Metas Individuais",

  // Seu nome / patente (aparece no site)
  efetivo: "[GT]Wesley1BTL",

  // Sua patente (aparece destacada no crachá acima do nome)
  patente: "SARGENTO",

  // -----------------------------------------------------------
  // SEMANA DA META
  // A meta roda de segunda a sábado (posta o resultado até domingo).
  // Toda semana nova, troque essas duas datas.
  // -----------------------------------------------------------
  semanaInicio: "03/08/2026",
  semanaFim: "08/08/2026",

  // -----------------------------------------------------------
  // SUAS METAS
  // Para atualizar seu progresso, troque apenas o número "atual".
  // Para mudar o objetivo, troque o número "meta".
  // -----------------------------------------------------------
  metas: [
    { id: "abates", nome: "Abates de Traficantes", atual: 101, meta: 15, icone: "🎯" },
    { id: "prisoes", nome: "Prisões", atual: 86, meta: 25, icone: "🚔" },
    { id: "treinos", nome: "Treinos", atual: 26, meta: 20, icone: "🏋️" }
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
    { categoria: "destaques", arquivo: "fotos/destaque-kill-ltrf.png", data: "22/07/2026", descricao: "Abate do líder da facção LTRF (TOMA]RD_VG_BDJ[LTRF)" },

    { categoria: "destaques", arquivo: "fotos/operacao-kill-ltrf-integrante.png", data: "22/07/2026", descricao: "Abate de integrante da facção LTRF (madaraprsh[ltrf) na zona de guerra contra o tráfico" },

    { categoria: "treinos", arquivo: "fotos/treino-04-08-1.png", data: "04/08/2026", descricao: "Treino com Tenente RaFa #1" },
    { categoria: "treinos", arquivo: "fotos/treino-04-08-2.png", data: "04/08/2026", descricao: "Treino com Tenente RaFa #2" },
    { categoria: "treinos", arquivo: "fotos/treino-04-08-3.png", data: "04/08/2026", descricao: "Treino com Tenente RaFa #3" },
    { categoria: "treinos", arquivo: "fotos/treino-04-08-4.png", data: "04/08/2026", descricao: "Treino com Tenente RaFa #4" },
    { categoria: "treinos", arquivo: "fotos/treino-04-08-5.png", data: "04/08/2026", descricao: "Treino com Tenente RaFa #5" },
    { categoria: "treinos", arquivo: "fotos/treino-04-08-6.png", data: "04/08/2026", descricao: "Treino com Tenente RaFa #6" },
    { categoria: "treinos", arquivo: "fotos/treino-04-08-7.png", data: "04/08/2026", descricao: "Treino com Tenente RaFa #7" },
    { categoria: "treinos", arquivo: "fotos/treino-04-08-8.png", data: "04/08/2026", descricao: "Treino com Tenente RaFa #8 - 8 treinos concluídos" },
    { categoria: "treinos", arquivo: "fotos/bonus-treino-04-08.png", data: "04/08/2026", descricao: "Bônus pós-treino do Tenente RaFa: +5 treinos extras e +5 procurados presos" },

    { categoria: "destaques", arquivo: "fotos/destaque-treino-04-08-1.png", data: "04/08/2026", descricao: "Destaque do treino com o Tenente RaFa (Wesley Wins) #1" },
    { categoria: "destaques", arquivo: "fotos/destaque-treino-04-08-2.png", data: "04/08/2026", descricao: "Destaque do treino com o Tenente RaFa (Wesley Wins) #2" },
    { categoria: "destaques", arquivo: "fotos/destaque-treino-04-08-3.png", data: "04/08/2026", descricao: "Destaque do treino com o Tenente RaFa (Wesley Wins) #3" },

    { categoria: "treinos", arquivo: "fotos/treino-05-08-1.png", data: "05/08/2026", descricao: "Treino com Tenente Coronel skinka #1" },
    { categoria: "treinos", arquivo: "fotos/treino-05-08-2.png", data: "05/08/2026", descricao: "Treino com Tenente Coronel skinka #2" },
    { categoria: "treinos", arquivo: "fotos/treino-05-08-3.png", data: "05/08/2026", descricao: "Treino com Tenente Coronel skinka #3" },
    { categoria: "treinos", arquivo: "fotos/treino-05-08-4.png", data: "05/08/2026", descricao: "Treino com Tenente Coronel skinka #4" },
    { categoria: "treinos", arquivo: "fotos/treino-05-08-5.png", data: "05/08/2026", descricao: "Treino com Tenente Coronel skinka #5" },
    { categoria: "treinos", arquivo: "fotos/treino-05-08-6.png", data: "05/08/2026", descricao: "Treino com Tenente Coronel skinka #6" },
    { categoria: "treinos", arquivo: "fotos/treino-05-08-7.png", data: "05/08/2026", descricao: "Treino com Tenente Coronel skinka #7" },
    { categoria: "treinos", arquivo: "fotos/treino-05-08-8.png", data: "05/08/2026", descricao: "Treino com Tenente Coronel skinka #8 - 8 treinos concluídos" },

    { categoria: "treinos", arquivo: "fotos/treino-07-08-resto-1.png", data: "07/08/2026", descricao: "Treino com Tenente Resto #1" },
    { categoria: "treinos", arquivo: "fotos/treino-07-08-resto-2.png", data: "07/08/2026", descricao: "Treino com Tenente Resto #2" },
    { categoria: "treinos", arquivo: "fotos/treino-07-08-resto-3.png", data: "07/08/2026", descricao: "Treino com Tenente Resto #3" },
    { categoria: "treinos", arquivo: "fotos/treino-07-08-resto-4.png", data: "07/08/2026", descricao: "Treino com Tenente Resto #4" },
    { categoria: "treinos", arquivo: "fotos/treino-07-08-resto-5.png", data: "07/08/2026", descricao: "Treino com Tenente Resto #5 - 5 treinos concluídos" },

    { categoria: "treinos", arquivo: "fotos/treino-07-08-jn-1.png", data: "07/08/2026", descricao: "Treino com Tenente Jn #1" },
    { categoria: "treinos", arquivo: "fotos/treino-07-08-jn-2.png", data: "07/08/2026", descricao: "Treino com Tenente Jn #2" },
    { categoria: "treinos", arquivo: "fotos/treino-07-08-jn-3.png", data: "07/08/2026", descricao: "Treino com Tenente Jn #3" },
    { categoria: "treinos", arquivo: "fotos/treino-07-08-jn-4.png", data: "07/08/2026", descricao: "Treino com Tenente Jn #4" },
    { categoria: "treinos", arquivo: "fotos/treino-07-08-jn-5.png", data: "07/08/2026", descricao: "Treino com Tenente Jn #5 - 5 treinos concluídos" },

    { categoria: "info", arquivoAntes: "fotos/info-depois-7.png", arquivoDepois: "fotos/info-depois-8.png", data: "07/08/2026", descricao: "Atualização da semana (03/08 a 08/08): Abates de Traficantes 420 → 433, Prisões efetuadas 438 → 448" },
    { categoria: "info", arquivoAntes: "fotos/info-depois-8.png", arquivoDepois: "fotos/info-depois-9.png", data: "08/08/2026", descricao: "Atualização da semana (03/08 a 08/08): Abates de Traficantes 433 → 438, Prisões efetuadas 448 → 456" }
  ]
};
