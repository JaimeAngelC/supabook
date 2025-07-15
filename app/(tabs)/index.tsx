import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase'
import AddPostForm from '@/components/AddPostForm';

export default function TabOneScreen() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from('posts').select('*').order('created_at', {
        ascending: false
      });
      if (error) {
        console.log(error);
      } else {
        setPosts(data)
      }
    })();
  }, []);


  const handleSubmit = async (content: string) => {
    const { data, error } = await supabase.from("posts").insert({ content }).select();
    if (error) {
      console.log(error);
    } else {
      setPosts([data[0], ...posts])
    }
  }

  console.log(posts)


  return (
    <View style={styles.container}>
      <AddPostForm onSubmit={handleSubmit} />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.content}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
