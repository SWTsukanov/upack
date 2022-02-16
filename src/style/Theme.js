import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme ={
    fontSize:{
        mainFont:'18px',
        h1:'36px',
        h2:'28px',
        h3:'24px',
        h4:'20px',
        h5:'18px',
        h6:'16px'
    },
    colors:{
        main:'black',
        secondary:'#FFFFFF',
        mainBg:'#08A652',
        secondBgGrey:'#62696C',
        secondFontGreen:'green'
    },
    fonts:{
        semibold:'SF Pro Display Semibold',
    }
}

const Theme=({children})=>(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export default Theme;