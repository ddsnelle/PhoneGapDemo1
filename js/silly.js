// SILLY is a module
var SILLY = (function(module)
{
	module.DoIt = function(zeptoResultObject)
	{
		zeptoResultObject.prepend(Date() + '<br/>');
	};

	
	return module;
	// Invokes with SILLY itself || if its null, we'll give it a new object that it can use
}(SILLY || {}));