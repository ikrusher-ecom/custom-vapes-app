/*
 * @Author: Jinqi Li
 * @Date: 2022-04-13 17:37:17
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-16 06:03:06
 * @FilePath: /custom-vapes-app/pages/components/widgets/AstroModWidget.js
 */
import * as React from 'react';
import { useState, useEffect, createRef, forwardRef, useTimeout } from 'react';
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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Draggable, { DraggableCore } from 'react-draggable';
import { useScreenshot, createFileName } from 'use-react-screenshot';

const makeid = (length) => {
	let result = '';
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

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
	const productColors = [ 'black', 'gunmetal', 'lilac', 'metablue', 'red', 'rosegold' ];

	const [ num, setNum ] = useState(1);
	const [ showOne, setShowOne ] = useState(true);
	const [ showThree, setShowThree ] = useState(false);
	const [ showFive, setShowFive ] = useState(false);
	const [ showSeven, setShowSeven ] = useState(false);
	const [ angleClass, setAngleClass ] = useState('');
	const [ preview, setPreview ] = useState(false);

	const angleOne = () => {
		setShowOne(true);
		setShowThree(false);
		setShowFive(false);
		setShowSeven(false);
		setAngleClass('');
	};

	const angleTwo = () => {
		setShowOne(true);
		setShowThree(false);
		setShowFive(false);
		setShowSeven(false);
		setAngleClass('angle45');
	};

	const angleThree = () => {
		setShowOne(false);
		setShowThree(true);
		setShowFive(false);
		setShowSeven(false);
		setAngleClass('');
	};

	const angleFour = () => {
		setShowOne(false);
		setShowThree(false);
		setShowFive(true);
		setShowSeven(false);
		setAngleClass('angleM45');
	};

	const angleFive = () => {
		setShowOne(false);
		setShowThree(false);
		setShowFive(true);
		setShowSeven(false);
		setAngleClass('');
	};

	const angleSix = () => {
		setShowOne(false);
		setShowThree(false);
		setShowFive(true);
		setShowSeven(false);
		setAngleClass('angle45');
	};

	const angleSeven = () => {
		setShowOne(false);
		setShowThree(false);
		setShowFive(false);
		setShowSeven(true);
		setAngleClass('');
	};

	const angleEight = () => {
		setShowOne(true);
		setShowThree(false);
		setShowFive(false);
		setShowSeven(false);
		setAngleClass('angleM45');
	};

	const angleNineTen = () => {
		setShowOne(false);
		setShowThree(false);
		setShowFive(false);
		setShowSeven(false);
		setAngleClass('');
	};

	const lastAngle = () => {
		if (num === 2) {
			angleOne();
		} else if (num === 3) {
			angleTwo();
		} else if (num === 4) {
			angleThree();
		} else if (num === 5) {
			angleFour();
		} else if (num === 6) {
			angleFive();
		} else if (num === 7) {
			angleSix();
		} else if (num === 8) {
			angleSeven();
		} else if (num === 9) {
			angleEight();
		} else {
			angleNineTen();
		}

		setNum(num - 1);
	};

	const nextAngle = () => {
		if (num === 0) {
			angleOne();
		} else if (num === 1) {
			angleTwo();
		} else if (num === 2) {
			angleThree();
		} else if (num === 3) {
			angleFour();
		} else if (num === 4) {
			angleFive();
		} else if (num === 5) {
			angleSix();
		} else if (num === 6) {
			angleSeven();
		} else if (num === 7) {
			angleEight();
		} else {
			angleNineTen();
		}

		setNum(num + 1);
	};

	const onPreview = () => {
		setPreview(!preview);
		if (preview) setNum(1);
	};

	useEffect(
		() => {
			if (preview) {
				const interval = setInterval(() => {
					console.log('This will run every second!');
					if (num === 1) {
						console.log(num);
						angleTwo();
						setNum(2);
					} else if (num === 2) {
						console.log(num);
						angleThree();
						setNum(3);
					} else if (num === 3) {
						console.log(num);
						angleFour();
						setNum(4);
					} else if (num === 4) {
						console.log(num);
						angleFive();
						setNum(5);
					} else if (num === 5) {
						console.log(num);
						angleSix();
						setNum(6);
					} else if (num === 6) {
						console.log(num);
						angleSeven();
						setNum(7);
					} else if (num === 7) {
						console.log(num);
						angleEight();
						setNum(8);
					} else if (num === 8) {
						console.log(num);
						angleNineTen();
						setNum(9);
					} else if (num === 9) {
						console.log(num);
						angleNineTen();
						setNum(10);
					} else if (num === 10) {
						console.log(num);
						angleOne();
						setNum(1);
					}
				}, 500);
			}
			return () => clearInterval(interval);
		},
		[ preview, num ]
	);

	const formStyles = {
		fontSize: '16px',
		padding: '20px 10px 10px'
	};

	const [ prodColor, setProdColor ] = useState('black');

	const handleChangeColor = (event) => {
		setProdColor(event.target.value);
	};

	const [ image, setImage ] = useState(null);
	const [ createObjectURL, setCreateObjectURL ] = useState(null);
	const [ prodURL, setProdURL ] = useState(null);
	const [ imageSaved, setImageSaved ] = useState([]);

	const uploadToClient = (event) => {
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];
			setImage(i);
			setCreateObjectURL(URL.createObjectURL(i));
		}
	};

	const uploadToServer = async (event) => {
		const body = new FormData();
		body.append('file', image);
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
		uploadToClient(event);
		uploadToServer(event);
	};

	const [ textOne, setTextOne ] = useState('');
	const [ textThree, setTextThree ] = useState('');
	const [ textFive, setTextFive ] = useState('');
	const [ textSeven, setTextSeven ] = useState('');

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

	const [ emailInput, setEmailInput ] = useState('');
	const [ manual, setManual ] = useState('');
	const [ packaging, setPackaging ] = useState('');
	const [ messageField, setMessageField ] = useState('');
	const [ displayImages, setDisplayImages ] = useState(false);

	const onEmailInput = (event) => {
		setEmailInput(event.target.value);
	};
	const onCustomManual = (event) => {
		setManual(event.target.value);
	};
	const onCustomPackaging = (event) => {
		setPackaging(event.target.value);
	};
	const onMessageField = (event) => {
		setMessageField(event.target.value);
	};

	const [ formInfo, setFormInfo ] = useState('');

	const ref = createRef(null);
	const [ screenshot, takeScreenshot ] = useScreenshot({
		type: 'image/png',
		quality: 1.0
	});
	const [ designs, setDesigns ] = useState([]);
	const [ designArray, setDesignArray ] = useState([]);

	// const downloadRef = createRef(null);

	const download = (image, { name = 'screenshot', extension = 'png' } = {}) => {
		const a = document.createElement('a');
		a.href = image;
		a.download = createFileName(extension, name);
		a.click();
	};

	const [ toDownload, setToDownload ] = useState(false);
    const [newRef, setNewRef] = useState(null);

    const screenRef = (ref) => {
        console.log(`screenRef: ${ref}`);
        setNewRef(ref);
    }
    
	const downloadScreenshot = () => {
        setNum(1);
        console.log(`screenRef2: ${newRef}`);
        if(newRef) {
            takeScreenshot(newRef).then(download);
        }

		setToDownload(true);
	};

	// const newRef = React.useCallback((node) => {
	// 	if (node === null) {
	// 		console.log('ref null', ref.current);
	// 	} else {
	// 		console.log(node, ref.current);
	// 	}
	// }, []);

	useEffect(
		() => {
			if (toDownload) {
                console.log("start")
				const interval = setInterval(() => {
					console.log('This will run every second!');
                    if(newRef) {
                        if (num === 1) {
                            console.log(num);
                            angleTwo();
                            takeScreenshot(newRef).then(download);
                            setNum(2);
                        } else if (num === 2) {
                            console.log(num);
                            angleThree();
                            takeScreenshot(newRef).then(download);
                            setNum(3);
                        } else if (num === 3) {
                            console.log(num);
                            angleFour();
                            takeScreenshot(newRef).then(download);
                            setNum(4);
                        } else if (num === 4) {
                            console.log(num);
                            angleFive();
                            takeScreenshot(newRef).then(download);
                            setNum(5);
                        } else if (num === 5) {
                            console.log(num);
                            angleSix();
                            takeScreenshot(newRef).then(download);
                            setNum(6);
                        } else if (num === 6) {
                            console.log(num);
                            angleSeven();
                            takeScreenshot(newRef).then(download);
                            setNum(7);
                        } else if (num === 7) {
                            console.log(num);
                            angleEight();
                            takeScreenshot(newRef).then(download);
                            setNum(8);
                        } else if (num === 8) {
                            console.log(num);
                            angleNineTen();
                            takeScreenshot(newRef).then(download);
                            setNum(9);
                        } else if (num === 9) {
                            console.log(num);
                            angleNineTen();
                            takeScreenshot(newRef).then(download);
                            setNum(10);
                        } else if (num === 10) {
                            console.log(num);
                            angleOne();
                        }
                    }
				}, 1000);
			}
			setToDownload(false);
			return () => clearInterval(interval);
		},
		[ preview, num, newRef ]
	);

	const handleUploadDesign = async (event) => {
		setDisplayImages(true);
		if (event.target.files && event.target.files[0]) {
			setDesigns([ ...designs, event.target.files ]);
			for (let i = 0; i < designs.length; i++) {
				for (let j = 0; j < designs[i].length; j++) {
					console.log(designs[i][j]);
					await uploadScreenToServer(designs[i][j]);
					await setDesignArray([ ...designArray, URL.createObjectURL(designs[i][j]) ]);
				}
			}
		}
	};

	const onSubmitCustom = async () => {
		if (prodURL) {
			await setImageSaved([ ...imageSaved, prodURL ]);
		}
		await setFormInfo(`
                Color: ${prodColor}\n
                Custom Text: 1. ${textOne}, 2. ${textThree}, 3. ${textFive}, 4. ${textSeven}\n
                Custom User Manual: ${manual}\n
                Custom Packaging or Shipping Carton: ${packaging}\n
                Email: ${emailInput}\n
                Message: ${messageField}\n
                Logo and Custom Designs: ${imageSaved}
                `);
		console.log(formInfo);
	};

	const uploadScreenToServer = async (design) => {
		const body = new FormData();
		body.append('file', design);
		const response = await fetch('/api/image', {
			method: 'POST',
			body
		})
			.then((res) => res.json())
			.then((res) => {
				setImageSaved([ ...imageSaved, res.path ]);
			});
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
				{/* <div className="custom-img"> */}
				<div
					ref={screenRef}
					id="myCanvas"
					style={{
						border: '1px solid transparent',
						zIndex: '10',
						position: 'absolute',
						width: '600px',
						height: '800px'
					}}
				>
					{/* <div> */}
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
					{/* </div> */}
					<div className="text-logo">
						<div className={'display-one-div ' + angleClass}>
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
						{textThree &&
						showThree && (
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
						{textFive &&
						showFive && (
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
						{textSeven &&
						showSeven && (
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
				{/* </div> */}
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
							{showOne && (
								<td>
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
							)}
						</tr>
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
								<FormControl>
									<RadioGroup
										row
										aria-labelledby="demo-row-radio-buttons-group-label"
										name="row-radio-buttons-group"
										onChange={onCustomManual}
										className="custom-radio"
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
								<FormControl>
									<RadioGroup
										row
										aria-labelledby="demo-row-radio-buttons-group-label"
										name="row-radio-buttons-group"
										onChange={onCustomPackaging}
										className="custom-radio"
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
								<Button
									onClick={downloadScreenshot}
									className={styles.screenBtn}
									style={{ marginBottom: '1em' }}
								>
									Download My Designs
								</Button>
								<label htmlFor="screen-button-file" style={{ display: 'block' }}>
									<Input
										accept="image/png"
										id="screen-button-file"
										multiple={true}
										type="file"
										style={{ display: 'none' }}
										onChange={handleUploadDesign}
									/>
									<Button variant="screen" component="span" className={styles.screenBtn}>
										Confirm and Upload My Designs
									</Button>
									<ImageList
										style={{ display: displayImages ? 'flex' : 'none' }}
										sx={{ width: 500, height: 450 }}
										cols={3}
										rowHeight={164}
									>
										{designArray &&
											designArray.map((url) => (
												<ImageListItem key={url}>
													<img src={url} alt={url} loading="lazy" />
												</ImageListItem>
											))}
									</ImageList>
								</label>
							</td>
						</tr>
					</tbody>
				</table>
				{/* {screenshot && (
					<a href={screenshot} download ref={downloadRef} style={{ display: 'none' }}>
						<Image src={screenshot} alt="screenshot" width="600" height="800" style={{ display: 'none' }} />
					</a>
				)} */}
				<Button onClick={onSubmitCustom} className={styles.funcBtn}>
					Submit
				</Button>
			</div>
		</div>
	);
}
