import React, { useCallback, useEffect, useState } from "react";
import copy from "copy-to-clipboard";

const useCopyToClipboard = (resetInterval = null) => {
  const [isCopied, setCopied] = useState(false);

  const handleCopy = useCallback((text) => {
    if (typeof text === "string" || typeof text == "number") {
      copy(text.toString());
      isCopied(true);
    } else {
      isCopied(false);
      console.log(
        `Cannot copy typeof ${typeof text} to clipboard, must be a string or a number.`
      );
    }
  }, []);

  useEffect(() => {
    let timeout;
    if (isCopied && resetInterval) {
      timeout = setTimeout(() => setCopied(false), resetInterval);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isCopied, resetInterval]);

  return [isCopied, handleCopy];
};

export default useCopyToClipboard;
