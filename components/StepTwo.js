/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 00:58:07
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-17 17:52:55
 * @FilePath: /custom-vapes-app/components/StepTwo.js
 */
import * as React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Component.module.css';
import ProductButtons from './ProductButtons';

export default function StepTwo(props) {
	const pull_product = (data) => {
		props.product(data);
	}

	if (props.cateSet) {
		return (
			<div id="custom-step2" style={{ padding: '0 16px' }}>
				<h5>Step 2: Select a product to customize</h5>
				<p>
					Click on the specific device below that you want to customize!
				</p>
				<div className="step2-group">
					<ProductButtons cateDisplay={props.cateSet} product={pull_product} />
				</div>
			</div>
		);
	}
}
