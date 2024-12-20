const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233596041906";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "233596041906";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_55_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYxLFxuICAgICAgICA4MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDM1LFxuICAgICAgICA2NixcbiAgICAgICAgNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYsXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyOCxcbiAgICAgICAgNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDUxLFxuICAgICAgICAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI5LFxuICAgICAgICAxODEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICA2MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDQxLFxuICAgICAgICA4NyxcbiAgICAgICAgODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDg0LFxuICAgICAgICA2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NixcbiAgICAgICAgNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTk2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpCbWV6SitYZHZtNmFTdU10QXRjQ3VMS3NWMmFuUHQ3MTVFL3FSN2pKWWM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlo2YW1iai16VFdXYW01ZkMtOVFqZHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTAxMjFkYjAtZGQwYS00MzlkLTgzOWEtNTI3ZGIxMjUwZjM5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMCxcbiAgICAgIDY3LFxuICAgICAgMjQ3LFxuICAgICAgMjQ2LFxuICAgICAgMjM2LFxuICAgICAgMTQwLFxuICAgICAgMzUsXG4gICAgICAxMjMsXG4gICAgICAxOTcsXG4gICAgICAyMDYsXG4gICAgICAxNjgsXG4gICAgICAxNTUsXG4gICAgICA4NyxcbiAgICAgIDIwMSxcbiAgICAgIDE0MixcbiAgICAgIDExMyxcbiAgICAgIDE3NCxcbiAgICAgIDE5OSxcbiAgICAgIDIxMixcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICA2MSxcbiAgICAgIDY0LFxuICAgICAgMjA5LFxuICAgICAgMjUxLFxuICAgICAgMTQ0LFxuICAgICAgMzQsXG4gICAgICA5NCxcbiAgICAgIDExMCxcbiAgICAgIDE2OSxcbiAgICAgIDM3LFxuICAgICAgMjQ4LFxuICAgICAgMTg3LFxuICAgICAgMjI1LFxuICAgICAgMTUwLFxuICAgICAgMjAyLFxuICAgICAgMjAsXG4gICAgICAyNyxcbiAgICAgIDIwLFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlBTUDNOUkFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU5NjA0MTkwNjoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9wb2t1IEp1bmlvclwiLFxuICAgIFwibGlkXCI6IFwiNjMwOTM0MjE5MDQxMDM6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2FaaWJZQkVKN2ZscnNHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmeUFKamlLVnc5RUxGaGRabWVjT0tTQkpZbHlQZGJjUGpwVndxRUF6NGtzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJ5OFMrcUsvYlhDc3RPZHpCVURHeC9ocEZlSDFlK2pXcldiZlZTRmJ2WGd2UFhIclVSclhweGY2SDlJYWJTaVNha2E2Nm93enhEZHhnckhjZmZvWGlRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInBjeklaOEFybHZsNWdFbEtyMlh6M0NrTEQ5NDNoRmVVQUhBOXpMbThiSnFCbEZaVXBwTkhWSDZ1ajZUT01JVVJFcUNjaGtxOU5Vd1N0SStFbVlBcmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzMzU5NjA0MTkwNjoyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDcxNzM0NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9qd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2p3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNEduQk1VNThyRU1PdHM2c0I5NGU2S1lSaFhOZzZHYWQ0N1V6SXZSRWtqQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozODE4MzIzNTgsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOls0LDBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDU2NjEyNTkwNVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "@MENU", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ". , null",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Appiah Jr",
  packname: process.env.PACK_NAME || "APPIAH JR",
  botname : process.env.BOT_NAME  || "APPIAH JR",
  ownername:process.env.OWNER_NAME|| "APPIAH JR",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
