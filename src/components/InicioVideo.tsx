import './InicioVideo.css'

const InicioVideo = () => {
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source src="/public/images/dogsVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default InicioVideo