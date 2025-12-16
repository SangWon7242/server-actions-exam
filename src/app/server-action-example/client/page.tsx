"use client";

import getMessage from "@/app/anything";
import { useEffect, useState } from "react";

const ClientExample = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const updateViews = async () => {
      const data = await getMessage();
      setMessage(data);
    };

    updateViews();
  }, []);

  return (
    <div>
      <h1>Client Example</h1>
      <p>{message}</p>
    </div>
  );
};

export default ClientExample;
