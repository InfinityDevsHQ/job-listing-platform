import CompanyTeam from './company-team';
import CompanyTechnologies from './company-technologies';
import SectionHeading from './section-heading';
type CompanyAboutProps = {
  className?: string;
};
export default function CompanyAbout({ className }: CompanyAboutProps) {
  return (
    <div className={`flex flex-col gap-4 lg:gap-7 ${className}`}>
      <SectionHeading text="About" />
      <p className="text-base text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat in totam nisi!
        Tempore reprehenderit quibusdam quasi voluptas. Laboriosam nesciunt libero quod commodi
        facilis rerum recusandae veritatis. Placeat, quos dolorum?
      </p>
      <p className="text-base text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat in totam nisi!
        Tempore reprehenderit quibusdam quasi voluptas. Laboriosam nesciunt libero quod commodi
        facilis rerum recusandae veritatis. Placeat, quos dolorum? Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Commodi minima incidunt inventore quod quaerat provident
        numquam voluptatibus maxime velit atque quis, impedit tempore autem dolores? Officiis qui
        quos distinctio sequi!
      </p>
      <CompanyTechnologies />
      <CompanyTeam />
    </div>
  );
}
