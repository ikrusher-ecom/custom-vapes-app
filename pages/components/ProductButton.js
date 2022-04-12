/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 01:06:02
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-12 01:17:19
 * @FilePath: /custom-vapes-app/pages/components/ProductButton.js
 */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [ <Button key="one">One</Button>, <Button key="two">Two</Button>, <Button key="three">Three</Button> ];

export default function ProductButton() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				'& > *': {
					m: 1
				}
			}}
		>
			<ButtonGroup size="small" aria-label="small button group">
				{buttons}
			</ButtonGroup>
			<ButtonGroup color="secondary" aria-label="medium secondary button group">
				{buttons}
			</ButtonGroup>
			<ButtonGroup size="large" aria-label="large button group">
				{buttons}
			</ButtonGroup>
		</Box>
	);
}
