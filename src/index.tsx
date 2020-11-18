import { NativeModules } from 'react-native';

type IosMapviewObjcType = {
  multiply(a: number, b: number): Promise<number>;
};

const { IosMapviewObjc } = NativeModules;

export default IosMapviewObjc as IosMapviewObjcType;
