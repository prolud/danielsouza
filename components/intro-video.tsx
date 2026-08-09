"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { basePath } from "@/lib/site";

const VIDEO_PATH = `${basePath}/videos/initial-video.mp4`;

function subscribe() {
  return () => {};
}

function isMobileDevice() {
  return /Android|iPhone|iPod|Opera Mini|IEMobile|BlackBerry|Windows Phone|Mobile/i.test(
    navigator.userAgent,
  );
}

export function IntroVideo() {
  const [fadeOut, setFadeOut] = useState(false);
  const [done, setDone] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const isMobile = useSyncExternalStore(subscribe, isMobileDevice, () => false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const show = mounted && !isMobile && !prefersReducedMotion && !done;

  useEffect(() => {
    if (!show) return;
    videoRef.current?.play()?.catch(() => setDone(true));
  }, [show]);

  function handleTimeUpdate() {
    const video = videoRef.current;
    if (!video) return;
    if (video.duration - video.currentTime <= 1) {
      setFadeOut(true);
    }
  }

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity ${
        fadeOut ? "duration-1000" : "duration-300"
      } ${!ready || fadeOut ? "opacity-0" : "opacity-100"}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        src={VIDEO_PATH}
        className="h-full w-full object-cover"
        muted
        playsInline
        onLoadedData={() => setReady(true)}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setDone(true)}
        onError={() => setDone(true)}
        data-vc-page-audio-managed="false"
      />
    </div>
  );
}
