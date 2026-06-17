
export default function VideoComponent() {
  return (
    <div className="video-wrapper" >
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} >
        <iframe 
          src="https://player.vimeo.com/video/943623829?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1" 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
          title="PawMate" 
        ></iframe>
      </div>
    </div>
  );
}