import MagnifyingGlassIcon from '@/components/svgs/magnifying-glass';
import Input from '@/components/ui/input';
import CandidateCard from './_components/candidate-car';
export default function Candidates() {
  return (
    <div className="flex flex-col gap-4 p-4 lg:gap-8 lg:p-8">
      <div
        className="grid grid-cols-3 items-center overflow-hidden rounded-md bg-cover p-4 lg:gap-8 lg:p-8"
        style={{
          background: "url('/assets/images/home/homePage_hero_section_bg.png')",
        }}
      >
        <div className="col-span-3 flex flex-col gap-4 lg:gap-8">
          <h2 className="text-lg font-bold text-white lg:text-3xl">
            Find Best Candidates for You!
          </h2>
          <Input
            variant={'primary'}
            type="text"
            name="search"
            placeholder="Search"
            leadingIcon={<MagnifyingGlassIcon />}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3">
        <CandidateCard />
      </div>
    </div>
  );
}
