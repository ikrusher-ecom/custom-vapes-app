/* eslint-disable import/no-anonymous-default-export */
/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 00:11:40
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-14 22:21:07
 * @FilePath: /custom-vapes-app/pages/api/image.js
 */
import formidable from "formidable";
import { promises as fs } from 'fs';

const mv = require('mv');

export const config = {
    api: {
        bodyParser: false
    }
};

export default async (req, res) => {
    const data = await new Promise((resolve, reject) => {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) return reject(err);

            console.log(`fields: ${fields}, files: ${files}, path: ${files.file.filepath}`);

            const oldPath = files.file.filepath;
            const newPath = `./public/uploads/${files.file.originalFilename}`;
            mv(oldPath, newPath, (err) => { console.log(err) });

            res.status(200)
            // .json({ fields, files })
            .json({path: `${process.env.prodDir}/uploads/${files.file.originalFilename}`})
            console.log(`${process.env.prodDir}/uploads/${files.file.originalFilename}`)
        })
    })
}