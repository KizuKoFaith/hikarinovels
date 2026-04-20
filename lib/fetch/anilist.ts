const ANILIST_API = "https://graphql.anilist.co";

export async function fetchAnilistById(id: number) {
  const query = `
    query ($id: Int) {
      Media(id: $id, type: MANGA) {
        id
        title {
          romaji
          english
          native
        }
        description
        coverImage {
          extraLarge
          large
          color
        }
        bannerImage
        genres
        averageScore
        popularity
        favourites
        status
        chapters
        volumes
        startDate {
          year
          month
          day
        }
      }
    }
  `;

  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query, variables: { id } }),
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`AniList fetch failed: ${res.status}`);

  const json = await res.json();
  return json.data.Media;
}