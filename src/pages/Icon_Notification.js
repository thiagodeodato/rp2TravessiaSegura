import React from 'react';

import { View, Image } from 'react-native';

const Notification_bell = () => {
return (
    <View style={{ flexDirection: 'row' }}>
    <Image
        source={{
        uri:
            'https://image.flaticon.com/icons/png/512/61/61073.png',
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

export default Notification_bell;
