export default class SquareTriangle {
    static calc(a, h) {
        a = +a;
        h = +h;
        if(!a || !h) {
            return null;
        }

        return  0.5 * a * h;
    }
}