import { FormControl} from '@angular/forms';

export class CifValidator{


    static checkCif(control:FormControl){
        const letras = ['A', 'B', 'W'];
        const primera = control.value.charAt(0).toUpperCase();

        if (letras.includes(primera)){
            return null;
        } else {
            return {'checkCif':true};
        }
    }
}