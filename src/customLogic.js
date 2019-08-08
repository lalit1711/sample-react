export class CustomLogic {
    slice = (_data, val) => { return _data.length > val ? _data.substr(0, val - 3) : _data };
    removeExtra = (_data, _char) => { return _data.replace(new RegExp(_char, "g"), ""); };
}
export default CustomLogic;