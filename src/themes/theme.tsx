import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffe118",
        },
    },

    typography: {
        fontFamily: ["Poppins"].join(","),

        h1: {
            fontWeight: "700",
        },
        h2: {
            fontWeight: "700",
        },
        h3: {
            fontWeight: "700",
        },
        h4: {
            fontWeight: "700",
        },
        h5: {
            fontWeight: "700",
        },
        h6: {
            fontWeight: "700",
        },
        subtitle1: {
            fontSize: '20px'
        },
        subtitle2: {
            fontSize: '16px'
        },
        body1: {
            fontSize: '20px',
            fontWeight:'300'
        },
        body2: {
            fontSize: '16px'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 2,
                    boxShadow: "none",
                    textTransform: "none",
                    backgroundColor: "#ffe118",
                },
            },
            defaultProps: {
                variant: "contained",
                size: "large",
            },
        },
    },
});

export default theme;