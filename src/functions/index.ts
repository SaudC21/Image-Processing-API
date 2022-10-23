import sharp from 'sharp';
import fs from 'fs';
import { resolve } from 'path';
const rootDir = resolve('./');

const resizeImg = async (
  imgName: string,
  height: number,
  width: number
): Promise<string> => {
  if (checkImage(imgName) == false) {
    return 'This image is not available, Please enter correct image name';
  } else if (checkFile(imgName, height, width) == true) {
    return rootDir + `\\output\\${imgName}-${height}-${width}-output.jpg`;
  } else {
    await sharp(rootDir + '\\Images\\' + imgName + '.jpg')
      .resize(width, height)
      .toFile(`${rootDir}\\output\\${imgName}-${height}-${width}-output.jpg`);
    return `${rootDir}\\output\\${imgName}-${height}-${width}-output.jpg`;
  }
};

const checkImage = (imgName: string): boolean => {
  const folder = `${rootDir}\\Images\\`;
  return fs.existsSync(`${folder}${imgName}.jpg`);
};

const checkFile = (imgName: string, height: number, width: number): boolean => {
  const folder = `${rootDir}\\output\\`;
  return fs.existsSync(`${folder}${imgName}-${height}-${width}-output.jpg`);
};

export default resizeImg;
