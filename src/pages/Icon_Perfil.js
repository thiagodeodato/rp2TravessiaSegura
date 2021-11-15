import React from 'react';

import { View, Image } from 'react-native';

const ActionBarImage = () => {
return (
    <View style={{ flexDirection: 'row' }}>
    <Image
        source={{
        uri:
            'https://www.abrafac.org.br/wp-content/uploads/2019/09/icone-perfil.png',
        }}
        style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          marginLeft: 15,
        }}
      />
    </View>
  );
};

export default ActionBarImage;
