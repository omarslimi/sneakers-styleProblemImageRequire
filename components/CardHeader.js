import { View, Text } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const CardHeader = (props) => {
  const { imgPROPS } = props;
  const { title } = props;
  const { desc } = props;

  return (
    <View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "flex-start" }}>
            <Title style={{ fontWeight: "bold", fontSize: 25 }}>{title}</Title>
          </View>
          <View style={{ width: 180, height: 100 }}>
            <Card.Cover style={{ flex: 1 }} source={{ img }} />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "flex-start", flex: 1 }}>
            <Title>Prix</Title>
            <Paragraph>{desc}</Paragraph>
          </View>
        </View>
        </View>

  );
};

export default CardHeader;
