/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 23:13:36
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-13 01:09:47
 * @FilePath: /custom-vapes-app/pages/components/StepThree.js
 */
import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from '../../styles/Component.module.css';
import ProductDescription from "./ProductDescription";

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
    const [widget, setWidget] = useState('');
    const [widgetPath, setWidgetPath] = useState('');

    const pull_widget = (data) => {
        console.log(`pull widget: ${data}`);
        setWidget(data);

        setWidgetPath(require(`./widgets/${data}.js`).default);
    }
    if (props.prodName) {
        const findURL = products.filter(obj => obj.title === props.prodName)[0].url;
        const findColors = products.filter(obj => obj.title === props.prodName)[0].colors;

        return (
            <div>
                <div id="product-description">
                    <ProductDescription productName={props.prodName} colors={findColors} url={findURL} clickWidget={pull_widget} />
                </div>
                {widgetPath}
            </div>
        )
    }
}