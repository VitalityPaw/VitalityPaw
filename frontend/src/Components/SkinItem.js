import * as React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';

export default function SkinItem(props) {
    return (
        <div className="skin-item" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <img src={props.image} alt={props.name} style={{ maxHeight: "32px" }} />
            <p>{props.name} · {props.price} XP</p>
            <IconButton aria-label="add to shopping cart" onClick={() => window.location.href = "/hat"}>
                <ShoppingCartIcon />
            </IconButton>
        </div >
    );
}