import React from "react";
import {
    CardImg
} from "reactstrap";
export default function ({ src, width = 400, height = 200 }) {
    return (
        <CardImg top style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }} />
    );
}
