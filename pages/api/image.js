/* eslint-disable import/no-anonymous-default-export */
/*
 * @Author: Jinqi Li
 * @Date: 2022-04-12 00:11:40
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2022-04-17 02:20:35
 * @FilePath: /custom-vapes-app/pages/api/image.js
 */
// import formidable from "formidable";
// import { promises as fs } from 'fs';

// const mv = require('mv');

// export const config = {
//     api: {
//         bodyParser: false
//     }
// };

// export default async (req, res) => {
//     const data = await new Promise((resolve, reject) => {
//         const form = new formidable.IncomingForm();
//         form.parse(req, (err, fields, files) => {
//             if (err) return reject(err);

//             console.log(fields, files);

//             const oldPath = files.file.filepath;
//             const filename = encodeURIComponent(files.file.originalFilename);
//             const newPath = `${process.env.prodDir}/uploads/${filename}`;
//             mv(oldPath, newPath, (err) => { console.log("error: " + err) });
//             console.log("newpath: " + newPath);

//             res.status(200)
//             .json({path: `${process.env.prodDir}/uploads/${filename}`})
//         })
//     })
// }

// export default async function handler(req, res) {
//     const storage = new Storage({
//       projectId: "customvapes",
//       credentials: {
//         client_email: "admin-310@customvapes.iam.gserviceaccount.com",
//         private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1jAi2T66SOAiZ\nz80jCtrsxgwZ2dj0UbfFRRuPrW7rmTu47UVhhbfa0jPlXE2MPNxqAohlYBwXPaer\nKRNA8IdllVLyy88+7dTR+/Tf+64/uPCxFOHt77aD/tDu4KNclkDPTlRUKUZ041Dx\n4wiAakKvF6xsXEVcFZvKIeofoGK0UFlMjMqIaXE4lED2KJPT1T7/3uB3ShhSFrqh\nGm3/RlY1TilOJnHHpJhBSYmAZIdxXU55QzozYKYJVkFlOM9UYwbVySFNV9nvCQeG\nHuxA41DVSgRA5GNe1/SZl7mWpZS4J00krlKeuZDZrl4RHogTJjYD1mnEg+2wU2ii\nP2Iv93LxAgMBAAECggEAIkbBoFY0AgRVT2EF/I9AnUKZJ0pTpXFGTpcJKJvYnN/O\nAFC/8DU0bLqSNMQ0Gf2lqdg3k1hNhW/NF8pGCdU/4wSJ6DBlvR5fN5Qn/CADGqHa\nw7xLGcbQAWTbYraD8Wem7dz+m/M9C7WdY0X3pXMqiu9fzQewyr2Dr+quTvFToXJW\ngzJebgb+ZCpjGZKGKqG/H7VmHyBfugo4vqRW1kdOeCa2b2uedZwmM3zcucvMynlF\nMpDUUnlUaSpSSL0YJ8ERqbF7iFOZ+HnGkn0ortX2PZSQcV6gql8058Y65zSGiB8t\nji6Sq/CYTm7BJBdqhWJeK0MLUWG3e/M/jVT/NCp1vwKBgQDnxkPMjqY+6Saq3s3q\ntdZtNUBDJ0lCmSyl1G2KCiKSvsnQDs04wWUzUKL2bWlq3hLeTpFmvYt1guLwYxas\n3CzaHLDvxnTnvTyXHEzWd57cEhH1Su6VR7YeALeDVehGtbkccE4vwG/wSl35821J\nlQHSQs/Ek3XgeHQGZ71iyN55ywKBgQDIhc0nONiSAXRTVnmQyygsGf5w3GF6XBz9\n7iOAynxPFgnlkgWr0zRm3H93mGqgJM7on6v7zFzqDAQp72l2pb6KQ73JXB5pWngD\n3xVPyfpq5zj34hYpmXexha8CSFLXtwYOlJLEIaLoN4caRLjAhO45SVAUoEplHRXb\n2XFM9BeeswKBgQDdW/5k39jnPMYxa5o/EGw64SD/AgZ2FNUPjFMSA5wBizYz/+8A\nxbRhziHWOaj06CQdLeyws1b+ZINaE0kUzzQHHF/goSoGKjY0HFNGgfi3NorwOyCi\nclr9TLH4PZQZ9HVXM+t4r9I5LM2Ua2l1XVrf9e95T1zFhkVJ2MqIDlBtAQKBgAyT\nR5BkIkDV0oO/cpRACV7qqmhNiddwm2jZXGShTjZvfWNmSvDBqBGjVmMbreQpKsiv\n6ss5v8H1yvUOTKDiOBbXtLlCC64zvD8R6HY+hnPZ2FrDVPx64WTCq30LKBbbJYgY\njTO7oEnL4a8mDCgWrhHtpRYGD2RT9KD6+/4FeM29AoGAWLWb5HZ+jmHmxOXH7Bnp\nXU8TAGyOekXUPIcyna2KGmlvMSaqAvE3OX1ewOPug8s5lZQ3YPUe0qI5LJZW9fRF\nkXyQKhmBy4hYBF+ceMvPc2Ms8Eta/qGuxz9GlXxSJN+p4drb9ia9c4cQ8Do72RIn\nKXG8fYa2s/s1UF7MYP424vQ=\n-----END PRIVATE KEY-----\n",
//       },
//     });
  
//     const bucket = storage.bucket("storage");

//     const data = await new Promise((resolve, reject) => {
//         const form = new formidable.IncomingForm();
//         form.parse(req, (err, fields, files) => {
//             if (err) return reject(err);
//             console.log(`fields: ${fields}, files: ${files}`);

//             const file = bucket.file(files.file);
//         })
//     })
//     const file = bucket.file(req.query.file);
//     const options = {
//       expires: Date.now() + 1 * 60 * 1000, //  1 minute,
//       fields: { 'x-goog-meta-test': 'data' },
//     };
  
//     const [response] = await file.generateSignedPostPolicyV4(options);
//     res.status(200).json(response);
//     console.log(response);
//   }