import React from 'react'
import UITitle from '../UI/UITitle'
import Service from './Service'
import classes from "./Services.module.css"

const DEFAULT_SERVICES = [
    {
        id: "service1",
        name: "Service 1",
        description: "Service Description in many many words"
    },
    {
        id: "service2",
        name: "Service 2",
        description: "Service Description in many many words"
    },
    {
        id: "service3",
        name: "Service 3",
        description: "Service Description in many many words"
    },
    {
        id: "service4",
        name: "Service 4",
        description: "Service Description in many many words"
    },
    {
        id: "service5",
        description: "Service Description in many many words"
    },
    {
        id: "service6",
        name: "Service 6",
        description: "Service Description in many many words"
    },
    {
        id: "service7",
        name: "Service 7",
        description: "Service Description in many many words"
    },
]

const Services = () => {
  return (
    <div className={classes.services}>
        <UITitle titleText={"Her Range of Tunkey Services Include"}/>
        <div className={classes["services-items-wrapper"]}>
        {DEFAULT_SERVICES.map(service => (
            <Service
                key={service.id}
                name={service.name}
            />
        )) }
        </div>
        
    </div>
  )
}

export default Services