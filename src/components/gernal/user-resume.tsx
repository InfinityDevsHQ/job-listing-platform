import { Copy, File } from 'lucide-react';

export default function UserResume() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
        <File className="h-3 w-3 text-gray-500" />
      </div>
      <div className="flex flex-col">
        <h3 className="font-bold text-gray-700">Infinity Devs Resume.PDF</h3>
        <p className="text-gray-500">Created 4 hours ago</p>
      </div>
      <Copy className="h-3 w-4 text-gray-500" />
    </div>
  );
}
