/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 23:34:38
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-13 01:01:16
 * @FilePath: /custom-vapes-app/pages/components/ProductDescription.js
 */
import * as React from 'react';
import Image from 'next/image';

export default function ProductDescription(props) {
    const showCustom = () => {
        console.log(props.productName)
    }
    return (
        <div id="des-astro-mod" className="des-all">
                {/* <span><Image src="/media/customVapes/pod-system/astro-mod.jpg" alt="astro mod" width="200" /></span> */}
                <table>
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
                        <td style={{textAlign: 'center'}}><button type="button" className="custom-btn"
                                value="widget-astro-mod" onClick={showCustom}>Start Customization</button>
                        </td>
                    </tr>
                </table>
            </div>
    )
}