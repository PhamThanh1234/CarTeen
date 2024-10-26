import { useRef, useEffect } from 'react';
import video from '../../assets/xe.mp4';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  // Tự động phát video khi component được mount
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Nếu tab bị ẩn, tạm dừng video và tắt tiếng
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.muted = true;
        }
      } else {
        // Khi quay lại tab, phát tiếp và bật âm thanh
        if (videoRef.current) {
          videoRef.current.play().catch((error) => {
            console.error('Error playing video:', error);
          });
          videoRef.current.muted = false;
        }
      }
    };

    // Lắng nghe sự kiện visibilitychange
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={video}
      onLoadedData={() => console.log('Video loaded')}
        
      
    />
  );
};

export default VideoPlayer;