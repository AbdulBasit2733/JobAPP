import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const jobTypes = ["Full Time", "Part-Time", "Contract"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full Time");

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.welcomeMessage}>Find Your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you Looking For ?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          keyExtractor={(item) => item} // Unique key for each item
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          key={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
