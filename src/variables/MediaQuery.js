const breakpoint = {
    sm: '640px', // -- mobile
    md: '768px', //-- tablet small
    lg: '992px', //-- tablet large
    xl: '1200px', //-- laptop
    xxl: '1600px', //-- desktop large
}

export const device = {
    minWidth: {
        mobile: `(min-width: ${ breakpoint.sm })`,
        tablet: `(min-width: ${ breakpoint.md })`,
        tabletLarge: `(min-width: ${ breakpoint.lg })`,
        laptop: `(min-width: ${ breakpoint.xl })`,
        desktopLarge: `(min-width: ${ breakpoint.xxl })`,
    }
} 