import { toast } from 'react-toastify';

const parseResponseForErrors = (response: Response, data: any) => {
  if (!response.ok) {
    const errorString = `${response.status}: ${response.statusText}`;
    toast.error(String(errorString));
    throw new Error(errorString);
  }
  if (data?.error) {
    toast.error(String(data.error));
    throw new Error(data.error);
  }
};

export const getRequest = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  parseResponseForErrors(response, data);
  return data;
};
