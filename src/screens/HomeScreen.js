import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import InformationItem from "../components/informationItem";

import { LIGHT_GRAY } from "../styles";

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

  renderItems() {
    items.forEach((item, index) => (
      <InformationItem
        key={index}
        information={item}
        border={index !== items.length - 1}
      />
    ));
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: LIGHT_GRAY }}>
        <View style={[styles.container]}>
          <ScrollView
            automaticallyAdjustContentInsets={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            <InformationItem
              information={{
                description: "una descripcion de prueba",
                title: "Un titulo",
                icon:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAe1BMVEX///8AAAC5ublTU1PV1dXj4+P19fXNzc36+vrv7+91dXWLi4vGxsYlJSUXFxeysrIfHx85OTmWlpbo6OhYWFiFhYVBQUEzMzPb29stLS2np6eioqLCwsJubm5fX18bGxtycnKHh4dMTEwODg5mZmZGRkZ9fX2ampqjo6O1OTTvAAAGqElEQVR4nO2d2XbqMAxFCQQI89RSZmgp0P//wsvUchPsSFbiyDLZr0z2WSS2pCOnUikpeVGaVQ0h98gcpvERaPlqcI/OWTZ61YJgwz06V2mkqRYE5d9NzSpdthn3+BxlnC5blXt8jvKWLtuYe3yOkq5asOYen5u0ANlG3AN0kyYgW8A9QDdZQLJNuEfoJO+QbE3uETpJaoxwYcE9QifpQbK9c4+Qi/p40dK+CKkWvGk/OlmcPE6RdC6T/9G8OAFl2+q+97qYfFsaNDeT+W32mvmFoGy6YH59e/UQ2Rs7H49t2bCuen0Ay6YM5uvD35c/PMyRxFRRReUnWLYV8L09/Y1TKMu4AMfnd7Rh2ZbPn1rH3rD3TLdOUoHp0wQPsGzt5GfqT5sW5fUvlaNCg+SeH9y2nW/6iY+oboce6aZSLQhOsfd0YdWCfXxztlO+yZsk8KdGhc3fjqE+Hmrek2B++ovn63PNezzRTZ/rvu9Eqojb2oNa9/Yh/Tu80C21QjA436AQN7U484HuuvdHt2Xa/IJgvTUV7cJwlP66+HUBzD3aQfj+DRExWaEvOs4CywPWmAuO6+tsqp0XXO7Jk4n6jLIFHe7pUwGq7LYRan5I2ZAWg8xlYcotmyo95z6kjWyeyLxKU+OfIpAZKwDmSOs8JTWFwLfZvTDnnj4ZIIy3i8xL9Moanp0tZK4Hd1IaDeyiKI0JAnJI2mLKPfGMMC0LwvNtlcoPh2pd7llnh2FZEJv8+I/IuMSSlS/uKedC4clKmZmPJwouw3jjjP4uUrUTPB4hRPviVNMbfOUxK0427qnmCcKXmxc+OcZrhnOvdRbdZhg2u4uOaR3Ho4vU6Brtf4ax0nAUfhoVDgUnjBIYrKRTZVzUNSjn7Iqdmz3w+92tNpjs4gs64sP4O09+Zx2psST6W3xpDsfu2oDtPTYH1StmVrZBTncOXlwtnVs3gR97ELWhO8kU4ayKcCuD7IT4mWjSXeCqzCOUHy0CzKc39jOx5rZWOOhsUJO8MkQmexpII/6wdlx0J4LUa9RXy/bBNHZH71HNknej71N15n76rYHoN1MxwP8ExQ38dVw6HTsQ899GcSTRbOhwfQHREqrE6IAPuDlcjbvVLOIfwfDEBfC8EDXu9tKb5ofuGAaRxEq/u9ZxmmzGPjTauuObbMaVJppBwjPZ+ua/Q+p38Ey2nfnv4KJcv2Uz2Or+QmqA80w2wv6dZI/wTDZCyEjyoPsl25DyQ8g8iMeyfVB+iGIJ9ks2ksuW0s7ll2wkD9/Xy8tW/tvKexuNciUlUe7bSJRRAokyJiVRZkBIlPk2EmV2lwRNtp3pz5S1hCuvXrkidrsUUyd110KOOc1URSFVecVZx66A9tfGKcID4rQ1tb58rxEarAyeu0E7f3B/dN/rdrO42enBMI2r+of2clV3X7MHrdlg/I3MjOXtpjwz2owHodwehRbqb5endze4GFBtT8s6uA1Djk5xqWdCxUF2RZZ9CQmw96OcumDkHqUVp+CeK4f3tUaUHX40DA6eyd5P6seCcKHsXqZhGkdm6JV31xBuToEnM3j0Z0M81jA3vDmqp4J49GiOuN+ZhqXQE1H9OIasUuid7YInRwwUftqzHzEpxcOXDR9ub8T6Qhbcre2hoVazMuFwzy0OpvOKRR+NXeF7RIfsYIHtURN9ScWqJIxP0RG8LHA+HkzwsoAsmVhC5oOHqD60/JCZHWe9RC+suRUgwf5UtS23AiRW3LKNuBUgwf2cKxP7l0swPUD4F3ddpwCsj6MTHCdwPjRScFTa4HserugKFtXWnRlCA5xLMOkmdBF9APg/RpRG5GALmHE88GqluvnalcrAOODvDQCfvRclv5Qy6e0O1DXq1TrcEt4z/WrjhWp63Xp/e4TJCfmXG47/PhPpxP7kmWX+qO9vcUtViGmeiXsG1aVE8SeKP1DlkJKL3QFWLXn4haqY6JFqCt36s+RbEEnNQ/Izk6dr25sr9EaiF2bzHDAibEm75+9N7ET8eaTancb/B+yo9lWI9JxKlFiaRXhsoCJ63LyUliCEL1qpyn/rtLvnX2fh7l5+UxuCIlg2tQOrcbc09eS3p6k56q60K3DDhk6X605Ebl0UJDz96P8SsMFX+9HJYiw4vZYNsIHS6XZ3NsAu+A33CJ0EbHw0PC/kRQAzmuJzj3aAZBNdHrAHdH6ATCuMdaC2U+7xOco4XTXB/kirABYlj8OATADBvFR3pG0Ai1K5ImhIjUrLGEFHI6Wr7cOH/jNbhFUN5Va35GX5B/w2YxTLer6bAAAAAElFTkSuQmCC"
              }}
              border={true}
            />
            <InformationItem
              information={{
                description: "una descripcion de prueba",
                title: "Un titulo",
                icon:
                  "data:image/png;base64,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"
              }}
              border={false}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "stretch",
    flex: 1,
    backgroundColor: "#ffffff",
    marginTop: 24
  }
});
