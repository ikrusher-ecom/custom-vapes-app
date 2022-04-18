/*
 * @Author: Jinqi Li
 * @Date: 2022-04-13 17:37:17
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-17 17:52:21
 * @FilePath: /custom-vapes-app/components/VapeWidget.js
 */
import * as React from 'react';
import { useState, useEffect, createRef, forwardRef, useTimeout, useRef } from 'react';
import styles from '../styles/Component.module.css';
import Image from 'next/image';
import CustomImages from './CustomImages';
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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import Draggable, { DraggableCore } from 'react-draggable';
import { useScreenshot, createFileName } from 'use-react-screenshot';

export default function VapeWidget(props) {
	console.log(props);

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
					// console.log('This will run every second!');
					if (num === 1) {
						// console.log(num);
						angleTwo();
						setNum(2);
					} else if (num === 2) {
						// console.log(num);
						angleThree();
						setNum(3);
					} else if (num === 3) {
						// console.log(num);
						angleFour();
						setNum(4);
					} else if (num === 4) {
						// console.log(num);
						angleFive();
						setNum(5);
					} else if (num === 5) {
						// console.log(num);
						angleSix();
						setNum(6);
					} else if (num === 6) {
						// console.log(num);
						angleSeven();
						setNum(7);
					} else if (num === 7) {
						// console.log(num);
						angleEight();
						setNum(8);
					} else if (num === 8) {
						// console.log(num);
						angleNineTen();
						setNum(9);
					} else if (num === 9) {
						// console.log(num);
						angleNineTen();
						setNum(10);
					} else if (num === 10) {
						// console.log(num);
						angleOne();
						setNum(1);
					}
				}, 500);
			}
			return () => clearInterval(interval);
		},
		[ preview, num ]
	);

	const [ prodColor, setProdColor ] = useState(props.productColors[0]);

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

	const [ timestamp, setTimestamp ] = useState(Date.now());

	const download = (image, { name = 'screenshot', extension = 'png' } = {}) => {
		setTimestamp(Date.now());
		const a = document.createElement('a');
		a.href = image;
		a.download = createFileName(extension, name + timestamp);
		a.click();
	};

	const [ newRef, setNewRef ] = useState(null);

	const screenRef = (ref) => {
		// console.log(`screenRef: ${ref}, ${num}`);
		setNewRef(ref);
	};

	const downloadScreenshot = () => {
		// console.log(`screenRef: ${newRef}, ${num}`);
		takeScreenshot(newRef).then(download);
	};

	const handleUploadDesign = (event) => {
		console.log(event.target.files);
		setDisplayImages(true);
		if (event.target.files && event.target.files[0]) {
			setDesigns([ ...designs, event.target.files[0] ]);
			console.log(designs);
			for (let i = 0; i < designs.length; i++) {
				uploadScreenToServer(designs[i]);
				setDesignArray([ ...designArray, URL.createObjectURL(designs[i]) ]);
			}
		}
	};

	const uploadDesignRef = useRef(null);

	const onSubmitCustom = () => {
		if (prodURL) {
			setImageSaved([ ...imageSaved, prodURL ]);
		}
		console.log(imageSaved);
		setTimeout(() => {
			setFormInfo({
				message: `
                    Color: ${prodColor}
                    Custom Text: 1. ${textOne}, 2. ${textThree}, 3. ${textFive}, 4. ${textSeven}
                    Custom User Manual: ${manual}
                    Custom Packaging or Shipping Carton: ${packaging}
                    Email: ${emailInput}
                    Message: ${messageField}
                    Logo and Custom Designs: ${imageSaved}
                    `,
				links: imageSaved.map((url) => <img src={url} alt={url} key={url} />)
			});
			console.log(formInfo);
			fetch('/api/email', {
				method: 'POST',
				headers: {
					Accept: 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formInfo)
			}).then((res) => {
				console.log('Response received');
				if (res.status === 200) {
					console.log('Response succeeded!');
					setFormInfo('');
				}
			});
		}, 2000);
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
				<Button
					onClick={downloadScreenshot}
					className={styles.screenBtn}
					style={{ width: '100%', marginTop: '320px' }}
				>
					Confirm the Design Above and Download it
				</Button>
				<Button onClick={onPreview} className={styles.previewBtn}>
					Preview in 360° {'    '} <PlayArrowIcon /> / <StopIcon />
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
							name={props.productID}
							category={props.productCate}
							folder={props.productFolder}
							images={props.productImages[props.productColors.filter((color) => color === prodColor)][0]}
						/>
					</div>
					<div id="two" style={{ display: num === 2 ? 'block' : 'none' }}>
						<CustomImages
							name={props.productID}
							category={props.productCate}
							folder={props.productFolder}
							images={props.productImages[props.productColors.filter((color) => color === prodColor)][1]}
						/>
					</div>
					<div id="three" style={{ display: num === 3 ? 'block' : 'none' }}>
						<CustomImages
							name={props.productID}
							category={props.productCate}
							folder={props.productFolder}
							images={props.productImages[props.productColors.filter((color) => color === prodColor)][2]}
						/>
					</div>
					<div id="four" style={{ display: num === 4 ? 'block' : 'none' }}>
						<CustomImages
							name={props.productID}
							category={props.productCate}
							folder={props.productFolder}
							images={props.productImages[props.productColors.filter((color) => color === prodColor)][3]}
						/>
					</div>
					<div id="five" style={{ display: num === 5 ? 'block' : 'none' }}>
						<CustomImages
							name={props.productID}
							category={props.productCate}
							folder={props.productFolder}
							images={props.productImages[props.productColors.filter((color) => color === prodColor)][4]}
						/>
					</div>
					<div id="six" style={{ display: num === 6 ? 'block' : 'none' }}>
						<CustomImages
							name={props.productID}
							category={props.productCate}
							folder={props.productFolder}
							images={props.productImages[props.productColors.filter((color) => color === prodColor)][5]}
						/>
					</div>
					<div id="seven" style={{ display: num === 7 ? 'block' : 'none' }}>
						<CustomImages
							name={props.productID}
							category={props.productCate}
							folder={props.productFolder}
							images={props.productImages[props.productColors.filter((color) => color === prodColor)][6]}
						/>
					</div>
					<div id="eight" style={{ display: num === 8 ? 'block' : 'none' }}>
						<CustomImages
							name={props.productID}
							category={props.productCate}
							folder={props.productFolder}
							images={props.productImages[props.productColors.filter((color) => color === prodColor)][7]}
						/>
					</div>
					<div id="nine" style={{ display: num === 9 ? 'block' : 'none' }}>
						<CustomImages
							name={props.productID}
							category={props.productCate}
							folder={props.productFolder}
							images={props.productImages[props.productColors.filter((color) => color === prodColor)][8]}
						/>
					</div>
					<div id="ten" style={{ display: num === 10 ? 'block' : 'none' }}>
						<CustomImages
							name={props.productID}
							category={props.productCate}
							folder={props.productFolder}
							images={props.productImages[props.productColors.filter((color) => color === prodColor)][9]}
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
											defaultValue={props.productColors[0]}
										>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('black') ? 'flex' : 'none'
												}}
												value={'black'}
												selected={props.productColors.includes('black') ? true : false}
											>
												Black
											</MenuItem>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('rosegold') ? 'flex' : 'none'
												}}
												value={'rosegold'}
											>
												Rose Gold
											</MenuItem>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('red') ? 'flex' : 'none'
												}}
												value={'red'}
											>
												Red
											</MenuItem>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('metablue') ? 'flex' : 'none'
												}}
												value={'metablue'}
											>
												Metallic Blue
											</MenuItem>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('metasilver')
														? 'flex'
														: 'none'
												}}
												value={'metasilver'}
												selected={
													!props.productColors.includes('black') &&
													!props.productColors.includes('gunmetal') &&
													props.productColors.includes('metasilver') ? (
														true
													) : (
														false
													)
												}
											>
												Metallic Silver
											</MenuItem>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('lilac') ? 'flex' : 'none'
												}}
												value={'lilac'}
											>
												Lilac
											</MenuItem>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('gunmetal') ? 'flex' : 'none'
												}}
												value={'gunmetal'}
												selected={
													!props.productColors.includes('black') &&
													props.productColors.includes('gunmetal') ? (
														true
													) : (
														false
													)
												}
											>
												Gunmetal
											</MenuItem>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('green') ? 'flex' : 'none'
												}}
												value={'green'}
											>
												Green Tourmaline
											</MenuItem>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('white') ? 'flex' : 'none'
												}}
												value={'white'}
											>
												White
											</MenuItem>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('yellow') ? 'flex' : 'none'
												}}
												value={'yellow'}
											>
												Yellow
											</MenuItem>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('royalblue') ? 'flex' : 'none'
												}}
												value={'royalblue'}
											>
												Royal Blue
											</MenuItem>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('blue') ? 'flex' : 'none'
												}}
												value={'blue'}
											>
												Blue
											</MenuItem>
											<MenuItem
												style={{
													fontSize: '16px',
													padding: '20px 10px 10px',
													display: props.productColors.includes('hotpink') ? 'flex' : 'none'
												}}
												value={'hotpink'}
											>
												Hot Pink
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
								<TextField
									id="outlined-multiline-static"
									label="Your Message"
									multiline
									rows={2}
									placeholder="Your Message"
									sx={{ width: '280px' }}
									className="messageInput"
									onChange={onMessageField}
								/>
							</td>
						</tr>
						<tr>
							<th style={{ paddingTop: '1em' }}>Confirm Your Design:</th>
							<td style={{ verticalAlign: 'bottom', paddingTop: '1em' }}>
								<label htmlFor="screen-button-file" style={{ display: 'block' }}>
									<Input
										accept="image/png"
										id="screen-button-file"
										multiple
										type="file"
										style={{ display: 'none' }}
										onChange={handleUploadDesign}
										ref={uploadDesignRef}
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
													<img src={url} alt={url} />
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
				<Button
					onClick={onSubmitCustom}
					className={styles.funcBtn}
					style={{ display: 'block', margin: '0 auto', padding: '6px 20px' }}
				>
					Submit
				</Button>
			</div>
		</div>
	);
}