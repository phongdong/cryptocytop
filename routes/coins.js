const express = require('express');
const router = require('express').Router();
const request = require('request');

var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();

router.get('/', (req, res, next) => {
	coinmarketcap.multi(coins => {
		res.json({
			coins: {
				bitcoin: coins.get("BTC").price_usd,
				ethereum_usd: coins.get("ETH").price_usd,
				ethereum_btc: coins.get("ETH").price_btc,
				litecoin_usd: coins.get("LTC").price_usd,
				zcash_btc: coins.get("ZEC").price_btc,
				zipple_btc: coins.get('XRP').price_btc,
				siacoin_btc: coins.get('SC').price_btc,
				nem_btc: coins.get('XEM').price_btc,
				dogecoin_btc: coins.get('DOGE').price_btc,
				digibyte_btc: coins.get('DGB').price_btc
			}
		});
	});
});

module.exports = router