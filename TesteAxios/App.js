import React, {useState, useEffect} from 'react';

import {
  View,
} from 'react-native';

import {LinearProgress, ListItem, Avatar} from 'react-native-elements';

import gitService from './src/services/gitService';

const App = () => {
  const [repositorios, setRepositorios] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    gitService
      .listarRepositorios()
      .then(response => {
        //console.log(response);
        setRepositorios(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <View>
      {isLoading ? (
        <LinearProgress color="primary" />
      ) : (
        <View>
          {repositorios.map((item) => (
            <ListItem key={item.id} bottomDivider>
            <Avatar source={{uri: item.owner.avatar_url}} />
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      )}
    </View>
  );
};

export default App;
