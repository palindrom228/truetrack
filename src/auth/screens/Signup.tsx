import React, {useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {AuthNavigation} from "./navigation";

import {
  Button,
  Divider,
  Input,
  ScreenContainer,
  SecurityInput,
  Text,
} from "~core/story-book/components";
import {StyleService, useStyles} from "~core/story-book/styles";

const SignupScreen = () => {
  const styles = useStyles(styleCallback);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<AuthNavigation.SignUp.navigation>();
  const onPressLogin = () => {
    navigation.navigate(AuthNavigation.Screens.Main, {});
  };
  return (
    <ScreenContainer>
      <Text category="t1">SIGN UP</Text>
      <Divider height={32} />
      <Input value={login} placeholder="Email" onChangeText={setLogin} />
      <SecurityInput
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
      />
      <Divider height={56} />
      <Button size="XL" variant="primary">
        SIGN UP
      </Button>
      <Divider height={16} />
      <View style={styles.footContainer}>
        <Text category="b5" style={styles.text}>
          Already have an account?
        </Text>
        <Divider width={8} />
        <TouchableOpacity onPress={onPressLogin}>
          <Text category="b6" style={styles.button}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
};

const styleCallback = StyleService.create(themedStyles => ({
  text: {
    color: themedStyles.colors.grey4,
  },
  footContainer: {
    flexDirection: "row",
  },
  button: {
    color: themedStyles.colors.black,
  },
}));

export {SignupScreen};
