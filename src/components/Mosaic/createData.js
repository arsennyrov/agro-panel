import { cropStateOptions4 } from "../../containers/utils";

export const createData = (cropsComp) => {
    
const cropsColor = cropStateOptions4();

const transfCrop = (crop) => {
    const blocks0 = []
    // let sumAll = crop.sum[1]+crop.sum[3]+crop.sum[5];
    for (let i=1; i < crop.sum.length; i++ ) {
        const block = {}
        // let sumAll = crop.sum[1]+crop.sum[3]+crop.sum[5];
        if (crop.sum[i] > 0 && i%2===1) {
            block.percent = Math.round(100*crop.sum[i]/crop.sum[0]) + '%';
            block.color = cropsColor[i-1].color;
            blocks0.push(block);
        } 
    }
    return (
            {
                value: crop.sum[0],
                blocks: blocks0,
                name: crop.name,
                text1: crop.sum[1],
                text2: crop.sum[2],
                text3: crop.sum[3],
                text4: crop.sum[4],
                text5: crop.sum[5],
            }
    )
}

const data = []
for (let i=0; i < cropsComp.crops.length; i++ ) {
    data.push(transfCrop(cropsComp.crops[i]))
}

return data

}