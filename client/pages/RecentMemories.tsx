import { useState } from "react";

const images = [
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fc0a9ee6a50504d60b47b20229914dc25?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F82f62198bdff47ee81053c76688a1d56?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F840dabc09281496c8ebd3e137cefa810?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fa57152458eed4ea084fcc846e6c4943a?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F6b88f2cb8f10435cbc8ff1882974cd19?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fc6e70688b0474c73b4ac313c9d8b5f37?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F2565fde0c02b4203a646b11f25d24993?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F1c103f44ac6e4631a48e68cc01888dd7?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F48485228b55548528d142552cdb0cee3?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fb1773824bf4d45ada0dfba3a45dfcca4?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fc995676174d24d8c9300afc440db9d8c?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F680021a301d740aa8d43de73ecfeda20?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F4d35054c11e44a4b91f985a03018e9f3?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F4f68b159175f4c8c92d98b5f1d3fce4e?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F0b34e960800749f9acfd3a08ad53867a?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F1cf32bd21529472cbf6d80c57770f463?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F1e79b2b040fd4748905ef464adb190e2?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F91146066c0ca49ecbba66a96fea5bb2f?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Ff8aa11ef09ad4131b494ce78fc7aa9e2?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F960f8b616a894fc38066debb1bfa8872?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F7128ea27c4ed4da5978134f031c031aa?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F5b5e71bdf51640f387eaca90f730d633?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fe309905da59644f89762d6fc5d63e7a8?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Ffc34fe7ab331480fb419552ca31233a9?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F6790eae07ad542adb089ef93fe1367f8?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fa1b3f0ada0154e75b4f3fc1c405415d8?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fed3a4baa648a4ca29c32e08f737d942f?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F3fc3dea9308249519e3069f3f2b33745?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F62248f26104f4a51ad0478ff6584b734?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fce2ed467085f4432bce4a67abc091124?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fd0b579d8347848da9e4cfb0fb308d137?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F5c07c35ba2f0441b85cfe0e8161565c2?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F7441c1ad27cf4b33aa7154a799ea5306?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fa0aabac2053e41788ed24c8aacd4d978?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fd9548e06d94141b2bd0ddae6da0cf835?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F0cc2caa1cedd46cfa66d4aee3e5eb288?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fe99aad072b764ae18871555be36460a5?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fc6e7d2459acd46c8935e5620015d15bb?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F63564bf7971445bda1dddd34839969de?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2Fb2161774aad9437193e210e10f910821?format=webp&width=1600",
  "https://cdn.builder.io/api/v1/image/assets%2F5c8403a2bf35488089d7cfb848ab6544%2F81197dc1637f4756a773c1f09c4bf368?format=webp&width=1600",
];

export default function RecentMemories() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative">
      <div className="relative overflow-hidden bg-gradient-to-b from-secondary/10 via-background to-background">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Gallery Area</p>
            <h1 className="mt-3 font-display text-3xl md:text-5xl leading-tight">Recent Memories</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              A curated look back at highlights, exhibitions, speakers and the community that powers manufacturing across West Africa.
            </p>
          </div>
        </div>
      </div>

      {/* gallery-area */}
      <div className="container -mt-10 md:-mt-16">
        <div className="rounded-2xl border border-border bg-card p-4 md:p-6 shadow-xl">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]"></div>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
            {images.map((src, i) => (
              <figure key={i} className="mb-4 break-inside-avoid rounded-xl overflow-hidden group relative animate-fade-up">
                <img
                  src={src}
                  alt={`Manufacturers Energy Security & Energy Efficiency Summit memory ${i + 1}`}
                  className="w-full h-auto object-cover transition duration-300 group-hover:scale-[1.02]"
                  onClick={() => setActive(i)}
                />
                <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition flex items-end">
                  <div className="p-3 text-white text-sm">Memories {i + 1}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <img
            src={images[active]}
            alt={`Expanded memory ${active + 1}`}
            className="max-h-[90dvh] w-auto rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
