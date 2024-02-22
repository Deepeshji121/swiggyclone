import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
const About = () => {
  const Section = ({ title, description, isVisible,setIsVisible }) => {
    return (
      <div className="border border-black rounded-sm p-2 m-2">
        <div className="font-bold text-xl">{title}</div>
        {isVisible ? (
          <div>
            <button
              className=" cursor-pointer underline"
              onClick={() => {
                return setIsVisible(false);
              }}
            >
              Hide
            </button>
            
          </div>
        ) : (
          <div>
            <button
              className="cursor-pointer underline"
              onClick={() => {
                return setIsVisible(true);
              }}
            >
              Show
            </button>
          </div>
        )}
        {isVisible && <div>{description}</div>}
      </div>
    );
  };
  const [sectionVisible,setSectionVisible] = useState("mission");
  return (
    <div>
        <Outlet/>
      <Section
        title={"About Us"}
        description={
          "Swiggy is an online food ordering website that helps you find the best restaurants in your area.In 2011, Sriharsha Majety and Nandan Reddy designed an e-commerce website called Bundl to facilitate courier service and shipping within India. Bundl was halted in 2014 and rebranded to enter the food delivery market. At the time, the food delivery sector was in turmoil as several notable startups, such as Foodpanda (later acquired by Ola Cabs), TinyOwl (later acquired by Zomato) and Ola Cafe (later closed) were struggling. Majety and Reddy approached Rahul Jaimini, formerly with Myntra, and founded Swiggy in August 2014."
        }
        isVisible={sectionVisible==="about"}
        setIsVisible={()=>{return(
            setSectionVisible("about")
        )}}
      />
      <Section
        title={"Our Mission"}
        description={
          "Swiggy is an online food ordering website that helps you find the best restaurants in your area.In early 2019, Swiggy expanded into general product deliveries under the name Swiggy Stores, sourcing items from local stores. In September 2019, Swiggy launched the instant pickup/dropoff service Swiggy Go, allowing customers to send document or parcel deliveries. In April 2020, it rebranded Swiggy Go as Swiggy Genie. During the COVID-19 pandemic, it began doorstep delivery of alcohol in the states of Jharkhand, West Bengal and Odisha."
        }
        isVisible={sectionVisible ==="mission"}
        setIsVisible={()=>{return(
            setSectionVisible("mission")
        )}}
      />
      <Section
        title={"Partnership"}
        description={
          "Swiggy has partnered with Burger King, McDonalds, Pizza Hut and many others to provide delivery services.It has also partnered with Google Local Guide to facilitate customer reviews,[45] and with Sodexo to let customers pay through meal cards.[46] Swiggy launched a digital wallet, Swiggy Money, in partnership with ICICI Bank, an Indian private sector bank.[47] In January 2022, Swiggy and drone company ANRA Technologies began trialing drone deliveries."
        }
        isVisible={sectionVisible ==="Partnership"}
        setIsVisible={()=>{return(
            setSectionVisible("Partnership")
        )}}
        
      />
    </div>
  );
};
export default About;
