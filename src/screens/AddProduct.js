import React from "react";
import prompt from "react-native-prompt-android";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Body,
  Container,
  Content,
  List,
  ListItem,
  Right,
  Text,
  Fab,
  Icon,
} from "native-base";
import {
  View,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  NativeModules,
} from "react-native";

export default class AddProduct extends React.Component {
  static navigationOptions = {
    title: "Add a product",
  };

  constructor(props) {
    super(props);
    this.state = {
      allProducts: [
        { id: 1, name: "plain yoghurt" },
        { id: 2, name: "bread" },
        { id: 3, name: "smoked meat" },
        { id: 4, name: "eggs" },
        { id: 5, name: "milk" },
        { id: 6, name: "broccoli" },
        { id: 7, name: "paper towels" },
        { id: 8, name: "blue cheese" },
      ],
      productsInList: [],
    };
  }

  async componentDidMount() {
    const savedProducts = await AsyncStorage.getItem("@allProducts");
    if (savedProducts) {
      this.setState({
        allProducts: JSON.parse(savedProducts),
      });
    }

    this.setState({
      productsInList: this.props.navigation.state.params.productsInList,
    });
  }

  async addNewProduct(name) {
    const newProductsList = this.state.allProducts.concat({
      name: name,
      id: Math.floor(Math.random() * 100000),
    });

    await AsyncStorage.setItem("@allProducts", JSON.stringify(newProductsList));

    this.setState({
      allProducts: newProductsList,
    });
  }

  _handleProductPress(product) {
    const productIndex = this.state.productsInList.findIndex(
      (p) => p.id === product.id
    );
    if (productIndex > -1) {
      this.setState({
        productsInList: this.state.productsInList.filter(
          (p) => p.id !== product.id
        ),
      });
      this.props.navigation.state.params.deleteProduct(product);
    } else {
      this.setState({
        productsInList: this.state.productsInList.concat(product),
      });
      this.props.navigation.state.params.addProduct(product);
    }
  }

  // _handleAddProductPress() {
  //   this.addNewProduct = this.addNewProduct.bind(this);
  //   prompt(
  //     "Enter product name",
  //     "",
  //     [
  //       { text: "Cancel", style: "cancel" },
  //       { text: "OK", onPress: this.addNewProduct },
  //     ],
  //     {
  //       type: "plain-text",
  //       placeholder: "placeholder",
  //     }
  //   );
  // }

  _handleAddProductPress = () => {
    Alert.alert(
      "Add a product",
      "Name: Kawa",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Add", onPress: this.addNewProduct.bind(this) },
      ],
      { cancelable: false }
    );
  };

  async _handleRemovePress(product) {
    this.setState({
      allProducts: this.state.allProducts.filter((p) => p.id !== product.id),
    });
    await AsyncStorage.setItem(
      "@allProducts",
      JSON.stringify(this.state.allProducts.filter((p) => p.id !== product.id))
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            {this.state.allProducts.map((product) => {
              const productIsInList = this.state.productsInList.find(
                (p) => p.id === product.id
              );
              return (
                <ListItem
                  key={product.id}
                  onPress={this._handleProductPress.bind(this, product)}
                >
                  <Body>
                    <Text
                      style={{
                        color: productIsInList ? "#bbb" : "#000",
                      }}
                    >
                      {product.name}
                    </Text>
                    {productIsInList && (
                      <Text note>{"Already in shopping list"}</Text>
                    )}
                  </Body>
                  <Right>
                    <Icon
                      ios="ios-remove-circle"
                      android="md-remove-circle"
                      style={{ color: "red" }}
                      onPress={this._handleRemovePress.bind(this, product)}
                    />
                  </Right>
                </ListItem>
              );
            })}
          </List>
        </Content>
        <Fab
          style={{ backgroundColor: "#5067FF" }}
          position="bottomRight"
          onPress={this._handleAddProductPress.bind(this)}
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
