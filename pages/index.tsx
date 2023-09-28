import React from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const videoId = useSearchParams().get("v");
  const trackId = useSearchParams().get("s");
  return (
    <main className="flex min-h-screen justify-center items-center bg-zinc-900 p-8">
      {videoId ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
          width={1200}
          height={800}
          className="rounded-3xl shadow-xl shadow-black/20"
        />
      ) : trackId ? (
        <iframe
          src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="w-[800px] h-[354px] rounded-3xl"
        />
      ) : (
        <div className="p-8 bg-white shadow-black/20 rounded-3xl">
          Add{" "}
          <code className="bg-zinc-200 px-2 py-1 rounded font-bold">
            ?v=VIDEO_ID
          </code>{" "}
          for a YouTube video and{" "}
          <code className="bg-zinc-200 px-2 py-1 rounded font-bold">
            ?s=TRACK_ID
          </code>{" "}
          for a song on Spotify
        </div>
      )}
    </main>
  );
}
