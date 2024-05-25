export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp * 1000);

  const day = date.getDate();
  const month = date.getMonth() + 1; //  devuelve un índice basado en cero, por lo tanto se suma 1
  const year = date.getFullYear();

  // Asegurar que el día y mes sean siempre dos dígitos (añadir un cero si es necesario)
  const day2digist = day < 10 ? `0${day}` : day;
  const month2digits = month < 10 ? `0${month}` : month;

  // Formatear la fecha en dd/mm/yyyy y retornar
  return `${day2digist}/${month2digits}/${year}`;
}

export function paginate(array: [], pageSize: number, pageNumber: number): number[] {
  // Calcula el índice de inicio de la página solicitada
  const startIndex = (pageNumber - 1) * pageSize;
  // Usa el método slice para extraer los elementos de la página
  return array.slice(startIndex, startIndex + pageSize);
}
