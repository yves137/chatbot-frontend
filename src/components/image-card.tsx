interface ImageCardProp {
  imageName: string;
  content: string;
}

const ImageCard = ({ imageName, content }: ImageCardProp) => {
  return (
    <div className="relative h-52 w-full hover:cursor-pointer">
      <img
        src={imageName}
        alt="Business"
        className="h-52 w-full object-cover"
      />
      <div className="group absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-65 duration-300 text-white flex justify-center items-center">
        <span className="flex flex-col gap-2">
          <span className="uppercase">{content}</span>
          <span className="h-[1px] bg-[#DD9933] w-2/3 mx-auto group-hover:w-full duration-300" />
        </span>
      </div>
    </div>
  );
};

export default ImageCard;
