import { useRouter } from "next/navigation";

export const useQueryParams = () => {
  const router = useRouter();
  const addQueryParam = (key: string, value: string) => {
    router.push(`?${key}=${value}`);
  };
  return addQueryParam;
};
