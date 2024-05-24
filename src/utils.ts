export function formatTimestamp(timestamp: number): string {
  // Crear un objeto Date desde el timestamp Unix (multiplicado por 1000 para convertir de segundos a milisegundos)
  const date = new Date(timestamp * 1000);

  // Obtener el día, mes y año del objeto Date
  const day = date.getDate(); // Obtiene el día como número
  const month = date.getMonth() + 1; // getMonth() devuelve un índice basado en cero, por lo tanto se suma 1
  const year = date.getFullYear(); // Obtiene el año

  // Asegurar que el día y mes sean siempre dos dígitos (añadir un cero si es necesario)
  const day2digist = day < 10 ? `0${day}` : day;
  const month2digits = month < 10 ? `0${month}` : month;

  // Formatear la fecha en dd/mm/yyyy y retornar
  return `${day2digist}/${month2digits}/${year}`;
}
