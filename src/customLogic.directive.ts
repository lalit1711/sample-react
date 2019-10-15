export class CustomLogic {
    slice = (_data: string, val: number): string => {return _data.length > val ? _data.substr(0, val - 3) + "..."  : _data };
    removeExtra = (_data: string, _char: string): string => { return _data.replace(new RegExp(_char, "g"), ""); };
    filterConferences = (_key: string, _data: any) => {return _data.filter( ((cd: any) => cd.confName.toLowerCase().indexOf(_key.toLowerCase()) > -1))};
}
export default CustomLogic;