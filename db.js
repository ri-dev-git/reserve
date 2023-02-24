const mongoose= require('mongoose');

const reserveSchema = mongoose.Schema({
    address:String,
    balance:String,
    price:String
})
const btc=mongoose.model('btc',reserveSchema)
const eth=mongoose.model('eth',reserveSchema)
const sol=mongoose.model('sol',reserveSchema)
const matic=mongoose.model('matic',reserveSchema)
const dot=mongoose.model('dot',reserveSchema)
const avax=mongoose.model('avax',reserveSchema)
const atom=mongoose.model('atom',reserveSchema)
const ada=mongoose.model('ada',reserveSchema)
const link=mongoose.model('link',reserveSchema)
const ltc=mongoose.model('ltc',reserveSchema)
const uni=mongoose.model('uni',reserveSchema)
module.exports={eth,btc,sol,matic,link,dot,avax,atom,ltc,uni,ada}