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
            delay: 0.5
        }
    },
    exitState: {

    }
}

export const titleVariants = {
    initialState: {
        opacity: 0,
        x: -100
    },
    animateState: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            ease: "easeOut",
            delay: 1
        }
    },
    exitState: {

    }
}

export const paragraphVariants = {
    initialState: {
        opacity: 0,
        x: 100
    },
    animateState: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            ease: "easeOut",
            delay: 1
        }
    },
    exitState: {

    }
}

export const btnVariants = {
    initialState: {
        opacity: 0,
        y: 50
    },
    animateState: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 3.5,
            ease: "easeOut"
        }
    },
    exitState: {

    }
}