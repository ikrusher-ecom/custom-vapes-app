/*
 * @Author: Jinqi Li
 * @Date: 2022-04-13 17:37:17
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-17 17:52:27
 * @FilePath: /custom-vapes-app/components/CustomImages.js
 */
import * as React from 'react';

export default function CustomImages(props) {
	return (
		<img
			alt={props.images}
			layout="fill"
			src={`${props.folder}${props.images}`}
			key={props.images}
			className={props.color + 's'}
			style={{ position: 'absolute', left: '0', right: '0', top: '0', bottom: '0' }}
		/>
	);
}
