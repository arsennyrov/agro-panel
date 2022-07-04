export const puzzl31 = (x,w,h,text) => {

    const y = [15]

    const kh = h/15;
    const sumX = x.reduce((a,b)=>a+b)
    const k1 = (sumX/w)
    
    const x1 = [];
    x1.push(x[0]/k1)

    const y1 = []
    y1.push(y[0]);

    y1[0] = y1[0]*kh;


    return (
        [
        {
            width: `${x1[0]}vw`,
            height: `${y1[0]}vh`,
            gridColumn: '1/2',
            gridRow: '1/3',
            text: text[0].name,
        },
    ]
)};