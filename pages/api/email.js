/* eslint-disable import/no-anonymous-default-export */
/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 00:11:40
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-17 02:31:21
 * @FilePath: /custom-vapes-app/pages/api/email.js
 */
export default async (req, res) => {
	let nodemailer = require('nodemailer');
	const transporter = nodemailer.createTransport({
		port: 587,
		host: 'smtp.office365.com',
		auth: {
			user: 'info@ikrusher.com',
			pass: 'Vuh05875'
		},
		secure: false
	});
	const mailData = {
		from: 'info@ikrusher.com',
		// to: 'inquiry@ikrusher.com',
		// cc: 'ecom@ikrusher.com',
		to: 'jinqi.li@ikrusher.com',
		subject: 'New Custom Vape Request',
		html: req.body
	};
	console.log(JSON.stringify(mailData.text));
	let emailSent = await transporter.sendMail(mailData, function(err, info) {
        if (err) console.log(err.toString());
		else console.log(info);
	});
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(emailSent));
	res.status(200);
};
