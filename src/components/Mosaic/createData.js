import { cropStateOptions4 } from "../../containers/utils";

export const createData = (cropsComp) => {
    
const cropsColor = cropStateOptions4();
// console.log('cropsColor', cropsColor);

const transfCrop = (crop) => {
        // console.log('===crop', crop);
    const blocks0 = []
    let sumAll = crop.sum[1]+crop.sum[3]+crop.sum[5];
    for (let i=1; i < crop.sum.length; i++ ) {
        const block = {}
        // let sumAll = crop.sum[1]+crop.sum[3]+crop.sum[5];
        if (crop.sum[i] > 0) {
            block.percent = Math.round(100*crop.sum[i]/sumAll) + '%';
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
for (let i=0; i < cropsComp.item.crops.length; i++ ) {
    data.push(transfCrop(cropsComp.item.crops[i]))
}

return data

}