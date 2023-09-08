import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// useData<Genre>("/genres");

function useGenres() {
  return { data: genres, isLoading: false, error: false };
}

export default useGenres;
