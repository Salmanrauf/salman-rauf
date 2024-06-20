const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923154255887";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_24_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMixcbiAgICAgICAgMTkzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkyLFxuICAgICAgICA5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDc4LFxuICAgICAgICAzNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTExLFxuICAgICAgICA3NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDM5LFxuICAgICAgICA0MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMwLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICA5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY2LFxuICAgICAgICA4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MixcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTE85L2liUWpuMmZEbEVpaHpSdTJRZ05WOExlOG1CanM2d0JBZUtraHVubz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzNDgxNDE1ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNDMUNFQTQyMjRGMzczMTg0MjJBNTY3RTcxQkQ5OUM5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODg0NjY2OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM0ODE0MTU4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzlEMDUwQTQzMkYzN0JERkJDNDg5RDU4Mzk1Nzk2NjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4ODQ2NjY5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzQ4MTQxNTgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQ0M3MzU0RDIxRDRERDhBRDczMjY1QzM3MzEwMzJFQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTg4NDY2NzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMzNDgxNDE1ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgyMTcyQjhGMzI2NkExRDRCOEE4NEYxNUI3RDE0QkNCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODg0NjY3MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIySWZkb3YyNlRRSzhQTW5LSXRsYUZRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA1ZTM2ZjZjLWFkMDctNGRkYy05Mzg2LTdmOTAyMzNlNzY2ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOSxcbiAgICAgIDIxNixcbiAgICAgIDIxNixcbiAgICAgIDI0MSxcbiAgICAgIDIwNCxcbiAgICAgIDEzOSxcbiAgICAgIDEwNixcbiAgICAgIDEyMCxcbiAgICAgIDI1MyxcbiAgICAgIDgwLFxuICAgICAgMTk1LFxuICAgICAgMTI0LFxuICAgICAgMTk0LFxuICAgICAgMTU4LFxuICAgICAgMTM4LFxuICAgICAgMTMzLFxuICAgICAgMzAsXG4gICAgICA0MCxcbiAgICAgIDIyMixcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjksXG4gICAgICAyNDYsXG4gICAgICA5LFxuICAgICAgNjgsXG4gICAgICAxMjcsXG4gICAgICAyMyxcbiAgICAgIDg4LFxuICAgICAgMTcxLFxuICAgICAgMjAxLFxuICAgICAgOTksXG4gICAgICA2NixcbiAgICAgIDIxMyxcbiAgICAgIDg0LFxuICAgICAgMTk3LFxuICAgICAgMTE1LFxuICAgICAgMjQsXG4gICAgICAyNDMsXG4gICAgICAxMTksXG4gICAgICA1OCxcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllLTkZZUFdaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMzNDgxNDE1ODM6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk1MTU1MTc2OTk3MDYzOjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU2FsbWFuIFJhdWZcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQU1ZyOG9FRU1tSnpyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9TNlBoa1VpNFpaT1RZYUxVQkoxNGVrdDV4ZE9SQ1lQOEN1WDkwd3lIR1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiakFic2pCV3ROd1lHdkdFMllpVXcrMHhMTlRMZmZVSEw0M1FVSXllWElkU0c4dFR0aGZZU1JWeENoc3M3NU9yTDdjMGsyTXhZbVpJRi9jZExFaFFoQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSHoxdy9jTEdQSG5hb1g1NzJWNmxFcVI2VWdQQTZOeFJPQ3pOV3NPTkd4OCs1dUFCVGJ4QnhLZDNjTEM3S2tmNEx2cU11QktRUmZoK2Y3aDByVWlYalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQ4MTQxNTgzOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg4NDY2NjgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLYnZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtidi5qc29uIjogIntcImtleURhdGFcIjpcImZ1OFR6QlpPdWFIcUJyOVcwSzRvZFNNOVpQTUhhaC9HR0NnT20zVVc1ZGM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyOTcwMzkyNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE4ODQ2NjcxMTY3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
