import { add, bignumber } from 'mathjs';
/**
 * Count values in a range
 * @param from The value from which to start counting
 * @param to The value at which to stop counting
 * @param segmentSize Count segment size
 * @returns A list of the values in the interval
 */
export const countTo = (from: number, to: number, segmentSize: number) => {
    const numbers = [from];

    while (from < to) {
        // Facilitates operations between rational numbers
        from = Number(add(bignumber(from), bignumber(segmentSize)).valueOf());
        numbers.push(from);
    }

    return numbers;
};
