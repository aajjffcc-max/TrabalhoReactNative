import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({ label = 'Clique aqui', onPress, cor = '#4A90D9' }) {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: cor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
