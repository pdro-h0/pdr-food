import Image, { ImageProps } from 'next/image'

const PromoBanner = ( props : ImageProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      height={0}
      width={0}
      className="h-auto w-full object-contain"
      sizes="100vw" />
  );
};

export default PromoBanner