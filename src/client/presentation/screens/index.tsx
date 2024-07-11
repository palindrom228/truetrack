import React, {useEffect} from "react";
import {View} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {AddClientButton} from "./components/AddClientButton";
import {ClientCard} from "./components/ClientCard";
import {ClientNavigation} from "./navigation";

import {useClientViewModel} from "~client/repositories/store/hook";
import {Divider, ScreenContainer, Text} from "~core/story-book/components";
import {StyleService, useStyles} from "~core/story-book/styles";

const ClientsScreen = () => {
  const styles = useStyles(styleCallback);

  const clientViewModel = useClientViewModel();

  const navigation = useNavigation<ClientNavigation.Main.navigation>();

  const onPressAddClien = () => {
    navigation.navigate(ClientNavigation.Screens.AddClient);
  };

  const loadClients = () => clientViewModel.getClients();

  useEffect(() => {
    loadClients();
  }, []);
  console.log(clientViewModel.clients);
  return (
    <>
      <ScreenContainer
        loading={clientViewModel.isLoading}
        onRefresh={loadClients}>
        <Text category="t1">CLIENTS</Text>
        <Divider height={32} />
        {clientViewModel.clients.length === 0 && <EmptyList />}
        {clientViewModel.clients.length > 0 &&
          clientViewModel.clients.map(client => (
            <View key={client.id}>
              <ClientCard name={client.first_name + " " + client.last_name} />
              <Divider height={12} />
            </View>
          ))}
      </ScreenContainer>
      <View style={styles.addButtonContainer}>
        <AddClientButton onPress={onPressAddClien} />
      </View>
    </>
  );
};

const EmptyList = () => {
  const styles = useStyles(styleCallback);
  return (
    <View style={styles.emptyContainer}>
      <Text category="b5" style={styles.emptyText}>
        {"There are no Clients yet..\nTo Add Clients click the Button below"}
      </Text>
    </View>
  );
};

const styleCallback = StyleService.create(themedStyles => ({
  emptyContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
  emptyText: {
    textAlign: "center",
    color: themedStyles.colors.grey4,
  },
}));

export {ClientsScreen};
