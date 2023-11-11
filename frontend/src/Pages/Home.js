import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import rocky from "../Images/rocky.png";
import Notification from "../Components/Notification.js";

export default function Home() {
    return (
        <div style={{
            minHeight: "100vh", backgroundColor: "#FFF4EF"
        }}>
            <Notification />
            <Header name="Rocky" />

            <div style={{
                minHeight: "64vh", backgroundColor: "#FFF4EF"
            }}>
                <img src={rocky} alt="logo" style={{
                    maxHeight: "40vh", display: "block", marginLeft: "auto", marginRight: "auto"
                }} onClick={() => { window.location.href = "/pet-profile" }}
                />
            </div>
            <Footer />
        </div>
    );
}