export class CustomLogic {
    slice = (_data: string, val: number): string => {return _data.length > val ? _data.substr(0, val - 3) + "..."  : _data };
    removeExtra = (_data: string, _char: string): string => { return _data.replace(new RegExp(_char, "g"), ""); };
}
export default CustomLogic;