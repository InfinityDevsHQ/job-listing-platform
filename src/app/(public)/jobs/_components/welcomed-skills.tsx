import InfoSection from '@/components/ui/info-section';

export default function WelcomedSkills() {
  return (
    <InfoSection heading="Welcomed skills">
      <ul className="ml-6 list-image-[url('/assets/images/jobs/send.png')] indent-4">
        <li className="mb-4 text-xs text-gray-500 lg:text-base">
          Proficient in Python programming language with a strong understanding of Django and
          FastAPI frameworks.
        </li>
        <li className="mb-4 text-xs text-gray-500 lg:text-base">
          Experience in developing and maintaining scalable web applications using Python.
        </li>
        <li className="mb-4 text-xs text-gray-500 lg:text-base">
          Ability to mentor and provide technical guidance to junior developers in Python and
          related frameworks.
        </li>
        <li className="mb-4 text-xs text-gray-500 lg:text-base">
          Strong problem-solving skills and the ability to troubleshoot and debug complex issues in
          Python applications.
        </li>
        <li className="mb-4 text-xs text-gray-500 lg:text-base">
          Familiarity with software development best practices, including code reviews, testing, and
          documentation.
        </li>
        <li className="mb-4 text-xs text-gray-500 lg:text-base">
          Excellent communication skills and the ability to collaborate effectively with
          cross-functional teams.
        </li>
      </ul>
    </InfoSection>
  );
}
