import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer({ texto = '© 2025 Meu App. Todos os direitos reservados.' }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2C3E50',
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  texto: {
    fontSize: 13,
    color: '#BDC3C7',
    textAlign: 'center',
  },
});
