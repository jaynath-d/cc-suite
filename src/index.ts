import CCValidator from './cc_validator'
import CCGenerator from './cc_generator'
import identifyCardType from './cc_type'
import Binlookup, { BinlookupOptions } from './bin_lookup'

class CCSuite{

    private _validator: CCValidator;
    private _generator: CCGenerator;
    private _bin: Binlookup;
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
        this._bin = new Binlookup()
    }

    public validateCard(cardNumber: string): boolean{
        const digits:any = cardNumber.replace(/\D/g, '')
        return this._validator.isValid(digits)
    }

    public  generateRandomCard(bin: string = '42', length: number = 16):string {
        bin = bin === '' ? '42' : bin
        return this._generator.generateValidCard(bin, length)
    }

    public getCardType(cardNumber: string):string | undefined {
        if(this.validateCard(cardNumber)){
            return identifyCardType(cardNumber)
        }
        return 'Invalid card number!'
    }

    public async setBinConfig(config: string | BinlookupOptions){
        this._bin.setConfig(config)
    }
    public async getBinInfo(bin: string) {
        if(bin.length >= 4 && bin.length < 9){
            return await this._bin.lookup(bin)
        }
        return 'Invalid bin!'
    }
}

export default CCSuite.getInstance();
