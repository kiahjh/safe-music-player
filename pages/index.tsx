import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const videoId = useSearchParams().get('v');
  return (
    <main className="flex min-h-screen justify-center items-center bg-zinc-900">
      {videoId ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          width={1200}
          height={800}
          className="rounded-3xl shadow-xl shadow-black/20"
        />
      ) : (
        <div className="p-8 bg-white shadow-black/20 rounded-3xl">
          Add <code className="bg-zinc-200 px-2 py-1 rounded font-bold">?v=VIDEO_ID</code>{' '}
          to the end of the URL to watch a video
        </div>
      )}
    </main>
  );
}
