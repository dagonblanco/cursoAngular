import {mensaje,suma} from './test-unitario';

describe('Ejemplo de pruebas unitarias',
() => {
    it('should return "Hola Mundo!"', ()=> {
        const resp = mensaje('Mundo');
        expect(resp).toEqual('Hola Mundo!');
    });
    it('should contain the name', ()=> {
        const resp = mensaje('Mundo');
        expect(resp).toContain('Mundo');
        expect(resp.length).toBeGreaterThan(4);
    });

});