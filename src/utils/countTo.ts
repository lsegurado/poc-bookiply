import { add, bignumber } from 'mathjs';

export const countTo = (from: number, to: number, amount: number) => {
    const numbers = [from];

    while (from < to) {
        from = Number(add(bignumber(from), bignumber(amount)).valueOf());
        numbers.push(from);
    }

    return numbers;
};
