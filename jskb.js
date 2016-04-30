
function keyDimensions(whiteKeyWidth) {
	return {
 		"whiteKeyWidth" : whiteKeyWidth,
		"whiteKeyHeight" : whiteKeyWidth * (6.0 / (7.0/8.0)),
		"blackKeyWidth" : whiteKeyWidth * (3.0 / 7.0),
		"blackKeyHeight" : whiteKeyWidth * (3.5 / (7.0 / 8.0) )
	};
}

var kbProperties = {
	"c" : { "followedByBlackKey" : true, "next" : "d" },
	"d" : { "followedByBlackKey" : true, "next" : "e"  },
	"e" : { "followedByBlackKey" : false, "next" : "f"  },
	"f" : { "followedByBlackKey" : true, "next" : "g"  },
	"g" : { "followedByBlackKey" : true, "next" : "a"  },
	"a" : { "followedByBlackKey" : true, "next" : "b"  },
	"b" : { "followedByBlackKey" : false, "next" : "c"  },
};
