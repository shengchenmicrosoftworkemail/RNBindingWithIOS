#import "IosMapviewObjc.h"

@implementation IosMapviewObjc

RCT_EXPORT_MODULE()

// Example method
// See // https://facebook.github.io/react-native/docs/native-modules-ios
RCT_REMAP_METHOD(multiply,
                 multiplyWithA:(nonnull NSNumber*)a withB:(nonnull NSNumber*)b
                 withResolver:(RCTPromiseResolveBlock)resolve
                 withRejecter:(RCTPromiseRejectBlock)reject)
{
  NSNumber *result = @([a floatValue] * [b floatValue]);

  resolve(result);
}

RCT_EXPORT_METHOD(createCredential:(NSString *) token
                  createCredentialWithResolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    
//    int credential = CommunicationUserCredential(token);
//    
//    resolve(credential);
}

@end
