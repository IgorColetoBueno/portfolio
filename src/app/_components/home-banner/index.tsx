"use client";
import { PropsWithChildren, useEffect, useRef, useState } from "react";

interface HomeSectionProps {}

const HomeSection = ({ children }: PropsWithChildren<HomeSectionProps>) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadingPercentage, setLoadingPercentage] = useState<number>(0);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleLoadStart = () => {
        setLoadingPercentage(0);
      };

      const handleProgress = () => {
        if (video.buffered.length > 0) {
          const bufferedEnd = video.buffered.end(0);
          const duration = video.duration;
          const bufferedPercentage = (bufferedEnd / duration) * 100;
          setLoadingPercentage(bufferedPercentage);
        }
      };

      const handleLoadedMetadata = () => {
        if (video.buffered.length > 0) {
          const bufferedEnd = video.buffered.end(0);
          const duration = video.duration;
          const bufferedPercentage = (bufferedEnd / duration) * 100;
          setLoadingPercentage(bufferedPercentage);
        }
      };

      video.addEventListener("loadstart", handleLoadStart);
      video.addEventListener("progress", handleProgress);
      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        video.removeEventListener("loadstart", handleLoadStart);
        video.removeEventListener("progress", handleProgress);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

  return (
    <section>
      <video
        ref={videoRef}
        className="fixed h-screen w-screen object-cover z-[-1]"
        autoPlay
        loop
        muted
      >
        <source src="/home-banner.mp4" type="video/mp4" />
        <div className="h-screen w-screen bg-gray-700">
          <div
            className="absolute bottom-0 left-0 w-0 h-3 bg-cyan-500"
            style={{ width: `${loadingPercentage}%` }}
          />
        </div>
      </video>
      {children}
    </section>
  );
};

export default HomeSection;
