/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 00:58:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-13 01:01:12
 * @FilePath: /custom-vapes-app/pages/components/StepTwo.js
 */
import * as React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import ProductButtons from './ProductButtons';

export default function StepTwo(props) {
	const pull_product = (data) => {
		props.product(data);
	}

	if (props.cateSet) {
		return (
			<div id="custom-step2">
				<h5>Step 2: Select a product to customize</h5>
				<p>
					Instruction here...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
					vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt
					id.
				</p>
				<div className="step2-group">
					<ProductButtons cateDisplay={props.cateSet} product={pull_product}/>
				</div>
			</div>
		);
	}
}
