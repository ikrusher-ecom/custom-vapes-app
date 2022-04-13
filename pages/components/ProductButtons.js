/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 01:06:02
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-12 01:17:19
 * @FilePath: /custom-vapes-app/pages/components/ProductButton.js
 */

import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';

const batteries = [
	{
		url: '/products/battery/astro-mod-battery/IKrusher-Astro-Mod-Battery-Black-Custom-01.jpg',
		title: 'Astro Mod Battery',
		width: '20%',
	},
	{
		url: '/products/battery/astro-stik-battery/iKrusher-Astro-Stik-Battery-Gunmetal-Custom-01.jpg',
		title: 'Astro Stik Battery',
		width: '20%',
	},
	{
		url: '/products/battery/s1/iKrusher-S1-Battery-Silver-Custom-01.jpg',
		title: 'S1',
		width: '20%',
	},
	{
		url: '/products/battery/s2/iKrusher-S2-Battery-Gunmetal-Custom-01.jpg',
		title: 'S2',
		width: '20%',
	},
	{
		url: '/products/battery/vfire-pro-battery/Vfire-Pro-Battery-green-01.jpg',
		title: 'Vfire Pro Battery',
		width: '20%',
	}
];

const cartridges = [
	{
		url: '/products/cartridge/calibr-pro-flat/iKrusher-Calibr-Flat-Tip-Black-Custom-01.jpg',
		title: 'Calibr Pro Flat',
		width: '20%',
	},
	{
		url: '/products/cartridge/calibr-pro-round/iKrusher-Calibr-Pro-Round-Custom-Black-Tip-01.jpg',
		title: 'Calibr Pro Round',
		width: '20%',
	},
	{
		url: '/products/cartridge/tux/iKrusher-Tux--Calibr-White-Custom-03.jpg',
		title: 'Tux',
		width: '20%',
	},
	{
		url: '/products/cartridge/tux-pro/iKrusher-Tux-Pro-Calibr-Black-Custom-01.jpg',
		title: 'Tux Pro',
		width: '20%',
	}
];

const disposables = [
	{
		url: '/products/disposable/eros/iKrusher-Eros-Disposable-Custom-Vape-Black-01.jpg',
		title: 'Eros',
		width: '20%',
	},
	{
		url: '/products/disposable/eros-pro-flat/iKrusher-Disposable-Eros-Pro-Flat-Tip-Custom-Vape-Black-01.jpg',
		title: 'Eros Pro Flat',
		width: '20%',
	},
	{
		url: '/products/disposable/eros-pro-round/iKrusher-Disposable-Eros-Pro-Round-Tip-Custom-Vape-Black-01.jpg',
		title: 'Eros Pro Round',
		width: '20%',
	},
	{
		url: '/products/disposable/nord/iKrusher-Nord-Disposable-Custom-Vape-Black-01.jpg',
		title: 'Nord',
		width: '20%',
	},
	{
		url: '/products/disposable/tik-pro/iKrusher-Tik-Pro-Disposable-Black-Custom-Vape-01.jpg',
		title: 'Tik Pro',
		width: '20%',
	},
	{
		url: '/products/disposable/uzo/iKrusher-Uzo-Disposable-Black-Custom-Vape-01.jpg',
		title: 'Uzo',
		width: '20%',
	},
	{
		url: '/products/disposable/uzo-plus/iKrusher-Uzo-Pro-Disposable-Black-Custom-Vape-01.jpg',
		title: 'Uzo Plus',
		width: '20%',
	},
	{
		url: '/products/disposable/xenbar/iKrusher-Xenbar-Disposable-Gunmetal-Custom-vape-01.jpg',
		title: 'Xenbar',
		width: '20%',
	},
	{
		url: '/products/disposable/xenbar-pro/iKrusher-Xenbar-Pro-Disposable-Gunmetal-Custom-vape-01.jpg',
		title: 'Xenbar Pro',
		width: '20%',
	},
	{
		url: '/products/disposable/xodos/iKrusher-Xodos-Disposable-Black-Custom-vape-01.jpg',
		title: 'Xodos',
		width: '20%',
	},
	{
		url: '/products/disposable/xodos-pro/iKrusher-Xodos-Pro-Disposable-Black-Custom-vape-01.jpg',
		title: 'Xodos Pro',
		width: '20%',
	}
]

const podSystems = [
	{
		url: '/products/pod-system/astro-mod/IKrusher-Astro-Mod-Black-Custom-01.jpg',
		title: 'Astro Mod',
		width: '20%',
	},
	{
		url: '/products/pod-system/astro-stik/iKrusher-Astro-Stik-Pod-System-Black-Custom-1.jpg',
		title: 'Astro Stik',
		width: '20%',
	},
	{
		url: '/products/pod-system/katto/iKrusher-Disposable-Katto-Custom-Vape-Black-01.jpg',
		title: 'Katto',
		width: '20%',
	},
	{
		url: '/products/pod-system/vfire-pro/iKrusher-Vfire-Pro-Pod-System-Gunmetal-Custom-01.jpg',
		title: 'Vfire Pro',
		width: '20%',
	},
	{
		url: '/products/pod-system/xenair/iKrusher-Xen-Air-Pod-System-Black-Custom-vape-01.jpg',
		title: 'Xenair',
		width: '20%',
	}
]

const ImageButton = styled(ButtonBase)(({ theme }) => ({
	position: 'relative',
	height: 200,
	[theme.breakpoints.down('sm')]: {
		width: '100% !important', // Overrides inline-style
		height: 100,
	},
	'&:hover, &.Mui-focusVisible': {
		zIndex: 1,
		'& .MuiImageBackdrop-root': {
			opacity: 0.15,
		},
		'& .MuiImageMarked-root': {
			opacity: 0,
		},
		'& .MuiTypography-root': {
			border: '4px solid currentColor',
		},
	},
}));

const ImageSrc = styled('span')({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundSize: 'cover',
	backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	backgroundColor: theme.palette.common.black,
	opacity: 0.4,
	transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
	height: 3,
	width: 18,
	backgroundColor: theme.palette.common.white,
	position: 'absolute',
	bottom: -2,
	left: 'calc(50% - 9px)',
	transition: theme.transitions.create('opacity'),
}));

export default function ProductButtons({ cateDisplay }) {
	if (cateDisplay === "batteries") {
		return (
			<div>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
					{batteries.map((image) => (
						<ImageButton
							focusRipple
							key={image.title}
							style={{
								width: image.width,
							}}
						>
							<ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
							<ImageBackdrop className="MuiImageBackdrop-root" />
							<Image>
								<Typography
									component="span"
									variant="subtitle1"
									color="inherit"
									sx={{
										position: 'relative',
										p: 4,
										pt: 2,
										pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
									}}
								>
									{image.title}
									<ImageMarked className="MuiImageMarked-root" />
								</Typography>
							</Image>
						</ImageButton>
					))}
				</Box>
			</div>
		);
	}

	else if (cateDisplay === "cartridges") {
		return (
			<div>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
					{cartridges.map((image) => (
						<ImageButton
							focusRipple
							key={image.title}
							style={{
								width: image.width,
							}}
						>
							<ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
							<ImageBackdrop className="MuiImageBackdrop-root" />
							<Image>
								<Typography
									component="span"
									variant="subtitle1"
									color="inherit"
									sx={{
										position: 'relative',
										p: 4,
										pt: 2,
										pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
									}}
								>
									{image.title}
									<ImageMarked className="MuiImageMarked-root" />
								</Typography>
							</Image>
						</ImageButton>
					))}
				</Box>
			</div>
		);
	}

	else if (cateDisplay === "disposables") {
		return (
			<div>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
					{disposables.map((image) => (
						<ImageButton
							focusRipple
							key={image.title}
							style={{
								width: image.width,
							}}
						>
							<ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
							<ImageBackdrop className="MuiImageBackdrop-root" />
							<Image>
								<Typography
									component="span"
									variant="subtitle1"
									color="inherit"
									sx={{
										position: 'relative',
										p: 4,
										pt: 2,
										pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
									}}
								>
									{image.title}
									<ImageMarked className="MuiImageMarked-root" />
								</Typography>
							</Image>
						</ImageButton>
					))}
				</Box>
			</div>
		);
	}

	else if (cateDisplay === "podSystems") {
		return (
			<div>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
					{podSystems.map((image) => (
						<ImageButton
							focusRipple
							key={image.title}
							style={{
								width: image.width,
							}}
						>
							<ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
							<ImageBackdrop className="MuiImageBackdrop-root" />
							<Image>
								<Typography
									component="span"
									variant="subtitle1"
									color="inherit"
									sx={{
										position: 'relative',
										p: 4,
										pt: 2,
										pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
									}}
								>
									{image.title}
									<ImageMarked className="MuiImageMarked-root" />
								</Typography>
							</Image>
						</ImageButton>
					))}
				</Box>
			</div>
		);
	}

}