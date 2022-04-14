/*
 * @Author: Jinqi Li
 * @Date: 2022-04-13 17:37:17
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-14 01:33:20
 * @FilePath: /custom-vapes-app/pages/components/widgets/AstroModWidget.js
 */
import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from '../../../styles/Component.module.css';
import Image from 'next/image';
import CustomImages from '../CustomImages';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function AstroModWidget(props) {
	const productID = 'astro-mod';
	const productCate = 'pod-system';
	const productFolder = '/products/pod-system/astro-mod/';
	const productImages = {
		black: [
			'IKrusher-Astro-Mod-Black-Custom-01.jpg',
			'IKrusher-Astro-Mod-Black-Custom-02.jpg',
			'IKrusher-Astro-Mod-Black-Custom-03.jpg',
			'IKrusher-Astro-Mod-Black-Custom-04.jpg',
			'IKrusher-Astro-Mod-Black-Custom-05.jpg',
			'IKrusher-Astro-Mod-Black-Custom-06.jpg',
			'IKrusher-Astro-Mod-Black-Custom-07.jpg',
			'IKrusher-Astro-Mod-Black-Custom-08.jpg',
			'IKrusher-Astro-Mod-Black-Custom-09.jpg',
			'IKrusher-Astro-Mod-Black-Custom-10.jpg'
		],
		gunmetal: [
			'IKrusher-Astro-Mod-Gunmetal-Custom-01.jpg',
			'IKrusher-Astro-Mod-Gunmetal-Custom-02.jpg',
			'IKrusher-Astro-Mod-Gunmetal-Custom-03.jpg',
			'IKrusher-Astro-Mod-Gunmetal-Custom-04.jpg',
			'IKrusher-Astro-Mod-Gunmetal-Custom-05.jpg',
			'IKrusher-Astro-Mod-Gunmetal-Custom-06.jpg',
			'IKrusher-Astro-Mod-Gunmetal-Custom-07.jpg',
			'IKrusher-Astro-Mod-Gunmetal-Custom-08.jpg',
			'IKrusher-Astro-Mod-Gunmetal-Custom-09.jpg',
			'IKrusher-Astro-Mod-Gunmetal-Custom-10.jpg'
		],
		lilac: [
			'IKrusher-Astro-Mod-Lilac-Custom-01.jpg',
			'IKrusher-Astro-Mod-Lilac-Custom-02.jpg',
			'IKrusher-Astro-Mod-Lilac-Custom-03.jpg',
			'IKrusher-Astro-Mod-Lilac-Custom-04.jpg',
			'IKrusher-Astro-Mod-Lilac-Custom-05.jpg',
			'IKrusher-Astro-Mod-Lilac-Custom-06.jpg',
			'IKrusher-Astro-Mod-Lilac-Custom-07.jpg',
			'IKrusher-Astro-Mod-Lilac-Custom-08.jpg',
			'IKrusher-Astro-Mod-Lilac-Custom-09.jpg',
			'IKrusher-Astro-Mod-Lilac-Custom-10.jpg'
		],
		blue: [
			'IKrusher-Astro-Mod-Metallic-Blue-Pod-Custom-01.jpg',
			'IKrusher-Astro-Mod-Metallic-Blue-Pod-Custom-02.jpg',
			'IKrusher-Astro-Mod-Metallic-Blue-Pod-Custom-03.jpg',
			'IKrusher-Astro-Mod-Metallic-Blue-Pod-Custom-04.jpg',
			'IKrusher-Astro-Mod-Metallic-Blue-Pod-Custom-05.jpg',
			'IKrusher-Astro-Mod-Metallic-Blue-Pod-Custom-06.jpg',
			'IKrusher-Astro-Mod-Metallic-Blue-Pod-Custom-07.jpg',
			'IKrusher-Astro-Mod-Metallic-Blue-Pod-Custom-08.jpg',
			'IKrusher-Astro-Mod-Metallic-Blue-Pod-Custom-09.jpg',
			'IKrusher-Astro-Mod-Metallic-Blue-Pod-Custom-10.jpg'
		],
		red: [
			'IKrusher-Astro-Mod-Red-Custom-01.jpg',
			'IKrusher-Astro-Mod-Red-Custom-02.jpg',
			'IKrusher-Astro-Mod-Red-Custom-03.jpg',
			'IKrusher-Astro-Mod-Red-Custom-04.jpg',
			'IKrusher-Astro-Mod-Red-Custom-05.jpg',
			'IKrusher-Astro-Mod-Red-Custom-06.jpg',
			'IKrusher-Astro-Mod-Red-Custom-07.jpg',
			'IKrusher-Astro-Mod-Red-Custom-08.jpg',
			'IKrusher-Astro-Mod-Red-Custom-09.jpg',
			'IKrusher-Astro-Mod-Red-Custom-10.jpg'
		],
		rosegold: [
			'IKrusher-Astro-Mod-Rosegold-Pod-Custom-01.jpg',
			'IKrusher-Astro-Mod-Rosegold-Pod-Custom-02.jpg',
			'IKrusher-Astro-Mod-Rosegold-Pod-Custom-03.jpg',
			'IKrusher-Astro-Mod-Rosegold-Pod-Custom-04.jpg',
			'IKrusher-Astro-Mod-Rosegold-Pod-Custom-05.jpg',
			'IKrusher-Astro-Mod-Rosegold-Pod-Custom-06.jpg',
			'IKrusher-Astro-Mod-Rosegold-Pod-Custom-07.jpg',
			'IKrusher-Astro-Mod-Rosegold-Pod-Custom-08.jpg',
			'IKrusher-Astro-Mod-Rosegold-Pod-Custom-09.jpg',
			'IKrusher-Astro-Mod-Rosegold-Pod-Custom-10.jpg'
		]
	};
	const productColors = [ 'black', 'gunmetal', 'lilac', 'blue', 'red', 'rosegold' ];

	const [ num, setNum ] = useState(1);

	const lastAngle = () => {
		if (num > 1) {
			setNum((num) => num - 1);
		}
	};

	const nextAngle = () => {
		if (num < 10) {
			setNum((num) => num + 1);
		}
	};

	return (
		<div className="custom-vape">
			<div className={'next-btn ' + styles.angleBtns}>
				<Button onClick={lastAngle} disabled={num <= 1} className={styles.roundBtn} style={{ float: 'left' }}>
					<ArrowBackIosIcon fontSize="large" />
				</Button>
				<Button onClick={nextAngle} disabled={num >= 10} className={styles.roundBtn} style={{ float: 'right' }}>
					<ArrowForwardIosIcon fontSize="large" />
				</Button>
			</div>
			<div className="custom-group">
				<div className="custom-img">
					<div
						id="myCanvas"
						style={{
							border: '1px solid transparent',
							zIndex: '10',
							position: 'absolute',
							width: '600px',
							height: '800px'
						}}
					>
						<div id="oneAM" style={{ display: num === 1 ? 'block' : 'none' }}>
							{productColors.map((color) => {
								return (
									<CustomImages
										name={productID}
										category={productCate}
										folder={productFolder}
										images={productImages[color][0]}
										color={color}
										key={productID + color}
									/>
								);
							})}
						</div>
						<div id="twoAM" style={{ display: num === 2 ? 'block' : 'none' }}>
							{productColors.map((color) => {
								return (
									<CustomImages
										name={productID}
										category={productCate}
										folder={productFolder}
										images={productImages[color][1]}
										color={color}
										key={productID + color}
									/>
								);
							})}
						</div>
						<div id="threeAM" style={{ display: num === 3 ? 'block' : 'none' }}>
							{productColors.map((color) => {
								return (
									<CustomImages
										name={productID}
										category={productCate}
										folder={productFolder}
										images={productImages[color][2]}
										color={color}
										key={productID + color}
									/>
								);
							})}
						</div>
						<div id="fourAM" style={{ display: num === 4 ? 'block' : 'none' }}>
							{productColors.map((color) => {
								return (
									<CustomImages
										name={productID}
										category={productCate}
										folder={productFolder}
										images={productImages[color][3]}
										color={color}
										key={productID + color}
									/>
								);
							})}
						</div>
						<div id="fiveAM" style={{ display: num === 5 ? 'block' : 'none' }}>
							{productColors.map((color) => {
								return (
									<CustomImages
										name={productID}
										category={productCate}
										folder={productFolder}
										images={productImages[color][4]}
										color={color}
										key={productID + color}
									/>
								);
							})}
						</div>
						<div id="sixAM" style={{ display: num === 6 ? 'block' : 'none' }}>
							{productColors.map((color) => {
								return (
									<CustomImages
										name={productID}
										category={productCate}
										folder={productFolder}
										images={productImages[color][5]}
										color={color}
										key={productID + color}
									/>
								);
							})}
						</div>
						<div id="sevenAM" style={{ display: num === 7 ? 'block' : 'none' }}>
							{productColors.map((color) => {
								return (
									<CustomImages
										name={productID}
										category={productCate}
										folder={productFolder}
										images={productImages[color][6]}
										color={color}
										key={productID + color}
									/>
								);
							})}
						</div>
						<div id="eightAM" style={{ display: num === 8 ? 'block' : 'none' }}>
							{productColors.map((color) => {
								return (
									<CustomImages
										name={productID}
										category={productCate}
										folder={productFolder}
										images={productImages[color][7]}
										color={color}
										key={productID + color}
									/>
								);
							})}
						</div>
						<div id="nineAM" style={{ display: num === 9 ? 'block' : 'none' }}>
							{productColors.map((color) => {
								return (
									<CustomImages
										name={productID}
										category={productCate}
										folder={productFolder}
										images={productImages[color][8]}
										color={color}
										key={productID + color}
									/>
								);
							})}
						</div>
						<div id="tenAM" style={{ display: num === 10 ? 'block' : 'none' }}>
							{productColors.map((color) => {
								return (
									<CustomImages
										name={productID}
										category={productCate}
										folder={productFolder}
										images={productImages[color][9]}
										color={color}
										key={productID + color}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
