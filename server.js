var ot = require('ot');
var server = new ot.Server(':3000');
server.broadcast = function(operatiob) {
 // broadcast to all connected clients
};

// when you receive an opeartion from one of the client do: 
function onReceiveOperation (json) {
	var operation = ot.Operation.fromJSON(JSON.parse(json));
}