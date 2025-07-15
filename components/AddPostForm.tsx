import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface Props {
    onSubmit: (content: string) => void;
}


const AddPostForm = ({ onSubmit }: Props) => {
    const [content, setContent] = useState('');
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={content} onChangeText={setContent} />
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