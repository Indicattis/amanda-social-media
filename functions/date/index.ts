import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';


export const RelativeTime = ( date: any ) => {
  const dateObject = parseISO(date); // Converte a string ISO para um objeto Date
  const formattedDate = formatDistanceToNow(dateObject, { addSuffix: true, locale: ptBR });

  return formattedDate;
};

