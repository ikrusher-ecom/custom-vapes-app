/*
 * @Author: Jinqi Li
 * @Date: 2022-04-13 17:37:17
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-13 22:09:16
 * @FilePath: /custom-vapes-app/pages/components/CustomImages.js
 */
import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import styles from '../../styles/Component.module.css';
import Image from 'next/image';

export default function CustomImages(props) {
	{
		/* <canvas id="myCanvas" width={400} height={400}
        style={{ border: '1px solid transparent', zIndex: '10', position: 'absolute' }}>
    {props.images.map((image) => {
        console.log(`${props.folder}${image}`);
        return <Image alt={image} width={256} height={341} src={`${props.folder}${image}`} key={image} />;
    })}
    </canvas> */
	}

	return (
		<Image
			alt={props.images}
			layout="fill"
			src={`${props.folder}${props.images}`}
			key={props.images}
			className={props.color + 's'}
		/>
	);
}
