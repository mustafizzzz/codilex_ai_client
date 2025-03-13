const ImageStack = () => {
  const imageSrc = "https://randomuser.me/api/portraits/men/4.jpg";
  const alt = "Legal professional signing documents";
  return (
    <div className="relative w-full max-w-md aspect-square">
      {/* Background images - same image repeated but blurred and offset */}
      <img
        src={imageSrc}
        alt={alt}
        className="absolute top-10 left-10 w-full h-full object-cover rounded-md blur-xs opacity-50"
      />

      <img
        src={imageSrc}
        alt={alt}
        className="absolute top-6 left-6 w-full h-full object-cover rounded-md blur-xs opacity-60"
      />

      {/* Main image - clear and in front */}
      <img
        src={imageSrc}
        alt={alt}
        className="relative z-10 w-full h-full object-cover rounded-md shadow-md"
      />
    </div>
  );
}

export default ImageStack

