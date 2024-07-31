interface BackDropProps {
  onClick: () => void;
}

// When click the UserMenu, the backdrop of screen is dropping color
const BackDrop: React.FC<BackDropProps> = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
  z-20
  bg-slate-200
  opacity-50
  w-screen
  h-screen
  fixed
  top-0
  left-0
  "
    ></div>
  );
};

export default BackDrop;
