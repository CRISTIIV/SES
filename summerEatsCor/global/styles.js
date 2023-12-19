import EStyleSheet from "react-native-extended-stylesheet";

export const colors = {
    turquoise: "#00CED1", //buttons
    opaqueTur: "#3BB0B2",
    grey4: "#bdc6cf", //grey4
    grey5: '#e1e8ee', //grey5
    grey1: '#43484d', //grey1
    grey2: '#5e6977', //grey2
    grey3: '#86939e', //grey3
    grey6: '#334155',
    vibrantOrange: "#FFA500",
    opaqueOrange: "#EAB375",
    white: "#FFFFFF",
    yellowV: "#FFD700",
    google: "#DB4437",
    redApetit: "#FF6347",
    black: "#000000",
}

export const stylese = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: colors.white,
    },
    text: {
        color: colors.black,
        fontSize: 40,
        fontWeight: "bold",
    },

});