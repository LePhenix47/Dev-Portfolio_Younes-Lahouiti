import { useState, useEffect } from "react";

export function useFetchV1(url: string): {
  data: any;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
  delayed: boolean;
  canceled: boolean;
} {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [hasError, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [delayed, setDelayed] = useState<boolean>(false);
  const [canceled, setCanceled] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState<number>(0);

  useEffect(() => {
    const controller: AbortController = new AbortController();
    const signal: AbortSignal = controller.signal;
    let timeoutId: NodeJS.Timeout;

    setLoading(true);
    setDelayed(false);
    setCanceled(false);

    if (!url) {
      return;
    }

    const fetchData = async (): Promise<void> => {
      try {
        // Set delayed state after 5 seconds
        timeoutId = setTimeout(() => {
          setDelayed(true);
        }, 5_000);

        const response: Response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const dataFromFetch: any = await response.json();
        setData(dataFromFetch);
      } catch (APIError: any) {
        console.error(`⚠ API Error: ${APIError} ⚠`);

        // We refetch if we have an error
        if (retryCount < 1) {
          // Retry on the first failure
          setRetryCount((count) => count + 1);
        } else {
          setErrorMessage(APIError);
          setError(true);
        }
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup function: Abort the fetch and set canceled state if the component is unmounted
      controller.abort();
      setCanceled(true);
    };
  }, [url, retryCount]);

  return { data, isLoading, hasError, errorMessage, delayed, canceled };
}
