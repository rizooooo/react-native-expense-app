import React from "react";
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import {
  ApplicationProvider,
  Layout,
  Text,
  Card,
  Input,
  CardHeader,
  ButtonGroup,
  Button,
  Icon,
  IconRegistry,
  List,
  ListItem
} from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <HomeScreen />
    </ApplicationProvider>
  </React.Fragment>
);

const renderItemAccessory = (style) => (
  <Button style={style}>FOLLOW</Button>
);

const renderItemIcon = (style) => (
  <Icon {...style} name='person' />
);

const renderItem = ({ item, index }) => (
  <ListItem
    title={`${item.title} ${index + 1}`}
    // description={`${item.description} ${index + 1}`}
    icon={renderItemIcon}
    accessory={renderItemAccessory}
  />
);
const data = new Array(8).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

const StarIcon = style => <Icon {...style} name="star" />;

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Card
      style={{ flex: 1, marginVertical: 10, justifyContent: "space-between" }}
      status="success"
    >
      <Input placeholder="Place your Text" />
      <Button icon={StarIcon}>Add Person</Button>
    </Card>
    <List data={data} renderItem={renderItem} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 10
  },
  textInputContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  }
});

export default App;
