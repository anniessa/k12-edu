import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function HomeScreen() {
  const navigation = useNavigation();
  const GradeNames = [
    { name: "First Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Second Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Third Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Fourth Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Fifth Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Sixth Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Seventh Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Eighth Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Ninth Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Tenth Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Eleventh Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Eleventh-S Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Twelfth Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Twelfth-S Grade" , nav:()=>{navigation.navigate("")}},
    { name: "Twelfth-T Grade" , nav:()=>{navigation.navigate("")}},
  ];
  return (
    <View>
      {GradeNames.map((grade) => {})}
      <Text></Text>
    </View>
  );
}
