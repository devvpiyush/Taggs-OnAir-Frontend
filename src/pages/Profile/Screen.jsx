function Screen({ profilePictureUrl, toggleFullScreen }) {
  return (
    <div
      className="absolute h-dvh flex items-center justify-center inset-0 bg-gray-300/30 backdrop-blur-sm cursor-pointer rounded-md"
      onClick={toggleFullScreen}
    >
      <img
        src={profilePictureUrl}
        alt="Profil_Picture"
        className="p-2 min-w-40 max-w-40 border-4 border-gray-800/70 rounded-full cursor-pointer"
      />
    </div>
  );
}

export default Screen;
