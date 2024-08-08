import React from "react";
import { View, Text, Image } from "react-native";
import styles from './Detail.style';
import useFetch from "../../src/hooks/useFetch";
import Loading from "../../src/components/Loading";
import Error from "../../src/components/Error";
import Config from "react-native-config";

const Detail = ({ route }) => {
  const { id } = route.params; // route.params'dan id'yi al
  const { loading, error, data } = useFetch(`${Config.API_URL}/${id}`); // URL'yi dinamik olarak oluştur

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.image} />
      <View style={styles.body_container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <Text style={styles.price}>{data.price}₺</Text>
      </View>
    </View>
  );
};

export default Detail;
