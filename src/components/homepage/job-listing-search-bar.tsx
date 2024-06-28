'use client';
import Hero from '@/app/(public)/companies/_components/hero';
import useSearchQueryStore from '@/stores/searchQueryStore/store';
export default function JobListingSearchBard() {
  const { query, setQuery } = useSearchQueryStore();
  return (
    <Hero
      heading="Find your dream job here!"
      desc="Explore the latest job openings and apply for the best job opportunities available today!"
      vectorUrl="/assets/images/home/homePage_hero_section_vector.png"
      searchQuery={query}
      setSearchQuery={setQuery}
      search
    />
  );
}
