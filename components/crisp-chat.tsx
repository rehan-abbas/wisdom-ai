"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9594c231-a30c-4f6c-82d5-329d82be49f9");
  }, []);

  return null;
};
