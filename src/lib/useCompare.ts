"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "spi-compare";
const MAX_COMPARE = 2;

function readStorage(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeStorage(ids: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  } catch {
    /* ignore */
  }
}

// Global subscribers so multiple components stay in sync
const subscribers = new Set<() => void>();
let globalIds: string[] = [];

function notify() {
  subscribers.forEach((fn) => fn());
}

export function useCompare() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    // Hydrate from storage once on client
    globalIds = readStorage();
    setIds([...globalIds]);

    const update = () => setIds([...globalIds]);
    subscribers.add(update);
    return () => {
      subscribers.delete(update);
    };
  }, []);

  const toggle = useCallback((id: string) => {
    if (globalIds.includes(id)) {
      globalIds = globalIds.filter((x) => x !== id);
    } else {
      if (globalIds.length >= MAX_COMPARE) {
        // Replace oldest
        globalIds = [...globalIds.slice(1), id];
      } else {
        globalIds = [...globalIds, id];
      }
    }
    writeStorage(globalIds);
    notify();
  }, []);

  const clear = useCallback(() => {
    globalIds = [];
    writeStorage([]);
    notify();
  }, []);

  const isSelected = useCallback(
    (id: string) => ids.includes(id),
    [ids]
  );

  return { ids, toggle, clear, isSelected, count: ids.length, max: MAX_COMPARE };
}
