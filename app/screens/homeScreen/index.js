import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { InputButton } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../thunk/auth.thunk'
import { usersList } from '../../thunk/users.thunk'
import AsyncStorage from "@react-native-async-storage/async-storage";
/**
* @author
* @function Dashboard
**/
export const Dashboard = (props) => {

    const dispatch = useDispatch()
    //let asyncVal = AsyncStorage.getItem('@userData')
    const { userData } = useSelector((state) => state.authReducer)
    const { users } = useSelector((state) => state.usersReducer)
    const [userName, setUserName] = useState(userData?.Email || '')
    useEffect(() => {
        console.log('users', users);
        dispatch(usersList(userData?.Token))
    }, [])
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Hello {userName},</Text>
                <InputButton
                    buttonName='Log Out'
                    onPress={() => dispatch(logOut())}
                />
                <View>
                    {
                        users.map((e, k) =>
                            <View style={styles.photo} key={k}>
                                <Image
                                    style={styles.tinyLogo}
                                    source={{ uri: `${e.profilepicture}` }}
                                />
                                <View style={styles.desc}>
                                    <Text style={styles.name}>{e.name}</Text>
                                    <Text style={styles.email}>{e.email}</Text>
                                </View>
                            </View>
                        )}
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photo: {
        //height: 100,
        width: 350,
        backgroundColor: '#FFF',
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row'
    },
    tinyLogo: {
        width: 50,
        height: 50
    },
    desc: {
        marginLeft: 10
    },
    name: {
        fontSize: 15,
        fontWeight: '500'
    },
    email: {
        fontSize: 12,
    }
})