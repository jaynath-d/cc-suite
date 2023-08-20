import CCValidator from './cc_validator'
import CCGenerator from './cc_generator'

class CCSuite{

    private _validator: CCValidator;
    private _generator: CCGenerator;
    private static instance: CCSuite;

    public static getInstance() {
        if (!CCSuite.instance) {
            CCSuite.instance = new CCSuite();
        }
        return CCSuite.instance;
    }

    constructor(){
        this._validator = new CCValidator()
        this._generator = new CCGenerator()
    }

    public validateCard(cardNumber: string): boolean{
        const digits:any = cardNumber.replace(/\D/g, '')
        return this._validator.isValid(digits)
    }

    public  generateRandomCard(bin: string = '42', length: number = 16):string {
        bin = bin === '' ? '42' : bin
        return this._generator.generateValidCard(bin, length)
    }
}

export default CCSuite.getInstance();
