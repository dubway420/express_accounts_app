import { StyleSheet } from 'react-native';


export const logoStyles = StyleSheet.create({
  
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: "blue"
    },
  
    backgroundImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    alreadyRegistered: {
        // flex: 3,
        flexDirection: 'row',
        padding: 10
      },
  
    logo: {
      marginTop: 60,
      width: "90%", 
      borderRadius: 100
    },

    here: {
        color: "#a60d49",
        fontWeight: 'bold'
      },
  
    signInMessage: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 100,
      width: "90%"
    }
  
  
  });
  
  export const boxStyle = StyleSheet.create({
  
    box: {
      flex: 0.35,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 30,
      width: "90%", 
      justifyContent: 'space-around',
    },
  
    textSignIn: {
      color: "#312e74",
      fontSize: 20.5,
      padding: 10
    },
  
    buttonLogIn: {
      flex: 0.3,
      backgroundColor: "#312e74",
      borderColor: "#a60d49",
      borderWidth: 5,
      width: "80%",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },

    create_account: {
        color: "#312e74",
        fontSize: 25,
        padding: 10,
        fontWeight: 'bold'
    
      },
  
    textButton: {
      color: "white",
      fontSize: 30,
    },
  
    buttonSignUp: {
      flex: 0.3,
      backgroundColor: "#a60d49",
      borderColor: "#312e74",
      borderWidth: 5,
      width: "80%",
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
  
    boxBottom: {
      flex: 0.35,
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      borderRadius: 30,
      width: "90%", 
      marginBottom: 20
    },

    boxEnterAttrs: {
        // flex: 0.35,
        flexDirection: "column",
        // alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        borderRadius: 30,
        width: "90%", 
        marginBottom: 20,
        padding: 20
      },
  
    federatedTextLogIn: {
      textDecorationLine: 'underline',
      fontSize: 15
    },
  
    federatedInnerBox: {
      flex: 1, 
      flexDirection: "vertical", 
      justifyContent: 'space-around', 
      width: "100%", 
      alignItems: "center"
    },
  
    federatedButton: {
      flex: 0.35,
      flexDirection: "row",
      borderColor: "#312e74",
      borderWidth: 5,
      width: "80%",
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderRadius: 10,
    },
  
    federatedText: {
      marginLeft: "22%",
      color: "black",
      fontSize: 25
  
    },
  
    iconFederated: {
      marginLeft: 10,
      height: 30,
      width: 30,
      // flex: 1
    },

    signUpTextAttr: {
        // textDecorationLine: 'underline',
        fontSize: 17,
        marginBottom:5
      },
    
    signUpInputBox: {
        backgroundColor: "grey",
        fontSize: 17,
        borderRadius: 5,
        padding: 3,
        paddingVertical: 5,
        color: "black"
    },

    signUpItems: {
        marginBottom: 10
    }


  
  })