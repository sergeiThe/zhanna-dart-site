export const pageVariants = {
    initialState: {
        opacity: 0,
    },
    animateState: {
        opacity: 1,
        transition: {
            duration: 2.6,
            // ease: "easeOut"
        }
    },
    exitState: {
        opacity: 0
    }
}

export const bgVariants = {
    initialState: {
        opacity: 0
    },
    animateState: {
        opacity: 1,
        transition: {
            duration: 2,
            delay: 0.5
        }
    },
    exitState: {
        opacity: 0
    }
}

export const iconVariants = {
    initialState: {
        opacity: 0
    },
    animateState: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 3,
            ease: "easeOut"
        }
    },
    exitState: {
        opacity: 0
    }
}

export const titleVariants = {
    initialState: {
        opacity: 0,
        x: -50
    },
    animateState: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            delay: 0.5,
            ease: "easeOut",
        }
    },
    exitState: {
        opacity: 0
    }
}

export const paragraphVariants = {
    initialState: {
        opacity: 0,
        x: 30
    },
    animateState: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            delay: 0.5,
            ease: "easeOut",
        }
    },
    exitState: {
        opacity: 0
    }
}

export const btnVariants = {
    initialState: {
        opacity: 0,
        y: 15
    },
    animateState: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 2.0,
            ease: "easeOut"
        }
    },
    exitState: {
        opacity: 0
    }
}