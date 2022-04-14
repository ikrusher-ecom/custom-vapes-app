import * as React from 'react';
import styles from '../../../styles/Component.module.css';
import Image from 'next/image';
import CustomImages from '../CustomImages';

export default function AstroModWidget(props) {
    const productID = "astro-mod";
    const productCate = "pod-system";
    const productFolder = "/products/pod-system/astro-mod/";
    const productImages = [
        "IKrusher-Astro-Mod-Black-Custom-01.jpg",
        "IKrusher-Astro-Mod-Black-Custom-02.jpg"
    ]

    return (
        <div className="custom-vape">
            <div className="next-btn">
                <button onClick={console.log("lastAngle()")}> Previous </button>
            </div>
            <div className="custom-group">
                <div id="oneAM">
                    <CustomImages name={productID} category={productCate} folder={productFolder} images={productImages} />
                </div>
            </div>
        </div>
    )
}