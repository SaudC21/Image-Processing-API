import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
const rootDir = path.resolve('./');

const resizeImg = async (
  imgName: string,
  height: number,
  width: number
): Promise<string> => {
  const newImage = path.join(rootDir, 'output', imgName + '-' + height + '-' + width + '-output.jpg')
  if (checkImage(imgName) == false) {
    return 'This image is not available, Please enter correct image name';
  } else if (checkFile(imgName, height, width) == true) {
    return newImage
  } else {
    await sharp(path.join(rootDir, 'Images', imgName + '.jpg'))
      .resize(width, height)
      .toFile(newImage);
    return newImage;
  }
};

const checkImage = (imgName: string): boolean => {
  // To check images from Images folder
  return fs.existsSync(path.join(rootDir, 'Images', imgName + '.jpg'));
};

const checkFile = (imgName: string, height: number, width: number): boolean => {
  // To check images from output folder
  return fs.existsSync(path.join(rootDir, 'Images', imgName + '-' + height + '-' + width + '-output.jpg'));
};

export default resizeImg;
