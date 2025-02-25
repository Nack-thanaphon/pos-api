import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  formatNumber(num: number): string {
    if (num == null) {
      return '0';
    }

    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return num.toString();
    }
  }
  isBase64(str: string): boolean {
    if (str === '' || str.trim() === '') {
      return false;
    }
    try {
      return btoa(atob(str)) === str;
    } catch (err) {
      return false;
    }
  }
}
