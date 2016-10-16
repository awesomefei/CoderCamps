import * as mongoose from 'mongoose';
const URL ='mongodb://admin:Secret123!@ds035806.mlab.com:35806/awesomefile';

class Database{
    public static connect(){
        mongoose.connect(URL);
        let db = mongoose.connection;
        db.on('err', console.error.bind(console,'connection error'));
        db.once('open', console.log.bind(console,'connection succeful'))
    }
}
export default Database;
