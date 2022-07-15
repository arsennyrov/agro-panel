export const puzzl42 = (x,w,h,text) => {

    const y = [15,15,15,15]

    const kh = h/15;
    const sumX = x.reduce((a,b)=>a+b)
    const k1 = (sumX/w)
    
    const x1 = [];
    x1.push(x[0]/k1)
    x1.push(x[1]/k1)

    const h1 = y[0]*2*x[2]/(100-x1[0]-x1[1]);
    const h2 = 15 -h1;

    x1.push(w-x1[0]-x1[1])

    const k2 = (w-x1[0]-x1[1])/(x[3])

    x1.push(k2*x[3])

    const y1 = []
    y1.push(y[0]);
    y1.push(y[1]);
    y1.push(h1);
    y1.push(h2);

    for (let i=0; i<4; i++) {
        y1[i] = y1[i]*kh;
    }

    return (
        [
        {
            width: `${x1[0]}vw`,
            height: `${y1[0]}vh`,
            gridColumn: '1/2',
            gridRow: '1/3',
            text: text[0].name,
        },
        {
            width: `${x1[1]}vw`,
            height: `${y1[1]}vh`,
            gridColumn: '2/3',
            gridRow: '1/3',
            text: text[1].name,
        },
        {
            width: `${x1[2]}vw`,
            height: `${y1[2]}vh`,
            gridColumn: '3/6',
            gridRow: '1/2',
            text: text[2].name,
        },
        {
            width: `${x1[3]}vw`,
            height: `${y1[3]}vh`,
            gridColumn: '3/4',
            gridRow: '2/3',
            text: text[3].name,
        },
    ]
)};