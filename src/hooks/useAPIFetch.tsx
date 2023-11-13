import { useState, useEffect } from "react";
import { Memo } from "../types/memo";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { BASE_URL } from "../constants/common";
import { Category } from "../types/category";

const useAPIFetch = () => {
  const [token, setToken] = useState<string>("");
  const [memos, setMemos] = useState<Memo[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
  const isValidUuid = uuidRegex.test(token);

  const resMemoFetchData = async () => {
    if (isValidUuid) {
      try {
        const response = await axios.get(`${BASE_URL}/memo`, {
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });

        setMemos(response.data);
        console.log("Memo:", response.data);
      } catch (error) {
        console.error("API Request Error:", error || error);
      }
    } else {
      console.error("Invalid UUID format");
      setToken("");
    }
  };

  const resCategoryFetchData = async () => {
    if (isValidUuid) {
      try {
        const response = await axios.get(`${BASE_URL}/category`, {
          headers: {
            "X-ACCESS-TOKEN": token,
          },
        });
        setCategory(response.data);
        console.log("Category:", response.data);
      } catch (error) {
        console.error("API Request Error:", error || error);
      }
    } else {
      console.error("Invalid UUID format");
      setToken("");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      tokenInit();
    }, 1000);
  }, []);

  const tokenInit = () => {
    const generatedUuid = uuidv4();
    setToken(generatedUuid);
  };

  return {
    memos,
    category,
    token,
    resMemoFetchData,
    resCategoryFetchData,
    setToken,
  };
};

export default useAPIFetch;
