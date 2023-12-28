import { useState, useEffect, useReducer } from "react";

// Define actions for the reducer
// Define actions for the reducer
const fetchActions = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  SET_DELAYED: "SET_DELAYED",
  SET_CANCELED: "SET_CANCELED",
  RETRY: "RETRY",
} as const;

type FetchActionTypes<TPayload = any> = {
  type: (typeof fetchActions)[keyof typeof fetchActions];
  payload?: TPayload;
};

// Define the state type
type FetchState<T = any> = {
  isLoading: boolean;
  delayed: boolean;
  canceled: boolean;
  retryCount: number;
  data: T;
  errorMessage: string;
  hasError: boolean;
};
// Reducer function
function fetchReducer<
  TState extends FetchState,
  TAction extends FetchActionTypes<TPayload>,
  TPayload
>(state: TState, action: TAction) {
  const {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    SET_DELAYED,
    SET_CANCELED,
    RETRY,
  } = fetchActions;

  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
        delayed: false,
        canceled: false,
        retryCount: 0,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        hasError: true,
        isLoading: false,
      };
    case SET_DELAYED:
      return {
        ...state,
        delayed: true,
      };
    case SET_CANCELED:
      return {
        ...state,
        canceled: true,
      };
    case RETRY:
      return {
        ...state,
        retryCount: state.retryCount + 1,
      };
    default:
      return state;
  }
}

export function useFetchV2<TData = any>(
  url: string,
  options?: {
    retryAfterNumberOnError?: number;
  }
): {
  data: any;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
  delayed: boolean;
  canceled: boolean;
  retryCount: number;
} {
  const initialState = {
    data: null,
    isLoading: false,
    hasError: false,
    errorMessage: "",
    delayed: false,
    canceled: false,
    retryCount: 0,
  };

  const {
    FETCH_START,
    FETCH_SUCCESS,
    FETCH_ERROR,
    SET_DELAYED,
    SET_CANCELED,
    RETRY,
  } = fetchActions;

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const controller: AbortController = new AbortController();
    const signal: AbortSignal = controller.signal;
    let timeoutId: NodeJS.Timeout;

    const fetchData: (url: string) => Promise<void> = async (url: string) => {
      dispatch({ type: FETCH_START });

      try {
        timeoutId = setTimeout(() => {
          dispatch({ type: SET_DELAYED });
        }, 5_000); // Set delayed state after 5 seconds

        const response: Response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const dataFromFetch: TData = await response.json();
        dispatch({ type: FETCH_SUCCESS, payload: dataFromFetch });
        return;
      } catch (APIError: any) {
        console.error(`⚠ API Error: ${APIError} ⚠`);

        if (state.retryCount < 1) {
          dispatch({ type: RETRY });
          fetchData(url);
        } else {
          dispatch({ type: FETCH_ERROR, payload: APIError });
        }
      } finally {
        clearTimeout(timeoutId);
      }
    };

    fetchData(url);

    return () => {
      controller.abort();
      dispatch({ type: SET_CANCELED });
    };
  }, [url, state.retryCount]);

  return state;
}
