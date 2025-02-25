import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor(private configService: ConfigService) {
    cloudinary.config({
      cloud_name: this.configService.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET'),
    });
  }

  async uploadImage(imagePath: string): Promise<string> {
    try {
      const result = await cloudinary.uploader.upload(imagePath);
      return result.secure_url;
    } catch (error) {
      throw new Error('Failed to upload image to Cloudinary');
    }
  }
}