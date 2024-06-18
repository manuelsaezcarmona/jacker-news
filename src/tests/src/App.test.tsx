import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../../App';
import { QueryWrapper } from '../Wrapper';

describe('dado la carga de app', () => {
  beforeEach(() => {
    render(
      <QueryWrapper>
        <App />
      </QueryWrapper>
    );
  });

  it('Se muestra el titulo de la APP ', () => {
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    expect(h1.textContent).toBe('JaaaCking News que me las quitan de las maaanooooosss 💃💃');
  });
});
