const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();
const _ = db.command;

exports.main = async (event, context) => {
  try {
    return await db.collection('mybook').where({
      _openid: "oWR8H0TE--WQw5c5kHpeP5oukX1k"
    })
      .update({
        data: {
          price: "100"
        },
      })
  } catch (e) {
    console.error(e)
  }
}
