import { Button } from "@/components/ui/button";
type InputsTogglerProps = {
  open: string;
  setOpen: (value: "Candidate" | "Company") => void;
};
export default function InputsToggler({ open, setOpen }: InputsTogglerProps) {
  return (
    <div className="flex self-center p-1 rounded-md bg-gray-100">
      <Button
        className={`px-3 py-1.5 text-sm font-medium leading-5 ${
          open === "Candidate"
            ? "bg-white text-gray-900 hover:bg-white"
            : "bg-transparent text-gray-700 hover:bg-transparent"
        }`}
        type="button"
        onClick={() => setOpen("Candidate")}
      >
        Candidate
      </Button>
      <Button
        className={`px-3 py-1.5 text-sm font-medium leading-5 ${
          open === "Company"
            ? "bg-white text-gray-900 hover:bg-white"
            : "bg-transparent text-gray-700 hover:bg-transparent"
        }`}
        type="button"
        onClick={() => setOpen("Company")}
      >
        Company
      </Button>
    </div>
  );
}
