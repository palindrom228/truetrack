import React, {useEffect, useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {ClientNavigation} from "../navigation";

import {useClientViewModel} from "~client/repositories/store/hook";
import {
  Button,
  Divider,
  Input,
  ScreenContainer,
  Text,
} from "~core/story-book/components";
import {PhoneInput} from "~core/story-book/components/Input/PhoneInput";
import {TelegramInput} from "~core/story-book/components/Input/TelegramInput";
import {Icons} from "~core/story-book/icons";
import {StyleService, useStyles} from "~core/story-book/styles";

const filtersLength = {
  first_name: {length: 1, error: "Please enter a valid name"},
  second_name: {length: 1, error: "Please enter a valid surname"},
  phone: {length: 10, error: "Please enter a valid phone"},
  telegram: {length: 3, error: "Please enter a telegram"},
};

const AddClient = () => {
  const styles = useStyles(styleCallback);

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [surname, setSurname] = useState("");
  const [surnameError, setSureNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhonerror] = useState("");
  const [Telegram, setTelegram] = useState("");
  const [telegramError, setTelegramError] = useState("");

  const submit = async () => {
    if (name.length < filtersLength.first_name.length) {
      setNameError(filtersLength.first_name.error);

      return;
    }
    if (surname.length < filtersLength.second_name.length) {
      setSureNameError(filtersLength.second_name.error);
      return;
    }
    if (phone.length < filtersLength.phone.length) {
      setPhonerror(filtersLength.phone.error);
      return;
    }
    if (Telegram.length < filtersLength.telegram.length) {
      setTelegramError(filtersLength.telegram.error);
      return;
    }

    const result = await clientViewModel.addClient({
      first_name: name,
      last_name: surname,
      phone: "7" + phone,
      telegram_id: Telegram,
    });
    if (result) {
      navigation.navigate(ClientNavigation.Screens.Main, {});
    }
  };

  const navigation = useNavigation<ClientNavigation.AddClient.navigation>();

  const clientViewModel = useClientViewModel();

  const clearErrors = () => {
    setNameError("");
    setSureNameError("");
    setPhonerror("");
    setTelegramError("");
  };

  useEffect(() => {
    clearErrors();
  }, [name, surname, Telegram, phone]);

  const onPressBack = () => {
    navigation.goBack();
  };

  const disabled = clientViewModel.isLoading;

  return (
    <ScreenContainer loading={clientViewModel.isLoading}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onPressBack} disabled={disabled}>
          <Icons.ArrowBack.filled />
        </TouchableOpacity>
        <Text category="b5">Clients</Text>
        <TouchableOpacity onPress={submit} disabled={disabled}>
          <Text category="b5">Save</Text>
        </TouchableOpacity>
      </View>
      {clientViewModel.error.length > 0 && (
        <>
          <ErrorComp text={clientViewModel.error} />
        </>
      )}
      <Divider height={12} />
      <Input
        value={name}
        onChangeText={setName}
        placeholder="Name"
        disabled={disabled}
      />
      {nameError.length > 0 && <ErrorComp text={nameError} />}
      <Divider height={12} />
      <Input
        value={surname}
        onChangeText={setSurname}
        placeholder="Surname"
        disabled={disabled}
      />
      {surnameError.length > 0 && <ErrorComp text={surnameError} />}
      <Divider height={12} />
      <PhoneInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone"
        disabled={disabled}
      />
      {phoneError.length > 0 && <ErrorComp text={surnameError} />}
      <Divider height={12} />
      <TelegramInput
        value={Telegram}
        onChangeText={setTelegram}
        placeholder="Telegram"
        disabled={disabled}
      />
      {telegramError.length > 0 && <ErrorComp text={telegramError} />}
      <Divider height={56} />
      <Button variant={"secondary"} containerStyles={styles.buttonStyles}>
        <Text category="b3" style={styles.buttonTextStyles}>
          Fill out the Goals Form
        </Text>
        <Icons.PaperAirPlane.filled />
      </Button>
      <Divider height={16} />
      <Button variant={"secondary"} containerStyles={styles.buttonStyles}>
        <Text category="b3" style={styles.buttonTextStyles}>
          Fill out the health questionnaire
        </Text>
        <Icons.PaperAirPlane.filled />
      </Button>
      <Divider height={16} />
      <Button variant={"secondary"} containerStyles={styles.buttonStyles}>
        <Text category="b3" style={styles.buttonTextStyles}>
          Fill out the medical card
        </Text>
        <Icons.PaperAirPlane.filled />
      </Button>
    </ScreenContainer>
  );
};

const ErrorComp = (props: {text: string}) => {
  const styles = useStyles(styleCallback);
  return (
    <>
      <Divider height={12} />
      <View style={styles.errorContainer}>
        <Icons.CrossCircle.filled color={styles.errorText.color} />
        <Text category="b8" style={styles.errorText}>
          {props.text}
        </Text>
      </View>
    </>
  );
};

const styleCallback = StyleService.create(themedStyles => ({
  errorContainer: {
    flexDirection: "row",
  },
  errorText: {
    color: themedStyles.colors.red,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonTextStyles: {
    color: themedStyles.colors.grey4,
  },
  buttonStyles: {
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
}));

export {AddClient};
