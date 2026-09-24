import { describe, it, expect } from 'vitest';

describe("Configuración inicial de Jasmine y Karma", () => {
  it("debería ejecutar correctamente una prueba matemática", () => {
    expect(2 + 2).toBe(4);
  });
});