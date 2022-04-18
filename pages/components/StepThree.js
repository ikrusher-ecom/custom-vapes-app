/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 23:13:36
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-17 17:40:10
 * @FilePath: /custom-vapes-app/pages/components/StepThree.js
 */
import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from '../../styles/Component.module.css';
import ProductDescription from './ProductDescription';
import VapeWidget from './VapeWidget';
import {
	AstroMod,
	AstroModBattery,
	AstroStik,
	AstroStikBattery,
	CalibrProFlat,
	CalibrProRound,
	Eros,
	ErosProFlat,
	ErosProRound,
	Katto,
	Nord,
	S1,
	S2,
	TikPro,
	Tux,
	TuxPro,
	Uzo,
	UzoPlus,
	VfirePro,
	VfireProBattery,
	Xenair,
	Xenbar,
	XenbarPro,
	Xodos,
	XodosPro
} from './data';

const products = [
	{
		url: '/products/battery/astro-mod-battery/IKrusher-Astro-Mod-Battery-Black-Custom-01.jpg',
		title: 'Astro Mod Battery',
		colors: 'Black, Rosegold, Red, Metallic Blue, Lilac, Gunmetal'
	},
	{
		url: '/products/battery/astro-stik-battery/iKrusher-Astro-Stik-Battery-Gunmetal-Custom-01.jpg',
		title: 'Astro Stik Battery',
		colors: 'Gunmetal, Red, Green Tourmaline, White'
	},
	{
		url: '/products/battery/s1/iKrusher-S1-Battery-Silver-Custom-01.jpg',
		title: 'S1',
		colors: 'Silver'
	},
	{
		url: '/products/battery/s2/iKrusher-S2-Battery-Gunmetal-Custom-01.jpg',
		title: 'S2',
		colors: 'Gunmetal, Red, Silver, Green Tourmaline'
	},
	{
		url: '/products/battery/vfire-pro-battery/Vfire-Pro-Battery-gunmetal-01.jpg',
		title: 'Vfire Pro Battery',
		colors: 'Green Tourmaline, Gunmetal, Red, White'
	},
	{
		url: '/products/cartridge/calibr-pro-flat/iKrusher-Calibr-Flat-Tip-Black-Custom-01.jpg',
		title: 'Calibr Pro Flat',
		colors: 'Black, Metallic Blue, Lilac, Red, White, Yellow'
	},
	{
		url: '/products/cartridge/calibr-pro-round/iKrusher-Calibr-Pro-Round-Custom-Black-Tip-01.jpg',
		title: 'Calibr Pro Round',
		colors: 'Black, Lilac, Red, White, Yellow'
	},
	{
		url: '/products/cartridge/tux/iKrusher-Tux--Calibr-White-Custom-03.jpg',
		title: 'Tux',
		colors: 'Black, Red, Green Tourmaline, White'
	},
	{
		url: '/products/cartridge/tux-pro/iKrusher-Tux-Pro-Calibr-Black-Custom-01.jpg',
		title: 'Tux Pro',
		colors: 'Black, Red, Green Tourmaline, White'
	},
	{
		url: '/products/disposable/eros/iKrusher-Eros-Disposable-Custom-Vape-Black-01.jpg',
		title: 'Eros',
		colors: 'Black, Hot Pink, Red, Royal Blue, White'
	},
	{
		url: '/products/disposable/eros-pro-flat/iKrusher-Disposable-Eros-Pro-Flat-Tip-Custom-Vape-Black-01.jpg',
		title: 'Eros Pro Flat',
		colors: 'Black'
	},
	{
		url: '/products/disposable/eros-pro-round/iKrusher-Disposable-Eros-Pro-Round-Tip-Custom-Vape-Black-01.jpg',
		title: 'Eros Pro Round',
		colors: 'Black'
	},
	{
		url: '/products/disposable/nord/iKrusher-Nord-Disposable-Custom-Vape-Black-01.jpg',
		title: 'Nord',
		colors: 'Black, Green Tourmaline, White, Yellow'
	},
	{
		url: '/products/disposable/tik-pro/iKrusher-Tik-Pro-Disposable-Black-Custom-Vape-01.jpg',
		title: 'Tik Pro',
		colors: 'Black, Red, Green Tourmaline, White'
	},
	{
		url: '/products/disposable/uzo/iKrusher-Uzo-Disposable-Black-Custom-Vape-01.jpg',
		title: 'Uzo',
		colors: 'Black, Red, Green Tourmaline, White, Yellow'
	},
	{
		url: '/products/disposable/uzo-plus/iKrusher-Uzo-Pro-Disposable-Black-Custom-Vape-01.jpg',
		title: 'Uzo Plus',
		colors: 'Black, Red, Green Tourmaline, White'
	},
	{
		url: '/products/disposable/xenbar/iKrusher-Xenbar-Disposable-Gunmetal-Custom-vape-01.jpg',
		title: 'Xenbar',
		colors: 'Gun Metal, Red, Green Tourmaline, White'
	},
	{
		url: '/products/disposable/xenbar-pro/iKrusher-Xenbar-Pro-Disposable-Gunmetal-Custom-vape-01.jpg',
		title: 'Xenbar Pro',
		colors: 'Gun Metal, Red, Green Tourmaline, White'
	},
	{
		url: '/products/disposable/xodos/iKrusher-Xodos-Disposable-Black-Custom-vape-01.jpg',
		title: 'Xodos',
		colors: 'Black, Red, Green Tourmaline, White'
	},
	{
		url: '/products/disposable/xodos-pro/iKrusher-Xodos-Pro-Disposable-Black-Custom-vape-01.jpg',
		title: 'Xodos Pro',
		colors: 'Black, Red, Green Tourmaline, White'
	},
	{
		url: '/products/pod-system/astro-mod/IKrusher-Astro-Mod-Black-Custom-01.jpg',
		title: 'Astro Mod',
		colors: 'Black, Gunmetal, Lilac, Metallic Blue, Red, Rosegold'
	},
	{
		url: '/products/pod-system/astro-stik/iKrusher-Astro-Stik-Pod-System-Black-Custom-1.jpg',
		title: 'Astro Stik',
		colors: 'Black, Gunmetal, Lilac, Metallic Blue, Metallic Silver, Red, Rosegold, Yellow'
	},
	{
		url: '/products/pod-system/katto/iKrusher-Disposable-Katto-Custom-Vape-Black-01.jpg',
		title: 'Katto',
		colors: 'Black'
	},
	{
		url: '/products/pod-system/vfire-pro/iKrusher-Vfire-Pro-Pod-System-Gunmetal-Custom-01.jpg',
		title: 'Vfire Pro',
		colors: 'Gun Metal, Red, Green Tourmaline, White'
	},
	{
		url: '/products/pod-system/xenair/iKrusher-Xen-Air-Pod-System-Black-Custom-vape-01.jpg',
		title: 'Xenair',
		colors: 'Black, Metallic Silver, Red, Green Tourmaline'
	}
];

export default function StepThree(props) {
	const [ widget, setWidget ] = useState('');
	const [ isReturn, setIsReturn ] = useState(false);

	const pull_widget = (data) => {
		console.log(`pull widget: ${data}`);
		setWidget(data);
		setIsReturn(true);
	};

	if (props.prodName) {
		const findURL = products.filter((obj) => obj.title === props.prodName)[0].url;
		const findColors = products.filter((obj) => obj.title === props.prodName)[0].colors;

		return (
			<div>
				<div id="product-description">
					<ProductDescription
						productName={props.prodName}
						colors={findColors}
						url={findURL}
						clickWidget={pull_widget}
					/>
				</div>
				{props.prodName === 'Astro Mod' &&
				isReturn && (
					<VapeWidget
						productID={AstroMod.productID}
						productCate={AstroMod.productCate}
						productFolder={AstroMod.productFolder}
						productImages={AstroMod.productImages}
						productColors={AstroMod.productColors}
					/>
				)}
				{props.prodName === 'Astro Stik' &&
				isReturn && (
					<VapeWidget
						productID={AstroStik.productID}
						productCate={AstroStik.productCate}
						productFolder={AstroStik.productFolder}
						productImages={AstroStik.productImages}
						productColors={AstroStik.productColors}
					/>
				)}
				{props.prodName === 'Katto' &&
				isReturn && (
					<VapeWidget
						productID={Katto.productID}
						productCate={Katto.productCate}
						productFolder={Katto.productFolder}
						productImages={Katto.productImages}
						productColors={Katto.productColors}
					/>
				)}
				{props.prodName === 'Vfire Pro' &&
				isReturn && (
					<VapeWidget
						productID={VfirePro.productID}
						productCate={VfirePro.productCate}
						productFolder={VfirePro.productFolder}
						productImages={VfirePro.productImages}
						productColors={VfirePro.productColors}
					/>
				)}
				{props.prodName === 'Xenair' &&
				isReturn && (
					<VapeWidget
						productID={Xenair.productID}
						productCate={Xenair.productCate}
						productFolder={Xenair.productFolder}
						productImages={Xenair.productImages}
						productColors={Xenair.productColors}
					/>
				)}
				{props.prodName === 'Astro Mod Battery' &&
				isReturn && (
					<VapeWidget
						productID={AstroModBattery.productID}
						productCate={AstroModBattery.productCate}
						productFolder={AstroModBattery.productFolder}
						productImages={AstroModBattery.productImages}
						productColors={AstroModBattery.productColors}
					/>
				)}
				{props.prodName === 'Astro Stik Battery' &&
				isReturn && (
					<VapeWidget
						productID={AstroStikBattery.productID}
						productCate={AstroStikBattery.productCate}
						productFolder={AstroStikBattery.productFolder}
						productImages={AstroStikBattery.productImages}
						productColors={AstroStikBattery.productColors}
					/>
				)}
				{props.prodName === 'S1' &&
				isReturn && (
					<VapeWidget
						productID={S1.productID}
						productCate={S1.productCate}
						productFolder={S1.productFolder}
						productImages={S1.productImages}
						productColors={S1.productColors}
					/>
				)}
				{props.prodName === 'S2' &&
				isReturn && (
					<VapeWidget
						productID={S2.productID}
						productCate={S2.productCate}
						productFolder={S2.productFolder}
						productImages={S2.productImages}
						productColors={S2.productColors}
					/>
				)}
				{props.prodName === 'Vfire Pro Battery' &&
				isReturn && (
					<VapeWidget
						productID={VfireProBattery.productID}
						productCate={VfireProBattery.productCate}
						productFolder={VfireProBattery.productFolder}
						productImages={VfireProBattery.productImages}
						productColors={VfireProBattery.productColors}
					/>
				)}
				{props.prodName === 'Calibr Pro Flat' &&
				isReturn && (
					<VapeWidget
						productID={CalibrProFlat.productID}
						productCate={CalibrProFlat.productCate}
						productFolder={CalibrProFlat.productFolder}
						productImages={CalibrProFlat.productImages}
						productColors={CalibrProFlat.productColors}
					/>
				)}
				{props.prodName === 'Calibr Pro Round' &&
				isReturn && (
					<VapeWidget
						productID={CalibrProRound.productID}
						productCate={CalibrProRound.productCate}
						productFolder={CalibrProRound.productFolder}
						productImages={CalibrProRound.productImages}
						productColors={CalibrProRound.productColors}
					/>
				)}
				{props.prodName === 'Tux' &&
				isReturn && (
					<VapeWidget
						productID={Tux.productID}
						productCate={Tux.productCate}
						productFolder={Tux.productFolder}
						productImages={Tux.productImages}
						productColors={Tux.productColors}
					/>
				)}
				{props.prodName === 'Tux Pro' &&
				isReturn && (
					<VapeWidget
						productID={TuxPro.productID}
						productCate={TuxPro.productCate}
						productFolder={TuxPro.productFolder}
						productImages={TuxPro.productImages}
						productColors={TuxPro.productColors}
					/>
				)}
				{props.prodName === 'Eros' &&
				isReturn && (
					<VapeWidget
						productID={Eros.productID}
						productCate={Eros.productCate}
						productFolder={Eros.productFolder}
						productImages={Eros.productImages}
						productColors={Eros.productColors}
					/>
				)}
				{props.prodName === 'Eros Pro Flat' &&
				isReturn && (
					<VapeWidget
						productID={ErosProFlat.productID}
						productCate={ErosProFlat.productCate}
						productFolder={ErosProFlat.productFolder}
						productImages={ErosProFlat.productImages}
						productColors={ErosProFlat.productColors}
					/>
				)}
				{props.prodName === 'Eros Pro Round' &&
				isReturn && (
					<VapeWidget
						productID={ErosProRound.productID}
						productCate={ErosProRound.productCate}
						productFolder={ErosProRound.productFolder}
						productImages={ErosProRound.productImages}
						productColors={ErosProRound.productColors}
					/>
				)}
				{props.prodName === 'Nord' &&
				isReturn && (
					<VapeWidget
						productID={Nord.productID}
						productCate={Nord.productCate}
						productFolder={Nord.productFolder}
						productImages={Nord.productImages}
						productColors={Nord.productColors}
					/>
				)}
				{props.prodName === 'Tik Pro' &&
				isReturn && (
					<VapeWidget
						productID={TikPro.productID}
						productCate={TikPro.productCate}
						productFolder={TikPro.productFolder}
						productImages={TikPro.productImages}
						productColors={TikPro.productColors}
					/>
				)}
				{props.prodName === 'Uzo' &&
				isReturn && (
					<VapeWidget
						productID={Uzo.productID}
						productCate={Uzo.productCate}
						productFolder={Uzo.productFolder}
						productImages={Uzo.productImages}
						productColors={Uzo.productColors}
					/>
				)}
				{props.prodName === 'Uzo Plus' &&
				isReturn && (
					<VapeWidget
						productID={UzoPlus.productID}
						productCate={UzoPlus.productCate}
						productFolder={UzoPlus.productFolder}
						productImages={UzoPlus.productImages}
						productColors={UzoPlus.productColors}
					/>
				)}
				{props.prodName === 'Xenbar' &&
				isReturn && (
					<VapeWidget
						productID={Xenbar.productID}
						productCate={Xenbar.productCate}
						productFolder={Xenbar.productFolder}
						productImages={Xenbar.productImages}
						productColors={Xenbar.productColors}
					/>
				)}
				{props.prodName === 'Xenbar Pro' &&
				isReturn && (
					<VapeWidget
						productID={XenbarPro.productID}
						productCate={XenbarPro.productCate}
						productFolder={XenbarPro.productFolder}
						productImages={XenbarPro.productImages}
						productColors={XenbarPro.productColors}
					/>
				)}
				{props.prodName === 'Xodos' &&
				isReturn && (
					<VapeWidget
						productID={Xodos.productID}
						productCate={Xodos.productCate}
						productFolder={Xodos.productFolder}
						productImages={Xodos.productImages}
						productColors={Xodos.productColors}
					/>
				)}
				{props.prodName === 'Xodos Pro' &&
				isReturn && (
					<VapeWidget
						productID={XodosPro.productID}
						productCate={XodosPro.productCate}
						productFolder={XodosPro.productFolder}
						productImages={XodosPro.productImages}
						productColors={XodosPro.productColors}
					/>
				)}
			</div>
		);
	}

	// if (isReturn) {
	// 	return (
	// 		<div>
	// 			<div id="product-description">
	// 				<ProductDescription
	// 					productName={props.prodName}
	// 					colors={findColors}
	// 					url={findURL}
	// 					clickWidget={pull_widget}
	// 				/>
	// 			</div>
	// 			<VapeWidget
	// 				productID={productID}
	// 				productCate={productCate}
	// 				productFolder={productFolder}
	// 				productImages={productImages}
	// 				productColors={productColors}
	// 			/>
	// 		</div>
	// 	);
	// }
}
