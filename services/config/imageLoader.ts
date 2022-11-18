interface imageLoaderInputType {
  src: string;
  width: string | number;
  quality: string | number;
}

export default function imageLoader({
  src,
  width,
  quality,
}: imageLoaderInputType) {
  return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${src}?w=${width}&q=${
    quality || 75
  }`;
}
