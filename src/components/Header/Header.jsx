import React from 'react';
import { useSelector } from 'react-redux';
import RadioGroup from '../RadioGroup';
import './Header.css'

const nameLeft = 'left';
const nameRight = 'right';

const Header = () => {

    const leftRadioGroup = useSelector(state => state.crops.leftRadioGroup);  
    const rightRadioGroup = useSelector(state => state.crops.rightRadioGroup);  

    return (
        <>
            <div className='container'>
                <div className='logo'>
                    <svg width="270" height="95" viewBox="0 0 270 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="270" height="95" rx="12" fill="white"/>
                    <path d="M91.8113 77.9999C89.909 77.6922 88.0067 77.3504 86.1044 77.0769C84.6777 76.8718 83.217 76.6667 81.7903 76.4616C80.4315 76.2907 79.0728 76.154 77.714 76.0173C76.2533 75.8805 74.8266 75.7096 73.3659 75.6071C71.7354 75.4703 70.1048 75.3678 68.4403 75.2652C66.9117 75.1627 65.3491 75.0943 63.8205 75.0259C61.8163 74.9576 59.8121 74.9234 57.8419 74.8892C57.6721 74.8892 57.5702 74.855 57.4682 74.6841C55.7018 71.7785 54.4789 68.6337 53.7996 65.2837C53.29 62.7199 53.1202 60.1562 53.29 57.5583C53.324 57.2164 53.3579 56.8746 53.3579 56.5669C53.3579 56.3618 53.4599 56.3276 53.6297 56.3276C54.8866 56.396 56.1774 56.4986 57.4682 56.4986C60.0159 56.4986 62.5297 56.02 64.9415 55.1996C68.1346 54.1057 70.988 52.3966 73.5357 50.1405C73.8075 49.867 74.1132 49.6277 74.419 49.3201C74.7586 49.9012 75.1323 50.4481 75.472 51.0292C78.5632 56.1225 81.6544 61.1817 84.7456 66.275C87.0216 70.0352 89.2975 73.7953 91.6075 77.5213C91.6754 77.6581 91.7773 77.7606 91.8792 77.8973V77.9999H91.8113Z" fill="#3B5021"/>
                    <path d="M20 77.9659C26.0465 68.0186 32.0931 58.1054 38.1396 48.1581C41.7404 52.1917 46.1904 54.7896 51.4217 55.9861C50.4366 62.6176 51.4556 68.9074 54.4449 74.9236C42.8954 75.0262 31.4477 75.9149 20 77.9659Z" fill="#3B5021"/>
                    <path d="M55.9059 19C59.0651 24.1617 62.1902 29.2892 65.3154 34.4509C57.978 39.3733 53.3922 46.1416 51.6258 54.8925C50.6067 54.5165 49.5876 54.1747 48.6025 53.7303C45.3075 52.2946 42.522 50.1752 40.2121 47.4405C39.9403 47.1329 39.7025 46.7911 39.4647 46.4834C39.3628 46.3467 39.3628 46.2441 39.4647 46.1074C40.9934 43.612 42.488 41.1508 43.9827 38.6554C45.7491 35.7498 47.5494 32.8101 49.3159 29.9045C51.4899 26.3494 53.6639 22.7943 55.804 19.2051C55.804 19.1709 55.838 19.1026 55.9059 19Z" fill="#3B5021"/>
                    <path d="M76.0494 46.7226C75.5738 47.2695 75.1662 47.7481 74.6906 48.2267C74.0792 48.842 73.5017 49.4915 72.8563 50.0384C72.007 50.7562 71.0899 51.3715 70.2067 52.021C69.833 52.2945 69.4254 52.5338 68.9838 52.7731C68.2364 53.1491 67.5231 53.5593 66.7418 53.8669C65.3151 54.4822 63.8544 54.9266 62.3597 55.2343C60.7632 55.5419 59.1666 55.7128 57.57 55.6786C56.3471 55.6445 55.0903 55.5419 53.9014 55.3368C53.6636 55.3026 53.5956 55.2001 53.6296 54.9608C53.9693 52.8072 54.5128 50.7221 55.362 48.7052C55.362 48.6711 55.396 48.6369 55.396 48.6027C55.4979 47.9874 55.9055 47.6114 56.4491 47.4405C57.57 47.0303 58.6571 46.6201 59.7781 46.2782C61.3746 45.7997 63.0391 45.492 64.7376 45.3553C66.8777 45.1502 69.0177 45.2185 71.1238 45.5262C72.6864 45.7655 74.215 46.1415 75.7097 46.6201C75.7776 46.5859 75.8795 46.6201 76.0494 46.7226Z" fill="#F6BE4E"/>
                    <path d="M56.1436 46.6876C56.4832 46.0723 56.721 45.4912 57.0607 44.9785C57.6382 44.0213 58.2497 43.0642 58.8611 42.1413C59.3027 41.4918 59.7783 40.8765 60.3218 40.2954C60.5935 39.9877 61.0012 39.7484 61.4088 39.6117C62.4958 39.2357 63.5828 38.8597 64.7038 38.5862C66.6401 38.1076 68.6103 37.8683 70.6145 37.8342C72.4828 37.8 74.3511 37.9367 76.1855 38.3127C77.3404 38.552 78.4614 38.928 79.6164 39.2357C79.8202 39.304 79.8542 39.4066 79.7862 39.5775C79.5484 40.1928 79.3107 40.8423 79.0389 41.4576C78.7672 42.1413 78.4614 42.7907 78.1217 43.4402C77.816 44.0213 77.4084 44.5683 77.0347 45.1494C76.8988 45.3545 76.763 45.5938 76.6611 45.7989C76.5591 46.004 76.4233 46.004 76.2194 45.9356C74.7927 45.4229 73.2981 45.0468 71.7695 44.7734C69.4935 44.3974 67.2176 44.2948 64.9416 44.4999C62.5638 44.6708 60.2538 45.1494 58.0458 45.9698C57.5363 46.1749 56.9928 46.38 56.4832 46.5509C56.4153 46.5851 56.3134 46.6193 56.1436 46.6876Z" fill="#F6BE4E"/>
                    <path d="M61.9185 38.5182C62.6318 37.8688 63.3452 37.1509 64.1265 36.5698C65.2135 35.7152 66.3345 34.8948 67.5234 34.177C68.7463 33.4591 70.0371 32.8438 71.294 32.2285C71.9734 31.9209 72.7207 31.7158 73.4341 31.4765C74.4192 31.1688 75.4043 30.827 76.3894 30.6219C77.7482 30.3484 79.1409 30.2117 80.5337 30.0066C80.7035 29.9724 80.7375 30.0408 80.7715 30.2117C80.9073 31.579 80.9753 32.9122 80.8054 34.2795C80.6696 35.4417 80.4657 36.5698 80.2619 37.732C80.2279 37.9713 80.16 38.2106 80.0581 38.4499C80.0241 38.5182 79.8883 38.5524 79.8203 38.5524C78.5634 38.2106 77.2726 37.8346 76.0157 37.5611C75.0646 37.356 74.0455 37.2876 73.0604 37.1851C72.415 37.1167 71.7696 37.1167 71.1242 37.1167C69.6974 37.0825 68.2368 37.2193 66.81 37.4244C65.1456 37.6637 63.549 38.0739 61.9524 38.5866C61.9864 38.5524 61.9524 38.5182 61.9185 38.5182Z" fill="#F6BE4E"/>
                    <path d="M99.8798 56.0173L106.826 40.1909H108.862L115.74 56.0173H113.206L111.577 52.1278H103.975L102.369 56.0173H99.8798ZM104.767 50.183H110.762L107.776 42.7616L104.767 50.183Z" fill="#F6BE4E"/>
                    <path d="M117.797 56.0173V40.1909H127.142V42.1357H120.037V56.0173H117.797Z" fill="#F6BE4E"/>
                    <path d="M129.265 56.0173V40.1909H134.152C135.947 40.1909 137.349 40.556 138.36 41.2863C139.371 42.0016 139.876 43.1044 139.876 44.5946C139.876 46.1147 139.34 47.2398 138.27 47.97C137.214 48.7002 135.803 49.0653 134.039 49.0653H131.505V56.0173H129.265ZM131.505 47.1876H133.88C136.369 47.1876 137.613 46.3233 137.613 44.5946C137.613 42.9106 136.384 42.0686 133.926 42.0686H131.505V47.1876Z" fill="#F6BE4E"/>
                    <path d="M150.368 56.4197C147.924 56.4197 145.903 55.6373 144.304 54.0725C142.705 52.5078 141.906 50.5109 141.906 48.0818C141.906 45.6378 142.698 43.6483 144.282 42.1134C145.88 40.5635 147.909 39.7886 150.368 39.7886C152.826 39.7886 154.855 40.5635 156.454 42.1134C158.068 43.6483 158.875 45.6378 158.875 48.0818C158.875 50.5109 158.068 52.5078 156.454 54.0725C154.855 55.6373 152.826 56.4197 150.368 56.4197ZM150.368 54.4302C152.193 54.4302 153.664 53.8267 154.78 52.6196C155.896 51.3976 156.454 49.885 156.454 48.0818C156.454 46.2935 155.896 44.7883 154.78 43.5663C153.664 42.3443 152.193 41.7333 150.368 41.7333C148.573 41.7333 147.117 42.3443 146.001 43.5663C144.885 44.7883 144.327 46.2935 144.327 48.0818C144.327 49.885 144.885 51.3976 146.001 52.6196C147.117 53.8267 148.573 54.4302 150.368 54.4302Z" fill="#F6BE4E"/>
                    <path d="M161.921 56.0173V40.1909H164.161V52.7313H164.206L172.283 40.1909H174.749V56.0173H172.51V43.4769H172.464L164.387 56.0173H161.921Z" fill="#F6BE4E"/>
                    <path d="M178.647 56.0173V40.1909H180.887V46.8076H189.009V40.1909H191.249V56.0173H189.009V48.7747H180.887V56.0173H178.647Z" fill="#F6BE4E"/>
                    <path d="M195.13 56.0173V40.1909H200.65C202.038 40.1909 203.222 40.5113 204.202 41.1521C205.183 41.7929 205.673 42.8063 205.673 44.1922C205.673 45.0417 205.416 45.7719 204.904 46.3829C204.406 46.9939 203.727 47.4112 202.867 47.6347V47.6794C203.923 47.7986 204.775 48.201 205.424 48.8865C206.088 49.572 206.42 50.4513 206.42 51.5242C206.42 52.9847 205.854 54.1023 204.723 54.8773C203.606 55.6373 202.166 56.0173 200.401 56.0173H195.13ZM197.369 54.1396H200.175C200.884 54.1396 201.517 54.0651 202.076 53.9161C202.634 53.767 203.116 53.4839 203.523 53.0666C203.946 52.6345 204.157 52.0831 204.157 51.4125C204.157 49.6391 202.898 48.7524 200.379 48.7524H197.369V54.1396ZM197.369 46.8747H200.288C201.208 46.8747 201.962 46.6735 202.551 46.2711C203.139 45.8539 203.433 45.2354 203.433 44.4158C203.433 42.8361 202.264 42.0463 199.926 42.0463H197.369V46.8747Z" fill="#F6BE4E"/>
                    <path d="M209.646 56.0173V40.1909H219.918V42.1357H211.886V46.8747H219.443V48.7747H211.886V54.0502H220.257V56.0173H209.646Z" fill="#F6BE4E"/>
                    <path d="M230.859 56.4197C228.4 56.4197 226.379 55.6373 224.795 54.0725C223.212 52.5078 222.42 50.5109 222.42 48.0818C222.42 45.6378 223.227 43.6483 224.841 42.1134C226.455 40.5635 228.491 39.7886 230.949 39.7886C232.096 39.7886 233.197 40.0047 234.253 40.4368C235.309 40.869 236.123 41.4725 236.696 42.2475L234.931 43.5887C234.539 43.0373 233.981 42.5902 233.257 42.2475C232.533 41.9047 231.764 41.7333 230.949 41.7333C229.139 41.7333 227.669 42.3443 226.538 43.5663C225.421 44.7883 224.863 46.2935 224.863 48.0818C224.863 49.8999 225.414 51.4199 226.515 52.6419C227.616 53.849 229.072 54.4526 230.882 54.4526C232.767 54.4526 234.2 53.7521 235.18 52.3513L236.968 53.5584C235.55 55.4659 233.514 56.4197 230.859 56.4197Z" fill="#F6BE4E"/>
                    <path d="M242.624 56.0173V42.1357H237.488V40.1909H250V42.1357H244.864V56.0173H242.624Z" fill="#F6BE4E"/>
                    </svg>
                </div>
                <div className='left-radiogroup'>
                    <RadioGroup 
                        name={nameLeft} 
                        title={leftRadioGroup}
                        y={'65px'}
                    />
                </div>
                <div className='right-radiogroup'>
                    <RadioGroup 
                        name={nameRight} 
                        title={rightRadioGroup}
                        y={'65px'}
                    />
                </div>
            </div>
        </>
    );
};

export default Header;