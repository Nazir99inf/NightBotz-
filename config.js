global.owner = ['6285822146627']  
global.mods = ['6285822146627'] 
global.prems = ['6285822146627']
global.nameowner = 'Nazir99iq'
global.numberowner = '6285822146627'
global.mail = 'nazir99iq@gmail.com' 
global.gc = 'https://chat.whatsapp.com/Fb1V5mV2qIKILLPXC66clV'
global.instagram = 'https://instagram.com/erlanrahmat_14'
global.wm = '© By Nazir99iq'
global.wait = '_*Wait, its being processed...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stickers are being created...*'
global.packname = '© Nazir'
global.author = 'NightBotz✨'
global.maxwarn = '3' // Peringatan maksimum
global.autobio = false


//INI WAJIB DI ISI!//
global.lann = 'bQkmCViM' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'XhbotDj4'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'uVYhpLDH', 
  'https://api.botcahx.eu.org': 'XhbotDj4'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
