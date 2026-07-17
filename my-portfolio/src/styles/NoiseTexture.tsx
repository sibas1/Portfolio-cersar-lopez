type NoiseTextureProps = {
  opacity?: number; // 0.02 - 0.06 recomendado
};

export function NoiseTexture({ opacity = 0.04 }: NoiseTextureProps) {
return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        opacity,
        mixBlendMode: "multiply",
        backgroundImage: "url('/textures/denim.webp')",
        backgroundRepeat: "repeat",
      }}
    />
  );
}