import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import Contacts from '../../components/ScreenS/Contacts'
import { Feather } from "@expo/vector-icons";
import firestore from "@react-native-firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import UserAvatar from "react-native-avatar-generator";


import { styles } from "./Style";
import AuthContext from "../../contextHelper/authContext";

export default function SelectContact({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isloading, setLoading] = useState(true);
  const [searchUser, setSearchUser] = useState({});
  const [errorMessage, setErrorMessage] = useState("Search any contact");
   const {contacts}=useSelector((state)=>(state.contact))
  const { getUser } = useContext(AuthContext);
  const currentUser = getUser();
  //  consolec.log(contacts,"contact");


   const navigate = async (number) => {
   
   try {
    let searchResponse = await firestore()
    .collection("Users")
    .where("phoneNumber", "==", number)
    .get();
  
    if(searchResponse.docs.length>0){
    // console.log(number);
    // console.log(searchResponse.docs);
  let id = searchResponse.docs[0].id;
  let responseData = searchResponse.docs[0]?.data();


  
   
    responseData.id = id;

    let conversationId = [currentUser.id, responseData.id].sort().join("_");

    navigation.replace("ChatRoom", { reciever: responseData, conversationId });

    
  } else {
    
    Alert.alert("not found", 'Sorry no users found matching the given contact')
    
  }

   } catch (error) {
    Alert.alert("error haii", error.message);
    console.log(error);
   }
  };




  let On;
   const SingleContact = ({ item }) => {
    const { theme } = useSelector((state) => state.theme);
    On = theme;
    const styles = On ? lightTheme : darkTheme;

    const { firstName, lastName, name, phoneNumbers, image} = item;
    const number = phoneNumbers[0].number;
    const imageUri = image?.uri;


    return (
        <TouchableOpacity onPress={()=>navigate(number)}>
            <View style={styles.v1}>
                <View style={styles.v2}>
                    {imageUri ?
                        <Image source={{ uri: imageUri }} style={styles.profilepic} />
                        : <UserAvatar
                        size={50}
                        fontWeight="bold"
                        color="black"
                        backgroundColor="lightblue"
                        firstName={firstName}
                        lastName={lastName}
                        />
                    }
                </View>
            <View style={styles.v3}>
                <Text style={styles.t1}>{name}</Text>
                <Text style={styles.t2}>{number}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
}




  const handleSearch = async () => {
    try {
      let searchResponse = await firestore()
        .collection("Users")
        .where("phoneNumber", "==", phoneNumber)
        .get();

      let id = searchResponse.docs[0].id;
      let responseData = searchResponse.docs[0]?.data();

      if (responseData) {
        delete responseData.password;
        responseData.id = id;

        setSearchUser(responseData);
        setLoading(false);
      } else {
        setLoading(true);
        setErrorMessage("Sorry no users found matching the given contact");
      }
    } catch (error) {
      console.log("Error in SelectContact/handleSearch");
      console.log(error);
    }
  };

 

  return (
    <View style={styles.main}>
       {/* <Contacts /> */}
       <FlatList
data={contacts}
renderItem={(obj) => (<SingleContact {...obj} />)}
keyExtractor={item=>item.lookupKey}
/>
    </View>
  );
}






const lightTheme = StyleSheet.create({
  v0: {
      flex: 1,
      backgroundColor: "white"
  },
  v1: {
      flex: 1,
      flexDirection: "row",
      margin: 8,
      alignItems: "center",
  },
  v2: {
      marginRight:20
  },
  v3: {
  },
  t1: {
      fontWeight: 800,
      fontSize: 16,
      color:"black",
  },
  t2: {
      fontSize: 12,
      color:"rgb(26, 26, 26)"
  },
  profilepic: {
      width: 50,
      height: 50,
      borderRadius:50
  }

});

const darkTheme = StyleSheet.create({
  v0: {
      flex: 1,
      backgroundColor: "rgb(38, 38, 38)"
  },
  v1: {
      flex: 1,
      flexDirection: "row",
      margin: 8,
      alignItems: "center",
  },
  v2: {
      marginRight:20
  },
  v3: {
  },
  t1: {
      fontWeight: 800,
      fontSize: 16,
      color:"white",
  },
  t2: {
      fontSize: 12,
      color:"rgb(153, 153, 153)"
  },
  profilepic: {
      width: 50,
      height: 50,
      borderRadius:50
  }

});



{/* <View style={styles.searchInputContainer}>
<TextInput
  value={phoneNumber}
  inputMode="decimal"
  onChangeText={setPhoneNumber}
  placeholder="Enter contact number"
  style={styles.searchInput}
/>
<TouchableOpacity style={styles.addButton} onPress={handleSearch}>
  <Feather name="user-plus" size={24} color="white" />
</TouchableOpacity>
</View>
<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
{isloading ? (
  <Text>{errorMessage}</Text>
) : (
  <View style={styles.foundContainer}>
    <Text>{searchUser?.name}</Text>
    <TouchableOpacity style={styles.button} onPress={navigate}>
      <Text style={styles.buttonText}>Chat</Text>
    </TouchableOpacity>
  </View>
)}
</View> */}






// const SingleContact = ({ item }) => {
//   const { theme } = useSelector((state) => state.theme);
//   On = theme;
//   const styles = On ? lightTheme : darkTheme;

//   const { firstName, lastName, name, phoneNumbers, image} = item;
//   const number = phoneNumbers[0].number;
//   const imageUri = image?.uri;


//   return (
//       <TouchableOpacity>
//           <View style={styles.v1}>
//               <View style={styles.v2}>
//                   {imageUri ?
//                       <Image source={{ uri: imageUri }} style={styles.profilepic} />
//                       : <UserAvatar
//                       size={50}
//                       fontWeight="bold"
//                       color="black"
//                       backgroundColor="lightblue"
//                       firstName={firstName}
//                       lastName={lastName}
//                       />
//                   }
//               </View>
//           <View style={styles.v3}>
//               <Text style={styles.t1}>{name}</Text>
//               <Text style={styles.t2}>{number}</Text>
//           </View>
//       </View>
//       </TouchableOpacity>
//   );
// }