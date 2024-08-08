import React ,{ useState }  from "react";
import { FlatList, SafeAreaView} from "react-native";
import Config from "react-native-config";
import ProductCard from "../../src/components/ProductCard";
import useFetch from "../../src/hooks/useFetch";
import Loading from "../../src/components/Loading";
import Error from "../../src/components/Error"; 
import SearchBar from "../../src/components/SearchBar";

const Products = ({ navigation }) => { 
  const { loading, data, error } = useFetch(Config.API_URL);
  const [filteredData, setFilteredData] = useState([]);

  const handleProductSelect = (id) => {
    navigation.navigate('DetailPage' , {id});
  };



  const handleSearch = (text) => {
    const filtered = data.filter(item => item.category.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };
  
  
  
  
  const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect (item.id)} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }



  return (
    <SafeAreaView>
      <SearchBar onSearch={handleSearch}/>
      <FlatList data={filteredData.length > 0 ? filteredData : data} renderItem={renderProduct} />
    </SafeAreaView>
  );
};

export default Products;
