export default class CCValidator{

    protected getDigit(number: number): number {
        if(number < 9) return number
        return Math.floor(number / 10) + (number % 10);
    }

    protected getSize(d: number): number {
        let num = d.toString();
        return num.length;
    }

    protected getPrefix(number: number, k: number): number {
        if(this.getSize(number) > k){
            let num = number.toString();
            return parseInt(num.substring(0, k));
        }
        return number;
    }

    protected prefixMatched(number: number, d: number): boolean {
        return this.getPrefix(number, this.getSize(d)) == d;
    }

    protected sumOfDoubleEvenPlace(number: number): number {
        let sum = 0;
        let num = number.toString();
        for (let i = this.getSize(number) - 2; i >= 0; i -= 2) {
            sum += this.getDigit((num.charCodeAt(i) - '0'.charCodeAt(0)) * 2);
        }
        return sum;
    }

    protected sumOfOddPlace(number: number): number {
        let sum = 0;
        let num = number.toString();
        for (let i = this.getSize(number) - 1; i >= 0; i -= 2) {
            sum += num.charCodeAt(i) - '0'.charCodeAt(0);
        }
        return sum;
    }

    public isValid(number: number): boolean {
        return (
          this.getSize(number) >= 13 &&
          this.getSize(number) <= 16 &&
          (this.prefixMatched(number, 4) ||
            this.prefixMatched(number, 5) ||
            this.prefixMatched(number, 37) ||
            this.prefixMatched(number, 6)) &&
          (this.sumOfDoubleEvenPlace(number) + this.sumOfOddPlace(number)) % 10 === 0
        );
    }
}
