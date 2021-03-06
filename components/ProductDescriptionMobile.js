/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 23:34:38
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-24 15:47:12
 * @FilePath: /custom-vapes-app/components/ProductDescriptionMobile.js
 */
import * as React from 'react';
import styles from '../styles/Component.module.css';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function ProductDescriptionMobile(props) {
	const showCustom = () => {
		if (props.productName) {
			props.clickWidget(props.productName.replace(/\s/g, ''));
		}
	};

	if (props.productName) {
		return (
			<div id={props.productName.replace(/\s/g, '-').toLowerCase()} className="des-all des-mobile">
				<Image src={process.env.prodDir + props.url} alt={props.productName} width="256" height="341" className={styles.mobileImg} />
				<table className={styles.mobileTable}>
					<tbody>
						<tr>
							<th>Product Name:</th>
							<td>{props.productName}</td>
						</tr>
						<tr>
							<th>Available Colors:</th>
							{/* <td>Black, Rose Gold, Red, Metallic Blue, Lilac, Gunmetal</td> */}
							<td>{props.colors}</td>
						</tr>
						{/* <tr>
                            <th>Available Patterns:</th>
                            <td>List the pattern here here, with images to see</td>
                        </tr> */}
						<tr>
							<th>Allow Upload Logo:</th>
							<td>Yes.</td>
						</tr>
						<tr>
							<th>Allow Custom Text:</th>
							<td>Yes.</td>
						</tr>
						<tr>
							<th>Others:</th>
							<td>Custom User Manual, Custom Packaging or Shipping Carton</td>
						</tr>
						<tr>
							<th>Minimum Order Quantity:</th>
							<td style={{ color: 'red', fontWeight: 'bold' }}>5,000 Pieces</td>
						</tr>
						<tr>
							<td colSpan="2" style={{ textAlign: 'center', paddingTop: '1em' }}>
								<Button
									variant="contained"
									className={'custom-btn ' + styles.funcBtn}
									value={'widget' + props.productName.replace(/\s/g, '-').toLowerCase()}
									onClick={showCustom}
								>
									Start Customization
								</Button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
