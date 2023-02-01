import { App, initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

initializeApp({
  credential: cert({
    projectId: "appgain-24f67",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGvK9qhbAJUTrI\nXJmu4MIEpdvmgHUS15EbaXYIaJV0meWydSg/1o269glo1W9Usi7lrEm6d9nPOaZL\nrw+BxYVRluciIF18Pjul7QWDuAEb0Z8qT/LLUvP1LJ/HEjh+54/6McQgttp2O3d8\n+W+PBlypw1IkKQEqwNTLVB285DTTGwSLe5oXVplTsqkq2l6yp+kRB89WOz+hvwIq\nNPWUVhLjCO8c/t3HpctCG3kA8+8D4H4vjEzeTRRHSJprSNHkRrmwFB5qSETrYqjZ\ndlRBmH13mmrhRA0003uC5pApkiAH/TQYIorMcJuRdAxJRijz03uLtZrpl4g474PQ\nTMqSO8r1AgMBAAECggEAGUaADM0p4VV6Y2cbiJk/M7YgbIVj3lyaMOFNyK38bBLy\nmqq5zryr095cvf9/JEdxHXa2/ccmZWuQkcmW8Es9tG27waRaH2YO0gB+Fg193prf\nYlM+rstDCah+PaQ8mS88KXbQ2dRHnofbn4JdxNPrTw/vT3gDlPtnVODC03Y2na51\nbb8tUIqS34Xg0XZUSeTowTLop+cqdmCv8f+N6De/mM5ATWh4+E1im8bbNXAbsA+C\nC+d5KRTQH7sdXuH9v6kE/9BXEFb9NmP/0Q4a5JWbUOjkh19P4c5gWMnpZu1pJY33\nwDE4daBEIAUSt5xdcMNCnh2M7K2Ocow+MSlI0TRrYQKBgQDz7NyL8ASTqEFh9i5U\nyyeGOOcwBsrF4OycjkTacfP0oo7H2BRZE0CsndRdXWcnSscDF8wltEpdBostugmV\n2K5/1HL370ed2/hlnZ6PrH63RkEHljYe4NOXBWIntVffWGCWeJAzD2uI9E2Kn5/H\nUqCToGqZAH5c83+FDTqY6QssWQKBgQDQky1Zx56UPY5Srqm2S1ifWOPnzQDJ7i5/\ncvsimtKo0NZCzJ3oCkpunZk8vUdFVmjvLbHuNB3EuDWir/oET3Lbkk4aksYAu6bi\nqu/w+TZnDlwTxFFPMiz5zPdNfgAUD1AJZLGuep/4Z/qIRqA8rU8uhMuyghmYXRi+\nve1eZV3P/QKBgQCn8RK//lcIWrX5fofTtbPWw+LYvDRsHTqLZ6CcTgzLCAkKKwmH\ncqv6rQgD6EUXVnLC/GWAKCty9QhqSUZEN1WdiWZGsiY617KkM+txvC/ae7JWSOOm\nSuEjf39fG4oOqkiGESgnH5zIRHwGz3QwxgDs42vBQAfAc53+u2b21KzusQKBgER0\nGU0+86/JaB2Az5hRsDtUDDB2msyrTD1t+jhIQd0/9SIlT6npPraBKNrDcFG0Y2ok\nQCJinmaC4q+LO+4QOS0RHmsgQrXY4JPB8E/RKua10sh2BQ2N9S7i80NOmC39PJJo\nptwRyNDZJ2N0coCXjMZCtSvYARh9bXKkmPQDJr/tAoGAcxSaecjM1MKyap2r6gqz\ny4i/FuuDNzl9z3ADCPHQNeb0/iSsiXCdnXHSQ+kea2aCgjZiCpMf30ThM53+kde2\ngpLn99f2XCAVEfk65t9s5AVA+Sz59OltWJfHUukDNWCS4n75utEsyqTTQ3GQw3Cp\nM6SyfAEtCQJ5EFXhC8s/gIU=\n-----END PRIVATE KEY-----\n",
    clientEmail: "firebase-adminsdk-f4epz@appgain-24f67.iam.gserviceaccount.com"
  }),
  databaseURL: "https://appgain-24f67.firebaseio.com"
});

export const db = getFirestore()