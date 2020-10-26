export function TrasformaEmData(unixEpoca: number): string {
  const data = new Date(unixEpoca);
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();

  return `${dia}/${mes}/${ano}`;
}
