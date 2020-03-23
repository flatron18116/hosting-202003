/*
firebase.jsonにて、
デフォルトのホスト先（public）ではなく、firebaseBasicAuthを参照するようrewritesすること
*/
const functions = require('firebase-functions')
const express = require('express')
const path = require('path')
const basicAuth = require('basic-auth-connect')

// Basic認証のID、PASS設定
const USERNAME = 'user'
const PASSWORD = 'pass'

// Basic Auth
const app = express()
app.use(basicAuth(USERNAME, PASSWORD))

// functions/dist を読み込むよう設定
app.use(express.static(path.join(__dirname, 'dist/')))
exports.firebaseBasicAuth = functions.https.onRequest(app)
