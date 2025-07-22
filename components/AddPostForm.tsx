import { View, Text, TextInput, Button, StyleSheet, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';

interface Props {
    onSubmit: (content: string) => void;
}


const AddPostForm = ({ onSubmit }: Props) => {
    const [content, setContent] = useState('');
    const theme = useColorScheme();
    return (
        <View style={styles.container}>
            <TextInput style={[styles.input, { color: theme === 'dark' ? 'white' : 'black' }]} value={content} onChangeText={setContent} />
            <Button title='Publicar'
                onPress={() => {
                    onSubmit(content)
                    setContent('')
                }} />
        </View>
    )
}

export default AddPostForm

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 8,
    }
})