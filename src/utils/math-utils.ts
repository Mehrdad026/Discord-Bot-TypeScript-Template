export class MathUtils {
    public static sum(numbers: number[]): number {
        return numbers.reduce((a, b) => a + b, 0);
    }

    public static range(start: number, size: number): number[] {
        return [...Array(size).keys()].map(i => i + start);
    }

    public static ceilToMultiple(input: number, multiple: number): number {
        return Math.ceil(input / multiple) * multiple;
    }
}
