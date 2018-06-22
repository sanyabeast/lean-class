window.Class = window.Class || function(name, description){
	if (typeof name == "object"){
		description = name;
		name = "Class";
	}

	if (typeof description !== "object" || Array.isArray(description)){
		throw new Error("Invalid class description");
	}

	var _constructor = description.constructor;
	delete description.constructor;
	var constructor = eval([
		"var " + name + " = function(){",
		"	if (_constructor) _constructor.apply(this, arguments);",
		"};" + name
	].join(""));
	constructor.prototype = Object.create(description).__proto__;
	return constructor;
};