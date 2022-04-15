/*
 * @Author: Jinqi Li
 * @Date: 2022-04-13 17:37:17
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-14 02:18:09
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
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';
import Draggable, { DraggableCore } from 'react-draggable';

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
        metablue: [
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
    const productColors = ['black', 'gunmetal', 'lilac', 'metablue', 'red', 'rosegold'];

    const [num, setNum] = useState(1);
    const [showOne, setShowOne] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFive, setShowFive] = useState(false);
    const [showSeven, setShowSeven] = useState(false);

    const lastAngle = () => {
        if (num === 2) {
            setShowOne(true);
        } else {
            setShowOne(false);
        }
        setNum(num - 1);
    };

    const nextAngle = () => {
        if (num === 0) {
            setShowOne(true);
        } else {
            setShowOne(false);
        }
        setNum(num + 1);
    };

    const formStyles = {
        fontSize: '16px',
        padding: '20px 10px 10px'
    };

    const [prodColor, setProdColor] = useState('black');

    const handleChangeColor = (event) => {
        setProdColor(event.target.value);
    };

    const [image, setImage] = useState(null);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [prodURL, setProdURL] = useState(null);

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];

            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
    }

    const uploadToServer = async () => {
        const body = new FormData();
        body.append("file", image);
        const response = await fetch("/api/image", {
            method: "POST",
            body
        })
            .then(res => res.json())
            .then(res => {
                console.log(res.path);
                setProdURL(res.path);
            })
    }

    const handleChangeLogo = (event) => {
        if (num === 1) {
            setShowOne(true);
        } else {
            setShowOne(false);
        }
        uploadToClient(event);
        // .then(() => uploadToServer())
    }

    const [textOne, setTextOne] = useState('');
    const [textThree, setTextThree] = useState('');
    const [textFive, setTextFive] = useState('');
    const [textSeven, setTextSeven] = useState('');

    const onTextInputOne = (event) => {
        setTextOne(event.target.value);
    }

    const onTextInputThree = (event) => {
        setTextThree(event.target.value);
    }

    const onTextInputFive = (event) => {
        setTextFive(event.target.value);
    }

    const onTextInputSeven = (event) => {
        setTextSeven(event.target.value);
    }

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
                        <div id="one" style={{ display: num === 1 ? 'block' : 'none' }}>
                            <CustomImages
                                name={productID}
                                category={productCate}
                                folder={productFolder}
                                images={productImages[productColors.filter((color) => color === prodColor)][0]}
                            />
                        </div>
                        <div id="two" style={{ display: num === 2 ? 'block' : 'none' }}>
                            <CustomImages
                                name={productID}
                                category={productCate}
                                folder={productFolder}
                                images={productImages[productColors.filter((color) => color === prodColor)][1]}
                            />
                        </div>
                        <div id="three" style={{ display: num === 3 ? 'block' : 'none' }}>
                            <CustomImages
                                name={productID}
                                category={productCate}
                                folder={productFolder}
                                images={productImages[productColors.filter((color) => color === prodColor)][2]}
                            />
                        </div>
                        <div id="four" style={{ display: num === 4 ? 'block' : 'none' }}>
                            <CustomImages
                                name={productID}
                                category={productCate}
                                folder={productFolder}
                                images={productImages[productColors.filter((color) => color === prodColor)][3]}
                            />
                        </div>
                        <div id="five" style={{ display: num === 5 ? 'block' : 'none' }}>
                            <CustomImages
                                name={productID}
                                category={productCate}
                                folder={productFolder}
                                images={productImages[productColors.filter((color) => color === prodColor)][4]}
                            />
                        </div>
                        <div id="six" style={{ display: num === 6 ? 'block' : 'none' }}>
                            <CustomImages
                                name={productID}
                                category={productCate}
                                folder={productFolder}
                                images={productImages[productColors.filter((color) => color === prodColor)][5]}
                            />
                        </div>
                        <div id="seven" style={{ display: num === 7 ? 'block' : 'none' }}>
                            <CustomImages
                                name={productID}
                                category={productCate}
                                folder={productFolder}
                                images={productImages[productColors.filter((color) => color === prodColor)][6]}
                            />
                        </div>
                        <div id="eight" style={{ display: num === 8 ? 'block' : 'none' }}>
                            <CustomImages
                                name={productID}
                                category={productCate}
                                folder={productFolder}
                                images={productImages[productColors.filter((color) => color === prodColor)][7]}
                            />
                        </div>
                        <div id="nine" style={{ display: num === 9 ? 'block' : 'none' }}>
                            {/* {productColors.map((color) => {
								return ( */}
                            <CustomImages
                                name={productID}
                                category={productCate}
                                folder={productFolder}
                                images={productImages[productColors.filter((color) => color === prodColor)][8]}
                            />
                        </div>
                        <div id="ten" style={{ display: num === 10 ? 'block' : 'none' }}>
                            <CustomImages
                                name={productID}
                                category={productCate}
                                folder={productFolder}
                                images={productImages[productColors.filter((color) => color === prodColor)][9]}
                            />
                        </div>
                    </div>
                </div>
                <div className="text-logo">
                    <div className="display-one-div">
                        {textOne && showOne && (
                            <div id="display-text-one">{textOne}</div>
                        )}
                        {createObjectURL && showOne && (
                            <Draggable
                                axis='both'
                                bounds={{ left: 0, top: 0, right: 500, bottom: 700 }}
                                defaultPosition={{ x: 200, y: 300 }}
                                onStart={console.log("start drag")}
                            >
                                <div className="display-logo-div">
                                    <Image id="display-logo-one" src={prodURL ? prodURL : createObjectURL} layout='fill' objectFit='contain' />
                                </div>
                            </Draggable>
                        )}
                    </div>
                    {textThree && (
                        <div className="display-three-div">
                            <div id="display-text-three">{textThree}</div>
                        </div>
                    )}
                    {textFive && (
                        <div className="display-five-div">
                            <div id="display-text-five">{textFive}</div>
                        </div>
                    )}
                    {textSeven && (
                        <div className="display-seven-div">
                            <div id="display-text-seven">{textSeven}</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="input-group">
                <table>
                    <tbody>
                        <tr>
                            <th>Available Colors:</th>
                            <td>
                                <Box sx={{ width: 300 }}>
                                    <FormControl fullWidth style={{ fontSize: '16px' }}>
                                        <InputLabel id="color-select-label" style={{ fontSize: '16px' }}>
                                            Color
                                        </InputLabel>
                                        <Select
                                            labelId="color-select-label"
                                            id="color-select"
                                            value={prodColor}
                                            label="Color"
                                            onChange={handleChangeColor}
                                            style={{ fontSize: '16px' }}
                                            defaultValue={'black'}
                                        >
                                            <MenuItem style={formStyles} value={'black'} selected>
                                                Black
                                            </MenuItem>
                                            <MenuItem style={formStyles} value={'rosegold'}>
                                                Rose Gold
                                            </MenuItem>
                                            <MenuItem style={formStyles} value={'red'}>
                                                Red
                                            </MenuItem>
                                            <MenuItem style={formStyles} value={'metablue'}>
                                                Metallic Blue
                                            </MenuItem>
                                            <MenuItem style={formStyles} value={'lilac'}>
                                                Lilac
                                            </MenuItem>
                                            <MenuItem style={formStyles} value={'gunmetal'}>
                                                Gunmetal
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </td>
                        </tr>
                        <tr className="custom-logo-div" id="upload-logo-one" style={{ height: '150px' }}>
                            <th>Upload Logo:</th>
                            <td>
                                {/* <p>
									<input
										type="file"
										accept="image/png"
										name="image"
										id="file"
										onChange="loadFile(event)"
										style="display: none;"
									/>
								</p>
								<p>
									<label className="logo-button" htmlFor="file" style="cursor: pointer;">
										Upload Logo
									</label>
								</p> */}
                                <label htmlFor="contained-button-file">
                                    <Input accept="image/png" id="contained-button-file" multiple type="file" style={{ display: 'none' }} onChange={handleChangeLogo} />
                                    <Button variant="contained" component="span" className={styles.funcBtn}>
                                        Upload
                                    </Button>
                                </label>
                                <p style={{ fontSize: '12px' }}>
                                    Click the button above to select a logo file from your computer or other file
                                    storage. We accept PNG FILE and FILE SIZE not more than 1 MB only.
                                </p>
                            </td>
                        </tr>
                        <tr style={{ height: '50px' }}>
                            <th>Customize Text:</th>
                            <td>
                                <div className="custom-text-div" id="input-text-one">
                                    <Input
                                        type="text"
                                        id="custom-text-one"
                                        maxLength="15"
                                        placeholder="Less than 15 characters"
                                        onChange={onTextInputOne}
                                    />
                                </div>
                                <div className="custom-text-div" id="input-text-three">
                                    <Input
                                        type="text"
                                        id="custom-text-three"
                                        maxLength="15"
                                        placeholder="Less than 15 characters"
                                        onChange={onTextInputThree}
                                    />
                                </div>
                                <div className="custom-text-div" id="input-text-five">
                                    <Input
                                        type="text"
                                        id="custom-text-five"
                                        maxLength="15"
                                        placeholder="Less than 15 characters"
                                        onChange={onTextInputFive}
                                    />
                                </div>
                                <div className="custom-text-div" id="input-text-seven">
                                    <Input
                                        type="text"
                                        id="custom-text-seven"
                                        maxLength="15"
                                        placeholder="Less than 15 characters"
                                        onChange={onTextInputSeven}
                                    />
                                </div>
                                <Input type="color" id="picker" name="picker" value="#808080" onChange={e => console.log(e.target.value)} />
                            </td>
                        </tr>
                        {/* <tr>
							<th>Need Custom User Manual? </th>
							<td style="padding-left: 1em; vertical-align: middle;">
								<input type="radio" id="manual-yes" name="manual" value="manual-yes" />
								<label htmlFor="manual-yes">Yes</label>
								<input type="radio" id="manual-no" name="manual" value="manual-no" />
								<label htmlFor="manual-no">No</label>
							</td>
						</tr>
						<tr>
							<th>Need Custom Packaging or Shipping Carton? </th>
							<td style="padding-left: 1em; vertical-align: middle;">
								<input type="radio" id="package-yes" name="package" value="package-yes" />
								<label htmlFor="package-yes">Yes</label>
								<input type="radio" id="package-no" name="package" value="package-no" />
								<label htmlFor="package-no">No</label>
							</td>
						</tr>
						<tr>
							<th style="padding-top: 1em;">Your Email Address:</th>
							<td style="vertical-align: bottom; padding-top: 1em;">
								<input type="email" id="customerEmail" />
							</td>
						</tr>
						<tr>
							<th style="padding-top: 1em;">Message:</th>
							<td style="vertical-align: bottom; padding-top: 1em;">
								<textarea rows="3" cols="30" />
							</td>
						</tr> */}
                    </tbody>
                </table>
                {/* <a
					className="button-style"
					id="input-submit"
					type="button"
					href="javascript:void(0);"
					onClick="submitCustom()"
				>
					Confirm
				</a> */}
            </div>
        </div>
    );
}
