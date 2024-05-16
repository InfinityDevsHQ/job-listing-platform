import { Button } from '@/components/ui/button-new';
import Input from '@/components/ui/input';

export default function CompanySubscribe() {
  return (
    <div className="flex flex-col gap-8 rounded-md border border-gray-200 p-8">
      <h5 className="font-bold text-gray-700 lg:text-xl">Did&apos;t choose from current offers?</h5>
      <p className="text-gray-500 lg:text-base">
        Leave us your email and we will keep you informed about new offers from Company. According
        to our rules.
      </p>
      <Input placeholder="Email" type="email" />
      <Button className="self-end">Subscribe</Button>
    </div>
  );
}
