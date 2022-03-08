import { createGlobalStyle } from 'styled-components';

import ScoutCondensedWoff from './ScoutCondensed-Bold.woff';
import ScoutCondensedWoff2 from './ScoutCondensed-Bold.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Scout Condensed';
        src: local('Scout Condensed'), local('ScoutCondensed'),
        url(${ScoutCondensedWoff2}) format('woff2'),
        url(${ScoutCondensedWoff}) format('woff');
        font-weight: bold;
    }
`;
