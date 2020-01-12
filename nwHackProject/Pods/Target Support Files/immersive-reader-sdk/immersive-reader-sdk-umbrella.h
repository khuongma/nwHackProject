#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "immersive_reader_sdk.h"

FOUNDATION_EXPORT double immersive_reader_sdkVersionNumber;
FOUNDATION_EXPORT const unsigned char immersive_reader_sdkVersionString[];

