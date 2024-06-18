/// <reference types="vitest" />
import React, { type PropsWithChildren } from 'react';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { queryClient } from './Wrapper';

// Limpieza del DOM despues de cada una de las pruebas

afterEach(() => {
  cleanup();
  queryClient.clear();
});

// Envoltorio para El Query Client Provider
