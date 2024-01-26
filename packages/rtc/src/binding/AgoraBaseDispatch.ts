/// Generated by terra, DO NOT MODIFY BY HAND.

import { ERROR_CODE_TYPE, EncodedAudioFrameInfo } from '@iris/native-rtc';
import { ApiParam } from 'iris-web-core';

import { IrisRtcEngine } from '../engine/IrisRtcEngine';
import { AgoraConsole } from '../util/AgoraConsole';

export class IAudioEncodedFrameObserver {
  _engine: IrisRtcEngine = null;

  constructor(engine: IrisRtcEngine) {
    this._engine = engine;
  }

  notifyEvent(param: ApiParam): void {
    this._engine.irisEventHandlerManager.notifyEvent('RtcEngine', param);
  }

  onRecordAudioEncodedFrame_d930ddc(
    frameBuffer: Uint8Array,
    length: number,
    audioEncodedFrameInfo: EncodedAudioFrameInfo
  ): void {
    AgoraConsole.warn(
      'onRecordAudioEncodedFrame_d930ddc not supported in this platform!'
    );
    this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  onPlaybackAudioEncodedFrame_d930ddc(
    frameBuffer: Uint8Array,
    length: number,
    audioEncodedFrameInfo: EncodedAudioFrameInfo
  ): void {
    AgoraConsole.warn(
      'onPlaybackAudioEncodedFrame_d930ddc not supported in this platform!'
    );
    this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }

  onMixedAudioEncodedFrame_d930ddc(
    frameBuffer: Uint8Array,
    length: number,
    audioEncodedFrameInfo: EncodedAudioFrameInfo
  ): void {
    AgoraConsole.warn(
      'onMixedAudioEncodedFrame_d930ddc not supported in this platform!'
    );
    this._engine.returnResult(false, -ERROR_CODE_TYPE.ERR_NOT_SUPPORTED);
  }
}
