import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../customeButton/CustomButton'

const SocialSignInButtons = () => {
    const onSignInWithFacebookPressed = () => {
      console.warn("sing in with facebook");
    };
    const onSignInWithGooglePressed = () => {
      console.warn("sing in with google");
    };
    const onSignInWithApplePressed = () => {
      console.warn("sing in with apple");
    };
  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInWithFacebookPressed}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with google"
        onPress={onSignInWithGooglePressed}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInWithApplePressed}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
}

export default SocialSignInButtons