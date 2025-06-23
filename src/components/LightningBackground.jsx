import Lightning from './Lightning';

const LightningBackground = () => {
  return (
    <div className="fixed inset-0 z-[0] w-full h-full">
      <Lightning
        hue={270} // violet
        xOffset={0}
        speed={0.8}
        intensity={1.2}
        size={1.1}
      />
    </div>
  );
};

export default LightningBackground;
