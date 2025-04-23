# standardized-audio-context-rs

This is a fork of [standardized-audio-context](https://github.com/chrisguttandin/standardized-audio-context) aiming for compatibility with Rust's [web-audio-api-rs](https://github.com/orottier/web-audio-api-rs) crate via [isomorphic-web-audio-api](https://github.com/ircam-ismm/isomorphic-web-audio-api), unlocking the ability to use amazing libraries like [Tone.js](https://tonejs.github.io/) without a browser.

This implementation is not complete, but mostly works.  Run `npm run test:integration-node` for compatibility status:

```
  module
    isSupported
      ✔ returns false because support is experimental (210ms)
    createCompatibilityTests
      createTestAudioBufferConstructorSupport
        ✔ should pass
      createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport
        ✔ should pass (61ms)
      createTestPeriodicWaveConstructorSupport
        ✔ should pass
      createTestStereoPannerNodeDefaultValueSupport
        ✔ should pass
      testDomExceptionConstructorSupport
        ✔ should pass
      testTransferablesSupport
        ✔ should pass
      createTestAudioBufferConstructorSupport
        ✔ should pass
      createTestAudioBufferCopyChannelMethodsOutOfBoundsSupport
        ✔ should pass
      createTestAudioBufferCopyChannelMethodsSubarraySupport
        ✔ should pass
      createTestAudioBufferFactoryMethodSupport
        ✔ should pass
      createTestAudioBufferSourceNodeBufferReassignmentSupport
        ✔ should pass
      createTestAudioContextCloseMethodSupport
        ✔ should pass
      createTestAudioContextDecodeAudioDataMethodTypeErrorSupport
        ✔ should pass
      createTestAudioContextOptionsSupport
        ✔ should pass (46ms)
      createTestAudioNodeConnectMethodChainabilitySupport
        ✔ should pass
      createTestAudioNodeConnectMethodVerificationSupport
        ✔ should pass
      createTestAudioParamValueSetterSupport
        ✔ should pass
      createTestAudioWorkletAddModuleMethodSupport
        ✔ should pass
      createTestAudioWorkletNodeConstructorSupport
        ✔ should pass
      createTestBiquadFilterNodeGetFrequencyResponseMethodSupport
        ✔ should pass
      createTestChannelMergerNodeChannelCountSupport
        ✔ should pass
      createTestConstantSourceNodeAccurateSchedulingSupport
        ✔ should pass
      createTestConvolverNodeBufferReassignabilitySupport
        ✔ should pass
      createTestConvolverNodeChannelCountSupport
        ✔ should pass
      createTestAudioContextResumeSupport
        - should pass
      createTestIsSecureContextSupport
        - should pass
      createTestAudioWorkletProcessorNoInputsSupport
        - should pass
      createTestAudioWorkletProcessorNoOutputsSupport
        - should pass
      testErrorEventErrorPropertySupport
        - should pass


  25 passing (383ms)
  5 pending
```