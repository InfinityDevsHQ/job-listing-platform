import { toast } from 'sonner';

export function copyToClipboard(text: string): void {
  // Create a textarea element to hold the text
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';

  // Add the textarea to the document
  document.body.appendChild(textarea);

  // Select and copy the text
  textarea.select();
  document.execCommand('copy');

  // Remove the textarea from the document
  document.body.removeChild(textarea);
  toast('Copied to Clipboard Successfully!');
}
