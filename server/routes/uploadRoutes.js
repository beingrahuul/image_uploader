import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary } from 'cloudinary';

dotenv.config();

const router = express.Router()

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

router.route('/').post(async (req, res) => {
  try {
    const {name, data} = req.body;
    const photoUrl = await cloudinary.uploader.upload(data, {quality: "auto"});
    console.log(photoUrl)
    res.status(200).send({photoUrl: photoUrl.url, name: name});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An internal server error occurred' });
  }
});


export default router