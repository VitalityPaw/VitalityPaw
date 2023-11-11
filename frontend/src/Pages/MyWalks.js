import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function MyWalks() {
    return (
        <>
            <Header name="My Walks" />
            <div style={{
                minHeight: "64vh", backgroundColor: "#FFF4EF"
            }}>
                <h1 style={{
                    textAlign: "center", margin: "0", padding: "0"
                }}>Coming Soon</h1>
            </div>
            <Footer />
        </>
    );
}