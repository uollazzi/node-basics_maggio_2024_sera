export const somma = (a: number, b: number): number => {
    return a + b;
}

const moltiplicazione = (a: number, b: number): number => {
    return a * b;
}

export const sommaMultipla = (...numeri: number[]): number => {
    let r = 0;

    for (const n of numeri) {
        r += n;
    }

    return r;
}

export default moltiplicazione;