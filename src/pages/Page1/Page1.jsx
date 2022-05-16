import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import './Page1.css';
import Card from '../../components/Card/Card';
import { region } from '../../containers/regions';
import { dataPage1 } from '../../containers/data';
import { svgChartNone, svgChartAll } from '../../containers/svgSelector';
import Region from '../../components/Region';
import {ReactComponent as ReactChart} from '../../containers/chart.svg';
import SvgHome from '../../components/Svg';

const colorCard   = ["#c49eea", "#9eb3fc", "#a5ded0"];
const titleColorCard = ["#9770BD", "#8194D9", "74B5A5"];
const widthCard = [ 572, 479, 409 ];


const regionData = dataPage1();
const svgChartNoneContext = svgChartNone().context;
const svgChartAllContext = svgChartAll().context;
const regionUtil = region();

const Page1 = () => {

    const defaultLeft = useSelector(state => state.crops.leftRadioGroup[0].name); 
    const checkedRadioLeft = useSelector(state => state.crops.selectedRadioLeft);  

    return (
        <div className='page1'>
            <div className='header'>
                <Header />
            </div>    
            <div className='chart' style={{ fill: "#0f0", }}>
                <SvgHome svgFill={[regionData[0].info, regionData[1].info, regionData[2].info]} />
            </div>

            {/* <Region 
                top={regionUtil[1].top} 
                left={regionUtil[1].left} 
                width={regionUtil[1].width} 
                height={regionUtil[1].height} 
                number={regionUtil[1].number} 
                active={regionUtil[1].active}
                svg={regionUtil[1].svg} 
            /> */}

            <div className='footer'>
                <div className='container-cards'>
                    <div className='card1'>
                        <Card 
                            color={colorCard[0]} 
                            titleColor={titleColorCard[0]} 
                            width={widthCard[0]}
                            region={(checkedRadioLeft===defaultLeft) ? regionData[0] : regionData[3]} />
                    </div>
                    <div className='card2'>
                        <Card  
                            color={colorCard[1]} 
                            titleColor={titleColorCard[1]} 
                            width={widthCard[1]}
                            region={(checkedRadioLeft===defaultLeft) ? regionData[1] : regionData[4]} />
                    </div>
                    <div className='card3'>
                        <Card 
                            color={colorCard[2]} 
                            titleColor={titleColorCard[2]} 
                            width={widthCard[2]}
                            region={(checkedRadioLeft===defaultLeft) ? regionData[2] : regionData[5]} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page1;