
import { DestinationDetails } from "@/components/DestinationTemplate";
import { jaipurData } from "./jaipur";
import { delhiData } from "./delhi";
import { mathuraVrindavanData } from "./mathura-vrindavan";
import { agraData } from "./agra";

// Export a combined object for easy access
export const allDestinations: Record<string, DestinationDetails> = {
  jaipur: jaipurData,
  delhi: delhiData,
  "mathura-vrindavan": mathuraVrindavanData,
  agra: agraData
};

// For use in other components where we need a simple list
export const destinationsList = [
  { id: "jaipur", name: "Jaipur", nickname: "Pink City" },
  { id: "delhi", name: "Delhi", nickname: "Heart of India" },
  { id: "mathura-vrindavan", name: "Mathura & Vrindavan", nickname: "Land of Krishna" },
  { id: "agra", name: "Agra", nickname: "City of Taj Mahal" },
];

// Re-export individual destination data
export { jaipurData } from "./jaipur";
export { delhiData } from "./delhi";
export { mathuraVrindavanData } from "./mathura-vrindavan";
export { agraData } from "./agra";
