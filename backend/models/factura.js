var mongoose = require('mongoose');

var FacturaSchema = new mongoose.Schema({ 
    nombre: String,
    cif: String,
    numero: String,
    fecha: Object,
    base: Number,
    tipo: Number,
    pago: Object,
    contabilizadoPor: String,
    fechaCont: Object
});

module.exports = mongoose.model('Factura', FacturaSchema);
