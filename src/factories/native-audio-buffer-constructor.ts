import { TNativeAudioBufferConstructorFactory } from '../types';

export const createNativeAudioBufferConstructor: TNativeAudioBufferConstructorFactory = (window) => {
    if (window && window.hasOwnProperty('AudioBuffer')) {
        return window.AudioBuffer;
    }

    return null;
};
