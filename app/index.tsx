import { Text, View } from "react-native";
import { Link, Redirect } from 'expo-router'

export default function Index() {
  return (
    <Redirect href="/daily" />
  );
}
