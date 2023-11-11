import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function MyFriends() {
    return (
        <>
            <Header name="My Friends" />
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