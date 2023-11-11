import * as React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Share() {
    return (
        <div style={{
            minHeight: "100vh", backgroundColor: "#FFF4EF"
        }}>
            <Header name="Rocky" />

            <div style={{
                minHeight: "64vh", backgroundColor: "#FFF4EF"
            }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src="qr.png" alt="QR Code" />
                </div>
            </div>
            <Footer />
        </div>
    );
}