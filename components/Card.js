import {  FlatList } from 'react-native';
import { Card } from "react-native-paper";

import CardHeader from './components/CardHeader';

const CardHeader = (props) => {
  const { img } = props;
  const { title } = props;
  const { desc } = props;

  return (
    <Card style={{ borderColor: "black", borderWidth: 2, margin: 7, marginTop: 40 }}>
      <Card.Content>
        <CardHeader img= { require(item.img)  } title={ item.title } desc={ item.desc }/>
      </Card.Content>
    </Card>
  );
};

export default CardHeader;
