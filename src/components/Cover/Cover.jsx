import React from 'react'

const Cover = () => {
  return (
    <div className="md:h-screen md:pt-0 pt-4 w-full overflow-hidde">
      {/* Background Video */}
      <video
        className="w-full h-full object-contain"
        src="/optimised/tcp-cover-video.webm"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>

  )
}

export default Cover
