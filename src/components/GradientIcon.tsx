import { IconContext } from "react-icons/lib"

function GradientIcon(
    { startColor, endColor, gradientID, offset, nestedElement }:
        { startColor: string, endColor: string, gradientID: string, offset: string, nestedElement: any }) {

    const url: string = 'url(#' + gradientID + ')';

    let x1: string = '0%', y1: string = '0%', x2: string = '0%', y2: string = '0%';

    switch (offset) {
        case 'r': {
            x1 = '0%';
            y1 = '0%';
            x2 = '100%';
            y2 = '0%';
            break;
        }
        case 'l': {
            x1 = '100%';
            y1 = '0%';
            x2 = '0%';
            y2 = '0%';
            break;
        }
        case 't': {
            x1 = '0%';
            y1 = '0%';
            x2 = '0%';
            y2 = '100%';
            break;
        }
        case 'b': {
            x1 = '0%';
            y1 = '100%';
            x2 = '0%';
            y2 = '0%';
            break;
        }
        case 'tr': {
            x1 = '0%';
            y1 = '0%';
            x2 = '100%';
            y2 = '100%';
            break;
        }
        case 'tl': {
            x1 = '100%';
            y1 = '0%';
            x2 = '0%';
            y2 = '100%';
            break;
        }
        case 'br': {
            x1 = '0%';
            y1 = '100%';
            x2 = '100%';
            y2 = '0%';
            break;
        }
        case 'bl': {
            x1 = '100%';
            y1 = '100%';
            x2 = '0%';
            y2 = '0%';
            break;
        }
        default: break;
    }

    return (
        <div>
            <LinearGradient_SVG startColor={startColor} endColor={endColor} gradientID={gradientID} x1={x1} y1={y1} x2={x2} y2={y2} />
            <IconContext.Provider value={{ style: { fill: url } }} >
                {nestedElement}
            </IconContext.Provider>
        </div>
    );
}

function LinearGradient_SVG(
    { startColor, endColor, gradientID, x1, y1, x2, y2 }:
        { startColor: string, endColor: string, gradientID: string, x1: string, y1: string, x2: string, y2: string }) {

    return (
        <svg width="0" height="0">
            <linearGradient id={gradientID} x1={x1} y1={y1} x2={x2} y2={y2}>
                <stop stopColor={startColor} offset="0%" />
                <stop stopColor={endColor} offset="100%" />
            </linearGradient>
        </svg>
    );
}

export default GradientIcon