import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, ScrollView, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Imagens para os carrosséis
const carousels = {
  Screen1: [
    { id: 2, source: 'https://www.mecmalls.com/wp-content/uploads/2018/02/shop-parkcity-sumare-img-4-300x187.jpeg'},
    { id: 1, source: 'https://portaldesumare.com.br/wp-content/uploads/2021/11/ParkCity-Sumare.jpeg'},
    { id: 3, source: 'https://scontent.fcpq17-1.fna.fbcdn.net/v/t1.6435-9/166060244_1102410863597643_6310834591112470413_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=j1xf9CTHPUAAX8lj6oG&_nc_ht=scontent.fcpq17-1.fna&oh=00_AfDZ8yFMDItgBVC42AU9SRT3cbkVVGWy79rRAqC8OIjVtA&oe=661AB913'  }],
  Screen2: [
    { id: 1, source: 'https://www.baressp.com.br/bares/fotos2/Chapeu_Brasil_02.jpg'},
    { id: 2, source: 'https://scontent.fcpq17-1.fna.fbcdn.net/v/t1.6435-9/149442498_3721897561213005_3246466924914446032_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uQBljmEdly0AX-En2Yh&_nc_ht=scontent.fcpq17-1.fna&oh=00_AfCP3lwxbd20SAcDLzcQr4yzBiCopIa4wG_5OKKBgEOPGA&oe=661AC3E9'},
  ],
  Screen3: [
    { id: 1, source: 'https://image.portaldacidade.com/unsafe/610x407/https://bucket.portaldacidade.com/sumare.portaldacidade.com/img/news/2022-05/de-flashback-ao-blues-a-casa-tem-o-melhor-da-musica-para-voce-628675156a7c2.jpeg'},
    { id: 2, source: 'https://media-cdn.tripadvisor.com/media/photo-s/16/76/a1/3e/jack-pub.jpg'},
  ],
  Screen4: [
    { id: 1, source: 'https://images2.portalon.com.br/wp-content/uploads/2017/06/Audit%C3%B3rioPerola-Externa-1-1498743296-600x510.jpg'},
    { id: 2, source: 'https://4.bp.blogspot.com/-WrpyV5M0RxA/TfeUzl-IJ6I/AAAAAAAAACQ/pFhj4OVcxjA/s1600/Audit%25C3%25B3rio+Est%25C3%25A2ncia+Arvore+da+Vida+01.jpg'},
    { id: 3, source: 'https://agenda-open-site.s3-sa-east-1.amazonaws.com/uploads/8f86f3f6f641c0126846e22619057f60.png'},
  ]
};

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Adicionando uma imagem dentro do retângulo oval */}
        <Image
          source={{ uri: 'https://bucket.portaldacidade.com/sumare.portaldacidade.com/img/news/editor/sumare-616d6426628dc.JPG' }}
          style={styles.oval}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquise"
        />
      </View>

      <View style={styles.loginButtonDiv}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
          buttonStyle={styles.loginButton} // Use buttonStyle em vez de style
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Button title="Shopping ParkCity"
          onPress={() => navigation.navigate('Screen1')}
          buttonStyle={styles.button} // Aplica o estilo do botão
          titleStyle={styles.buttonText} // Aplica o estilo do texto do botão 
        />
        <Text style={[styles.lorem, { opacity: 0.5 }]}>Shopping Principal de Sumaré.</Text>

        <Button title="Chapéu Brasil"
          onPress={() => navigation.navigate('Screen2')}
          buttonStyle={styles.button} // Aplica o estilo do botão
          titleStyle={styles.buttonText} // Aplica o estilo do texto do botão
        />
        <Text style={[styles.lorem, { opacity: 0.5 }]}>Local de festas onde são feitos shows de cantores famosos.</Text>

        <Button title="Jack Club Bar"
          onPress={() => navigation.navigate('Screen3')}
          buttonStyle={styles.button} // Aplica o estilo do botão
          titleStyle={styles.buttonText} // Aplica o estilo do texto do botão
        />
        <Text style={[styles.lorem, { opacity: 0.5 }]}>Barzinho que toda saidera ou saidero adoraria ir.</Text>

        <Button title="Estãncia Árvore da Vida"
          onPress={() => navigation.navigate('Screen4')}
          buttonStyle={styles.button} // Aplica o estilo do botão
          titleStyle={styles.buttonTitle}
        />
        <Text style={[styles.lorem, { opacity: 0.5 }]}>Local com otimo retiro espiritual com muitas árvores, trilhas para caminhadas e espaços para contemplação da natureza.</Text>

      </View>
    </View>
  );
}

// Componente da tela de Login
function LoginPage({ navigation }) {  
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>Página de Login</Text>

      <View style={styles.loginBox}>
        <TextInput
          style={styles.dadosLogin} // Estilo do TextInput para dados de login
          placeholder="Nome de usuário"
        />
        <TextInput
          style={styles.dadosLogin} // Estilo do TextInput para senha com altura ajustada
          placeholder="Senha"
          secureTextEntry={true}
        />

        <Button title="Logar" onPress={() => navigation.navigate('')}
          buttonStyle={styles.buttonLogin} />

      </View>

      <View style={styles.buttonsContainer}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>

    </View>
  );
}


// Componente da tela Screen1
function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleContainer}>Shopping ParkCity</Text>
      </View>

      

      <View style={styles.content}>
        <Text style={[styles.loremText]}>
            O shopping geralmente possui uma diversidade de lojas, incluindo marcas de moda, acessórios, eletrônicos, artigos para o lar, beleza e muito mais. Os visitantes podem encontrar uma ampla gama de produtos e serviços para atender às suas necessidades diárias e preferências de compras.
            Além das lojas, o Shopping ParkCity Sumaré também oferece uma praça de alimentação com diversas opções gastronômicas, desde fast-food até restaurantes com culinária internacional e local. É um lugar ideal para os visitantes fazerem uma pausa e desfrutarem de uma refeição ou lanche durante as compras ou após um dia de lazer.
            Além disso, o shopping pode oferecer opções de entretenimento, como cinemas, áreas de recreação para crianças e eventos especiais sazonais. Essas atividades adicionais contribuem para criar uma experiência completa para os visitantes.
          </Text>
      </View>

      <ScrollView horizontal style={styles.carousel}>
        <FlatList
          data={carousels.Screen1}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Image
              source={item.source}
              style={styles.carouselImage}
            />
          )}
        />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.buttonsContainer}>
          <Button title="Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Próximo" onPress={() => navigation.navigate('Screen2')} />
        </View>
      </View>
    </View>
  );
}

// Componente da tela Screen2
function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleContainer}>Chapéu Brasil</Text>
      </View>

      <View style={styles.content}>
          <Text style={styles.loremText}>
          O Chapéu Brasil geralmente oferece uma atmosfera animada e festiva, com um palco bem montado para os artistas se apresentarem e uma pista de dança onde o público pode se divertir e dançar ao som da música ao vivo. Além disso, muitas vezes também oferece serviço de bar e petiscos para os frequentadores.
É um local bastante popular para quem quer curtir uma noite animada, seja para dançar ao ritmo de músicas brasileiras ou para aproveitar apresentações de bandas locais e artistas renomados. O Chapéu Brasil costuma atrair tanto os moradores locais quanto os visitantes que buscam uma experiência autêntica da vida noturna brasileira.
          </Text>
      </View>

      <ScrollView horizontal style={styles.carousel}>
        <FlatList
          data={carousels.Screen2}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Image
              source={item.source}
              style={styles.carouselImage}
            />
          )}
        />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.buttonsContainer}>
          <Button title="Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Próximo" onPress={() => navigation.navigate('Screen3')} />
        </View>
      </View>
    </View>
  );
}

// Componente da tela Screen3
function Screen3({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleContainer}>Jack Club Bar</Text>
      </View>

      <View style={styles.content}>
          <Text style={styles.loremText}>
          O Jack Club Bar é um lugar vibrante e acolhedor, conhecido por sua atmosfera animada e seus coquetéis excepcionais. Localizado no coração da cidade, é um ponto de encontro popular tanto para moradores locais quanto para turistas em busca de uma experiência noturna memorável.
Ao entrar no Jack Club Bar, você é recebido por uma decoração moderna e elegante, com iluminação ambiente que cria uma atmosfera intimista e convidativa. As paredes são adornadas com arte urbana e murais, adicionando um toque de estilo único ao ambiente.
O bar em si é o centro das atenções, com uma ampla seleção de bebidas premium, desde clássicos coquetéis artesanais até criações exclusivas do próprio barman. A equipe é conhecida por sua habilidade e criatividade na elaboração de bebidas, garantindo que cada drinque seja uma experiência sensorial única.
          </Text>
      </View>

      <ScrollView horizontal style={styles.carousel}>
        <FlatList
          data={carousels.Screen3}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Image
              source={item.source}
              style={styles.carouselImage}
            />
          )}
        />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.buttonsContainer}>
          <Button title="Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Próximo" onPress={() => navigation.navigate('Screen4')} />
        </View>
      </View>
    </View>
  );
}

// Componente da tela Screen4
function Screen4({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleContainer}>Estãncia Árvore da Vida</Text>
      </View>

      <View style={styles.content}>
          <Text style={styles.loremText}>
          A "Estância Árvore da Vida" é um conhecido centro de retiro espiritual e ecoturismo localizado em Sumaré, no estado de São Paulo, Brasil. Este local é conhecido por sua beleza natural, tranquilidade e atividades voltadas para o bem-estar e o crescimento espiritual.
A estância está situada em meio a uma área verde exuberante, com muitas árvores, trilhas para caminhadas e espaços para contemplação da natureza. É um lugar ideal para quem busca paz e relaxamento, longe do estresse da vida urbana.
Além disso, a Estância Árvore da Vida oferece uma variedade de atividades e programas, incluindo meditação, yoga, workshops de desenvolvimento pessoal e retiros espirituais. Os visitantes podem participar de palestras, vivências e práticas que visam promover o equilíbrio e a harmonia entre corpo, mente e espírito.
          </Text>
      </View>

      <ScrollView horizontal style={styles.carousel}>
        <FlatList
          data={carousels.Screen4}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Image
              source={item.source}
              style={styles.carouselImage}
            />
          )}
        />
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.buttonsContainer}>
          <Button title="Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Próximo" onPress={() => navigation.navigate('Screen1')} />
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // Outros estilos...
  content: {
    paddingTop: 50, paddingBottom: 30,
    border: 0,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    paddingHorizontal: 100, // Espaçamento horizontal
    maxWidth: '90%', // Defina a largura máxima do conteúdo
  },
  loremText: {
    backgroundColor: 'rgb(255,230,210)',
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    borderRadius: 10,
    maxWidth: '100%',
    fontSize: 20
  },

  carousel: {
    maxHeight: 200,
    marginVertical: 10,
  },
  carouselImage: {
    width: 200,
    height: 200,
    marginRight: 10,
  },

  centeredText: {
      textAlign: 'center', // Centraliza horizontalmente
      lineHeight: 24, // Espaçamento entre linhas
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFDF0',
    alignItems: 'center',
    padding:0,
    border: 0
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  oval: {
    width: 1000,
    height: 300,
    backgroundColor: '#B3EDF5',
    borderRadius: 500,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttonsContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: 'rgb(30,144,255)', // Cor em RGB
  },
  buttonTitle: {
    color: 'black', // Esta é a cor do texto do botão
  },
  titleContainer: {
    fontSize: 24, // Tamanho do título
    fontWeight: 'bold', // Negrito
  },
  titleHighlight: {
    color: '#FF6347', // Cor destacada para o título
  },
  loginButton: {
    backgroundColor: 'rgb(30,144,255)', // Cor de fundo do botão
  },
  loginButtonDiv: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1, // Garante que o botão esteja acima de outros elementos
  },
  dadosLogin: {
    height: 40, width: 300, 
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20, // Espaçamento inferior entre os inputs
  },
  loginBox: {
    backgroundColor: 'rgb(255,230,210)', // Cor de fundo da caixa
    marginTop: 50,
    width: 400, // Largura fixa
    height: 300, // Altura fixa
    borderRadius: 10, // Borda arredondada
    justifyContent: 'center', // Distribui os elementos verticalmente
    alignItems: 'center', // Centraliza os elementos horizontalmente
    padding: 10, // Preenchimento interno
    paddingBottom: 100,
  },
  buttonLogin: {
    borderTop: 1000,
  },
});
