export class CustomLogic {
    slice = (_data, val) => {
        if(_data.length > val ) {
            return _data.substr(0,val - 3) + '...'
        }
        return _data;
    }

    removeExtra = (_data, _char) => {
        _char = new RegExp(_char, "g");
        return _data.replace(_char , "");
    }
}
export default CustomLogic;