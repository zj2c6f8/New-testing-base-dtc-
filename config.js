module.exports = {
    PREFIX: ".",
    AUTO_READ_STATUS: true,
    AUTO_REACT: false,

    // Default bot name eka - settings walin wenas karanna puluwan, ehema
    // wenas nokaruwoth me default eka thamai hama command ekakama pennanne.
    BOT_NAME: "𝗦𝗜𝗧𝗛𝗨𝗪𝗔 𝗠𝗗 𝗠𝗜𝗡𝗜 𝗕𝗢𝗧 💖😼",

    // Bot owner ge personal WhatsApp number eka (country code samaga, + / spaces nathuwa,
    // uda: "94711234567"). Meka danna owner commands walata full access denna, saha
    // owner number eken ena messages walata group/DM දෙකේම 100% auto-react wenna.
    // Oyage number eka danne methanata — meka danna number ekata *hama bot session
    // ekakatama* (deploy karapu okkoma numbers walata) full owner command access
    // + guaranteed 👨‍💻 react ekk ලැබෙනවා.
    OWNER_NUMBER: "94762108015",

    // ⚠️ IMPORTANT: WhatsApp aluth accounts walata group/community messages walin
    // sender eka evann "@lid" (Linked ID) widihatai enne, phone number ekak nemei.
    // Eka nisama "isOwner" check eka podi welawaka fail wela, owner commands
    // (bot remove karanawa wage) wada karanne na. Meka fix karanna, oyage LID
    // eka methanata danna:
    //   1) Bot ekata ".getlid" kiyala evanna (nathnam WhatsApp > Settings > oyage
    //      profile ekේ ID eka check karanna), output eka number widihata enawa.
    //   2) E number eka (@lid kොටස ain karala) methanata danna, e.g. "275441403342909"
    // Danne nathnam empty widihata thiyanna puluwan, ethakota phone-number check eka
    // witharai wenne (agee ithin bot remove wage owner commands samahara welavata
    // fail wenna puluwan).
    OWNER_LID: "205755441524912",

    NEWSLETTER_JID: "120363430204454646@g.us",
    AUTO_TYPING: true,
    REACT_EMOJIS: ['❤','💕','😻','🧡','💛','💚','💙','💜','🎉','👋'],
    // Owner ge message ekakට react karanna use wena emoji eka (👨‍💻 = "owner" badge widihata)
    OWNER_REACT_EMOJI: "👻",

    // ⚠️ Oyage decision eken methana hardcode kala (Railway Variables use karanne na
    // widiyata). Meka danna one: aye methana thibba eka mokuth GitHub ekata push
    // unoth, wena kenekuta zip eka evva unoth — meka wisin database password eka
    // aye leak wenna puluwan. process.env eken denna nam eka override wela wada karai.
    MONGODB_URI: process.env.MONGODB_URIL || process.env.MONGO_URI ||"mongodb+srv://faxtx65_db_user:<n6ONmG92RIPJlrXg>@nima.4zt0gqi.mongodb.net/",

    // Railway eke deployed app eke public URL eka (adminpanel/mypanel link WhatsApp
    // ekata evanna use wenne meka). Railway > Settings > Networking ekේ penena domain eka
    // https:// samaga methana danna (e.g. "https://dct-md-production.up.railway.app")
    PANEL_BASE_URL: process.env.PANEL_BASE_URL || "https://dct-mini-server3-production.up.railway.app",

    // /dashboard access karanna one password eka.
    ADMIN_KEY: process.env.ADMIN_KEY || "SITHUWA"
};
