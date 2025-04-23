import { isSupported, createCompatibilityTests } from '../../src/module';

const Compat = createCompatibilityTests();

describe('module', () => {

    describe('isSupported', () => {
        it('returns false because support is experimental', async () => {
            expect(await isSupported()).to.equal(false);
        });
    });

    describe('createCompatibilityTests', () => {

        describe('createTestAudioBufferConstructorSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestAudioBufferConstructorSupport()).to.equal(true)
            });
        });    

        describe('createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport()).to.equal(true)
            });
        });

        describe('createTestPeriodicWaveConstructorSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestPeriodicWaveConstructorSupport()).to.equal(true)
            });
        });

        describe('createTestStereoPannerNodeDefaultValueSupport', () => {
            it('should pass', async () => {
                expect(await Compat.createTestStereoPannerNodeDefaultValueSupport()).to.equal(true)
            });
        });

        describe('testDomExceptionConstructorSupport', () => {
            it('should pass', () => {
                expect(Compat.testDomExceptionConstructorSupport()).to.equal(true)
            });
        });

        describe('testTransferablesSupport', () => {
            it('should pass', async () => {
                expect(await Compat.testTransferablesSupport()).to.equal(true)
            });
        });

        describe('createTestAudioBufferConstructorSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestAudioBufferConstructorSupport()).to.equal(true)
            });
        });

        describe('createTestAudioBufferCopyChannelMethodsOutOfBoundsSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestAudioBufferCopyChannelMethodsOutOfBoundsSupport()).to.equal(true)
            });
        });

        describe('createTestAudioBufferCopyChannelMethodsSubarraySupport', () => {
            it('should pass', () => {
                expect(Compat.createTestAudioBufferCopyChannelMethodsSubarraySupport()).to.equal(true)
            });
        });

        describe('createTestAudioBufferFactoryMethodSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestAudioBufferFactoryMethodSupport()).to.equal(true)
            });
        });

        describe('createTestAudioBufferSourceNodeBufferReassignmentSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestAudioBufferSourceNodeBufferReassignmentSupport()).to.equal(true)
            });
        });

        describe('createTestAudioContextCloseMethodSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestAudioContextCloseMethodSupport()).to.equal(true)
            });
        });

        describe('createTestAudioContextDecodeAudioDataMethodTypeErrorSupport', () => {
            it('should pass', async () => {
                expect(await Compat.createTestAudioContextDecodeAudioDataMethodTypeErrorSupport()).to.equal(true)
            });
        });

        describe('createTestAudioContextOptionsSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestAudioContextOptionsSupport()).to.equal(true)
            });
        });

        describe('createTestAudioNodeConnectMethodChainabilitySupport', () => {
            it('should pass', () => {
                expect(Compat.createTestAudioNodeConnectMethodChainabilitySupport()).to.equal(true)
            });
        });

        describe('createTestAudioNodeConnectMethodVerificationSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestAudioNodeConnectMethodVerificationSupport()).to.equal(true)
            });
        });

        describe('createTestAudioParamValueSetterSupport', () => {
            it('should pass', async () => {
                expect(await Compat.createTestAudioParamValueSetterSupport()).to.equal(true)
            });
        });

        describe('createTestAudioWorkletAddModuleMethodSupport', () => {
            it('should pass', async () => {
                expect(await Compat.createTestAudioWorkletAddModuleMethodSupport()).to.equal(true)
            });
        });

        describe('createTestAudioWorkletNodeConstructorSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestAudioWorkletNodeConstructorSupport()).to.equal(true)
            });
        });

        describe('createTestBiquadFilterNodeGetFrequencyResponseMethodSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestBiquadFilterNodeGetFrequencyResponseMethodSupport()).to.equal(true)
            });
        });

        describe('createTestChannelMergerNodeChannelCountSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestChannelMergerNodeChannelCountSupport()).to.equal(true)
            });
        });

        describe('createTestConstantSourceNodeAccurateSchedulingSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestConstantSourceNodeAccurateSchedulingSupport()).to.equal(true)
            });
        });

        describe('createTestConvolverNodeBufferReassignabilitySupport', () => {
            it('should pass', () => {
                expect(Compat.createTestConvolverNodeBufferReassignabilitySupport()).to.equal(true)
            });
        });

        describe('createTestConvolverNodeChannelCountSupport', () => {
            it('should pass', () => {
                expect(Compat.createTestConvolverNodeChannelCountSupport()).to.equal(true)
            });
        });

        describe('createTestAudioContextResumeSupport', () => {
            xit('should pass', async () => {
                expect(await Compat.createTestAudioContextResumeSupport()).to.equal(false)
            });
        });

        describe('createTestIsSecureContextSupport', () => {
            xit('should pass', () => {
                expect(Compat.createTestIsSecureContextSupport()).to.equal(true)
            });
        });

        describe('createTestAudioWorkletProcessorNoInputsSupport', () => {
            xit('should pass', async () => {
                expect(await Compat.createTestAudioWorkletProcessorNoInputsSupport()).to.equal(true)
            });
        });

        describe('createTestAudioWorkletProcessorNoOutputsSupport', () => {
            xit('should pass', async () => {
                expect(await Compat.createTestAudioWorkletProcessorNoOutputsSupport()).to.equal(true)
            }).timeout(5000);
        });

        describe('testErrorEventErrorPropertySupport', () => {
            xit('should pass', () => {
                expect(Compat.testErrorEventErrorPropertySupport()).to.equal(true)
            });
        });
    })
});
