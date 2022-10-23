import express from 'express';
import resizeImg from '../../functions';
const image = express.Router();

image.get('/', async (req, res) => {
  const imgName = req.query.imgname as string;
  const height = req.query.height as string;
  const width = req.query.width as string;
  const heightInt = parseInt(height);
  const widthInt = parseInt(width);
  if (checkParameters(imgName, heightInt, widthInt) == true) {
    const resizeImage = await resizeImg(imgName, heightInt, widthInt);
    if (resizeImage == 'This image is not available, Please enter correct image name'
    ) {
      res.send(resizeImage);
    } else {
      res.sendFile(resizeImage);
    }
  } else {
    res.send('Sorry wrong entry, please reenter the queries');
  }
});

const checkParameters = (
  imgName: string,
  height: number,
  width: number
): boolean => {
  return imgName != undefined || height != undefined || width != undefined;
};

export default image;
