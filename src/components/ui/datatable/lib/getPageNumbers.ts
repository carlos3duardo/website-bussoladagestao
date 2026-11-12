// Retorna os números de página a exibir, com "..." pra representar trechos
// escondidos. currentPage e totalPages são 1-based.
//
// boundaryCount = quantas páginas ficam SEMPRE visíveis em cada ponta (1 e totalPages).
// siblingCount  = quantos vizinhos mostrar ao redor da página ATUAL.
export function getPageNumbers(
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
  boundaryCount = 1,
): (number | 'dots')[] {
  if (totalPages <= 0) return [];

  // Bloco fixo do início e do fim (ex: boundaryCount=1 -> [1] e [totalPages])
  const boundaryStart = range(1, Math.min(boundaryCount, totalPages));
  const boundaryEnd = range(
    Math.max(totalPages - boundaryCount + 1, 1),
    totalPages,
  );

  // Janela de vizinhos ao redor da página atual. Em vez de simplesmente
  // "cortar" quando bate na borda (o que encolheria a janela), DESLOCAMOS
  // ela pro lado que ainda tem espaço — é isso que faz aparecer um bloco de
  // 3 páginas perto do início/fim, mesmo pedindo só 1 vizinho de cada lado.
  let siblingsStart = currentPage - siblingCount;
  let siblingsEnd = currentPage + siblingCount;

  if (siblingsStart < 1) {
    siblingsEnd += 1 - siblingsStart; // "empurra" a janela pra direita
    siblingsStart = 1;
  }
  if (siblingsEnd > totalPages) {
    siblingsStart -= siblingsEnd - totalPages; // "empurra" a janela pra esquerda
    siblingsEnd = totalPages;
  }
  siblingsStart = Math.max(siblingsStart, 1);
  siblingsEnd = Math.min(siblingsEnd, totalPages);

  // Junta os três blocos (início fixo + janela de vizinhos + fim fixo),
  // remove duplicatas (eles costumam se sobrepor perto das pontas) e ordena.
  const shownPages = Array.from(
    new Set([
      ...boundaryStart,
      ...range(siblingsStart, siblingsEnd),
      ...boundaryEnd,
    ]),
  ).sort((a, b) => a - b);

  // Percorre a lista final: sempre que há um "buraco" entre duas páginas
  // mostradas, insere um único "dots" ali (não importa o tamanho do buraco).
  const result: (number | 'dots')[] = [];
  for (let i = 0; i < shownPages.length; i++) {
    if (i > 0 && shownPages[i] - shownPages[i - 1] > 1) {
      result.push('dots');
    }
    result.push(shownPages[i]);
  }
  return result;
}

function range(start: number, end: number): number[] {
  return Array.from(
    { length: Math.max(end - start + 1, 0) },
    (_, i) => start + i,
  );
}
