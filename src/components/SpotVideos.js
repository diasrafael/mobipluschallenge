import React, {useEffect} from 'react';
import {Text} from 'react-native';

import api from '../services/api';

export default function SpotVideos({video}) {
  useEffect(() => {
    async function loadVideos() {
      const response = await api.get('/youtube-trends?region=br', {
        params: {video},
      });

      return response;
    }

    loadVideos();
  }, []);
  return <Text>{video}</Text>;
}
