import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import rocky from "../Images/rocky.png";
import rockywithhat from "../Images/rockywithhat.png";

export default function Home(props) {
    let hat = props.hat;
    let xp = hat ? 800 : 1000; // Set XP based on whether the hat is displayed

    return (
        <div style={{
            minHeight: "100vh", backgroundColor: "#FFF4EF"
        }}>
            <Header name="Rocky" />

            <div style={{
                minHeight: "64vh", backgroundColor: "#FFF4EF"
            }}>
                <h1 style={{ 
                    textAlign:"center", fontSize:"80px", marginTop:"10px"
                }}>{xp} <span style={{
                    fontSize:"50px"
                }}>XP</span></h1>
                <a href="/pet-profile">
                    <img src={hat ? rockywithhat : rocky} alt="Rocky" style={{
                        maxHeight: "40vh", display: "block", marginLeft: "auto", marginRight: "auto"
                    }}
                    />
                </a>
            </div>
            <Footer />
        </div>
    );
}
