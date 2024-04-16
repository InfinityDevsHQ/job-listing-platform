import { Button } from "@/components/ui/button";
type AppsAuthProps = {
  google?: boolean;
  github?: boolean;
  linkedin?: boolean;
  auth: "login" | "register";
};
export default function AppsAuth({
  google,
  github,
  linkedin,
  auth,
}: AppsAuthProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      {google && (
        <Button className="flex gap-2 bg-neutral-50 px-4 py-2 border border-neutral-200 text-black font-sans leading-6 font-medium lg:text-15">
          <span></span>
          <span>Google</span>
        </Button>
      )}
      {github && (
        <Button className="flex gap-2 bg-neutral-50 px-4 py-2 border border-neutral-200 text-black font-sans leading-6 font-medium lg:text-15">
          <span></span>
          <span>Github</span>
        </Button>
      )}
      {linkedin && (
        <Button className="flex gap-2 bg-neutral-50 px-4 py-2 border border-neutral-200 text-black font-sans leading-6 font-medium lg:text-15">
          <span></span>
          <span>Linkedin</span>
        </Button>
      )}
    </div>
  );
}
