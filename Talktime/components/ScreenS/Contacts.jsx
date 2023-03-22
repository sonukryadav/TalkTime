import React from 'react';
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

const Contacts = () => {
    let { contacts } = useSelector((state) => state.contact);

    let ar = contacts.map((obj, ind) => (<Text key={ind}>{obj.name} : { obj.phoneNumbers[0].number}</Text>))
    // console.log(contacts[0])
    return (
        <View>
            <Text>Contacts</Text>
            <View>{ar}</View>
        </View>
    )
}

export default Contacts;

//  [
//    {
//      addresses: [[Object]],
//      contactType: "person",
//      emails: [[Object], [Object]],
//      firstName: "Sonu",
//      id: "38",
//      imageAvailable: false,
//      instantMessageAddresses: [[Object]],
//      lastName: "Kumar",
//      lookupKey: "2976r37-4E4644523E52422A4C",
//      name: "Sonu Kumar",
//      note: "Its notes",
//      phoneNumbers: [[Object], [Object]],
//      urlAddresses: [[Object]],
//    },
//    {
//      contactType: "person",
//      emails: [[Object]],
//      firstName: "Sanjeev ",
//      id: "39",
//      imageAvailable: false,
//      lastName: "Kumar",
//      lookupKey: "2976r38-4E2A443C3232543E52422A4C",
//      name: "Sanjeev Kumar",
//      phoneNumbers: [[Object]],
//    },
//    {
//      contactType: "person",
//      emails: [[Object]],
//      firstName: "Papa",
//      id: "40",
//      imageAvailable: false,
//      lookupKey: "2976r39-482A482A",
//      name: "Papa",
//      note: "Notessssss",
//      phoneNumbers: [[Object]],
//      urlAddresses: [[Object]],
//    },
//  ];
