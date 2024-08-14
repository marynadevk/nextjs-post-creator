import { envConfig } from '@/config';
import { v2 as cloudinary } from 'cloudinary';
import { env } from 'process';

if (!envConfig.cloud_name) {
  throw new Error('CLOUDINARY_CLOUD_NAME is not set');
}

if (!envConfig.api_key) {
  throw new Error('CLOUDINARY_API_KEY is not set');
}

if (!envConfig.api_secret) {
  throw new Error('CLOUDINARY_API_SECRET is not set');
}

cloudinary.config({
  cloud_name: envConfig.cloud_name,
  api_key: envConfig.api_key,
  api_secret: envConfig.api_secret,
});

export async function uploadImage(image: File) {
  const imageData = await image.arrayBuffer();
  const mime = image.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(imageData).toString('base64');
  const fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;
  const result = await cloudinary.uploader.upload(fileUri, {
    folder: 'nextjs-course-mutations',
  });
  return result.secure_url;
}
