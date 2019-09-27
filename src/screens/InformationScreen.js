import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  Button,
  Dimensions
} from "react-native";
import { WebBrowser } from "expo";

import Panel from "../components/Panel";

items = [
  {
    description: "una descripcion de prueba",
    title: "Un titulo",
    icon:
      "data:image/png;base64,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"
  }
];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  };

  _handleTickAntel = () => {
    WebBrowser.openBrowserAsync(
      "https://tickantel.com.uy/inicio/landing/sitio/Picasso?0"
    );
  };
  _handleRedPagos = () => {
    WebBrowser.openBrowserAsync("http://www.redpagos.com.uy/principal/");
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 26 }}>
        <View style={{ marginRight: 5 }}>
          <Text style={styles.firstTitle}>Museo Nacional</Text>
          <Text style={styles.secondTitle}>de Artes Visuales</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/museo.jpg")}
          />
        </View>

        <View style={[styles.container]}>
          <ScrollView
            backgroundColor={"transparent"}
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={{ paddingBottom: 10, marginBottom: 26 }}
          >
            <Panel title={"Sobre la muestra"}>
              <View style={styles.panel}>
                <Text style={{ marginLeft: 10 }}>
                  El MNAV en el marco del programa Picasso Mundo, iniciativa
                  surgida desde el Musée national Picasso-Paris, a través de
                  Laurent Le Bon, presidente de dicha institución, presentará la
                  exposición Picasso en Uruguay con la curaduría a cargo de
                  Emmanuel Guigon, director del Museu Picasso de Barcelona y el
                  auspicio de la Embajada de Francia en nuestro país.
                </Text>
                <Text style={{ marginLeft: 10 }}>
                  Las cuarenta y cinco obras de Pablo Picasso a ser exhibidas
                  pertenecen en su mayor parte a la colección del Musée national
                  Picasso-Paris y las demás al Museu Picasso Barcelona
                </Text>
                <Text style={{ marginLeft: 10 }}>
                  "Uruguay resuena en la obra de Pablo Picasso a través de la
                  figura de Joaquín Torres García, pintor uruguayo radicado en
                  Barcelona a partir de 1882 y que frecuentó los mismos lugares
                  y los mismos círculos artísticos que Picasso", explicó Laurent
                  Le Bon, presidente del Musée National Picasso-Paris.
                </Text>
                <Text style={{ marginLeft: 10 }}>
                  Enrique Aguerre, director del MNAV dijo que esta exposición
                  "será la primera muestra de pintura del maestro en el país y
                  seguramente se convierta en un hito para nuestras artes
                  visuales". En su opinión compartir patrimonio es una de las
                  formas de "democratizar el arte" y celebró el desembarco de
                  sus obras en suelo uruguayo.
                </Text>
              </View>
            </Panel>

            <Panel title={"Horarios y fechas"}>
              <View style={styles.panel}>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: "free-sans",
                    fontWeight: "bold"
                  }}
                >
                  Abierto siete dias a la semana:
                </Text>
                <Text style={{ marginLeft: 10 }}>
                  Martes a Domingo: 10am - 8pm{" "}
                </Text>
                <Text
                  style={{
                    marginLeft: 10,
                    fontFamily: "free-sans",
                    fontWeight: "bold"
                  }}
                >
                  Fechas de la exposición:
                </Text>
                <Text style={{ marginLeft: 10 }}>
                  Del 30 de Marzo al 30 de Junio
                </Text>
              </View>
            </Panel>

            <Panel title={"Admisión"}>
              <View style={styles.panel}>
                <Text style={{ marginLeft: 10 }}>Precios de las entradas:</Text>
                <View style={styles.fee}>
                  <Text style={{ marginLeft: 10 }}>General</Text>
                  <Text style={{ marginLeft: 10 }}>$250</Text>
                </View>
                <View style={styles.fee}>
                  <Text style={{ marginLeft: 10 }}>
                    Jubilados y mayores de 60
                  </Text>
                  <Text style={{ marginLeft: 10 }}>$150</Text>
                </View>
                <View style={styles.fee}>
                  <Text style={{ marginLeft: 10 }}>
                    Jovenes de 12 a 18 años
                  </Text>
                  <Text style={{ marginLeft: 10 }}>$150</Text>
                </View>
                <View style={styles.fee}>
                  <Text style={{ marginLeft: 10 }}>
                    Docentes de primaria, secundaria y técnica
                  </Text>
                  <Text style={{ marginLeft: 10 }}>$150</Text>
                </View>
                <View style={styles.fee}>
                  <Text style={{ marginLeft: 10 }}>
                    Menores de 12 y personas con discapacidad
                  </Text>
                  <Text style={{ marginLeft: 10 }}>Gratis {"\n"}</Text>
                </View>
                <Text style={{ marginLeft: 10 }}>
                  Los días martes el ingreso a la exposición Picasso en Uruguay
                  será gratuito para público general, realizándose la reserva
                  correspondiente de día y hora a través de Tickantel. El
                  ingreso al Museo Nacional de Artes Visuales, donde se
                  exhibirán las exposiciones Pedro Figari: Nostalgias africanas
                  y Colección del mnav, continuará siendo libre y gratuito. Las
                  entradas se compran a través de Tickantel y Red Pagos. {"\n"}
                </Text>
                <View style={styles.buttons}>
                  <Button
                    onPress={this._handleTickAntel}
                    title={"Tickantel"}
                    style={{ marginRight: 20 }}
                  />
                  <Button
                    onPress={this._handleRedPagos}
                    title={"Red Pagos"}
                    style={{ marginLeft: 20 }}
                  />
                </View>
              </View>
            </Panel>

            <Panel title={"Dirección"}>
              <View style={styles.panel}>
                <Image
                  style={styles.mapImg}
                  source={require("../../assets/images/mapa.jpg")}
                />
                <Text style={{ marginLeft: 10 }}>
                  Tomás Giribaldi 2283 esq. Julio Herrera y Reissig
                </Text>
                <Text style={{ marginLeft: 10 }}>
                  {" "}
                  Parque Rodó - Montevideo - Uruguay
                </Text>
              </View>
            </Panel>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstTitle: {
    color: "black",
    fontSize: 36,
    fontWeight: "300",
    fontFamily: "free-sans",
    marginLeft: 10
  },
  secondTitle: {
    color: "black",
    fontSize: 36,
    fontWeight: "300",
    marginLeft: 26,
    fontFamily: "free-sans"
  },
  panel: {
    backgroundColor: "white",
    width: "100%"
  },
  container: {
    alignItems: "stretch",
    flex: 1,
    backgroundColor: "#ffffff",
    marginBottom: 60
  },
  image: {
    width: "94%",
    height: 200,
    borderRadius: 8
  },
  mapImg: {
    flex: 1,
    width: 400,
    height: 200
  },
  fee: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
