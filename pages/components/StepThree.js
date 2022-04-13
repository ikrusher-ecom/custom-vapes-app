/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 23:13:36
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-13 01:09:47
 * @FilePath: /custom-vapes-app/pages/components/StepThree.js
 */
import * as React from 'react';
import { useState } from 'react';
import ProductDescription from "./ProductDescription";

const products = [
	{
		url: '/products/battery/astro-mod-battery/IKrusher-Astro-Mod-Battery-Black-Custom-01.jpg',
		title: 'Astro Mod Battery',
        colors: 'Black, Rose Gold, Red, Metallic Blue, Lilac, Gunmetal'
	},
	{
		url: '/products/battery/astro-stik-battery/iKrusher-Astro-Stik-Battery-Gunmetal-Custom-01.jpg',
		title: 'Astro Stik Battery'
	},
	{
		url: '/products/battery/s1/iKrusher-S1-Battery-Silver-Custom-01.jpg',
		title: 'S1'
	},
	{
		url: '/products/battery/s2/iKrusher-S2-Battery-Gunmetal-Custom-01.jpg',
		title: 'S2'
	},
	{
		url: '/products/battery/vfire-pro-battery/Vfire-Pro-Battery-green-01.jpg',
		title: 'Vfire Pro Battery'
	},
    {
        url: '/products/cartridge/calibr-pro-flat/iKrusher-Calibr-Flat-Tip-Black-Custom-01.jpg',
        title: 'Calibr Pro Flat'
    },
    {
        url: '/products/cartridge/calibr-pro-round/iKrusher-Calibr-Pro-Round-Custom-Black-Tip-01.jpg',
        title: 'Calibr Pro Round'
    },
    {
        url: '/products/cartridge/tux/iKrusher-Tux--Calibr-White-Custom-03.jpg',
        title: 'Tux'
    },
    {
        url: '/products/cartridge/tux-pro/iKrusher-Tux-Pro-Calibr-Black-Custom-01.jpg',
        title: 'Tux Pro'
    },
    {
        url: '/products/disposable/eros/iKrusher-Eros-Disposable-Custom-Vape-Black-01.jpg',
        title: 'Eros'
    },
    {
        url: '/products/disposable/eros-pro-flat/iKrusher-Disposable-Eros-Pro-Flat-Tip-Custom-Vape-Black-01.jpg',
        title: 'Eros Pro Flat'
    },
    {
        url: '/products/disposable/eros-pro-round/iKrusher-Disposable-Eros-Pro-Round-Tip-Custom-Vape-Black-01.jpg',
        title: 'Eros Pro Round'
    },
    {
        url: '/products/disposable/nord/iKrusher-Nord-Disposable-Custom-Vape-Black-01.jpg',
        title: 'Nord'
    },
    {
        url: '/products/disposable/tik-pro/iKrusher-Tik-Pro-Disposable-Black-Custom-Vape-01.jpg',
        title: 'Tik Pro'
    },
    {
        url: '/products/disposable/uzo/iKrusher-Uzo-Disposable-Black-Custom-Vape-01.jpg',
        title: 'Uzo'
    },
    {
        url: '/products/disposable/uzo-plus/iKrusher-Uzo-Pro-Disposable-Black-Custom-Vape-01.jpg',
        title: 'Uzo Plus'
    },
    {
        url: '/products/disposable/xenbar/iKrusher-Xenbar-Disposable-Gunmetal-Custom-vape-01.jpg',
        title: 'Xenbar'
    },
    {
        url: '/products/disposable/xenbar-pro/iKrusher-Xenbar-Pro-Disposable-Gunmetal-Custom-vape-01.jpg',
        title: 'Xenbar Pro'
    },
    {
        url: '/products/disposable/xodos/iKrusher-Xodos-Disposable-Black-Custom-vape-01.jpg',
        title: 'Xodos'
    },
    {
        url: '/products/disposable/xodos-pro/iKrusher-Xodos-Pro-Disposable-Black-Custom-vape-01.jpg',
        title: 'Xodos Pro'
    },
    {
        url: '/products/pod-system/astro-mod/IKrusher-Astro-Mod-Black-Custom-01.jpg',
        title: 'Astro Mod'
    },
    {
        url: '/products/pod-system/astro-stik/iKrusher-Astro-Stik-Pod-System-Black-Custom-1.jpg',
        title: 'Astro Stik'
    },
    {
        url: '/products/pod-system/katto/iKrusher-Disposable-Katto-Custom-Vape-Black-01.jpg',
        title: 'Katto'
    },
    {
        url: '/products/pod-system/vfire-pro/iKrusher-Vfire-Pro-Pod-System-Gunmetal-Custom-01.jpg',
        title: 'Vfire Pro'
    },
    {
        url: '/products/pod-system/xenair/iKrusher-Xen-Air-Pod-System-Black-Custom-vape-01.jpg',
        title: 'Xenair'
    }
];

export default function StepThree(props) {
    const [product, setProduct] = useState('');
    if(props.prodName) {
        setProduct(props.prodName);
        console.log(products.find((obj) => {obj.title === product}).colors)
        return (
            <div id="product-description">
                <ProductDescription productName={product} colors={''} />
            </div>
        )
    }
}