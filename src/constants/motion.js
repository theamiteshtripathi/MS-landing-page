export const navbarVariants = {
    default: {
        backdropFilter: "blur(0px)",
        backgroundColor: "rgba(255,255,255,0)",
        borderBottomColor: "rgba(255,255,255,0)",
    },
    active: {
        backdropFilter: "blur(25px)",
        backgroundColor: "rgba(255,255,255,0.6)",
        borderBottomColor: "rgb(255,255,255)",
    },
    slide: {
        y: 0,
        transition: {
            duration: 2,
            type: "spring",
            bounce: 0.3,
        },
    },
};

export const mobileMenuVariants = {
    hidden: {
        opacity: 0,
        scale: 1.3,
    },
    visible: {
        opacity: 1,
        scale: 1,
    },
};

export const leftSideVariants = {
    hidden: {
        opacity: 0,
        x: -100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 2,
            bounce: 0.3,
            delay: 0.5,
        },
    },
};

export const rightSideVariants = {
    hidden: {
        opacity: 0,
        x: 100,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            duration: 2,
            bounce: 0.3,
            delay: 0.5,
        },
    },
};

export const centerVariants = {
    hidden: {
        opacity: 0,
        y: -100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            type: "spring",
            bounce: 0.1,
        },
    },
};
