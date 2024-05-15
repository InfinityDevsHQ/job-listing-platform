import { UseMutationResult, useMutation } from '@tanstack/react-query';
type FormDataWithFile = FormData & {
  append(name: string, value: File): void;
};

const useUploadCV = (): UseMutationResult<{}, Error, FormDataWithFile> => {
  return useMutation(async (formData: FormDataWithFile) => {
    const response = await fetch('http://server1.neuromatch.pro:8001/api/v1/neural/upload-cv', {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) {
      throw new Error('Failed to upload file');
    }
    return response.json();
  });
};

export default useUploadCV;
