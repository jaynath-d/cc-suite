type CardType = {
    pattern: RegExp;
    type: string;
};
  
const cardTypes: CardType[] = [
    { pattern: /^4[0-9]{12}(?:[0-9]{3})?$/, type: 'VISA' },
    { pattern: /^3[47][0-9]{13}$/, type: 'AMEX' },
    { pattern: /^5[1-5][0-9]{14}$/, type: 'MASTERCARD' },
    { pattern: /^2[2-7][0-9]{14}$/, type: 'MASTERCARD' },
    { pattern: /^6011[0-9]{12}[0-9]*$/, type: 'DISCOVER' },
    { pattern: /^62[24568][0-9]{13}[0-9]*$/, type: 'DISCOVER' },
    { pattern: /^6[45][0-9]{14}[0-9]*$/, type: 'DISCOVER' },
    { pattern: /^3[0689][0-9]{12}[0-9]*$/, type: 'DINERS' },
    { pattern: /^35[0-9]{14}[0-9]*$/, type: 'JCB' },
    { pattern: /^62[0-9]{14}[0-9]*$/, type: 'CHINA_UNION_PAY' },
    { pattern: /^81[0-9]{14}[0-9]*$/, type: 'CHINA_UNION_PAY' },
];

const identifyCardType = (cc: string): string | undefined  => {
    for (const cardType of cardTypes) {
      if (cardType.pattern.test(cc)) {
        return cardType.type;
      }
    }
    return undefined;
}

export default identifyCardType;
