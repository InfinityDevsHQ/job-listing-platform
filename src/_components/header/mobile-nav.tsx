import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function MobileNav() {
  return (
    <div className="flex lg:hidden">
      <span>
        <Button type="button" aria-label="Messages">
          <Mail size={30} className="text-neutral-400" />
        </Button>
      </span>
      <span>
        <button type="button" aria-label="Notifications">
          {/* Notification icons here */}
        </button>
      </span>
      <span>
        <button type="button" aria-label="Profile">
          {/* User profile picture/avatar/profile-icon here */}
        </button>
      </span>
    </div>
  );
}
