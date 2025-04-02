import { useState, useEffect, useReducer, useCallback, useMemo } from "react";

const initialState = { text: "", count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEXT":
      return { text: action.payload, count: action.payload.length };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const useCharacterCount = (maxLimit = 200) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [copied, setCopied] = useState(false);

  const handleTextChange = useCallback((e) => {
    const inputText = e.target.value;
    if (inputText.length <= maxLimit) {
      dispatch({ type: "UPDATE_TEXT", payload: inputText });
    }
  }, [maxLimit]);

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(state.text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [state.text]);

  const warning = useMemo(
    () => state.count >= maxLimit * 0.9,
    [state.count, maxLimit]
  );

  return { state, handleTextChange, copyToClipboard, copied, warning, maxLimit };
};

export default useCharacterCount;
