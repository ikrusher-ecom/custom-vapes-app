/*
 * @Author: Jinqi Li
 * @Date: 2022-04-13 17:37:17
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-15 02:05:00
 * @FilePath: /custom-vapes-app/pages/components/widgets/AstroModWidget.js
 */
import * as React from 'react';
import { useState, useEffect, createRef, forwardRef } from 'react';
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
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Draggable, { DraggableCore } from 'react-draggable';
import { useScreenshot } from 'use-react-screenshot';

const makeid = (length) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

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
    const [showOne, setShowOne] = useState(true);
    const [showThree, setShowThree] = useState(false);
    const [showFive, setShowFive] = useState(false);
    const [showSeven, setShowSeven] = useState(false);
    const [angleClass, setAngleClass] = useState('');

    const lastAngle = () => {
        if (num === 2) {
            setShowOne(true);
            setShowThree(false);
            setShowFive(false);
            setShowSeven(false);
            setAngleClass('');
        } else if (num === 3) {
            setShowOne(true);
            setShowThree(false);
            setShowFive(false);
            setShowSeven(false);
            setAngleClass('angle45');
        } else if (num === 4) {
            setShowOne(false);
            setShowThree(true);
            setShowFive(false);
            setShowSeven(false);
        } else if (num === 5) {
            setShowOne(false);
            setShowThree(false);
            setShowFive(true);
            setShowSeven(false);
        } else if (num === 6) {
            setShowOne(false);
            setShowThree(false);
            setShowFive(true);
            setShowSeven(false);
        } else if (num === 7) {
            setShowOne(false);
            setShowThree(false);
            setShowFive(true);
            setShowSeven(false);
        } else if (num === 8) {
            setShowOne(false);
            setShowThree(false);
            setShowFive(false);
            setShowSeven(true);
        } else if (num === 9) {
            setShowOne(true);
            setShowThree(false);
            setShowFive(false);
            setShowSeven(false);
        } else {
            setShowOne(false);
            setShowThree(false);
            setShowFive(false);
            setShowSeven(false);
        }

        setNum(num - 1);
    };

    const nextAngle = () => {
        if (num === 0) {
            setShowOne(true);
            setShowThree(false);
            setShowFive(false);
            setShowSeven(false);
            setAngleClass('');
        } else if (num === 1) {
            setShowOne(true);
            setShowThree(false);
            setShowFive(false);
            setShowSeven(false);
            setAngleClass('angle45');
        } else if (num === 2) {
            setShowOne(false);
            setShowThree(true);
            setShowFive(false);
            setShowSeven(false);
        } else if (num === 3) {
            setShowOne(false);
            setShowThree(false);
            setShowFive(true);
            setShowSeven(false);
        } else if (num === 4) {
            setShowOne(false);
            setShowThree(false);
            setShowFive(true);
            setShowSeven(false);
        } else if (num === 5) {
            setShowOne(false);
            setShowThree(false);
            setShowFive(true);
            setShowSeven(false);
        } else if (num === 6) {
            setShowOne(false);
            setShowThree(false);
            setShowFive(false);
            setShowSeven(true);
        } else if (num === 7) {
            setShowOne(true);
            setShowThree(false);
            setShowFive(false);
            setShowSeven(false);
        } else {
            setShowOne(false);
            setShowThree(false);
            setShowFive(false);
            setShowSeven(false);
        }

        setNum(num + 1);
    };

    const onPreview = () => { };

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
    const [imageSaved, setImageSaved] = useState([]);

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setImage(i);
            setCreateObjectURL(URL.createObjectURL(i));
        }
        console.log(image)
    };

    const uploadToServer = async (event) => {
        console.log(image)
        const body = new FormData();
        body.append('file', image).then(() => console.log(body))
        const response = await fetch('/api/image', {
            method: 'POST',
            body
        })
            .then((res) => res.json())
            .then((res) => {
                return setProdURL(res.path);
            });
    };

    const handleChangeLogo = (event) => {
        if (num === 1) {
            setShowOne(true);
        } else {
            setShowOne(false);
        }
        uploadToClient(event).then(() => uploadToServer(event))
    };

    const [textOne, setTextOne] = useState('');
    const [textThree, setTextThree] = useState('');
    const [textFive, setTextFive] = useState('');
    const [textSeven, setTextSeven] = useState('');

    const onTextInputOne = (event) => {
        setTextOne(event.target.value);
    };

    const onTextInputThree = (event) => {
        setTextThree(event.target.value);
    };

    const onTextInputFive = (event) => {
        setTextFive(event.target.value);
    };

    const onTextInputSeven = (event) => {
        setTextSeven(event.target.value);
    };

    const [emailInput, setEmailInput] = useState("");
    const [manual, setManual] = useState("");
    const [packaging, setPackaging] = useState("");
    const [messageField, setMessageField] = useState("");

    const onEmailInput = (event) => {
        setEmailInput(event.target.value);
    }
    const onCustomManual = (event) => {
        setManual(event.target.value);
    }
    const onCustomPackaging = (event) => {
        setPackaging(event.target.value);
    }
    const onMessageField = (event) => {
        setMessageField(event.target.value);
    }

    const [formInfo, setFormInfo] = useState("");

    const ref = createRef(null);
    const [screenshot, takeScreenshot] = useScreenshot();
    const [designs, setDesigns] = useState([]);
    const [designArray, setDesignArray] = useState([]);

    const downloadRef = createRef(null);

    const downloadScreenshot = () => {
        takeScreenshot(ref.current)
            .then(() => {
                if (screenshot)
                    downloadRef.current.click()
            });
    }

    const handleUploadDesign = (event) => {
        if (event.target.files && event.target.files[0]) {
            setDesigns([...designs, event.target.files])
            if (designs[0]) {
                for (let i = 0; i < designs[0].length; i++) {
                    setDesignArray([...designArray, URL.createObjectURL(designs[0][i])])
                }
            }
        }
    }

    const onSubmitCustom = async (event) => {
        if (designs && designs[0]) {
            console.log(designs);
            uploadScreenToServer(designs);
        }
        if (imageSaved && imageSaved[0] && prodURL) {
            console.log('test')
            setImageSaved([...imageSaved, prodURL])
            console.log(`images: ${imageSaved}, prod: ${prodURL}`)
            setFormInfo(`
                                Color: ${prodColor}\n\n
                                Custom Text: 1. ${textOne}, 2. ${textThree}, 3. ${textFive}, 4. ${textSeven}\n\n
                                Custom User Manual: ${manual}\n\n
                                Custom Packaging or Shipping Carton: ${packaging}\n\n
                                Email: ${emailInput}\n\n
                                Message: ${messageField}\n\n
                                Logo and Custom Designs: ${imageSaved.toString()}
                            `)
            console.log(formInfo);
        }
    }

    const uploadScreenToServer = async (designs) => {
        console.log("uploading", designs)
        const designBody = new FormData();
        designBody.append('file', designs).then(() => console.log(designBody))
        if (designBody) {
            const response = await fetch('/api/image', {
                method: 'POST',
                designBody
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(`res.path: ${res.path}`);
                    setImageSaved([...imageSaved, res.path]);
                });
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
                <Button onClick={onPreview} className={styles.previewBtn}>
                    Preview in 360 Degrees
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
                        ref={ref}
                    >
                        <div>
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
                        <div className="text-logo">
                            <div className={"display-one-div " + angleClass}>
                                {textOne &&
                                    showOne && (
                                        <Draggable
                                            axis="both"
                                            bounds={{ left: 0, top: 0, right: 500, bottom: 700 }}
                                            defaultPosition={{ x: 200, y: 300 }}
                                        >
                                            <div id="display-text-one">{textOne}</div>
                                        </Draggable>
                                    )}
                                {createObjectURL &&
                                    showOne && (
                                        <Draggable
                                            axis="both"
                                            bounds={{ left: 0, top: 0, right: 500, bottom: 700 }}
                                            defaultPosition={{ x: 200, y: 300 }}
                                        >
                                            <div className="display-logo-div">
                                                <Image
                                                    alt={createObjectURL}
                                                    id="display-logo-one"
                                                    src={createObjectURL}
                                                    layout="fill"
                                                    objectFit="contain"
                                                />
                                            </div>
                                        </Draggable>
                                    )}
                            </div>
                            {textThree && showThree && (
                                <div className="display-three-div">
                                    <Draggable
                                        axis="both"
                                        bounds={{ left: 0, top: 0, right: 500, bottom: 700 }}
                                        defaultPosition={{ x: 200, y: 300 }}
                                    >
                                        <div id="display-text-three">{textThree}</div>
                                    </Draggable>
                                </div>
                            )}
                            {textFive && showFive && (
                                <div className="display-five-div">
                                    <Draggable
                                        axis="both"
                                        bounds={{ left: 0, top: 0, right: 500, bottom: 700 }}
                                        defaultPosition={{ x: 200, y: 300 }}
                                    >
                                        <div id="display-text-five">{textFive}</div>
                                    </Draggable>
                                </div>
                            )}
                            {textSeven && showSeven && (
                                <div className="display-seven-div">
                                    <Draggable
                                        axis="both"
                                        bounds={{ left: 0, top: 0, right: 500, bottom: 700 }}
                                        defaultPosition={{ x: 200, y: 300 }}
                                    >
                                        <div id="display-text-seven">{textSeven}</div>
                                    </Draggable>
                                </div>
                            )}
                        </div>
                    </div>
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
                        {showOne && (
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
                                        <Input
                                            accept="image/png"
                                            id="contained-button-file"
                                            multiple={false}
                                            type="file"
                                            style={{ display: 'none' }}
                                            onChange={handleChangeLogo}
                                        />
                                        <Button variant="contained" component="span" className={styles.funcBtn}>
                                            Upload
                                        </Button>
                                    </label>
                                    <p style={{ fontSize: '12px', maxWidth: '280px' }}>
                                        Click the button above to select a logo file from your computer or other file
                                        storage. We accept PNG FILE and FILE SIZE not more than 1 MB only.
                                    </p>
                                </td>
                            </tr>
                        )}
                        <tr style={{ height: '50px' }}>
                            <th>Customize Text:</th>
                            <td>
                                {showOne && (
                                    <div className="custom-text-div" id="input-text-one">
                                        <Input
                                            type="text"
                                            id="custom-text-one"
                                            maxLength="15"
                                            placeholder="Less than 15 characters"
                                            onChange={onTextInputOne}
                                        />
                                    </div>
                                )}
                                {showThree && (
                                    <div className="custom-text-div" id="input-text-three">
                                        <Input
                                            type="text"
                                            id="custom-text-three"
                                            maxLength="15"
                                            placeholder="Less than 15 characters"
                                            onChange={onTextInputThree}
                                        />
                                    </div>
                                )}
                                {showFive && (
                                    <div className="custom-text-div" id="input-text-five">
                                        <Input
                                            type="text"
                                            id="custom-text-five"
                                            maxLength="15"
                                            placeholder="Less than 15 characters"
                                            onChange={onTextInputFive}
                                        />
                                    </div>
                                )}
                                {showSeven && (
                                    <div className="custom-text-div" id="input-text-seven">
                                        <Input
                                            type="text"
                                            id="custom-text-seven"
                                            maxLength="15"
                                            placeholder="Less than 15 characters"
                                            onChange={onTextInputSeven}
                                        />
                                    </div>
                                )}
                                {/* <Input type="color" id="picker" name="picker" value="#808080" onChange={e => console.log(e.target.value)} /> */}
                            </td>
                        </tr>
                        <tr>
                            <th>Need Custom User Manual? </th>
                            <td style={{ paddingLeft: '1em', verticalAlign: 'middle' }}>
                                {/* <input type="radio" id="manual-yes" name="manual" value="manual-yes" />
                                <label htmlFor="manual-yes">Yes</label>
                                <input type="radio" id="manual-no" name="manual" value="manual-no" />
                                <label htmlFor="manual-no">No</label> */}
                                <FormControl>
                                    {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={onCustomManual}
                                        className='custom-radio'
                                    >
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </td>
                        </tr>
                        <tr>
                            <th>Need Custom Packaging or Shipping Carton? </th>
                            <td style={{ paddingLeft: '1em', verticalAlign: 'middle' }}>
                                {/* <input type="radio" id="package-yes" name="package" value="package-yes" />
                                <label htmlFor="package-yes">Yes</label>
                                <input type="radio" id="package-no" name="package" value="package-no" />
                                <label htmlFor="package-no">No</label> */}
                                <FormControl>
                                    {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={onCustomPackaging}
                                        className='custom-radio'
                                    >
                                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                                        <FormControlLabel value="no" control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: '1em' }}>Your Email Address:</th>
                            <td style={{ verticalAlign: 'bottom', paddingTop: '1em' }}>
                                <Input type="email" id="customerEmail" onChange={onEmailInput} />
                            </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: '1em' }}>Message:</th>
                            <td style={{ verticalAlign: 'bottom', paddingTop: '1em' }}>
                                {/* <textarea rows="3" cols="30" /> */}
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Your message"
                                    multiline
                                    rows={2}
                                    placeholder="Your message"
                                    sx={{ width: '280px' }}
                                    className="messageInput"
                                    onChange={onMessageField}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th style={{ paddingTop: '1em' }}>Confirm Your Design:</th>
                            <td style={{ verticalAlign: 'bottom', paddingTop: '1em' }}>
                                <Button onClick={downloadScreenshot}>Download My Designs</Button>
                                <label htmlFor="screen-button-file">
                                    <Input
                                        accept="image/png"
                                        id="screen-button-file"
                                        multiple
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={handleUploadDesign}
                                    />
                                    <Button variant="screen" component="span" className={styles.funcBtn}>
                                        Confirm and Upload My Designs
                                    </Button>
                                    <div>
                                        {designArray && designArray.map(url => (
                                            <Image src={url} alt="test" width='100' height='100' key={url} />
                                        ))}
                                    </div>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* {screenshot
                    ? (
                        <Input type='file' value={screenshot}>
                        </Input>
                    ) : null} */}
                {screenshot && (
                    <a href={screenshot} download ref={downloadRef} style={{ display: 'none' }}>
                        <Image src={screenshot} alt='screenshot' width='600' height='800' style={{ display: 'none' }} />
                    </a>
                )}
                <Button onClick={onSubmitCustom}>Submit</Button>
            </div>
        </div>
    );
}
