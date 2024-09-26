import Image from 'next/image';

export default function CompanyNews() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <h5 className="font-bold text-dark-nameWhite lg:text-xl">News from the company</h5>
      <div className="flex gap-5">
        <div className="flex gap-5">
          <Image
            src={'/assets/company/progress-bar.png'}
            width={10}
            height={164}
            alt="progress bar"
          />
          <div className="flex flex-col lg:gap-5">
            <div className="flex justify-between py-0.5 text-dark-name">
              <p className="flex-1 text-xs">Urna elementum nibh blandit tempus</p>
              <p className="text-xs font-semibold">1d ago</p>
            </div>
            <div className="flex justify-between py-0.5 text-dark-name">
              <p className="flex-1 text-xs ">
                Magna quis ut habitant amet. Tempus pretium pellentesque aliquam consequat
                suspendisse vitae malesuada accumsan lobortis.
              </p>
              <p className="text-xs font-semibold">7d ago</p>
            </div>
            <div className="flex justify-between py-0.5">
              <div className="flex flex-1 gap-2.5 text-dark-name">
                <Image
                  src={'/assets/company/team.png'}
                  className="size-12 rounded-full"
                  alt="Photo"
                  width={50}
                  height={50}
                />
                <p className="text-xs ">
                  Magna quis ut habitant amet. Tempus pretium pellentesque aliquam consequat
                  suspendisse vitae malesuada accumsan lobortis.
                </p>
              </div>
              <p className="text-xs font-semibold ">7d ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
