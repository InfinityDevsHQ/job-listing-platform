import Image from 'next/image';
import UserHeader from '../gernal/user-header';
export default function CompaniesTrustedSection() {
  return (
    <section className="flex w-full flex-col items-center gap-8">
      <h2 className="text-2xl font-bold text-gray-700 lg:text-5xl">
        What our customers love about ClickJob
      </h2>
      <p className="text-gray-500">
        We are proud to be trusted by hundreds of companies from all over the world.We have asked
        some of them what they appreciate about ClickJob.
      </p>
      <div className="grid gap-4 lg:grid-cols-4">
        <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
          <Image
            src="/assets/companies/logos/company- (1).png"
            width={295}
            height={72}
            alt="company-1"
            className="mx-auto h-16 max-w-max lg:h-20"
          />
          <p className="text-center italic">
            “My team can reduce administration time by up to 40% through automations.”
          </p>
          <UserHeader user_name="John Doe" user_role="Software Engineer" />
        </div>
        <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
          <Image
            src="/assets/companies/logos/company- (2).png"
            width={295}
            height={72}
            alt="company-1"
            className="mx-auto h-16 max-w-max lg:h-20"
          />
          <p className="text-center italic">
            “My team can reduce administration time by up to 40% through automations.”
          </p>
          <UserHeader user_name="John Doe" user_role="Software Engineer" />
        </div>
        <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
          <Image
            src="/assets/companies/logos/company- (3).png"
            width={295}
            height={72}
            alt="company-1"
            className="mx-auto h-16 max-w-max lg:h-20"
          />
          <p className="text-center italic">
            “My team can reduce administration time by up to 40% through automations.”
          </p>
          <UserHeader user_name="John Doe" user_role="Software Engineer" />
        </div>
        <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
          <Image
            src="/assets/companies/logos/company- (4).png"
            width={295}
            height={72}
            alt="company-1"
            className="mx-auto h-16 max-w-max lg:h-20"
          />
          <p className="text-center italic">
            “My team can reduce administration time by up to 40% through automations.”
          </p>
          <UserHeader user_name="John Doe" user_role="Software Engineer" />
        </div>
        <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
          <Image
            src="/assets/companies/logos/company- (5).png"
            width={295}
            height={72}
            alt="company-1"
            className="mx-auto h-16 max-w-max lg:h-20"
          />
          <p className="text-center italic">
            “My team can reduce administration time by up to 40% through automations.”
          </p>
          <UserHeader user_name="John Doe" user_role="Software Engineer" />
        </div>
        <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
          <Image
            src="/assets/companies/logos/company- (6).png"
            width={295}
            height={72}
            alt="company-1"
            className="mx-auto h-16 max-w-max lg:h-20"
          />
          <p className="text-center italic">
            “My team can reduce administration time by up to 40% through automations.”
          </p>
          <UserHeader user_name="John Doe" user_role="Software Engineer" />
        </div>
        <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
          <Image
            src="/assets/companies/logos/company- (7).png"
            width={295}
            height={72}
            alt="company-1"
            className="mx-auto h-16 max-w-max lg:h-20"
          />
          <p className="text-center italic">
            “My team can reduce administration time by up to 40% through automations.”
          </p>
          <UserHeader user_name="John Doe" user_role="Software Engineer" />
        </div>
        <div className="flex flex-col gap-4 rounded-md border border-neutral-200 bg-white p-4 shadow-theme md:basis-1/2 lg:basis-1/6 lg:p-8">
          <Image
            src="/assets/companies/logos/company- (8).png"
            width={295}
            height={72}
            alt="company-1"
            className="mx-auto h-16 max-w-max lg:h-20"
          />
          <p className="text-center italic">
            “My team can reduce administration time by up to 40% through automations.”
          </p>
          <UserHeader user_name="John Doe" user_role="Software Engineer" />
        </div>
      </div>
    </section>
  );
}
