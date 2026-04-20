import { createClient } from "@/lib/supabase/server"
import { fetchAnilistById } from "@/lib/fetch/anilist"
import Image from "next/image";

export default async function Hero() {
  const supabase = await createClient();
  const { data: novels, error } = await supabase
    .from("series")
    .select("anilist_id, cover_url")
    .order("favorites", { ascending: false })
    .range(0, 3);
    
    console.log("novels:", novels);
console.log("error:", error);

  if (error) console.error(error);

  const anilistData = await Promise.all(
    (novels ?? []).map((novel) => fetchAnilistById(novel.anilist_id))
  );

  return (
    <section className="hero-section w-full max-w-full md:px-10 md:py-6">
      {/* Desktop */}
      <div className="hidden md:flex justify-between items-center gap-2">
        {novels?.map((novel, index) => (
          <div key={novel.anilist_id} className="flex-1 h-[340px] rounded overflow-hidden relative">
            <Image
              src={novel.cover_url}
              alt={anilistData[index]?.title?.romaji ?? "Novel cover"}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}