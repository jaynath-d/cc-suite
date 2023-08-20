export default class CCGenerator{

    private luhnChk: (ccNum: string) => boolean | number;
    constructor() {
        this.luhnChk = ((arr: number[]) => {
            return (ccNum: string) => {
                let len = ccNum.length;
                let bit = 1;
                let sum = 0;
                let val;

                while (len) {
                    val = parseInt(ccNum.charAt(--len), 10);
                    sum += (bit ^= 1) ? arr[val] : val;
                }

                return sum && sum % 10 === 0;
            };
        })([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);
    }

    public generateValidCard(bin: string = '42', length: number): string {
        let cardNumber = this.generate(bin, length);
        let luhnValid = this.luhnChk(cardNumber);
        const limit = 20;
        let counter = 0;
    
        while (!luhnValid) {
            cardNumber = this.generate(bin, length);
            luhnValid = this.luhnChk(cardNumber);
            counter++;
    
            if (counter === limit) {
                cardNumber = luhnValid ? cardNumber : 'cannot make valid card with given params';
                break;
            }
        }
    
        return cardNumber;
    }

    private generate(bin: string, length: number): string {
        let cardNumber = bin;
        const randomNumberLength = length - (bin.length + 1);
    
        for (let i = 0; i < randomNumberLength; i++) {
            const digit = Math.floor(Math.random() * 9) + 0;
            cardNumber += digit;
        }
    
        const checkDigit = this.getCheckDigit(cardNumber);
    
        cardNumber += String(checkDigit);
    
        return cardNumber;
    }

    private getCheckDigit(number: string): number {
        let sum = 0;
        let module: number;
        let checkDigit: number;
    
        for (let i = 0; i < number.length; i++) {
            let digit = parseInt(number.substring(i, i + 1));
    
            if (i % 2 === 0) {
                digit = digit * 2;
                if (digit > 9) {
                    digit = Math.floor(digit / 10) + (digit % 10);
                }
            }
            sum += digit;
        }
    
        module = parseInt(String(sum)) % 10;
        checkDigit = module === 0 ? 0 : 10 - module;
    
        return checkDigit;
    }
}
