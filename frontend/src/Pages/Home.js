import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import oneDog from "../Images/oneDog.svg";

export default function Home() {
    return (
        <div style={{
            minHeight: "100vh", backgroundColor: "#FFF4EF"
        }}>
            <Header name="Rocky" />

            <div style={{
                minHeight: "64vh", backgroundColor: "#FFF4EF"
            }}>
                <img src={oneDog} alt="logo" style={{
                    maxHeight: "40vh", display: "block", marginLeft: "auto", marginRight: "auto"
                }}
                />
            </div>
            <Footer />
        </div>
    );
}