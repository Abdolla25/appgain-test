"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var app_1 = require("firebase-admin/app");
var firestore_1 = require("firebase-admin/firestore");
var config_1 = require("../config");
var firebaseConfig = {
    apiKey: config_1.apiKey,
    authDomain: config_1.authDomain,
    projectId: config_1.projectId,
    storageBucket: config_1.storageBucket,
    messagingSenderId: config_1.messagingSenderId,
    appId: config_1.appId
};
(0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_1.getFirestore)();
