import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";
export function CardPlayButton({ id, size = "small" }) {
  const { currentMusic, setCurrentMusic, isPlaying, setIsPlaying } =
    usePlayerStore((state) => state);

  const isPlayingPlayList = isPlaying && currentMusic?.playlist?.id === id;
  const handleClick = () => {
    if (isPlayingPlayList) {
      setIsPlaying(false);
      return;
    }
    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { playlist, songs } = data;
        setIsPlaying(true);
        setCurrentMusic({ playlist, songs, song: songs[0] });
      });
  };

  const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4 hover_scale-105 transition hover:bg-green-400"
    >
      {isPlayingPlayList ? (
        <Pause className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  );
}
