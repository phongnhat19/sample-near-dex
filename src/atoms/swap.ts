import { SUPPORTED_TOKENS } from "config/supportedTokens";
import { atom } from "recoil";
import { Token } from "types/token";

export const swapSlippageToleranceState = atom({
  key: "swapSlippageToleranceState",
  default: "0.5",
});

export const inputTokenState = atom<Token>({
  key: "inputTokenState",
  default: SUPPORTED_TOKENS[0]
})

export const swapInputState = atom<string>({
  key: "swapInputState",
  default: ""
})

export const outputTokenState = atom<Token>({
  key: "outputTokenState",
  default: SUPPORTED_TOKENS[1]
})

export const swapOutputState = atom<string>({
  key: "swapOutputState",
  default: ""
})