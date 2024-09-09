import { Button } from '@/components/ui/button-new';
import Input from '@/components/ui/input';

export default function CompanySubscribe() {
  return (
    <div className="flex flex-col gap-8 rounded-md border border-dark-background3 p-8">
      <h5 className="font-bold text-dark-nameWhite lg:text-xl">
        Did&apos;t choose from current offers?
      </h5>
      <p className="text-dark-name lg:text-base">
        Leave us your email and we will keep you informed about new offers from Company. According
        to our rules.
      </p>
      <Input placeholder="Email" type="email" />
      <Button className="self-end" variant={'primary'}>
        Subscribe
      </Button>
    </div>
  );
}
