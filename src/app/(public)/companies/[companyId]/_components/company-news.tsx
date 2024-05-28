import Image from 'next/image';

export default function CompanyNews() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <h5 className="font-bold text-gray-700 lg:text-xl">News from the company</h5>
      <div className="flex gap-5">
        <div className="flex flex-col gap-1"></div>
        <div className="flex flex-col lg:gap-8">
          <div className="flex justify-between py-0.5">
            <p className="flex-1 text-xs text-gray-500">Urna elementum nibh blandit tempus</p>
            <p className="text-xs font-semibold text-gray-700">1d ago</p>
          </div>
          <div className="flex justify-between py-0.5">
            <p className="flex-1 text-xs text-gray-500">
              Magna quis ut habitant amet. Tempus pretium pellentesque aliquam consequat suspendisse
              vitae malesuada accumsan lobortis.
            </p>
            <p className="text-xs font-semibold text-gray-700">7d ago</p>
          </div>
          <div className="flex justify-between py-0.5">
            <div className="flex flex-1 gap-2.5">
              <Image
                src={'/assets/company/team.png'}
                className="rounded-full"
                alt="Photo"
                width={50}
                height={50}
              />
              <p className="text-xs text-gray-500">
                Magna quis ut habitant amet. Tempus pretium pellentesque aliquam consequat
                suspendisse vitae malesuada accumsan lobortis.
              </p>
            </div>
            <p className="text-xs font-semibold text-gray-700">7d ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
