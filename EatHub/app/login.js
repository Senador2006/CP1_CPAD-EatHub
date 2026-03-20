import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <View style={styles.login}>
            <Image
              source={require('../assets/EatHub.png')}
              style={{ width: 150, height: 150}}
            />
            <Text style={styles.bem_vindo}>Seja bem-vindo ao EatHub!</Text>

            <Text style={styles.paragrafo}>RM/RF:</Text>
            <input style={styles.caixaTexto} type="text" id="caixa1" /><br></br>

            <Text style={styles.paragrafo}>Senha:</Text>
            <input style={styles.caixaTexto} type="text" id="caixa2" /><br></br>

            <TouchableOpacity style={styles.usuario} onPress={() => router.push('/homeUser')}>
            <Text style={styles.botaoTexto}>Usuário</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.administrador} onPress={() => router.push('/homeAdmin')}>
              <Text style={styles.textoAdmin}>Administrador</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:    {flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#1C1C1C"},
  login:        {alignItems: 'center', justifyContent: 'center', backgroundColor: '#262626', height: 500, width: 300, borderRadius: 50},
  titulo:       { fontSize: 32, fontWeight: 'bold', marginBottom: 24},
  bem_vindo:    { fontSize: 20, marginBottom: 24, color: '#fff'},
  paragrafo:    {fontSize: 15, textAlign: 'left', marginBottom: 5, fontWeight: 'bold', paddingRight: 180, color: '#fff'},
  usuario:      { backgroundColor: '#F23064', padding: 16, borderRadius: 12, marginBottom: 12, width: '142px'},
  administrador:{ color: '#F23064', padding: 16, borderRadius: 12, border: '3px solid', width: '142px'},
  botaoTexto:   { color: '#fff', fontSize: 16, fontWeight: '600', textAlign: 'center'},
  textoAdmin:   { color: '#F23064', fontSize: 16, fontWeight: '600' },
  caixaTexto:   { border: 'none', borderRadius: 360, backgroundColor: '#404040', height: 24, width: 240, color: '#fff'},
  
});