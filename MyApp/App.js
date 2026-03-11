import React from 'react';
import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native';

import Header from './components/Header';
import Footer from './components/Footer';
import Botao from './components/Botao';

export default function App() {
  return (
    <View style={styles.wrapper}>
      
      <Header titulo="Aplicativo de Desenvolvomento de Sistemas" />

      
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subtitulo}>Veja ao Clicar no Botão o que Deseja Saber</Text>

        <Botao
          label="Clique Aqui no Botão"
          cor="#4A90D9"
          onPress={() => Alert.alert('Clicou!', 'Botão pressionado.')}
        />

       
      </ScrollView>

     
      <Footer texto="© 2026 MeuPrimeiroApp" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 20,
    letterSpacing: 0.3,
  },
});
