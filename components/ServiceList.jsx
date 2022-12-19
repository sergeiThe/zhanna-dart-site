import React from "react";
import services from "../data/services";

function ServiceList() {

    const serviceList = services.map(service => {
        return (
            <li key={services.indexOf(service)} className="service-list-item">
                <span>{`${service.name}`}</span>
                <span>{`${service.fra === true ? 'fra' : ""} ${service.price} NOK`}</span>
            </li>
        )
    })


    return (
        <ul className="service-list">
            {serviceList}
        </ul>
    );
}

export default ServiceList;
