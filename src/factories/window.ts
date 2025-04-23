import { TWindow, TWindowFactory } from '../types';
import * as WebAudioApi from 'isomorphic-web-audio-api';

const shenanigans = {
    ...WebAudioApi,
    hasOwnProperty: (prop: string) => prop in WebAudioApi
};

export const createWindow: TWindowFactory = () => <TWindow>shenanigans;
