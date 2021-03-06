/*
 * @Author: Jinqi Li
 * @Date: 2022-04-13 17:37:17
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-05-13 00:01:40
 * @FilePath: /custom-vapes-app/components/VapeWidget.js
 */
import * as React from 'react';
import { useState, useEffect } from 'react';
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
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import Slider from '@mui/material/Slider';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useScreenshot } from 'use-react-screenshot';
import { HexColorPicker } from 'react-colorful';
import ResizableContent from './ResizableContent';
import { formatInTimeZone } from 'date-fns-tz';

export default function VapeWidget(props) {
	const [num, setNum] = useState(1);
	const [showOne, setShowOne] = useState(true);
	const [showThree, setShowThree] = useState(false);
	const [showFive, setShowFive] = useState(false);
	const [showSeven, setShowSeven] = useState(false);
	const [preview, setPreview] = useState(false);
	const [logoOneClass, setLogoOneClass] = useState('');
	const [logoThreeClass, setLogoThreeClass] = useState('');
	const [logoFiveClass, setLogoFiveClass] = useState('');
	const [logoSevenClass, setLogoSevenClass] = useState('');

	const angleOne = () => {
		setNum(1);
		setShowOne(true);
		setShowThree(false);
		setShowFive(false);
		setShowSeven(false);
		setLogoOneClass('');
		setLogoThreeClass('');
		setLogoFiveClass('');
		setLogoSevenClass('');
	};

	const angleTwo = () => {
		setNum(2);
		setShowOne(true);
		setShowThree(true);
		setShowFive(false);
		setShowSeven(false);
		setLogoOneClass('angleRight45');
		setLogoThreeClass('angleLeft45');
		setLogoFiveClass('');
		setLogoSevenClass('');
	};

	const angleThree = () => {
		setNum(3);
		setShowOne(false);
		setShowThree(true);
		setShowFive(false);
		setShowSeven(false);
		setLogoOneClass('');
		setLogoThreeClass('');
		setLogoFiveClass('');
		setLogoSevenClass('');
	};

	const angleFour = () => {
		setNum(4);
		setShowOne(false);
		setShowThree(true);
		setShowFive(true);
		setShowSeven(false);
		setLogoOneClass('');
		setLogoThreeClass('angleRight45');
		setLogoFiveClass('angleLeft45');
		setLogoSevenClass('');
	};

	const angleFive = () => {
		setNum(5);
		setShowOne(false);
		setShowThree(false);
		setShowFive(true);
		setShowSeven(false);
		setLogoOneClass('');
		setLogoThreeClass('');
		setLogoFiveClass('');
		setLogoSevenClass('');
	};

	const angleSix = () => {
		setNum(6);
		setShowOne(false);
		setShowThree(false);
		setShowFive(true);
		setShowSeven(true);
		setLogoOneClass('');
		setLogoThreeClass('');
		setLogoFiveClass('angleRight45');
		setLogoSevenClass('angleLeft45');
	};

	const angleSeven = () => {
		setNum(7);
		setShowOne(false);
		setShowThree(false);
		setShowFive(false);
		setShowSeven(true);
		setLogoOneClass('');
		setLogoThreeClass('');
		setLogoFiveClass('');
		setLogoSevenClass('');
	};

	const angleEight = () => {
		setNum(8);
		setShowOne(true);
		setShowThree(false);
		setShowFive(false);
		setShowSeven(true);
		setLogoOneClass('angleLeft45');
		setLogoThreeClass('');
		setLogoFiveClass('');
		setLogoSevenClass('angleRight45');
	};

	const angleNineTen = () => {
		setShowOne(false);
		setShowThree(false);
		setShowFive(false);
		setShowSeven(false);
		setLogoOneClass('');
		setLogoThreeClass('');
		setLogoFiveClass('');
		setLogoSevenClass('');
	};

	const lastAngle = () => {
		setNum(num - 1);
		setTimeout(() => {
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
		}, 100);
	};

	const nextAngle = () => {
		setNum(num + 1);
		setTimeout(() => {
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
		}, 100);
	};

	const onPreview = () => {
		setPreview(!preview);
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
		[preview, num]
	);

	const [prodColor, setProdColor] = useState(props.productColors[0]);

	const handleChangeColor = (event) => {
		setProdColor(event.target.value);
	};

	const [logoOne, setLogoOne] = useState(null);
	const [createObjectURL, setCreateObjectURL] = useState(null);
	const [logoOneURL, setLogoOneURL] = useState('');
	const [imageSaved, setImageSaved] = useState([]);

	// const uploadToClient = (event) => {
	// 	if (event.target.files && event.target.files[0]) {
	// 		const i = event.target.files[0];
	// 		setImage(i);
	// 		setCreateObjectURL(URL.createObjectURL(i));
	// 	}
	// };

	// const uploadToServer = async (theImage) => {
	// 	const body = new FormData();
	// 	body.append('file', theImage);
	// 	body.append('upload_preset', 'custom-uploads');
	// 	const response = await fetch('https://api.cloudinary.com/v1_1/dz2lnwuww/image/upload', {
	// 		method: 'POST',
	// 		body
	// 	})
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			setImageSaved([...imageSaved, res.secure_url]);
	// 		});
	// };

	const handleChangeLogo = async (event) => {
		if (num === 1) {
			setShowOne(true);
		} else {
			setShowOne(false);
		}
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];
			setLogoOne(i);
			setCreateObjectURL(URL.createObjectURL(i));
		}
	};
	useEffect(() => {
		async function uploadLogo() {
			const body = new FormData();
			body.append('file', logoOne);
			body.append('upload_preset', 'custom-uploads');
			const response = await fetch('https://api.cloudinary.com/v1_1/dz2lnwuww/image/upload', {
				method: 'POST',
				body
			})
				.then((res) => res.json())
				.then((res) => {
					setLogoOneURL(res.secure_url);
				});
		}
		uploadLogo();
	}, [logoOne])

	const [createObjectURLThree, setCreateObjectURLThree] = useState(null);
	const [logoThree, setLogoThree] = useState(null);
	const [logoThreeURL, setLogoThreeURL] = useState('');
	const handleLogoThree = async (event) => {
		if (num === 3) {
			setShowThree(true);
		} else {
			setShowThree(false);
		}
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];
			setLogoThree(i);
			setCreateObjectURLThree(URL.createObjectURL(i));
		}
	};
	useEffect(() => {
		async function uploadLogo() {
			const body = new FormData();
			body.append('file', logoThree);
			body.append('upload_preset', 'custom-uploads');
			const response = await fetch('https://api.cloudinary.com/v1_1/dz2lnwuww/image/upload', {
				method: 'POST',
				body
			})
				.then((res) => res.json())
				.then((res) => {
					setLogoThreeURL(res.secure_url);
				});
		}
		uploadLogo();
	}, [logoThree])

	const [createObjectURLFive, setCreateObjectURLFive] = useState(null);
	const [logoFive, setLogoFive] = useState(null);
	const [logoFiveURL, setLogoFiveURL] = useState('');
	const handleLogoFive = async (event) => {
		if (num === 5) {
			setShowFive(true);
		} else {
			setShowFive(false);
		}
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];
			setLogoFive(i);
			setCreateObjectURLFive(URL.createObjectURL(i));
		}
	};
	useEffect(() => {
		async function uploadLogo() {
			const body = new FormData();
			body.append('file', logoFive);
			body.append('upload_preset', 'custom-uploads');
			const response = await fetch('https://api.cloudinary.com/v1_1/dz2lnwuww/image/upload', {
				method: 'POST',
				body
			})
				.then((res) => res.json())
				.then((res) => {
					setLogoFiveURL(res.secure_url);
				});
		}
		uploadLogo();
	}, [logoFive])

	const [createObjectURLSeven, setCreateObjectURLSeven] = useState(null);
	const [logoSeven, setLogoSeven] = useState(null);
	const [logoSevenURL, setLogoSevenURL] = useState('');
	const handleLogoSeven = async (event) => {
		if (num === 5) {
			setShowSeven(true);
		} else {
			setShowSeven(false);
		}
		if (event.target.files && event.target.files[0]) {
			const i = event.target.files[0];
			setLogoSeven(i);
			setCreateObjectURLSeven(URL.createObjectURL(i));
		}
	};
	useEffect(() => {
		async function uploadLogo() {
			const body = new FormData();
			body.append('file', logoSeven);
			body.append('upload_preset', 'custom-uploads');
			const response = await fetch('https://api.cloudinary.com/v1_1/dz2lnwuww/image/upload', {
				method: 'POST',
				body
			})
				.then((res) => res.json())
				.then((res) => {
					setLogoSevenURL(res.secure_url);
				});
		}
		uploadLogo();
	}, [logoSeven])

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

	const [emailInput, setEmailInput] = useState('');
	const [manual, setManual] = useState('');
	const [packaging, setPackaging] = useState('');
	const [messageField, setMessageField] = useState('');
	const [customerName, setCustomerName] = useState('');
	const [customerPhone, setCustomerPhone] = useState('');

	const onEmailInput = (event) => {
		setEmailInput(event.target.value);
	};
	const onNameInput = (event) => {
		setCustomerName(event.target.value);
	};
	const onPhoneInput = (event) => {
		setCustomerPhone(event.target.value);
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

	const [formInfo, setFormInfo] = useState('');
	const [uploaded, setUploaded] = useState(false);
	const [formReady, setFormReady] = useState(false);
	const [screenURL, setScreenURL] = useState('');
	const [screenLeftURL, setScreenLeftURL] = useState('');
	const [screenBackURL, setScreenBackURL] = useState('');
	const [screenRightURL, setScreenRightURL] = useState('');

	const [screenshot, takeScreenshot] = useScreenshot({
		type: 'image/png',
		quality: 1.0
	});
	const [screenshotThree, takeScreenshotThree] = useScreenshot({
		type: 'image/png',
		quality: 1.0
	});
	const [screenshotFive, takeScreenshotFive] = useScreenshot({
		type: 'image/png',
		quality: 1.0
	});
	const [screenshotSeven, takeScreenshotSeven] = useScreenshot({
		type: 'image/png',
		quality: 1.0
	});

	const [newRef, setNewRef] = useState(null);
	const screenRef = (ref) => {
		setNewRef(ref);
	};

	const [screenfile, setScreenfile] = useState(null);
	const [screenfileThree, setScreenfileThree] = useState(null);
	const [screenfileFive, setScreenfileFive] = useState(null);
	const [screenfileSeven, setScreenfileSeven] = useState(null);
	const [timeStamp, setTimeStamp] = useState(Date.now());

	const urlToObject = (dataurl, filename) => {
		let arr = dataurl.split(','),
			mime = arr[0].match(/:(.*?);/)[1],
			bstr = window.atob(arr[1]),
			n = bstr.length,
			u8arr = new Uint8Array(n);
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new File([u8arr], filename, {
			type: mime
		});
	};

	useEffect(
		() => {
			submitNext();
		},
		[screenshot, screenshotThree, screenshotFive, screenshotSeven]
	);

	useEffect(
		() => {
			if (screenfile) {
				uploadScreenNext();
			}
		},
		[screenfile, screenfileThree, screenfileFive, screenfileSeven]
	);

	useEffect(
		() => {
			if (screenfileThree) {
				uploadScreenNextLeft();
			}
		},
		[screenfileThree]
	);

	useEffect(
		() => {
			if (screenfileFive) {
				uploadScreenNextBack();
			}
		},
		[screenfileFive]
	);

	useEffect(
		() => {
			if (screenfileSeven) {
				uploadScreenNextRight();
			}
		},
		[screenfileSeven]
	);

	useEffect(
		() => {
			if (screenURL && screenLeftURL && screenBackURL && screenRightURL) {
				setImageSaved([logoOneURL, logoThreeURL, logoFiveURL, logoSevenURL, screenURL, screenLeftURL, screenBackURL, screenRightURL]);
				setUploaded(true);
			}
		},
		[logoOneURL, logoThreeURL, logoFiveURL, logoSevenURL, screenURL, screenLeftURL, screenBackURL, screenRightURL]
	);

	useEffect(
		() => {
			if (uploaded) {
				screenshotNext();
			}
		},
		[imageSaved, uploaded]
	);

	useEffect(
		() => {
			if (formReady) {
				sendEmail();
			}
		},
		[formInfo, formReady]
	);

	// useEffect(
	// 	() => {
	// 		uploadToServer();
	// 	},
	// 	[image]
	// );

	const onSubmitCustom = () => {
		// e.preventDefault();
		angleOne();
		setNum(1);
		setUploaded(false);
		setTimeout(() => {
			takeScreenshot(newRef);
		}, 100);
		setTimeout(() => {
			angleThree();
			setNum(3);
		}, 200);
		setTimeout(() => {
			takeScreenshotThree(newRef);
		}, 300);
		setTimeout(() => {
			angleFive();
			setNum(5);
		}, 400);
		setTimeout(() => {
			takeScreenshotFive(newRef);
		}, 500);
		setTimeout(() => {
			angleSeven();
			setNum(7);
		}, 600);
		setTimeout(() => {
			takeScreenshotSeven(newRef);
		}, 700);
	};

	const submitNext = () => {
		if (screenshot && screenshotThree && screenshotFive && screenshotSeven) {
			uploadScreenToServer();
		}
	};

	const screenshotNext = () => {
		// if (imageSaved[0]) {
		// setFormInfo({
		// 	message: `
		// 			Product: ${props.productCate}, ${props.productID}
		// 			Color: ${prodColor}
		// 			Custom Text: 1. ${textOne}, 2. ${textThree}, 3. ${textFive}, 4. ${textSeven}
		// 			Custom User Manual: ${manual}
		// 			Custom Packaging or Shipping Carton: ${packaging}
		// 			Customer Name: ${customerName}
		// 			Phone Number: ${customerPhone}
		// 			Email: ${emailInput}
		// 			Message: ${messageField}
		// 			Logo and Custom Designs: ${imageSaved}
		// 			Device: Desktop
		// 			`,
		// 	links: imageSaved.map((url) => <img src={url} alt={url} key={url} />),
		// 	email: emailInput
		// });
		// }

		setFormInfo({
			time: formatInTimeZone(new Date(), 'America/Los_Angeles', 'PPpp'),
			product: props.productCate + ' ' + props.productID,
			color: prodColor,
			custom_text: [textOne, textThree, textFive, textSeven],
			custom_user_manual: manual,
			custom_package: packaging,
			customer_name: customerName,
			phone_number: customerPhone,
			email: emailInput,
			message: messageField,
			custom_designs: imageSaved,
			device: 'desktop'
		});
		setFormReady(true);
	};

	const [sentEmail, setSentEmail] = useState(false);
	const [sendAlert, setSendAlert] = useState(false);
	useEffect(
		() => {
			if (sentEmail) {
				// alert('Thank you for submitting your vape customization request. Our support will contact you if we have further questions.');
				setSendAlert(true);
				setFormReady(false);
				setSentEmail(false);
				setTimeout(() => {
					setSendAlert(false);
				}, 6000);
			}
		},
		[sentEmail]
	);

	const sendEmail = async () => {
		console.log(formInfo);
		// fetch('/api/email', {
		// 	method: 'POST',
		// 	headers: {
		// 		Accept: 'application/json, text/plain, */*',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(formInfo)
		// }).then((res) => {
		// 	console.log('Response received');
		// 	if (res.status === 200) {
		// 		console.log('Response succeeded!');
		// 		setSentEmail(true);
		// 		setFormInfo('');
		// 	}
		// })

		let res = await fetch('/api/custom', {
			method: 'POST',
			body: JSON.stringify(formInfo)
		});
		res = await res.json();

		fetch('/api/email', {
			method: 'POST',
			// headers: {
			// 	Accept: 'application/json, text/plain, */*',
			// 	'Content-Type': 'application/json'
			// },
			body: `
			<ul>
				<li>Submission Time: ${formInfo.time},</li>
				<li>Product Name: ${formInfo.product},</li>
				<li>Color: ${formInfo.color},</li>
				<li>Custom Text: ${formInfo.custom_text.map((text) => text)},</li>
				<li>Custom User Manual: ${formInfo.custom_user_manual},</li>
				<li>Custom Package: ${formInfo.custom_package},</li>
				<li>Customer Name: ${formInfo.customer_name},</li>
				<li>Phone Number: ${formInfo.phone_number},</li>
				<li>Email: ${formInfo.email},</li>
				<li>Message: ${formInfo.message},</li>
				<li>Custom Designs: 
				${formInfo.custom_designs.filter(link => link !== null).map((link) => link)},</li>
				<li>Device: Desktop</li>
			</ul>
			`
		}).then((res) => {
			console.log('Response received');
			if (res.status === 200) {
				console.log('Response succeeded!');
				setFormInfo('');
				setSentEmail(true);
			}
		})
	};

	const uploadScreenToServer = () => {
		setTimeStamp(Date.now());
		setScreenfile(urlToObject(screenshot, `screenshot-front-${timeStamp}.png`));
		setScreenfileThree(urlToObject(screenshotThree, `screenshot-left-${timeStamp}.png`));
		setScreenfileFive(urlToObject(screenshotFive, `screenshot-back-${timeStamp}.png`));
		setScreenfileSeven(urlToObject(screenshotSeven, `screenshot-right-${timeStamp}.png`));
	};

	const uploadScreenNext = async () => {
		if (screenfile) {
			const body = new FormData();
			body.append('file', screenfile);
			body.append('upload_preset', 'custom-uploads');
			const response = await fetch('https://api.cloudinary.com/v1_1/dz2lnwuww/image/upload', {
				method: 'POST',
				body
			})
				.then((res) => res.json())
				.then((res) => {
					setScreenURL(res.secure_url);
				});
		}
	};
	const uploadScreenNextLeft = async () => {
		if (screenfileThree) {
			const body = new FormData();
			body.append('file', screenfileThree);
			body.append('upload_preset', 'custom-uploads');
			const response = await fetch('https://api.cloudinary.com/v1_1/dz2lnwuww/image/upload', {
				method: 'POST',
				body
			})
				.then((res) => res.json())
				.then((res) => {
					setScreenLeftURL(res.secure_url);
				});
		}
	};
	const uploadScreenNextBack = async () => {
		if (screenfileFive) {
			const body = new FormData();
			body.append('file', screenfileFive);
			body.append('upload_preset', 'custom-uploads');
			const response = await fetch('https://api.cloudinary.com/v1_1/dz2lnwuww/image/upload', {
				method: 'POST',
				body
			})
				.then((res) => res.json())
				.then((res) => {
					setScreenBackURL(res.secure_url);
				});
		}
	};
	const uploadScreenNextRight = async () => {
		if (screenfileSeven) {
			const body = new FormData();
			body.append('file', screenfileSeven);
			body.append('upload_preset', 'custom-uploads');
			const response = await fetch('https://api.cloudinary.com/v1_1/dz2lnwuww/image/upload', {
				method: 'POST',
				body
			})
				.then((res) => res.json())
				.then((res) => {
					setScreenRightURL(res.secure_url);
				});
		}
	};

	const [customFont, setFontSize] = useState(14);
	const [customColor, setCustomColor] = useState('#878787');
	const [isColorPicker, setColorPicker] = useState(false);
	const changeColor = {
		color: customColor,
		fontSize: `${customFont}px`
	};
	const colorButton = {
		display: 'inline-block',
		width: '40px',
		height: '40px',
		border: '1px solid transparent',
		backgroundColor: customColor,
		padding: '0',
		marginLeft: '10px',
		minWidth: '40px'
	};

	return (
		<React.Fragment>
			<h5 style={{ padding: '0 16px' }}>Step 4: Customize Your Device Now!</h5>
			<div className="custom-vape" id="custom-step4">
				<div className={'next-btn ' + styles.angleBtns}>
					<Button
						onClick={lastAngle}
						disabled={num <= 1}
						className={styles.roundBtn}
						style={{ float: 'left' }}
					>
						<ArrowBackIosIcon fontSize="large" />
					</Button>
					<Button
						onClick={nextAngle}
						disabled={num >= 10}
						className={styles.roundBtn}
						style={{ float: 'right' }}
					>
						<ArrowForwardIosIcon fontSize="large" />
					</Button>
					{/* <Button
					onClick={downloadScreenshot}
					className={styles.screenBtn}
					style={{ width: '100%', marginTop: '320px' }}
				>
					Confirm the Design Above and Download it
				</Button> */}
					<Button onClick={onPreview} className={styles.previewBtn}>
						Preview in 360?? {'    '} <PlayArrowIcon /> / <StopIcon />
					</Button>
				</div>
				<div
					className="custom-group"
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
						<div
							className={'display-one-div ' + logoOneClass}
							style={{ display: showOne || num === 1 ? 'block' : 'none' }}
						>
							{/* {textOne &&
									showOne && ( */}
							{/* <Draggable
								axis="both"
								bounds={{ left: 0, top: 0, right: 500, bottom: 700 }}
								defaultPosition={{ x: 200, y: 300 }} */}
							{/* > */}
							<ResizableContent top={220} left={220} width={100} height={30} rotateAngle={0}>
								{((textOne && showOne) || (textOne && num === 1)) ? (
									<div id="display-text-one" style={changeColor}>
										{textOne}
									</div>
								) : null}
							</ResizableContent>
							{/* </Draggable> */}
							{/* )} */}
							<ResizableContent top={0} left={0} width={200} height={200} rotateAngle={0}>
								{((createObjectURL && showOne) || (createObjectURL && num === 1)) ? (
									<div className="display-logo-div" style={{ width: '100%', height: '100%' }}>
										<Image
											alt={createObjectURL}
											id="display-logo-one"
											src={createObjectURL}
											layout="fill"
											objectFit="contain"
										/>
									</div>
								) : null}
							</ResizableContent>
						</div>
						<div className={"display-three-div " + logoThreeClass} style={{ display: showThree ? 'block' : 'none' }}>
							<ResizableContent top={220} left={220} width={100} height={30} rotateAngle={0}>
								{((textThree && showThree) || (textThree && num === 3)) ? (
									<div id="display-text-three" style={changeColor}>
										{textThree}
									</div>
								) : null}
							</ResizableContent>
							<ResizableContent top={0} left={0} width={200} height={200} rotateAngle={0}>
								{((createObjectURLThree && showThree) || (createObjectURLThree && num === 3)) ? (
									<div className="display-logo-div" style={{ width: '100%', height: '100%' }}>
										<Image
											alt={createObjectURLThree}
											id="display-logo-one"
											src={createObjectURLThree}
											layout="fill"
											objectFit="contain"
										/>

									</div>
								) : null}
							</ResizableContent>
						</div>
						<div
							className={'display-five-div ' + logoFiveClass}
							style={{ display: showFive ? 'block' : 'none' }}
						>
							<ResizableContent top={220} left={220} width={100} height={30} rotateAngle={0}>
								{((textFive && showFive) || (textFive && num === 5)) ? (
									<div id="display-text-five" style={changeColor}>
										{textFive}
									</div>
								) : null}
							</ResizableContent>
							<ResizableContent top={0} left={0} width={200} height={200} rotateAngle={0}>
								{((createObjectURLFive && showFive) || (createObjectURLFive && num === 5)) ? (
									<div className="display-logo-div" style={{ width: '100%', height: '100%' }}>
										<Image
											alt={createObjectURLFive}
											id="display-logo-one"
											src={createObjectURLFive}
											layout="fill"
											objectFit="contain"
										/>
									</div>
								) : null}
							</ResizableContent>
						</div>
						<div className={"display-seven-div " + logoSevenClass} style={{ display: showSeven ? 'block' : 'none' }}>
							<ResizableContent top={220} left={220} width={100} height={30} rotateAngle={0}>
								{((textSeven && showSeven) || (textSeven && num === 7)) ? (
									<div id="display-text-seven" style={changeColor}>
										{textSeven}
									</div>
								) : null}
							</ResizableContent>
							<ResizableContent top={0} left={0} width={200} height={200} rotateAngle={0}>
								{((createObjectURLSeven && showSeven) || (createObjectURLSeven && num === 7)) ? (
									<div className="display-logo-div" style={{ width: '100%', height: '100%' }}>
										<Image
											alt={createObjectURLSeven}
											id="display-logo-one"
											src={createObjectURLSeven}
											layout="fill"
											objectFit="contain"
										/>
									</div>
								) : null}
							</ResizableContent>
						</div>
					</div>
				</div>
				<div className="input-group">
					<table>
						<tbody>
							<tr>
								<th>Select a Color:</th>
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
														display: props.productColors.includes('rosegold')
															? 'flex'
															: 'none'
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
														display: props.productColors.includes('metablue')
															? 'flex'
															: 'none'
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
														display: props.productColors.includes('gunmetal')
															? 'flex'
															: 'none'
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
														display: props.productColors.includes('yellow')
															? 'flex'
															: 'none'
													}}
													value={'yellow'}
												>
													Yellow
												</MenuItem>
												<MenuItem
													style={{
														fontSize: '16px',
														padding: '20px 10px 10px',
														display: props.productColors.includes('royalblue')
															? 'flex'
															: 'none'
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
														display: props.productColors.includes('hotpink')
															? 'flex'
															: 'none'
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
								{num === 1 && (
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
											Click the button above to select a logo file from your computer or other
											file storage. We accept PNG FILE and FILE SIZE not more than 1 MB only.
										</p>
									</td>
								)}
								{num === 3 && (
									<td>
										<label htmlFor="contained-button-file">
											<Input
												accept="image/png"
												id="contained-button-file"
												multiple={false}
												type="file"
												style={{ display: 'none' }}
												onChange={handleLogoThree}
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
								{num === 5 && (
									<td>
										<label htmlFor="contained-button-file">
											<Input
												accept="image/png"
												id="contained-button-file"
												multiple={false}
												type="file"
												style={{ display: 'none' }}
												onChange={handleLogoFive}
											/>
											<Button variant="contained" component="span" className={styles.funcBtn}>
												Upload
											</Button>
										</label>
										<p style={{ fontSize: '12px', maxWidth: '280px' }}>
											Click the button above to select a logo file from your computer or other
											file storage. We accept PNG FILE and FILE SIZE not more than 1 MB only.
										</p>
									</td>
								)}
								{num === 7 && (
									<td>
										<label htmlFor="contained-button-file">
											<Input
												accept="image/png"
												id="contained-button-file"
												multiple={false}
												type="file"
												style={{ display: 'none' }}
												onChange={handleLogoSeven}
											/>
											<Button variant="contained" component="span" className={styles.funcBtn}>
												Upload
											</Button>
										</label>
										<p style={{ fontSize: '12px', maxWidth: '280px' }}>
											Click the button above to select a logo file from your computer or other
											file storage. We accept PNG FILE and FILE SIZE not more than 1 MB only.
										</p>
									</td>
								)}
							</tr>
							<tr style={{ height: '50px' }}>
								<th>Customize Text:</th>
								<td>
									{num === 1 && (
										<div className="custom-text-div" id="input-text-one">
											<Input type="text" id="custom-text-one" onChange={onTextInputOne} />
										</div>
									)}
									{num === 3 && (
										<div className="custom-text-div" id="input-text-three">
											<Input type="text" id="custom-text-three" onChange={onTextInputThree} />
										</div>
									)}
									{num === 5 && (
										<div className="custom-text-div" id="input-text-five">
											<Input type="text" id="custom-text-five" onChange={onTextInputFive} />
										</div>
									)}
									{num === 7 && (
										<div className="custom-text-div" id="input-text-seven">
											<Input type="text" id="custom-text-seven" onChange={onTextInputSeven} />
										</div>
									)}
									{num === 1 || num === 3 || num === 5 || num === 7 ? (
										<React.Fragment>
											<Button style={colorButton} onClick={setColorPicker} />
											<HexColorPicker
												style={{ display: isColorPicker ? 'flex' : 'none', marginTop: '10px' }}
												color={customColor}
												onChange={setCustomColor}
											/>
											<p>
												<Slider
													defaultValue={14}
													step={1}
													marks
													min={10}
													max={30}
													valueLabelDisplay="on"
													// getAriaValueText={setFontSize}
													onChange={(event, newValue) => {
														setFontSize(newValue);
													}}
													className="addPx"
												/>
											</p>
										</React.Fragment>
									) : null}
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
								<th style={{ paddingTop: '1em' }}>Your Name:</th>
								<td style={{ verticalAlign: 'bottom', paddingTop: '1em' }}>
									<Input
										type="text"
										id="customerName"
										onChange={onNameInput}
										sx={{ width: '200px' }}
									/>
								</td>
							</tr>
							<tr>
								<th style={{ paddingTop: '1em' }}>Your Phone Number:</th>
								<td style={{ verticalAlign: 'bottom', paddingTop: '1em' }}>
									<Input
										type="tel"
										id="customerPhone"
										onChange={onPhoneInput}
										sx={{ width: '200px' }}
									/>
								</td>
							</tr>
							<tr>
								<th style={{ paddingTop: '1em' }}>Your Email Address:</th>
								<td style={{ verticalAlign: 'bottom', paddingTop: '1em' }}>
									<Input
										type="email"
										id="customerEmail"
										onChange={onEmailInput}
										sx={{ width: '200px' }}
									/>
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
							{/* <tr>
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
										Confirm and Upload Your Designs
									</Button>
									<ImageList
										style={{ display: designArray[0] ? 'flex' : 'none' }}
										sx={{ width: 500, height: 450 }}
										cols={3}
										rowHeight={164}
									>
										{designArray[0] &&
											designArray.map((url) => (
												<ImageListItem key={url}>
													<img src={url} alt={url} />
												</ImageListItem>
											))}
									</ImageList>
								</label>
							</td>
						</tr> */}
						</tbody>
					</table>
					{/* {screenshot && (
					<a href={screenshot} download ref={downloadRef} style={{ display: 'none' }}>
						<Image src={screenshot} alt="screenshot" width="600" height="800" style={{ display: 'none' }} />
					</a>
				)} */}
					<Dialog
						open={sendAlert}
						onClose={() => setSendAlert(false)}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title" style={{ fontSize: '18px' }}>
							{"iKrusher Custom Vape App"}
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description" style={{ fontSize: '16px' }}>
								Thank you for submitting your vape customization request. Our support will contact you if we have further questions.
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={() => { setSendAlert(false); window.location.reload(false); }} autoFocus style={{ fontSize: '16px' }}>
								OK
							</Button>
						</DialogActions>
					</Dialog>
					<Button
						onClick={onSubmitCustom}
						className={styles.funcBtn}
						style={{ display: 'block', margin: '0 auto', padding: '6px 20px' }}
					>
						Submit
					</Button>
					<p style={{ textAlign: 'center' }}>We will contact you once receiving your submisson.</p>
				</div>
			</div>
		</React.Fragment>
	);
}

// export async function getServerSideProps(context) {
// 	let data = await fetch('/api/custom', {
// 		method: "GET",
// 		headers: {
// 			"Content-Type": "application/json"
// 		}
// 	})
// 	let customs = await res.json();

// 	return {
// 		props: { customs }
// 	}
// }
