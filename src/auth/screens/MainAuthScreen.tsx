import React, {useState} from "react";

import {useAuthViewModel} from "~auth/repositories/store/hook";
import {Button} from "~core/story-book/components";
import {Text} from "~core/story-book/components";
import {Divider} from "~core/story-book/components";
import {Input} from "~core/story-book/components";
import {SecurityInput} from "~core/story-book/components";
import {ScreenContainer} from "~core/story-book/components";
import {StyleService, useStyles} from "~core/story-book/styles";

const MainAuthScreen = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const styles = useStyles(styledCallback);
  const {login: loginMethod, error, loading} = useAuthViewModel();
  const onPress = () => {
    loginMethod(login, password);
  };
  const disabled = !(login.length && password.length);
  return (
    <ScreenContainer>
      <Text category="t1">LOG IN</Text>
      <Divider height={32} />
      <Input
        value={login}
        placeholder="Email or phone number"
        onChangeText={setLogin}
      />
      <SecurityInput
        value={password}
        placeholder="Password"
        onChangeText={setPassword}
      />
      <Divider height={16} />
      <Text category="b5" style={styles.errorText}>
        {" "}
        {error}
      </Text>
      <Divider height={56} />
      <Button
        size="XL"
        variant="primary"
        onPress={onPress}
        disabled={disabled}
        loading={loading}>
        LOG IN
      </Button>
    </ScreenContainer>
  );
};

const styledCallback = StyleService.create(themedStyles => ({
  errorText: {
    color: themedStyles.colors.red,
  },
}));

export {MainAuthScreen};
