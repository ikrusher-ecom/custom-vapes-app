/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 23:34:38
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-14 01:42:51
 * @FilePath: /custom-vapes-app/pages/components/ProductDescription.js
 */
import * as React from 'react';
import styles from '../../styles/Component.module.css';
import Image from 'next/image';
import Button from '@mui/material/Button';

export default function ProductDescription(props) {
	const showCustom = () => {
		if (props.productName) {
			props.clickWidget(props.productName.replace(/\s/g, '') + 'Widget');
		}
	};

	if (props.productName) {
		return (
			<div id={props.productName.replace(/\s/g, '-').toLowerCase()} className="des-all">
				<Image src={process.env.prodDir + props.url} alt={props.productName} width="256" height="341" />
				<table className={styles.desTable}>
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
							<td>Yes, list the image format and size</td>
						</tr>
						<tr>
							<th>Allow Custom Text:</th>
							<td>Yes, show the font family/size and numbers of characters</td>
						</tr>
						<tr>
							<th>Others:</th>
							<td>Custom User Manual, Custom Packaging or Shipping Carton</td>
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
