import * as React from 'react';
import styles from '../../styles/Component.module.css';
import Image from 'next/image';

export default function CustomImages(props) {
    return (
        <div className="custom-img">
            {/* <canvas id="myCanvas" width="400" height="400"
                style={{ border: '1px solid transparent', zIndex: '10', position: 'absolute' }}> */}
                    {
                        props.images.map(image => {
                            console.log(`${props.folder}${image}`)
                            return (
                                <Image width='256' height='341' src={`${props.folder}${image}`} key={image} />
                            )
                        })
                    }
            {/* </canvas> */}
        </div>
    )
}