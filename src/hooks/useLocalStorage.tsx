import { useState, useEffect } from "react";
import { PersistedGoal } from "../types";

const originLocalStorageKey = "origin";

interface LocalStorageGoal {
  [key: string]: PersistedGoal;
}

export default function useLocalStorage() {
  const [data, setData] = useState<LocalStorageGoal | null>(() => {
    const originData = window.localStorage.getItem(originLocalStorageKey);

    if (originData) {
      const originDataJSON = JSON.parse(originData) as LocalStorageGoal;

      return originDataJSON;
    }

    return null;
  });

  useEffect(() => {
    window.localStorage.setItem(originLocalStorageKey, JSON.stringify(data));
  }, [data]);

  return { data, setData };
}
