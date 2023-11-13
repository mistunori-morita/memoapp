import useAPIFetch from "../hooks/useAPIFetch";
import React, { ReactNode, createContext } from "react";
import { Memo } from "../types/memo";
import { Category } from "../types/category";

interface IApiDaaContext {
  token: string;
  resMemoFetchData: () => Promise<void>;
  resCategoryFetchData: () => Promise<void>;
  memos: Memo[];
  category: Category[];
  setToken: React.Dispatch<React.SetStateAction<string>>;
}
interface ApiDataProviderProps {
  children: ReactNode;
}

export const ApiDataContext = createContext<IApiDaaContext>({
  token: "",
  memos: [],
  category: [],
  setToken: "",
  resMemoFetchData: "",
  resCategoryFetchData: "",
} as unknown as IApiDaaContext);

export const ApiDataProvider: React.FC<ApiDataProviderProps> = (props) => {
  const { children } = props;

  const {
    resMemoFetchData,
    token,
    memos,
    setToken,
    resCategoryFetchData,
    category,
  } = useAPIFetch();

  return (
    <ApiDataContext.Provider
      value={{
        resMemoFetchData,
        resCategoryFetchData,
        token,
        memos,
        category,
        setToken,
      }}
    >
      {children}
    </ApiDataContext.Provider>
  );
};
