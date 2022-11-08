import { useNavigation, useRoute } from "@react-navigation/native";

export function useAppNavigation() {
  return useNavigation();
}

export function useAppRoute() {
  return useRoute();
}
