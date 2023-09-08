// import useData from "./useData";
import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// useData<Platform>("/platforms/lists/parents")

function usePlatforms() {
  return { data: platforms, isLoading: false, error: false };
}

export default usePlatforms;
