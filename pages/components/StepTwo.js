/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 00:58:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-12 01:03:23
 * @FilePath: /custom-vapes-app/pages/components/StepTwo.js
 */
import Image from 'next/image';
import { useState } from 'react';
import ProductButtons from './ProductButtons';

export default function StepTwo({ cateSet }) {
	// const [passCate, setPassCate] = useState(null);
	// setPassCate(cate);
	console.log(cateSet);

	return (
		<div id="custom-step2">
			<ProductButtons cateDisplay={cateSet} />
		</div>
	);
}
