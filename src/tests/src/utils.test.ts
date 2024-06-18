import { describe, expect, it } from 'vitest';
import { createPagination, formatTimestamp, paginate } from '../../utils';

describe('dadoa la funcion paginate', () => {
  it('el array de numeros debe ser de lo longitud dada', () => {
    const longitud = 4;
    const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const result = paginate(arrayTest, longitud, 2);
    expect(result).toHaveLength(longitud);
  });
});

describe('dada la funcion formatTimeStamp', () => {
  it('debe devolver un texto con la fecha formateada', () => {
    // fecha es el martes 18 de junio de  2024 a las 9:00:29
    const timeStampInms = 1718701229;
    const formatedDate = formatTimestamp(timeStampInms);

    console.log(formatedDate);

    expect(formatedDate).toBeTypeOf('string');
    expect(formatedDate).toMatch('18/06/2024');
  });
});

describe('dada la funcion CreatePagination', () => {
  it('devuelva un array ', () => {
    const arrayTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    const paginacion = createPagination(arrayTest, 5);

    expect(paginacion).toHaveLength(4);
    expect(paginacion[0]).toHaveLength(5);
    expect(paginacion[0][0]).toBe(1);
  });
});
