import placeholderImage from '../assets/no-image-placeholder-6f3882e0.webp'
const getCroppedImageURL = (url: string) => {
  if(!url) return placeholderImage;
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
};

export default getCroppedImageURL;
