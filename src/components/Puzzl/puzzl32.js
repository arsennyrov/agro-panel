export const puzzl32 = (x,w,h,text) => {

    const y = [15,15,15]

    const kh = h/15;
    const sumX = x.reduce((a,b)=>a+b)
    const k1 = (sumX/w)
    
    const x1 = [];
    x1.push(x[0]/k1)
    x1.push(x[1]/k1)
    x1.push(x[2]/k1)



    const y1 = []
    y1.push(y[0]);
    y1.push(y[0]);
    y1.push(y[0]);

    for (let i=0; i<3; i++) {
        y1[i] = y1[i]*kh;
    }

    return (
        [
        {
            width: `${x1[0]}vw`,
            height: `${y1[0]}vh`,
            gridColumn: '1/2',
            gridRow: '1/2',
            text: text[0].name,
        },
        {
            width: `${x1[1]}vw`,
            height: `${y1[1]}vh`,
            gridColumn: '2/3',
            gridRow: '1/2',
            text: text[1].name,
        },
        {
            width: `${x1[2]}vw`,
            height: `${y1[2]}vh`,
            gridColumn: '3/4',
            gridRow: '1/2',
            text: text[2].name,
        },
    ]
)};