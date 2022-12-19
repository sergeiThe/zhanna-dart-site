import React from "react";
import services from "../data/services";
import { motion as m } from "framer-motion";

const listVariants = {
    initialState: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 2,
        },
    },
};

const listItemVariants = {
    initialState: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: {
        duration: 1,
        ease: "easeOut",
        delayChildren: 0.5
    } },
};

const leftItemVariants = {
    initialState: { opacity: 0, x: -35 },
    show: { opacity: 1, x: 0, transition: {
        duration: 1,
        ease: "easeOut"
    } },
};

const rightItemVariants = {
    initialState: { opacity: 0, x: 35 },
    show: { opacity: 1, x: 0, transition: {
        duration: 1,
        ease: "easeOut"
    } },
};

function ServiceList() {
    const serviceList = services.map((service) => {
        return (
            <m.li
                key={services.indexOf(service)}
                className="service-list-item"
                variants={listItemVariants}
            >
                <m.span
                    variants={leftItemVariants}
                >{`${service.name}`}</m.span>
                <m.span
                    variants={rightItemVariants}
                >{`${service.fra === true ? "fra" : ""} ${
                    service.price
                } NOK`}</m.span>
            </m.li>
        );
    });

    return (
        <m.ul
            className="service-list"
            initial="initialState"
            animate="show"
            variants={listVariants}
        >
            {serviceList}
        </m.ul>
    );
}

export default ServiceList;
